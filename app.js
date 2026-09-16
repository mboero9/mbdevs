const io = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const translations = {
  en: {
    heroEyebrow:'AI · DEVOPS · CLOUD · SOFTWARE ENGINEERING',
    heroTitle:'We build, deploy and operate software <span>with AI.</span>',
    heroLead:'APIs, web platforms, microservices, data and serverless workloads. We automate the path from repository to production and add AI agents to operate, observe and improve the environment.',
    startProject:'Start a project →', exploreAI:'Explore AI for DevOps', proofBuild:'Web · APIs · Services', proofDeploy:'CI/CD · Cloud · IaC', proofOperate:'SRE · Observability · AI',
    servicesTitle:'One engineering layer, from code to production.', servicesLead:'We do not sell isolated tools. We design the architecture, automate delivery and leave an observable, secure platform ready to grow.',
    svc1:'Agents for incident investigation, release analysis, platform health summaries, runbook assistance and operational toil reduction.',
    svc2:'Landing zones, networking, IAM, containers, Kubernetes/OpenShift, autoscaling, secrets, storage and reproducible infrastructure as code.',
    svc3:'REST, event-driven and internal services with authentication, gateways, rate limiting, versioning, documentation and observability.',
    svc4:'Landing pages, portals, dashboards and modern applications, optimized and deployed with automated pipelines and global CDN.',
    svc5:'Functions, workers, queues and events for workloads that scale on demand without permanent server management.',
    svc6:'PostgreSQL, MySQL, MongoDB, Redis, caches, backups, replicas, migrations, performance and vector databases when AI requires them.',
    svc7:'Agents connected to repositories, APIs, documentation and internal tools. Multi-agent workflows, least privilege and human-in-the-loop.',
    svc8:'RAG, semantic search, internal copilots, evaluation, prompt observability, model routing and production AI deployment.',
    svc9:'SAST, dependency scanning, secrets, policies, metrics, logs, traces, SLOs, alerts and dashboards by design.',
    aiTitle:'AI can operate your platform too.', aiLead:'An LLM becomes more than a chatbot when it is securely connected to metrics, logs, repositories, pipelines, APIs and infrastructure tools.',
    aiBody:'We design agents with context, tools and clear boundaries. They can analyze, recommend and —when appropriate— execute controlled actions with human approval and audit trails.', aiCta:'Automate my operations →',
    uc1t:'Incident Investigator',uc1d:'Correlates logs, metrics, traces, recent changes and deployments to speed up diagnosis and suggest likely causes.',
    uc2t:'Release Copilot',uc2d:'Reviews PRs, dependencies, tests, infrastructure changes and risk signals before a version is promoted.',
    uc3t:'Runbook Agent',uc3d:'Turns operational procedures into assisted workflows: diagnosis, checks, evidence gathering and approved actions.',
    uc4t:'Infrastructure Copilot',uc4d:'Explains Terraform, Kubernetes or OpenShift, detects inconsistencies and prepares reviewable changes instead of operating blindly.',
    uc5t:'Database & Performance Agent',uc5d:'Analyzes slow queries, parameters, saturation, errors and trends to produce health reports and performance recommendations.',
    uc6t:'FinOps & Capacity Assistant',uc6d:'Finds idle resources, cost anomalies, oversizing and savings opportunities without sacrificing reliability.',
    uc7t:'Security Triage',uc7d:'Prioritizes findings, CVEs, risky configurations and secret exposure, adding context before remediation.',
    uc8t:'Knowledge & Documentation Agent',uc8d:'Turns repositories, ADRs, runbooks and technical docs into searchable knowledge and living documentation.',
    deliveryTitle:'From git push to production.',deliveryLead:'We design repeatable pipelines so deployment does not depend on manual steps, tribal knowledge or a single person.',
    dep1:'Containers, managed runtimes or serverless behind API Gateway, ingress or reverse proxy, with TLS, auth and autoscaling.',
    dep2:'Automated builds, branch previews, CDN, cache, custom domains, TLS and controlled promotion to production.',
    dep3:'Packaging, variables, secrets, triggers, IAM permissions, versioning and observability as part of the pipeline.',
    dep4:'Provisioning, versioned migrations, backups, restore tests, replicas, tuning and controlled schema changes.',
    dep5:'Namespaces, operators, Helm/Kustomize, GitOps, ingress, secrets, autoscaling, policies and observability.',
    dep6:'Model APIs, agents, MCP servers, vector stores, evals, guardrails and telemetry for cost, latency and quality.',
    solutionsTitle:'Packaged services for concrete problems.',solutionsLead:'This makes MBDevs easier to buy: the client starts from an outcome, not from a list of technologies.',
    sol1t:'Launch to Cloud',sol1d:'We take an application or API and leave it deployed with domain, TLS, pipeline, infrastructure, database, logs and monitoring.',
    sol2t:'DevOps Modernization',sol2d:'We replace manual deployments and fragile environments with IaC, containers, pipelines, GitOps, policies and reproducible practices.',
    sol3t:'AI Ops Accelerator',sol3d:'We connect AI to observability, repositories and runbooks to create an operational copilot around measurable use cases.',
    sol4t:'API & Integration Platform',sol4d:'API design and deployment with gateway, identity, documentation, events, rate limits and an automated lifecycle.',
    sol5t:'Cloud Cost & Reliability Review',sol5d:'Architecture, spend, resilience, observability and risk review with a prioritized improvement backlog.',
    sol6t:'Private AI & RAG',sol6d:'Assistants and agents over private data with semantic search, permissions, evaluation, sources and traceability.',
    methodTitle:'Less PowerPoint. More production.',methodLead:'Every project ends with something operational: code, infrastructure, pipelines, dashboards, documentation and knowledge transfer.',
    m1t:'Discover',m1d:'Goal, current architecture, constraints, security, cost and success metrics.',m2t:'Design',m2d:'Simple architecture, explicit decisions, interfaces, cloud, data and operating model.',m3t:'Build & Automate',m3d:'Code, IaC, pipelines, tests, security checks and reproducible environments.',m4t:'Deploy & Observe',m4d:'Controlled release, metrics, logs, traces, alerts, backups and SLOs.',m5t:'Operate & Improve',m5d:'Automation, operational AI, performance, cost, hardening and continuous evolution.',
    ctaTitle:'Have code? We take it to production.<br>Already in production? We make it smarter.',ctaBody:'APIs, web, cloud, Kubernetes/OpenShift, serverless, data, pipelines and AI agents applied to real operations.',ctaPrimary:'Tell us about your project →'
  }
};

const original = {};
document.querySelectorAll('[data-i18n]').forEach(el => original[el.dataset.i18n] = el.innerHTML);
let lang = 'es';
const toggle = document.getElementById('langToggle');
toggle.addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  document.documentElement.lang = lang;
  toggle.textContent = lang === 'es' ? 'EN' : 'ES';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = lang === 'en' ? (translations.en[key] || original[key]) : original[key];
  });
});
