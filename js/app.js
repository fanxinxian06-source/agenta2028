/* AGENTA 2028 — interactions: rendering, nav, scroll reveal, nebula canvas */
(function () {
  'use strict';

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- reveal ---------- */

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  function observeReveals(root) {
    $$('.reveal:not(.in)', root).forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- timeline ---------- */

  function renderTimeline(lang, instant) {
    const ol = $('#timeline');
    const items = window.I18N[lang].evolution.items;
    ol.textContent = '';
    items.forEach(function (item, i) {
      const li = document.createElement('li');
      li.className = 'reveal' + (instant ? ' in' : '');
      li.style.transitionDelay = (i * 0.09) + 's';
      const period = document.createElement('span');
      period.className = 'timeline-period';
      period.textContent = item.period;
      const h = document.createElement('h3');
      h.textContent = item.title;
      const p = document.createElement('p');
      p.textContent = item.desc;
      li.append(period, h, p);
      ol.appendChild(li);
    });
    observeReveals(ol);
  }

  /* ---------- ecosystem cards ---------- */

  function renderEcosystem(lang, instant) {
    const grid = $('#ecoCards');
    const L = window.I18N[lang];
    grid.textContent = '';
    L.ecosystem.cards.forEach(function (card, i) {
      const art = document.createElement('article');
      art.className = 'eco-card reveal' + (instant ? ' in' : '');
      art.style.transitionDelay = (i * 0.07) + 's';

      const head = document.createElement('div');
      head.className = 'eco-head';
      const mono = document.createElement('span');
      mono.className = 'eco-mono';
      mono.textContent = card.mono;
      const headTxt = document.createElement('div');
      const name = document.createElement('h3');
      name.className = 'eco-name';
      name.textContent = card.name;
      const org = document.createElement('span');
      org.className = 'eco-org';
      org.textContent = card.org;
      headTxt.append(name, org);
      head.append(mono, headTxt);

      const tag = document.createElement('p');
      tag.className = 'eco-tagline';
      tag.textContent = card.tagline;

      const feats = document.createElement('ul');
      feats.className = 'eco-features';
      card.features.forEach(function (f) {
        const li = document.createElement('li');
        li.textContent = f;
        feats.appendChild(li);
      });

      const link = document.createElement('a');
      link.className = 'eco-link';
      link.href = card.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = L.ecosystem.link;

      art.append(head, tag, feats, link);
      grid.appendChild(art);
    });
    observeReveals(grid);
  }

  /* ---------- agent loop ---------- */

  let activeNode = 'perceive';

  function updateLoopPanel(lang) {
    const L = window.I18N[lang];
    const node = L.loop[activeNode];
    $('#loopDetailTitle').textContent = node.label;
    $('#loopDetailDesc').textContent = node.desc;
  }

  function initLoop(lang) {
    updateLoopPanel(lang);
    const nodes = $$('.loop-node');
    nodes.forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.node === activeNode);
      btn.addEventListener('click', function () {
        activeNode = btn.dataset.node;
        nodes.forEach(function (b) { b.classList.toggle('is-active', b === btn); });
        updateLoopPanel(window.AGENTA.currentLang());
      });
      btn.addEventListener('mouseenter', function () {
        const L = window.I18N[window.AGENTA.currentLang()];
        $('#loopDetailTitle').textContent = L.loop[btn.dataset.node].label;
        $('#loopDetailDesc').textContent = L.loop[btn.dataset.node].desc;
      });
      btn.addEventListener('mouseleave', function () {
        updateLoopPanel(window.AGENTA.currentLang());
      });
    });
  }

  /* ---------- chart ---------- */

  const VIZ = {
    single: [62, 58, 54, 66],
    multi: [84, 81, 79, 88]
  };

  function roundedTopBar(x, y, w, h, r) {
    r = Math.min(r, w / 2, h);
    return 'M' + x + ' ' + (y + h) +
      ' L' + x + ' ' + (y + r) +
      ' Q' + x + ' ' + y + ' ' + (x + r) + ' ' + y +
      ' L' + (x + w - r) + ' ' + y +
      ' Q' + (x + w) + ' ' + y + ' ' + (x + w) + ' ' + (y + r) +
      ' L' + (x + w) + ' ' + (y + h) + ' Z';
  }

  function renderChart(lang) {
    const L = window.I18N[lang];
    const plot = $('#vizPlot');
    const SVG_NS = 'http://www.w3.org/2000/svg';

    /* legend */
    const legend = $('#vizLegend');
    legend.textContent = '';
    [L.data.series1, L.data.series2].forEach(function (label, i) {
      const s = document.createElement('span');
      const sw = document.createElement('span');
      sw.className = 'viz-swatch';
      sw.style.background = i === 0 ? 'var(--series-1)' : 'var(--series-2)';
      const t = document.createTextNode(label);
      s.append(sw, t);
      legend.appendChild(s);
    });

    /* tooltip */
    plot.textContent = '';
    const tip = document.createElement('div');
    tip.className = 'viz-tooltip';
    tip.id = 'vizTooltip';

    /* geometry */
    const W = 760, H = 340;
    const m = { l: 46, r: 18, t: 26, b: 64 };
    const plotW = W - m.l - m.r, plotH = H - m.t - m.b;
    const cats = L.data.categories;
    const groups = cats.length;
    const groupW = plotW / groups;
    const barW = 34;

    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', L.data.chartTitle);

    const y = (v) => m.t + plotH - (v / 100) * plotH;

    /* gridlines + y labels */
    [0, 25, 50, 75, 100].forEach(function (v) {
      const gy = y(v);
      const line = document.createElementNS(SVG_NS, 'line');
      line.setAttribute('x1', m.l);
      line.setAttribute('x2', W - m.r);
      line.setAttribute('y1', gy);
      line.setAttribute('y2', gy);
      line.setAttribute('class', v === 0 ? 'viz-axisline' : 'viz-gridline');
      svg.appendChild(line);
      const label = document.createElementNS(SVG_NS, 'text');
      label.setAttribute('x', m.l - 8);
      label.setAttribute('y', gy + 4);
      label.setAttribute('text-anchor', 'end');
      label.setAttribute('class', 'viz-axis-label');
      label.textContent = v + '%';
      svg.appendChild(label);
    });

    cats.forEach(function (cat, g) {
      const cx = m.l + groupW * g + groupW / 2;
      [0, 1].forEach(function (s) {
        const vals = s === 0 ? VIZ.single : VIZ.multi;
        const v = vals[g];
        const bw = barW;
        const bx = cx - barW - 1 + s * (barW + 2); /* 2px gap between fills */
        const bh = (v / 100) * plotH;
        const by = m.t + plotH - bh;
        const bar = document.createElementNS(SVG_NS, 'path');
        bar.setAttribute('d', roundedTopBar(bx, by, bw, bh, 4));
        bar.setAttribute('fill', s === 0 ? 'var(--series-1)' : 'var(--series-2)');
        bar.setAttribute('data-cat', g);
        bar.setAttribute('data-series', s);
        bar.setAttribute('data-val', v);
        bar.setAttribute('tabindex', '0');
        bar.setAttribute('aria-label', cat + ': ' + (s === 0 ? L.data.series1 : L.data.series2) + ' ' + v + '%');
        svg.appendChild(bar);
        /* direct value label */
        const vl = document.createElementNS(SVG_NS, 'text');
        vl.setAttribute('x', bx + bw / 2);
        vl.setAttribute('y', by - 7);
        vl.setAttribute('text-anchor', 'middle');
        vl.setAttribute('class', 'viz-value');
        vl.textContent = v;
        svg.appendChild(vl);
      });
      /* category label */
      const cl = document.createElementNS(SVG_NS, 'text');
      cl.setAttribute('x', cx);
      cl.setAttribute('y', H - 38);
      cl.setAttribute('text-anchor', 'middle');
      cl.setAttribute('class', 'viz-cat-label');
      cl.textContent = cat;
      svg.appendChild(cl);
    });

    plot.append(svg, tip);

    /* hover tooltip */
    plot.addEventListener('mousemove', function (e) {
      const bar = e.target.closest('[data-cat]');
      if (!bar) { tip.classList.remove('is-visible'); return; }
      const cat = cats[+bar.dataset.cat];
      const s = +bar.dataset.series;
      const label = s === 0 ? L.data.series1 : L.data.series2;
      const color = s === 0 ? 'var(--series-1)' : 'var(--series-2)';
      tip.innerHTML = '<strong>' + cat + '</strong>' +
        '<span style="display:inline-block;width:9px;height:9px;border-radius:2px;background:' + color + ';margin-right:6px"></span>' +
        label + ' — <em>' + bar.dataset.val + '%</em>';
      tip.classList.add('is-visible');
      const r = plot.getBoundingClientRect();
      const svgRect = svg.getBoundingClientRect();
      const scale = svgRect.width / W;
      const barCx = (m.l + (+bar.dataset.cat + 0.5) * groupW) * scale;
      tip.style.left = Math.min(Math.max(barCx - 60, 0), r.width - 180) + 'px';
      tip.style.top = '0px';
    });
    plot.addEventListener('mouseleave', function () {
      tip.classList.remove('is-visible');
    });

    /* table */
    const tbody = $('#vizTableBody');
    tbody.textContent = '';
    cats.forEach(function (cat, g) {
      const tr = document.createElement('tr');
      [cat, VIZ.single[g] + '%', VIZ.multi[g] + '%'].forEach(function (v, i) {
        const td = document.createElement('td');
        td.textContent = v;
        if (i === 0) { const th = document.createElement('th'); th.scope = 'row'; th.textContent = v; tr.appendChild(th); }
        else tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  }

  /* ---------- demo tasks ---------- */

  function renderDemoTasks(lang) {
    const box = $('#demoTasks');
    const L = window.I18N[lang];
    box.textContent = '';
    L.demo.tasks.forEach(function (task, i) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'demo-task' + (i === 0 ? ' is-active' : '');
      btn.dataset.taskId = task.id;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      const label = document.createElement('span');
      label.className = 'demo-task-label';
      label.textContent = task.label;
      const desc = document.createElement('span');
      desc.className = 'demo-task-desc';
      desc.textContent = task.desc;
      btn.append(label, desc);
      btn.addEventListener('click', function () {
        $$('.demo-task', box).forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
          b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
        });
        if (window.AGENTA_DEMO) window.AGENTA_DEMO.select(task.id);
      });
      box.appendChild(btn);
    });
    if (window.AGENTA_DEMO) window.AGENTA_DEMO.select(L.demo.tasks[0].id);
  }

  /* ---------- nav ---------- */

  function initNav() {
    const nav = $('#nav');
    const burger = $('#navBurger');
    const links = $('#navLinks');

    /* language switcher */
    $$('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        window.AGENTA.setLang(btn.getAttribute('data-lang-btn'));
      });
    });

    const onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    burger.addEventListener('click', function () {
      const open = links.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        links.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });

    /* active section highlight */
    const map = {};
    $$('.nav-links a').forEach(function (a) {
      map[a.getAttribute('href').slice(1)] = a;
    });
    const secObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const link = map[entry.target.id];
          if (link) {
            $$('.nav-links a').forEach(function (a) { a.classList.remove('is-active'); });
            link.classList.add('is-active');
          }
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ['evolution', 'loop', 'ecosystem', 'demo', 'data', 'arch', 'roadmap'].forEach(function (id) {
      const sec = document.getElementById(id);
      if (sec) secObserver.observe(sec);
    });
  }

  /* ---------- nebula canvas ---------- */

  function initNebula() {
    const canvas = $('#nebula');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, particles = [], raf = null, running = false;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      W = canvas.offsetWidth; H = canvas.offsetHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(110, Math.floor((W * H) / 16000));
      particles = Array.from({ length: n }, function () {
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.6 + 0.4,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          hue: Math.random() < 0.55 ? '34,211,238' : '139,92,246',
          a: Math.random() * 0.45 + 0.12,
          tw: Math.random() * Math.PI * 2
        };
      });
    }

    function frame(t) {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(function (p) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -12) p.x = W + 12; else if (p.x > W + 12) p.x = -12;
        if (p.y < -12) p.y = H + 12; else if (p.y > H + 12) p.y = -12;
        const alpha = p.a * (0.55 + 0.45 * Math.sin(t / 900 + p.tw));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.hue + ',' + alpha.toFixed(3) + ')';
        ctx.fill();
      });
      if (running) raf = requestAnimationFrame(frame);
    }

    function start() {
      if (running || REDUCED) return;
      running = true;
      raf = requestAnimationFrame(frame);
    }
    function stop() {
      running = false;
      if (raf) cancelAnimationFrame(raf);
    }

    resize();
    window.addEventListener('resize', function () {
      resize();
      if (REDUCED) { ctx.clearRect(0, 0, W, H); }
    });

    if (REDUCED) {
      /* draw a single static frame, no animation */
      particles.forEach(function (p) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.hue + ',' + p.a.toFixed(3) + ')';
        ctx.fill();
      });
      return;
    }

    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) start(); else stop();
      });
    }, { threshold: 0.02 }).observe(canvas);
  }

  /* ---------- lang change ---------- */

  window.AGENTA.onLangChange = function (lang) {
    renderTimeline(lang, true);
    renderEcosystem(lang, true);
    renderChart(lang);
    renderDemoTasks(lang);
    updateLoopPanel(lang);
    if (window.AGENTA_DEMO) window.AGENTA_DEMO.onLang(lang);
  };

  /* ---------- boot ---------- */

  function boot() {
    const lang = window.AGENTA.detectLang();
    $$('.hero-inner .reveal').forEach(function (el, i) {
      el.style.transitionDelay = (i * 0.1) + 's';
    });
    $$('.roadmap-item').forEach(function (el, i) {
      el.style.transitionDelay = (i * 0.1) + 's';
    });
    renderTimeline(lang, false);
    renderEcosystem(lang, false);
    renderChart(lang);
    renderDemoTasks(lang);
    initLoop(lang);
    initNav();
    initNebula();
    observeReveals(document);
    window.AGENTA.setLang(lang, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
