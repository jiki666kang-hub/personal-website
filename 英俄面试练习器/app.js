const questions = [
  {
    mode: "en",
    type: "English self-introduction",
    q: "Please introduce yourself in 30 to 45 seconds.",
      a: "Hello, my name is Kangkang Ji. I have a bachelor's degree in Surveying and Mapping Engineering, and a master's degree in Geodesy and Surveying Engineering from Ural Federal University. I have project experience in engineering surveying, 1:500 topographic mapping, and 3D reconstruction. I can use total stations, RTK, AutoCAD, CASS, and basic Python. I studied and lived in Russia for three years. I am willing to travel and work overseas. Thank you."
  },
  {
    mode: "ru",
    type: "Русское представление",
    q: "Расскажите о себе за 30-45 секунд.",
    a: "Здравствуйте! Меня зовут Цзи Канкан. У меня есть степень бакалавра по специальности геодезия и картография, и степень магистра по направлению геодезия. Я учился в Уральском федеральном университете. У меня есть опыт инженерно-геодезических работ и создания топографического плана масштаба 1:500. Я работал с тахеометром, RTK, AutoCAD и CASS. Я готов к командировкам и работе за рубежом. Спасибо!"
  },
  {
    mode: "cn",
    type: "中文项目讲解",
    q: "请用 90 秒讲清楚莫洛佐夫公园 1:500 地形图项目。",
    a: "按背景、任务、行动、结果、复盘讲。背景：项目对象是叶卡捷琳堡莫洛佐夫公园，目标是形成 1:500 地形图。任务：你独立完成外业采集、数据整理、CASS/CAD 成图和俄文报告。行动：用全站仪采集地物、地貌和边界，检查原始数据，再导入 CASS 和 CAD 处理。结果：完整走通从外业到内业成果表达的流程。复盘：如果重做，会加强控制点、检查点和质量检查表。"
  },
  {
    mode: "cn",
    type: "中文项目讲解",
    q: "请用 90 秒讲清楚 3DGS 建筑立面重建项目。",
    a: "先说明你不是开发 3DGS 算法，而是完整复现和应用流程。采集阶段用手机沿建筑立面拍摄视频，保持重叠。处理阶段用 Python 和 OpenCV 抽帧，通过 COLMAP 恢复相机位姿并生成约 109,180 个稀疏点。建模阶段用 Brush 训练和清理 3DGS 模型，最后用 SuperSplat 实时展示。复盘重点是影像质量、位姿恢复和模型清理会影响最终效果。"
  },
  {
    mode: "cn",
    type: "技术追问",
    q: "没有天津地铁实习证明，面试官问起时怎么回答？",
    a: "如实说明当时未及时开具正式实习证明，但你保留了部分 CAD 图纸、测量记录或相关项目材料。可以提供经过脱敏处理的成果片段，说明自己实际参与过放样、导线测量、点位校正和内业整理。不要夸大为独立负责整条线路，也不要公开上传完整工程图纸。"
  },
  {
    mode: "en",
    type: "English Q&A",
    q: "Can you work in an overseas team?",
      a: "Yes. I studied and lived in Russia for three years. I can adapt to a different culture, communicate with colleagues, and accept long-term travel or overseas assignments. I hope to combine surveying technology, language communication, and field project support."
  },
  {
    mode: "ru",
    type: "Русский вопрос",
    q: "Вы готовы к командировкам?",
    a: "Да, я готов к длительным командировкам и работе за рубежом. Я понимаю, что проектная работа требует адаптации, ответственности и постоянного обучения."
  },
  {
    mode: "cn",
    type: "技术追问",
    q: "COLMAP 在 3DGS 项目中起什么作用？",
    a: "COLMAP 的核心作用是通过 SfM 完成特征匹配、相机位姿恢复和稀疏点云生成，为后续 3DGS 训练提供初始化基础。"
  }
];

let mode = "mixed";
let current = questions[0];
let seconds = 0;
let timer = null;

const $ = id => document.getElementById(id);

function toast(text) {
  const node = $("toast");
  node.textContent = text;
  node.classList.add("show");
  setTimeout(() => node.classList.remove("show"), 1500);
}

function pickQuestion() {
  const pool = mode === "mixed" ? questions : questions.filter(item => item.mode === mode);
  current = pool[Math.floor(Math.random() * pool.length)];
  $("questionType").textContent = current.type;
  $("question").textContent = current.q;
  $("answer").textContent = current.a;
  $("answer").classList.remove("show");
}

function copy(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => toast("已复制"));
    return;
  }
  const area = document.createElement("textarea");
  area.value = text;
  area.style.position = "fixed";
  area.style.left = "-9999px";
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  area.remove();
  toast("已复制");
}

function renderTime() {
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  $("timer").textContent = `${min}:${sec}`;
}

function renderLog() {
  const log = JSON.parse(localStorage.getItem("interviewLog") || "[]");
  $("log").innerHTML = log.length
    ? log.map(item => `<div class="log-item"><strong>${item.time}</strong><p>${item.question}</p><p>用时：${item.duration}</p></div>`).join("")
    : "<p>还没有记录。先练一题就行。</p>";
}

document.querySelectorAll(".mode").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".mode").forEach(item => item.classList.remove("active"));
    btn.classList.add("active");
    mode = btn.dataset.mode;
    pickQuestion();
  });
});

$("nextQuestion").addEventListener("click", pickQuestion);
$("showAnswer").addEventListener("click", () => $("answer").classList.toggle("show"));
$("copyAnswer").addEventListener("click", () => copy(current.a));

document.querySelectorAll(".phrase").forEach(btn => {
  btn.addEventListener("click", () => copy(btn.dataset.text));
});

$("start").addEventListener("click", () => {
  if (timer) return;
  timer = setInterval(() => {
    seconds += 1;
    renderTime();
  }, 1000);
});

$("stop").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

$("reset").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  renderTime();
});

$("saveLog").addEventListener("click", () => {
  const log = JSON.parse(localStorage.getItem("interviewLog") || "[]");
  const duration = $("timer").textContent;
  log.unshift({
    time: new Date().toLocaleString(),
    question: current.q,
    duration
  });
  localStorage.setItem("interviewLog", JSON.stringify(log.slice(0, 20)));
  renderLog();
  toast("已记录");
});

$("clearLog").addEventListener("click", () => {
  localStorage.removeItem("interviewLog");
  renderLog();
});

pickQuestion();
renderTime();
renderLog();
