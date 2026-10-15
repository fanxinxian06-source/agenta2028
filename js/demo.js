/* AGENTA 2028 — simulated agent terminal (front-end only, no real model calls) */
(function () {
  'use strict';

  const $ = (sel) => document.querySelector(sel);

  const PREFIX = { thought: '◈', tool: '➤', result: '·', done: '' };
  const state = {
    taskId: null,
    running: false,
    timer: null
  };

  function lang() { return window.AGENTA.currentLang(); }
  function tasks() { return window.I18N[lang()].demo.tasks; }
  function currentTask() {
    return tasks().find(function (t) { return t.id === state.taskId; }) || tasks()[0];
  }

  const output = $('#terminalOutput');
  const runBtn = $('#demoRun');
  const resetBtn = $('#demoReset');

  function showEmpty() {
    output.textContent = '';
    const p = document.createElement('p');
    p.className = 'term-empty';
    p.textContent = window.I18N[lang()].demo.empty;
    output.appendChild(p);
  }

  function stop(showEmptyMsg) {
    state.running = false;
    if (state.timer) { clearTimeout(state.timer); state.timer = null; }
    runBtn.disabled = false;
    if (showEmptyMsg) showEmpty();
  }

  function appendLine(line, cb) {
    const el = document.createElement('p');
    el.className = 'term-line ' + line.t;

    if (PREFIX[line.t]) {
      const pre = document.createElement('span');
      pre.className = 'prefix';
      pre.textContent = PREFIX[line.t];
      el.appendChild(pre);
    }

    const text = document.createElement('span');
    el.appendChild(text);
    const caret = document.createElement('span');
    caret.className = 'caret';
    caret.setAttribute('aria-hidden', 'true');
    el.appendChild(caret);
    output.appendChild(el);

    let i = 0;
    const speed = 13 + Math.random() * 12;
    function tick() {
      if (!state.running) {
        /* interrupted (reset / language switch): leave the partial line, drop caret */
        caret.remove();
        return;
      }
      i += 1;
      text.textContent = line.text.slice(0, i);
      output.scrollTop = output.scrollHeight;
      if (i < line.text.length) {
        state.timer = setTimeout(tick, speed);
      } else {
        caret.remove();
        state.timer = setTimeout(cb, 260);
      }
    }
    state.timer = setTimeout(tick, 200);
  }

  function run() {
    if (state.running) return;
    state.running = true;
    runBtn.disabled = true;
    output.textContent = '';
    const script = currentTask().script;
    let i = 0;
    function next() {
      if (!state.running) return;
      if (i >= script.length) {
        state.running = false;
        runBtn.disabled = false;
        const status = $('#demoStatus');
        if (status) status.textContent = script[script.length - 1].text;
        return;
      }
      appendLine(script[i++], next);
    }
    next();
  }

  function reset() {
    stop(true);
  }

  function select(taskId) {
    if (state.running) return;
    state.taskId = taskId;
  }

  function onLang(newLang) {
    stop(false);
    state.taskId = tasks().find(function (t) { return t.id === state.taskId; })
      ? state.taskId
      : tasks()[0].id;
    showEmpty();
  }

  runBtn.addEventListener('click', run);
  resetBtn.addEventListener('click', reset);

  window.AGENTA_DEMO = {
    select: select,
    onLang: onLang
  };
})();
