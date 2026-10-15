/* AGENTA 2028 — trilingual dictionary (zh / en / ko)
 * All copy lives here. HTML elements carry data-i18n="dot.path" keys;
 * structured sections (timeline, cards, tasks) are arrays rendered by app.js. */
(function () {
  'use strict';

  const zh = {
    meta: {
      title: 'AGENTA 2028 · 深度整合 Agentic AI 的前沿技术展示站',
      desc: 'AGENTA 2028 — 面向 CES 2028 的三语前沿技术展示站：Agentic AI 核心机制、开源 Agent 生态与多智能体协作。'
    },
    a11y: { skip: '跳到主要内容' },
    nav: {
      evolution: '技术演进', loop: '核心机制', ecosystem: '开源生态',
      demo: '演示', data: '数据', arch: '架构', roadmap: '路线图'
    },
    hero: {
      badge: 'CES 2028 全球发布 · 五大创新奖目标',
      headline: '深度整合 Agentic AI 与开源 Agent 基础设施',
      sub: '一个面向下一个智能时代的三语技术展示站：以可交互的方式呈现智能体从感知到协作的完整图景。',
      cta1: '开始探索', cta2: '观看演示',
      stat1: '三语内容', stat2: '开源框架生态', stat3: '智能体演进阶段', stat4: '创新奖目标',
      scroll: '向下滚动'
    },
    evolution: {
      kicker: '技术演进', title: '智能体从哪里来',
      intro: '四条线索勾勒出智能体技术二十年的演进轨迹——从固定规则到自主协作。',
      items: [
        { period: '2000s–2010s', title: '规则自动化', desc: 'RPA 与脚本以固定规则处理重复任务；无法应对变化与未知。' },
        { period: '2022–2024', title: '单步大模型', desc: 'ChatGPT 时代的一问一答：理解与生成能力飞跃，但仍需人类逐步引导。' },
        { period: '2024–2026', title: 'Agentic AI', desc: '感知—规划—行动循环成形：智能体自主调用工具、规划路径、完成目标。' },
        { period: '2026–2028', title: '多智能体协作', desc: '智能体团队分工协作；开源 harness 提供沙箱、记忆与编排，成为新一代基础设施。' }
      ]
    },
    loop: {
      kicker: '核心机制', title: 'Agentic AI 核心机制',
      intro: '现代智能体的本质是一个持续运转的反馈循环——四个环节相互咬合，让智能体得以自主地理解、决策并行动。',
      perceive: { label: '感知', desc: '接收目标与环境信息，理解上下文与约束。' },
      plan: { label: '规划', desc: '将复杂任务拆解为可执行步骤，权衡工具与执行顺序。' },
      act: { label: '行动', desc: '调用工具、执行操作，把计划一步步变成现实。' },
      memory: { label: '记忆', desc: '沉淀经验与长期知识，让下一次行动更聪明。' },
      center: '自主循环', hint: '悬停或点击左侧环节查看说明'
    },
    ecosystem: {
      kicker: '开源生态', title: '开源 Agent 生态（Open Harness）',
      intro: '从「框架」到「harness」：新一代开源项目不再只是拼装零件，而是提供开箱即用的智能体运行环境——沙箱、记忆、编排一应俱全。',
      callout: '—— DeerFlow 2.0 提出的核心公式',
      link: 'GitHub ↗',
      cards: [
        {
          name: 'DeerFlow', org: 'ByteDance', mono: 'DF', url: 'https://github.com/bytedance/deer-flow',
          tagline: '生产级「超级智能体」基础设施，开箱即用',
          features: ['子智能体隔离上下文', '本地 · Docker · K8s 沙箱', '长期记忆', 'Markdown 技能定义']
        },
        {
          name: 'OpenHands', org: 'All Hands AI', mono: 'OH', url: 'https://github.com/OpenHands/OpenHands',
          tagline: '自主软件工程智能体平台，在沙箱中完成编码任务',
          features: ['写码 · 调试 · PR 全流程', 'Docker 沙箱隔离', '多模型支持', 'ICLR 2025 论文']
        },
        {
          name: 'LangGraph', org: 'LangChain', mono: 'LG', url: 'https://github.com/langchain-ai/langgraph',
          tagline: '以图结构编排智能体流程，状态可控、路径可溯',
          features: ['状态图工作流', '人机协同节点', '检查点与回放', '广泛生态']
        },
        {
          name: 'CrewAI', org: 'CrewAI Inc.', mono: 'CA', url: 'https://github.com/crewAIInc/crewAI',
          tagline: '角色化多智能体协作：把任务分给各司其职的智能体团队',
          features: ['Crew · Task · Flow 抽象', '角色与目标定义', '编排与控制', '快速上手']
        },
        {
          name: 'AutoGen', org: 'Microsoft', mono: 'AG', url: 'https://github.com/microsoft/autogen',
          tagline: '微软多智能体对话框架：让智能体在对话中协作求解',
          features: ['多智能体对话', '可编程工作流', '人机混合模式', '企业级研究背景']
        },
        {
          name: 'MetaGPT', org: 'FoundationAgents', mono: 'MG', url: 'https://github.com/FoundationAgents/MetaGPT',
          tagline: '把 SOP 编码进多智能体流水线：一句话需求 → 完整软件交付',
          features: ['Code = SOP(Team) 理念', '结构化文档流转', '可执行反馈循环', 'ICLR 2024 Oral']
        }
      ]
    },
    demo: {
      kicker: '交互演示', title: '看一个智能体如何工作',
      intro: '选择一个任务，观看智能体如何思考、调用工具并完成任务。',
      terminal: 'agent-shell', badge: '模拟演示 · SIMULATED',
      empty: '选择左侧任务并点击「运行」，观察智能体的执行过程。',
      run: '运行', reset: '清空',
      footnote: '* 本演示为前端模拟，不调用任何真实模型或网络服务。',
      tasks: [
        {
          id: 'booth',
          label: '规划 CES 展台', desc: '策划一场 CES 展台的完整演示方案',
          script: [
            { t: 'thought', text: '收到任务：为 CES 2028 制定展台演示方案。先拆解目标。' },
            { t: 'thought', text: '目标拆解为 3 个子任务：① 确定演示主题 ② 设计互动环节 ③ 编排多智能体分工。' },
            { t: 'tool', text: '调用 search_web("CES 2028 innovation awards categories")' },
            { t: 'result', text: '检索完成：创新奖类别共 32 个，其中与 AI 相关 6 个。' },
            { t: 'tool', text: '调用 plan_draft(theme="agentic-loop", demos=3, trilingual=true)' },
            { t: 'result', text: '方案草稿 v1 已生成：3 个演示位 + 完整时间轴。' },
            { t: 'tool', text: '调用 swarm_delegate(roles=[designer, writer, engineer])' },
            { t: 'result', text: '已向 3 个子智能体分发任务，预计 12 分钟完成初稿。' },
            { t: 'done', text: '✔ 方案交付：展台主题「感知—规划—行动」循环 + 三语交互演示。' }
          ]
        },
        {
          id: 'stack',
          label: '选型开源框架', desc: '为展示站挑选开源 agent 基础设施',
          script: [
            { t: 'thought', text: '收到需求：为展示站选择开源 agent 基础设施。评估维度：沙箱、记忆、编排、社区。' },
            { t: 'tool', text: '调用 search_github(q="agent harness", sort=stars)' },
            { t: 'result', text: '找到 6 个候选：DeerFlow、OpenHands、LangGraph、CrewAI、AutoGen、MetaGPT。' },
            { t: 'tool', text: '调用 read_docs(repo="bytedance/deer-flow")' },
            { t: 'result', text: 'DeerFlow 2.0 提出「Agent = Model + Harness」，内置沙箱与长期记忆。' },
            { t: 'tool', text: '调用 compare_matrix(candidates=6, criteria=4)' },
            { t: 'result', text: '评分矩阵完成：DeerFlow 与 OpenHands 在「开箱即用」维度领先。' },
            { t: 'done', text: '✔ 选型结论：DeerFlow 作为核心演示基础设施，LangGraph 作编排参考。' }
          ]
        },
        {
          id: 'script',
          label: '撰写演示脚本', desc: '撰写三语交互演示脚本',
          script: [
            { t: 'thought', text: '任务：为三语展示站撰写交互演示脚本。先确定结构与语气。' },
            { t: 'tool', text: '调用 brainstorm(struct=["hook", "loop", "tool-calls", "result"])' },
            { t: 'result', text: '结构确定：悬念开场 → 感知-规划-行动 → 工具调用 → 结果呈现。' },
            { t: 'tool', text: '调用 draft_script(langs=["zh", "en", "ko"])' },
            { t: 'result', text: '三语脚本草稿完成：共 3 幕 18 行。' },
            { t: 'tool', text: '调用 translate_review(target="ko", tone="natural")' },
            { t: 'result', text: '韩文版润色完成，修正 2 处术语表达。' },
            { t: 'done', text: '✔ 脚本交付：三语版本就绪，等待舞台演示。' }
          ]
        }
      ]
    },
    data: {
      kicker: '数据洞察', title: '协作的力量',
      intro: '当智能体组成团队，任务表现会如何变化？下方为示意图表。',
      chartTitle: '任务完成率对比：单智能体 vs 多智能体（示意数据）',
      note: '示意图表：数值仅用于说明趋势，不代表任何基准测试结果。',
      tableToggle: '查看数据表', tableCaption: '任务完成率对比数据表',
      tableH1: '任务类别', tableH2: '单智能体', tableH3: '多智能体协作',
      categories: ['代码生成', '数据分析', '研究综述', '流程自动化'],
      series1: '单智能体', series2: '多智能体协作'
    },
    arch: {
      kicker: '技术架构', title: '生产级智能体栈的分层',
      intro: '从用户意图到沙箱执行，一个生产级智能体栈的完整分层。',
      svgTitle: '技术架构分层图', svgDesc: '用户经由编排层连接工具、模型、记忆与沙箱环境。',
      user: '用户', orchestrator: '编排层 Orchestrator', orchestratorSub: '调度 · 状态 · 多智能体',
      tools: '工具 Tools', models: '模型 Models', memory: '记忆 Memory',
      sandbox: '沙箱环境 Sandbox', sandboxSub: '本地 · Docker · K8s',
      caption: '* 参考开源 harness（DeerFlow、OpenHands 等）的通用分层。'
    },
    roadmap: {
      kicker: '发布路线', title: 'CES 2028 路线图',
      intro: '以目标为导向的发布节奏，直至拉斯维加斯的聚光灯。',
      m1: { title: '原型验证', desc: '完成智能体循环原型与三语内容框架。' },
      m2: { title: '开放测试', desc: '邀请开发者试用，打磨演示与文档。' },
      m3: { title: '发布候选', desc: '冻结特性，完成多语言与可访问性审计。' },
      m4: { title: 'CES 全球发布', desc: '目标：斩获五大创新奖提名与奖项。' }
    },
    footer: {
      tag: '面向 CES 2028 的前沿技术展示站', ack: '开源致谢',
      disclaimer: '本页面为概念展示站。演示内容为前端模拟；「CES 2028 发布」与「五大创新奖」为公开目标，并非既成事实。所有开源项目名称与链接归其各自作者所有。',
      rights: '保留所有权利。'
    }
  };

  const en = {
    meta: {
      title: 'AGENTA 2028 · A Frontier Showcase of Agentic AI',
      desc: 'AGENTA 2028 — a trilingual frontier-tech showcase for CES 2028: the agentic loop, the open agent ecosystem, and multi-agent collaboration.'
    },
    a11y: { skip: 'Skip to main content' },
    nav: {
      evolution: 'Evolution', loop: 'Agent Loop', ecosystem: 'Ecosystem',
      demo: 'Demo', data: 'Data', arch: 'Architecture', roadmap: 'Roadmap'
    },
    hero: {
      badge: 'CES 2028 Global Launch · Targeting 5 Innovation Awards',
      headline: 'Where Agentic AI Meets Open Agent Infrastructure',
      sub: 'A trilingual showcase of the technologies defining the next era of intelligence — from a single agent to full multi-agent collaboration.',
      cta1: 'Start Exploring', cta2: 'Watch the Demo',
      stat1: 'Trilingual', stat2: 'Open Frameworks', stat3: 'Stages of Evolution', stat4: 'Award Goals',
      scroll: 'Scroll'
    },
    evolution: {
      kicker: 'Evolution', title: 'Where Agents Came From',
      intro: 'Four threads trace two decades of agent technology — from fixed rules to autonomous collaboration.',
      items: [
        { period: '2000s–2010s', title: 'Rule-based Automation', desc: 'RPA and scripts executed fixed rules on repetitive tasks — brittle in the face of change and novelty.' },
        { period: '2022–2024', title: 'Single-Step LLMs', desc: 'The ChatGPT era’s one-shot Q&A: a leap in understanding and generation, yet still steered step-by-step by humans.' },
        { period: '2024–2026', title: 'Agentic AI', desc: 'The perceive–plan–act loop takes shape: agents autonomously call tools, devise paths, and pursue goals.' },
        { period: '2026–2028', title: 'Multi-Agent Collaboration', desc: 'Agent teams divide and coordinate work; open harnesses supply sandboxing, memory, and orchestration as the new infrastructure layer.' }
      ]
    },
    loop: {
      kicker: 'The Mechanism', title: 'The Agentic Loop',
      intro: 'At its core a modern agent is a feedback loop in motion — four interlocking stages that let it understand, decide, and act autonomously.',
      perceive: { label: 'Perceive', desc: 'Receive the goal and environment, and understand the context and constraints.' },
      plan: { label: 'Plan', desc: 'Decompose the task into executable steps, weighing tools and ordering.' },
      act: { label: 'Act', desc: 'Call tools and execute operations, turning the plan into reality step by step.' },
      memory: { label: 'Memory', desc: 'Retain experience and long-term knowledge so the next action is smarter.' },
      center: 'Autonomy Loop', hint: 'Hover or click a stage to learn more'
    },
    ecosystem: {
      kicker: 'Ecosystem', title: 'The Open Agent Ecosystem (Harness)',
      intro: 'From frameworks to harnesses: the new wave of open-source projects ships ready-to-run agent runtimes — sandboxing, memory, and orchestration included.',
      callout: '— the core formula behind DeerFlow 2.0',
      link: 'GitHub ↗',
      cards: [
        {
          name: 'DeerFlow', org: 'ByteDance', mono: 'DF', url: 'https://github.com/bytedance/deer-flow',
          tagline: 'Production-grade “super-agent” infrastructure, ready to run',
          features: ['Isolated sub-agent contexts', 'Local · Docker · K8s sandboxes', 'Long-term memory', 'Markdown-defined skills']
        },
        {
          name: 'OpenHands', org: 'All Hands AI', mono: 'OH', url: 'https://github.com/OpenHands/OpenHands',
          tagline: 'Autonomous software-engineering agent working inside sandboxed runtimes',
          features: ['Code · debug · PR end-to-end', 'Docker sandbox isolation', 'Model-agnostic', 'ICLR 2025 paper']
        },
        {
          name: 'LangGraph', org: 'LangChain', mono: 'LG', url: 'https://github.com/langchain-ai/langgraph',
          tagline: 'Graph-structured agent orchestration with controllable state and traceable paths',
          features: ['Stateful graph workflows', 'Human-in-the-loop nodes', 'Checkpointing & replay', 'Broad ecosystem']
        },
        {
          name: 'CrewAI', org: 'CrewAI Inc.', mono: 'CA', url: 'https://github.com/crewAIInc/crewAI',
          tagline: 'Role-based multi-agent teamwork — assign tasks to a crew of specialist agents',
          features: ['Crew · Task · Flow abstractions', 'Roles & goals', 'Orchestration & control', 'Low learning curve']
        },
        {
          name: 'AutoGen', org: 'Microsoft', mono: 'AG', url: 'https://github.com/microsoft/autogen',
          tagline: 'Microsoft’s multi-agent conversation framework — agents collaborate through dialogue',
          features: ['Multi-agent conversations', 'Programmable workflows', 'Human-agent hybrid modes', 'Enterprise research pedigree']
        },
        {
          name: 'MetaGPT', org: 'FoundationAgents', mono: 'MG', url: 'https://github.com/FoundationAgents/MetaGPT',
          tagline: 'SOPs encoded into an agent pipeline: one-line requirement → complete software delivery',
          features: ['Code = SOP(Team) philosophy', 'Structured document handoffs', 'Executable feedback loop', 'ICLR 2024 Oral']
        }
      ]
    },
    demo: {
      kicker: 'Demo', title: 'Watch an Agent Work',
      intro: 'Pick a task and watch an agent think, call tools, and finish the job.',
      terminal: 'agent-shell', badge: 'SIMULATED DEMO',
      empty: 'Pick a task on the left and press Run to watch the agent at work.',
      run: 'Run', reset: 'Clear',
      footnote: '* This demo is a front-end simulation — no real models or network services are called.',
      tasks: [
        {
          id: 'booth',
          label: 'Plan the CES Booth', desc: 'Plan a complete CES booth demo',
          script: [
            { t: 'thought', text: 'Task received: plan the CES 2028 booth demo. Breaking down the goal.' },
            { t: 'thought', text: 'Goal decomposed into 3 sub-tasks: ① pick a demo theme ② design the interaction ③ split work across agents.' },
            { t: 'tool', text: 'call search_web("CES 2028 innovation awards categories")' },
            { t: 'result', text: 'Search done: 32 award categories found, 6 related to AI.' },
            { t: 'tool', text: 'call plan_draft(theme="agentic-loop", demos=3, trilingual=true)' },
            { t: 'result', text: 'Draft v1 ready: 3 demo stations plus a full timeline.' },
            { t: 'tool', text: 'call swarm_delegate(roles=[designer, writer, engineer])' },
            { t: 'result', text: 'Tasks dispatched to 3 sub-agents; first draft expected in 12 minutes.' },
            { t: 'done', text: '✔ Delivered: a booth built around the perceive–plan–act loop with trilingual interactive demos.' }
          ]
        },
        {
          id: 'stack',
          label: 'Evaluate Frameworks', desc: 'Choose open-source agent infrastructure',
          script: [
            { t: 'thought', text: 'Requirement: pick an open-source agent stack for the showcase. Criteria: sandboxing, memory, orchestration, community.' },
            { t: 'tool', text: 'call search_github(q="agent harness", sort=stars)' },
            { t: 'result', text: '6 candidates found: DeerFlow, OpenHands, LangGraph, CrewAI, AutoGen, MetaGPT.' },
            { t: 'tool', text: 'call read_docs(repo="bytedance/deer-flow")' },
            { t: 'result', text: 'DeerFlow 2.0 introduces “Agent = Model + Harness” with built-in sandboxing and long-term memory.' },
            { t: 'tool', text: 'call compare_matrix(candidates=6, criteria=4)' },
            { t: 'result', text: 'Scoring done: DeerFlow and OpenHands lead on the “ready-to-run” dimension.' },
            { t: 'done', text: '✔ Decision: DeerFlow as the core demo infrastructure, LangGraph as the orchestration reference.' }
          ]
        },
        {
          id: 'script',
          label: 'Write a Demo Script', desc: 'Write the trilingual interactive demo script',
          script: [
            { t: 'thought', text: 'Task: write the interactive demo script for the trilingual showcase. Locking structure and tone first.' },
            { t: 'tool', text: 'call brainstorm(struct=["hook", "loop", "tool-calls", "result"])' },
            { t: 'result', text: 'Structure set: hook → perceive-plan-act → tool calls → reveal.' },
            { t: 'tool', text: 'call draft_script(langs=["zh", "en", "ko"])' },
            { t: 'result', text: 'Trilingual draft complete: 3 acts, 18 lines.' },
            { t: 'tool', text: 'call translate_review(target="ko", tone="natural")' },
            { t: 'result', text: 'Korean pass polished; 2 terminology fixes applied.' },
            { t: 'done', text: '✔ Delivered: all three language versions ready for the stage demo.' }
          ]
        }
      ]
    },
    data: {
      kicker: 'Insight', title: 'The Power of Collaboration',
      intro: 'How does agent collaboration change task performance? Illustrative chart below.',
      chartTitle: 'Task completion rate: single agent vs multi-agent team (illustrative)',
      note: 'Illustrative: values demonstrate trends only, not benchmark results.',
      tableToggle: 'View data table', tableCaption: 'Task completion rate comparison table',
      tableH1: 'Task type', tableH2: 'Single agent', tableH3: 'Multi-agent team',
      categories: ['Code Generation', 'Data Analysis', 'Research Review', 'Workflow Automation'],
      series1: 'Single Agent', series2: 'Multi-Agent Team'
    },
    arch: {
      kicker: 'Architecture', title: 'Layers of a Production Agent Stack',
      intro: 'From user intent to sandboxed execution — the complete layering of a production-grade agent stack.',
      svgTitle: 'Agent stack architecture diagram', svgDesc: 'The user reaches tools, models, memory, and sandbox through the orchestrator.',
      user: 'User', orchestrator: 'Orchestrator', orchestratorSub: 'Scheduling · State · Multi-Agent',
      tools: 'Tools', models: 'Models', memory: 'Memory',
      sandbox: 'Sandbox', sandboxSub: 'Local · Docker · K8s',
      caption: '* General layering as seen in open harnesses such as DeerFlow and OpenHands.'
    },
    roadmap: {
      kicker: 'Roadmap', title: 'Road to CES 2028',
      intro: 'A goal-driven release cadence, all the way to the Las Vegas spotlight.',
      m1: { title: 'Prototype Validation', desc: 'Prototype the agent loop and the trilingual content framework.' },
      m2: { title: 'Open Beta', desc: 'Invite developers to trial; polish demos and docs.' },
      m3: { title: 'Release Candidate', desc: 'Feature freeze; complete multilingual and accessibility audits.' },
      m4: { title: 'CES Global Launch', desc: 'Goal: five innovation-award nominations and wins.' }
    },
    footer: {
      tag: 'A frontier-tech showcase heading to CES 2028', ack: 'Open-Source Acknowledgments',
      disclaimer: 'This is a concept showcase. The demo is a front-end simulation; “CES 2028 launch” and “five innovation awards” are stated goals, not established facts. All open-source project names and links belong to their respective authors.',
      rights: 'All rights reserved.'
    }
  };

  const ko = {
    meta: {
      title: 'AGENTA 2028 · 에이전틱 AI 프런티어 기술 전시관',
      desc: 'AGENTA 2028 — CES 2028을 향한 3개 언어 프런티어 기술 전시관: 에이전틱 루프, 오픈 에이전트 생태계, 다중 에이전트 협업.'
    },
    a11y: { skip: '메인 콘텐츠로 건너뛰기' },
    nav: {
      evolution: '기술 진화', loop: '핵심 메커니즘', ecosystem: '오픈소스 생태계',
      demo: '데모', data: '데이터', arch: '아키텍처', roadmap: '로드맵'
    },
    hero: {
      badge: 'CES 2028 글로벌 공개 · 혁신상 5개 부문 수상 목표',
      headline: '에이전틱 AI와 오픈 에이전트 인프라의 만남',
      sub: '차세대 지능 시대를 위한 3개 언어 기술 전시관 — 인지에서 협업까지, 에이전트의 전체 그림을 인터랙티브하게 보여드립니다.',
      cta1: '탐색 시작', cta2: '데모 보기',
      stat1: '3개 언어 콘텐츠', stat2: '오픈소스 프레임워크', stat3: '에이전트 진화 단계', stat4: '혁신상 목표',
      scroll: '아래로 스크롤'
    },
    evolution: {
      kicker: '기술 진화', title: '에이전트는 어디서 왔는가',
      intro: '고정 규칙에서 자율 협업까지 — 20년에 걸친 에이전트 기술의 진화 궤적을 네 갈래로 짚어봅니다.',
      items: [
        { period: '2000s–2010s', title: '규칙 기반 자동화', desc: 'RPA와 스크립트는 고정된 규칙으로 반복 작업을 처리했지만, 변화와 미지의 상황에 취약했습니다.' },
        { period: '2022–2024', title: '단일 스텝 LLM', desc: 'ChatGPT 시대의 일문일답 — 이해와 생성 능력은 비약했지만, 여전히 사람이 단계마다 이끌어야 했습니다.' },
        { period: '2024–2026', title: '에이전틱 AI', desc: '인지—계획—행동 루프가 완성되며, 에이전트가 스스로 도구를 호출하고 경로를 설계해 목표를 완수합니다.' },
        { period: '2026–2028', title: '다중 에이전트 협업', desc: '에이전트 팀이 역할을 나누어 협업하고, 오픈 하네스가 샌드박스·메모리·오케스트레이션을 제공하는 새로운 인프라가 됩니다.' }
      ]
    },
    loop: {
      kicker: '핵심 메커니즘', title: '에이전틱 루프',
      intro: '현대 에이전트의 본질은 끊임없이 순환하는 피드백 루프입니다. 네 단계가 맞물려 스스로 이해하고, 판단하고, 행동합니다.',
      perceive: { label: '인지', desc: '목표와 환경 정보를 받아들여 맥락과 제약을 이해합니다.' },
      plan: { label: '계획', desc: '복잡한 과제를 실행 가능한 단계로 분해하고, 도구와 순서를 저울질합니다.' },
      act: { label: '행동', desc: '도구를 호출하고 작업을 수행해 계획을 한 단계씩 현실로 만듭니다.' },
      memory: { label: '기억', desc: '경험과 장기 지식을 축적해 다음 행동을 더 똑똑하게 만듭니다.' },
      center: '자율 루프', hint: '각 단계에 마우스를 올리거나 클릭해 설명을 확인하세요'
    },
    ecosystem: {
      kicker: '오픈소스 생태계', title: '오픈 에이전트 생태계 (Open Harness)',
      intro: '프레임워크를 넘어 하네스로 — 차세대 오픈소스 프로젝트는 샌드박스·메모리·오케스트레이션을 갖춘, 바로 실행 가능한 에이전트 런타임을 제공합니다.',
      callout: '— DeerFlow 2.0이 제시한 핵심 공식',
      link: 'GitHub ↗',
      cards: [
        {
          name: 'DeerFlow', org: 'ByteDance', mono: 'DF', url: 'https://github.com/bytedance/deer-flow',
          tagline: '프로덕션급 “슈퍼 에이전트” 인프라, 바로 실행 가능',
          features: ['서브 에이전트 컨텍스트 격리', '로컬 · Docker · K8s 샌드박스', '장기 메모리', 'Markdown 스킬 정의']
        },
        {
          name: 'OpenHands', org: 'All Hands AI', mono: 'OH', url: 'https://github.com/OpenHands/OpenHands',
          tagline: '샌드박스 런타임 안에서 작업하는 자율 소프트웨어 엔지니어링 에이전트',
          features: ['코딩 · 디버깅 · PR 전 과정', 'Docker 샌드박스 격리', '멀티 모델 지원', 'ICLR 2025 논문']
        },
        {
          name: 'LangGraph', org: 'LangChain', mono: 'LG', url: 'https://github.com/langchain-ai/langgraph',
          tagline: '그래프 구조로 에이전트 흐름을 설계하는, 상태 제어와 경로 추적이 가능한 오케스트레이션',
          features: ['상태 그래프 워크플로', '휴먼인더루프 노드', '체크포인트 · 재생', '폭넓은 생태계']
        },
        {
          name: 'CrewAI', org: 'CrewAI Inc.', mono: 'CA', url: 'https://github.com/crewAIInc/crewAI',
          tagline: '역할 기반 다중 에이전트 협업 — 전문 에이전트 크루에게 업무를 배정하세요',
          features: ['Crew · Task · Flow 추상화', '역할 · 목표 정의', '오케스트레이션 · 제어', '쉬운 학습 곡선']
        },
        {
          name: 'AutoGen', org: 'Microsoft', mono: 'AG', url: 'https://github.com/microsoft/autogen',
          tagline: '마이크로소프트의 다중 에이전트 대화 프레임워크 — 대화 속에서 협업하며 문제를 해결합니다',
          features: ['다중 에이전트 대화', '프로그래머블 워크플로', '인간-에이전트 하이브리드', '엔터프라이즈 연구 기반']
        },
        {
          name: 'MetaGPT', org: 'FoundationAgents', mono: 'MG', url: 'https://github.com/FoundationAgents/MetaGPT',
          tagline: 'SOP를 에이전트 파이프라인에 담아, 한 줄 요구사항에서 완성된 소프트웨어까지',
          features: ['Code = SOP(Team) 철학', '구조화된 문서 전달', '실행 가능한 피드백 루프', 'ICLR 2024 Oral']
        }
      ]
    },
    demo: {
      kicker: '인터랙티브 데모', title: '에이전트가 일하는 모습을 보세요',
      intro: '과제를 선택해 에이전트가 생각하고, 도구를 호출하고, 일을 완수하는 과정을 지켜보세요.',
      terminal: 'agent-shell', badge: '시뮬레이션 · SIMULATED',
      empty: '왼쪽에서 과제를 선택하고 「실행」을 눌러 에이전트의 작업 과정을 지켜보세요.',
      run: '실행', reset: '지우기',
      footnote: '* 본 데모는 프런트엔드 시뮬레이션으로, 실제 모델이나 네트워크 서비스를 호출하지 않습니다.',
      tasks: [
        {
          id: 'booth',
          label: 'CES 부스 기획', desc: 'CES 부스 데모 전체를 기획합니다',
          script: [
            { t: 'thought', text: '과제 수신: CES 2028 부스 데모 기획. 목표를 먼저 분해합니다.' },
            { t: 'thought', text: '목표를 3개 하위 과제로 분해: ① 데모 주제 선정 ② 인터랙션 설계 ③ 에이전트 간 업무 분담.' },
            { t: 'tool', text: 'search_web("CES 2028 innovation awards categories") 호출' },
            { t: 'result', text: '검색 완료: 혁신상 카테고리 32개 확인, AI 관련 6개.' },
            { t: 'tool', text: 'plan_draft(theme="agentic-loop", demos=3, trilingual=true) 호출' },
            { t: 'result', text: '초안 v1 생성 완료: 데모 스테이션 3개와 전체 타임라인.' },
            { t: 'tool', text: 'swarm_delegate(roles=[designer, writer, engineer]) 호출' },
            { t: 'result', text: '서브 에이전트 3개에 업무 배정, 초안 완성 예상 12분.' },
            { t: 'done', text: '✔ 납품 완료: 「인지—계획—행동」 루프를 주제로 한 부스와 3개 언어 인터랙티브 데모.' }
          ]
        },
        {
          id: 'stack',
          label: '프레임워크 선정', desc: '전시관을 위한 오픈소스 에이전트 인프라를 선정합니다',
          script: [
            { t: 'thought', text: '요구사항 수신: 전시관용 오픈소스 에이전트 스택 선정. 평가 기준은 샌드박스·메모리·오케스트레이션·커뮤니티.' },
            { t: 'tool', text: 'search_github(q="agent harness", sort=stars) 호출' },
            { t: 'result', text: '후보 6개 발견: DeerFlow, OpenHands, LangGraph, CrewAI, AutoGen, MetaGPT.' },
            { t: 'tool', text: 'read_docs(repo="bytedance/deer-flow") 호출' },
            { t: 'result', text: 'DeerFlow 2.0은 「Agent = Model + Harness」를 제안하며 샌드박스와 장기 메모리를 내장했습니다.' },
            { t: 'tool', text: 'compare_matrix(candidates=6, criteria=4) 호출' },
            { t: 'result', text: '평가 매트릭스 완료: DeerFlow와 OpenHands가 「바로 실행 가능」 차원에서 우위.' },
            { t: 'done', text: '✔ 결론: DeerFlow를 핵심 데모 인프라로, LangGraph를 오케스트레이션 참조로 선정.' }
          ]
        },
        {
          id: 'script',
          label: '데모 스크립트 작성', desc: '3개 언어 인터랙티브 데모 스크립트를 작성합니다',
          script: [
            { t: 'thought', text: '과제: 3개 언어 전시관의 인터랙티브 데모 스크립트 작성. 먼저 구조와 톤을 정합니다.' },
            { t: 'tool', text: 'brainstorm(struct=["hook", "loop", "tool-calls", "result"]) 호출' },
            { t: 'result', text: '구조 확정: 훅 → 인지-계획-행동 → 도구 호출 → 결과 공개.' },
            { t: 'tool', text: 'draft_script(langs=["zh", "en", "ko"]) 호출' },
            { t: 'result', text: '3개 언어 초안 완성: 총 3막 18줄.' },
            { t: 'tool', text: 'translate_review(target="ko", tone="natural") 호출' },
            { t: 'result', text: '한국어판 다듬기 완료, 용어 2곳 수정.' },
            { t: 'done', text: '✔ 납품 완료: 3개 언어 버전 준비 완료, 무대 데모 대기 중.' }
          ]
        }
      ]
    },
    data: {
      kicker: '데이터 인사이트', title: '협업의 힘',
      intro: '에이전트가 팀을 이루면 과제 성과는 어떻게 달라질까요? 아래는 예시용 차트입니다.',
      chartTitle: '과제 완료율 비교: 단일 vs 다중 에이전트 (예시 데이터)',
      note: '예시 차트: 수치는 추세 설명용이며 실제 벤치마크 결과가 아닙니다.',
      tableToggle: '데이터 표 보기', tableCaption: '과제 완료율 비교 데이터 표',
      tableH1: '과제 유형', tableH2: '단일 에이전트', tableH3: '다중 에이전트 협업',
      categories: ['코드 생성', '데이터 분석', '리서치 리뷰', '워크플로 자동화'],
      series1: '단일 에이전트', series2: '다중 에이전트 협업'
    },
    arch: {
      kicker: '기술 아키텍처', title: '프로덕션급 에이전트 스택의 계층',
      intro: '사용자 의도에서 샌드박스 실행까지 — 프로덕션급 에이전트 스택의 완전한 계층 구조.',
      svgTitle: '기술 아키텍처 계층도', svgDesc: '사용자가 오케스트레이터를 통해 도구·모델·메모리·샌드박스와 연결됩니다.',
      user: '사용자', orchestrator: '오케스트레이터 Orchestrator', orchestratorSub: '스케줄링 · 상태 · 다중 에이전트',
      tools: '도구 Tools', models: '모델 Models', memory: '메모리 Memory',
      sandbox: '샌드박스 Sandbox', sandboxSub: '로컬 · Docker · K8s',
      caption: '* DeerFlow, OpenHands 등 오픈 하네스에서 볼 수 있는 일반적 계층 구조를 참고했습니다.'
    },
    roadmap: {
      kicker: '출시 로드맵', title: 'CES 2028 로드맵',
      intro: '라스베이거스의 스포트라이트까지, 목표 중심의 출시 일정.',
      m1: { title: '프로토타입 검증', desc: '에이전트 루프 프로토타입과 3개 언어 콘텐츠 프레임워크 완성.' },
      m2: { title: '오픈 베타', desc: '개발자를 초대해 시험하고, 데모와 문서를 다듬습니다.' },
      m3: { title: '릴리스 후보', desc: '기능 동결 후 다국어·접근성 감사를 완료합니다.' },
      m4: { title: 'CES 글로벌 공개', desc: '목표: 혁신상 5개 부문 노미네이션과 수상.' }
    },
    footer: {
      tag: 'CES 2028을 향한 프런티어 기술 전시관', ack: '오픈소스 감사의 글',
      disclaimer: '본 페이지는 콘셉트 전시관입니다. 데모는 프런트엔드 시뮬레이션이며, 「CES 2028 공개」와 「혁신상 5개 수상」은 공개된 목표이지 확정된 사실이 아닙니다. 모든 오픈소스 프로젝트의 이름과 링크는 각 저작자에게 귀속됩니다.',
      rights: '모든 권리 보유.'
    }
  };

  const I18N = { zh, en, ko };
  const LANG_STORAGE_KEY = 'agenta-lang';
  const HTML_LANG = { zh: 'zh-CN', en: 'en', ko: 'ko' };

  function detectLang() {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved && I18N[saved]) return saved;
      const nav = (navigator.language || 'zh').toLowerCase();
      if (nav.indexOf('ko') === 0) return 'ko';
      if (nav.indexOf('en') === 0) return 'en';
    } catch (e) { /* storage unavailable */ }
    return 'zh';
  }

  function applyDict(lang) {
    const L = I18N[lang];
    document.documentElement.lang = HTML_LANG[lang];
    document.documentElement.dataset.lang = lang;
    document.title = L.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', L.meta.desc);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      let v = L;
      const ok = el.getAttribute('data-i18n').split('.').every(function (k) {
        if (v && typeof v === 'object') { v = v[k]; return true; }
        return false;
      });
      if (ok && typeof v === 'string') el.textContent = v;
    });
  }

  function setLang(lang, force) {
    if (!I18N[lang] || (!force && lang === I18N.current)) return;
    I18N.current = lang;
    try { localStorage.setItem(LANG_STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    applyDict(lang);
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      const active = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    if (window.AGENTA && typeof window.AGENTA.onLangChange === 'function') {
      window.AGENTA.onLangChange(lang);
    }
  }

  window.I18N = I18N;
  window.AGENTA = window.AGENTA || {};
  window.AGENTA.setLang = setLang;
  window.AGENTA.detectLang = detectLang;
  window.AGENTA.currentLang = function () { return I18N.current || detectLang(); };
})();
