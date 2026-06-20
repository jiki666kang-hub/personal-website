(() => {
  const durationMigrationKey = "interviewDurationThreeYearsMigrationV1";
  const durationReplacements = [
    [/接近两年/g, "三年"],
    [/将近两年/g, "三年"],
    [/近两年/g, "三年"],
    [/почти два года/gi, "три года"],
    [/около двух лет/gi, "три года"],
    [/nearly two years/gi, "three years"],
    [/almost two years/gi, "three years"],
  ];

  const migrateDurationValue = (value) => {
    if (typeof value === "string") {
      return durationReplacements.reduce(
        (result, [pattern, replacement]) => result.replace(pattern, replacement),
        value,
      );
    }
    if (Array.isArray(value)) return value.map(migrateDurationValue);
    if (value && typeof value === "object") {
      return Object.fromEntries(
        Object.entries(value).map(([key, item]) => [key, migrateDurationValue(item)]),
      );
    }
    return value;
  };

  const migrateSavedDurations = () => {
    if (localStorage.getItem(durationMigrationKey)) return;
    Object.keys(localStorage).forEach((key) => {
      if (!/interview|denair|jieshun/i.test(key)) return;
      const raw = localStorage.getItem(key);
      if (!raw) return;
      try {
        localStorage.setItem(key, JSON.stringify(migrateDurationValue(JSON.parse(raw))));
      } catch {
        localStorage.setItem(key, migrateDurationValue(raw));
      }
    });
    localStorage.setItem(durationMigrationKey, "done");
  };

  migrateSavedDurations();
  const page = document.body;
  const pageId = page.dataset.interviewStorageKey;
  if (!pageId) return;

  const storageKey = `interview-card:${pageId}`;
  const legacyAnswerKey = page.dataset.legacyAnswerKey || "";
  const statusNodes = [...document.querySelectorAll("[data-editor-status]")];
  const answerFields = [...document.querySelectorAll("[data-answer-key]")];
  const editableSelector = [
    "aside .brand h1",
    "aside .brand p",
    ".hero .eyebrow",
    ".hero h2",
    ".hero > div:first-child > p:not(.eyebrow)",
    ".panel:not(.editor-toolbar) > h3",
    ".panel:not(.editor-toolbar) .script",
    ".panel:not(.editor-toolbar) .muted",
    ".panel:not(.editor-toolbar) > ul",
    ".panel:not(.editor-toolbar) > ol",
    ".edit-head h3",
    ".edit-head .muted",
    ".tag",
    ".answer-card h4"
  ].join(",");
  const editableBlocks = [...document.querySelectorAll(editableSelector)];

  editableBlocks.forEach((node, index) => {
    node.dataset.cardEditable = "true";
    if (!node.dataset.editKey) node.dataset.editKey = `block-${index + 1}`;
  });

  const defaultContent = Object.fromEntries(
    editableBlocks.map(node => [node.dataset.editKey, node.innerHTML])
  );
  const defaultAnswers = Object.fromEntries(
    answerFields.map(field => [field.dataset.answerKey, field.value])
  );

  function readJson(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || null;
    } catch {
      return null;
    }
  }

  function announce(message) {
    statusNodes.forEach(node => { node.textContent = message; });
  }

  function readState() {
    const saved = readJson(storageKey);
    if (saved) return saved;

    const legacyAnswers = legacyAnswerKey ? readJson(legacyAnswerKey) : null;
    return legacyAnswers ? { content: {}, answers: legacyAnswers } : { content: {}, answers: {} };
  }

  function loadState() {
    const saved = readState();
    editableBlocks.forEach(node => {
      const value = saved.content && saved.content[node.dataset.editKey];
      if (typeof value === "string") node.innerHTML = value;
    });
    answerFields.forEach(field => {
      const value = saved.answers && saved.answers[field.dataset.answerKey];
      if (typeof value === "string") field.value = value;
    });
  }

  function setEditing(enabled) {
    page.classList.toggle("card-editing", enabled);
    editableBlocks.forEach(node => {
      node.contentEditable = enabled ? "true" : "false";
    });
    document.querySelectorAll("[data-edit-card]").forEach(button => {
      button.textContent = enabled ? "结束编辑" : "编辑全页";
      button.setAttribute("aria-pressed", String(enabled));
    });
    announce(enabled ? "编辑模式已开启。正文、标题和清单都可以修改。" : "编辑模式已关闭，尚未保存的改动仍保留在页面上。");
  }

  function saveState() {
    const content = Object.fromEntries(
      editableBlocks.map(node => [node.dataset.editKey, node.innerHTML])
    );
    const answers = Object.fromEntries(
      answerFields.map(field => [field.dataset.answerKey, field.value])
    );
    localStorage.setItem(storageKey, JSON.stringify({ content, answers, savedAt: new Date().toISOString() }));
    if (legacyAnswerKey) localStorage.setItem(legacyAnswerKey, JSON.stringify(answers));
    announce("已保存到当前浏览器。刷新或下次打开仍会保留。");
  }

  function resetState() {
    if (!window.confirm("确定恢复这张面试卡的默认内容吗？当前浏览器里保存的修改会被清除。")) return;
    editableBlocks.forEach(node => {
      node.innerHTML = defaultContent[node.dataset.editKey] || "";
    });
    answerFields.forEach(field => {
      field.value = defaultAnswers[field.dataset.answerKey] || "";
    });
    localStorage.removeItem(storageKey);
    if (legacyAnswerKey) localStorage.removeItem(legacyAnswerKey);
    setEditing(false);
    announce("已恢复这张面试卡的默认内容。");
  }

  function copyAnswer(key) {
    const field = document.querySelector(`[data-answer-key="${key}"]`);
    if (!field) return;
    const copied = () => announce("已复制这段俄语回答。");
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(field.value).then(copied);
      return;
    }
    field.focus();
    field.select();
    document.execCommand("copy");
    copied();
  }

  document.querySelectorAll("[data-edit-card]").forEach(button => {
    button.addEventListener("click", () => setEditing(!page.classList.contains("card-editing")));
  });
  document.querySelectorAll("[data-save-card], [data-save-answers]").forEach(button => {
    button.addEventListener("click", saveState);
  });
  document.querySelectorAll("[data-reset-card], [data-reset-answers]").forEach(button => {
    button.addEventListener("click", resetState);
  });
  document.querySelectorAll("[data-copy-answer]").forEach(button => {
    button.addEventListener("click", () => copyAnswer(button.dataset.copyAnswer));
  });

  loadState();
  setEditing(false);
  announce("修改只保存在当前浏览器，不会改变公开网站的原始内容。");
})();
