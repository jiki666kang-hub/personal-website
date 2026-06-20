const store = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }
};

const data = {
  todayTasks: [
    {
      title: "打开求职规划手册",
      detail: "只看自我介绍、项目讲解、七天顺序，不要求一次读完。"
    },
    {
      title: "选一个主攻方向",
      detail: "优先顺序：海外/GNSS 技术支持，其次工程测量，再看俄语客户服务。"
    },
    {
      title: "整理一个材料包",
      detail: "先做最小版：1 份简历 PDF + 2 页作品集 + 30 秒英俄介绍。"
    },
    {
      title: "准备德耐尔俄语外贸面试",
      detail: "确认面试形式，背 60 秒中文介绍，练俄语开场，复盘空压机、真空泵和客户来源问题。"
    }
  ],
  directions: [
    {
      title: "GNSS/国际技术支持",
      why: "测绘专业、俄罗斯经历、俄语 B2、英语基础和外派意愿能组合成差异化优势。",
      evidence: ["RTK/全站仪", "俄语 B2", "海外适应", "技术沟通"],
      next: "投递关键词：GNSS 应用工程师、国际技术支持、测绘设备技术支持、海外项目工程师。",
      resume: "大地测量外派俄罗斯方向简历-修订版",
      package: "外派俄罗斯简历 + 1:500 地形图 2 页 + 3DGS 2 页 + 英俄自我介绍",
      links: [
        ["BOSS直聘：GNSS工程师", "https://www.zhipin.com/zhaopin/1786032dc6594b6d3n1-2tm4/", "适合看 GNSS/RTK/技术支持岗位池"],
        ["猎聘：千寻位置招聘", "https://m.liepin.com/company/8651413/", "有 GNSS、技术商务、测试实习等方向"],
        ["天硕导航招聘", "https://www.tersus-gnss.cn/careers", "GNSS 公司官网，关注海外销售/技术支持"],
        ["和芯星通招聘", "https://unicorecomm.com/about/join", "北斗/GNSS 芯片公司，关注 FAE/技术支持"]
      ]
    },
    {
      title: "工程测量/大地测量",
      why: "天津地铁、1:500 地形图、CAD/CASS、测量数据整理可以支撑首份专业岗位。",
      evidence: ["施工测量", "1:500 成图", "CAD/CASS", "数据复核"],
      next: "投递关键词：测量员、工程测量、测绘技术员、地理信息项目助理。",
      resume: "大地测量方向简历-修订版",
      package: "大地测量简历 + 天津地铁脱敏证据 2 页 + 1:500 地形图 2 页",
      links: [
        ["BOSS直聘：工程测量技术人员", "https://www.zhipin.com/zhaopin/b155f933177d510f0HVy3d2-/", "看 RTK、全站仪、CAD/CASS 要求"],
        ["BOSS直聘：测绘工程", "https://www.zhipin.com/zhaopin/209fe1d4b029ba591Xd73NS_/", "偏测绘工程与项目岗位"],
        ["猎聘：测绘工程师", "https://www.liepin.com/s/fbae3339955544821353f9f44a9c404f/", "适合横向看薪资和经验门槛"],
        ["猎聘：北京测绘/测量", "https://www.liepin.com/city-bj/career/cehui/", "城市岗位池，可换城市继续搜"]
      ]
    },
    {
      title: "俄语销售/客户成功",
      why: "30 余名留学生落地服务、展会翻译、俄罗斯流程经验适合转客户服务和外贸。",
      evidence: ["俄语沟通", "客户接待", "流程清单", "现场协调"],
      next: "投递关键词：俄语销售、海外客户成功、外贸助理、俄罗斯市场运营。",
      resume: "俄语销售方向简历",
      package: "俄语销售简历 + 留学生落地服务经历 + 展会翻译经历 + HR 沟通模板",
      links: [
        ["BOSS直聘：俄语招聘", "https://www.zhipin.com/zhaopin/91bca6dab4f8f44e03N73dS4/", "看俄语翻译、专员、客户沟通类岗位"],
        ["BOSS直聘：海外俄语商务", "https://www.zhipin.com/zhaopin/5cb626df5aeef8341nN70967Eg~~/", "外贸/俄语国家市场方向"],
        ["BOSS直聘：俄语客服", "https://www.zhipin.com/zhaopin/2bfaaa8797d8f8ff0n1_3NS8/", "低门槛现金流备选"],
        ["国聘：俄语商务岗示例", "https://www.iguopin.com/job/detail?id=61075266495054382", "国企平台岗位示例，注意查看时效"]
      ]
    },
    {
      title: "航空航天轨道仿真",
      why: "硕士课题能证明数值分析、GNSS 背景和科研耐力，但不宜作为当前唯一主线。",
      evidence: ["轨道演化", "Python", "数据分析", "GNSS 背景"],
      next: "适合作为补充方向，遇到空间目标、卫星数据、仿真助理岗位再投。",
      resume: "航空航天轨道仿真方向简历",
      package: "轨道仿真简历 + 硕士论文 45 秒讲法 + Python/数据处理说明",
      links: [
        ["智联：中国卫星集团相关招聘", "https://www.zhaopin.com/zhaopin/55389db5909c4fb386c5a6f34a68490f/", "看卫星、空间、数据相关岗位"],
        ["BOSS直聘：GNSS算法岗位池", "https://www.zhipin.com/zhaopin/e19f2d973927e8e41nd60925EQ~~/", "偏算法，注意经验门槛"],
        ["千寻位置校招/实习示例", "https://hr.qxwz.com/intern/17e4dcee-8066-4e6f-9e77-8f350de6b51f", "参考岗位描述，不一定仍在招"],
        ["国聘首页", "https://www.iguopin.com/", "搜索航天、卫星、测绘、俄语"]
      ]
    },
    {
      title: "羽毛球教学",
      why: "有少儿助教、陪练喂球、前台运营和比赛经历，可作为低压力现金流备选。",
      evidence: ["少儿助教", "混双二等奖", "课堂管理", "陪练"],
      next: "适合短期过渡，不要挤占测绘/海外岗位的黄金准备时间。",
      resume: "羽毛球教学方向简历",
      package: "羽毛球教学简历 + 助教经历 + 比赛经历 + 可授课时间",
      links: [
        ["BOSS直聘：羽毛球教练", "https://www.zhipin.com/web/geek/job?query=%E7%BE%BD%E6%AF%9B%E7%90%83%E6%95%99%E7%BB%83", "搜索少儿教练/助教/陪练"],
        ["BOSS直聘：体育助教", "https://www.zhipin.com/web/geek/job?query=%E4%BD%93%E8%82%B2%E5%8A%A9%E6%95%99", "可看低压力过渡岗位"],
        ["智联招聘：首页搜索", "https://www.zhaopin.com/", "搜索羽毛球助教、少儿体育"],
        ["国聘首页", "https://www.iguopin.com/", "搜索体育教师、助教、运营"]
      ]
    }
  ],
  materials: [
    ["一页中文简历", "国内测绘版和海外项目版各保留 PDF。"],
    ["项目作品集 1:500 地形图", "2 页即可：项目背景、流程、脱敏成果截图、质量复盘。"],
    ["3DGS 项目作品集", "2 页即可：采集、抽帧、COLMAP、Brush、SuperSplat、109,180 点。"],
    ["天津地铁脱敏证据", "只展示局部图纸、流程或图层，去掉单位、坐标、编号和签字。"],
    ["英俄自我介绍", "准备 20 秒应急版和 45 秒标准版。"],
    ["证书扫描件", "俄语 B2、成绩单、毕业/学位证书，未到手先标注申请中。"],
    ["面试追问题库", "放样、导线、CASS/CAD、COLMAP、没有实习证明这些先练。"]
  ],
  cert: [
    ["正式学历学位证书", "拿到原件后彩色扫描，PDF 格式。"],
    ["完整官方成绩单", "周四去系办取，扫描留存。"],
    ["护照个人信息页", "同时保存学习签证页、居留卡或电子签证。"],
    ["出入境记录", "通过移民局 12367 获取授权或下载记录。"],
    ["证件照", "近期标准证件照，JPG 格式。"],
    ["俄语授权声明", "按官方模板填写，与证书姓名拼写一致并亲笔签名。"],
    ["补充材料预案", "学习经历、学校核查联系方式、补材料通知截图。"]
  ],
  cnIntro:
    "面试官您好，我叫汲康康，本科就读于华北水利水电大学测绘工程专业，硕士就读于俄罗斯乌拉尔联邦大学大地测量学与测量工程专业，目前已经完成硕士论文答辩。我的求职方向是工程测量、测绘技术以及海外项目技术支持。我参与过天津地铁 2 号线施工测量，也独立完成过莫洛佐夫公园 1:500 地形图，硕士阶段做过建筑立面 3DGS 三维重建。我具备俄语 B2 水平，英语基础较好，能够接受国内外长期出差和项目驻场。我的优势是测绘专业基础、海外适应能力和跨语言沟通能够结合起来，希望在项目实践中尽快成长为可以独立负责现场和技术支持工作的工程师。谢谢。",
  enIntro:
        "Hello, my name is Kangkang Ji. I have a bachelor's degree in Surveying and Mapping Engineering, and a master's degree in Geodesy and Surveying Engineering from Ural Federal University. I have project experience in engineering surveying, 1:500 topographic mapping, and 3D reconstruction. I can use total stations, RTK, AutoCAD, CASS, and basic Python. I studied and lived in Russia for three years. I can communicate in Russian in daily work, and I also have a good foundation in English. I am willing to travel and work overseas. I hope to grow in surveying technology, GNSS applications, or international technical support. Thank you.",
  phrases: [
    ["请说慢一点", "Можно немного медленнее, пожалуйста?"],
    ["请再说一遍", "Повторите вопрос, пожалуйста."],
    ["确认理解", "Если я правильно понял, вы спрашиваете о..."],
    ["争取思考时间", "Дайте мне, пожалуйста, несколько секунд подумать."],
    ["技术问题换语言", "Можно я отвечу на этот технический вопрос по-английски или по-китайски?"],
    ["长期出差", "Да, я готов к длительным командировкам и работе за рубежом."]
  ],
  focus: [
    ["第一块：看求职手册", "只读目录和“接下来七天顺序”，不要陷入全文精读。"],
    ["第二块：做作品集清单", "列出 1:500、3DGS、天津地铁各需要哪 2 页证据。"],
    ["第三块：投 1 个岗位", "只投一个最匹配岗位，记录公司、岗位和下一步。"]
  ]
};

const calendarEvents = {
  "2026-06-17": {
    title: "求职工具启动日",
    label: "求职行动台",
    items: [
      "打开求职行动台，新增 1 个目标岗位。",
      "用岗位匹配打分器判断岗位适配度。",
      "练 1 次英文或俄语自我介绍。"
    ]
  },
  "2026-06-18": {
    title: "去系办取毕业证和硕士成绩单",
    label: "取证",
    items: [
      "带护照、学生证或学校身份证明。",
      "确认毕业证、硕士成绩单是否可领取。",
      "检查姓名拼写、出生日期、专业名称、学习起止时间。",
      "拿到后拍照备份，回住处扫描成 PDF。",
      "如果还没准备好，问清楚具体可领取日期。",
      "俄语：Здравствуйте. Я пришёл получить диплом и официальную академическую справку.",
      "俄语：Подскажите, пожалуйста, когда можно будет получить документы?"
    ]
  },
  "2026-06-19": {
    title: "扫描与命名材料",
    label: "扫描",
    items: [
      "扫描毕业证、成绩单、护照信息页和签证页。",
      "按统一文件名保存，避免后面提交时找不到。",
      "把未取得材料标注为“申请中”。"
    ]
  },
  "2026-06-20": {
    title: "投递材料包复查",
    label: "投递",
    items: [
      "复查外派俄罗斯方向简历。",
      "整理 1:500 地形图 2 页作品集。",
      "投递 1 到 3 个 GNSS/海外技术支持岗位。"
    ]
  },
  "2026-06-21": {
    title: "求职小复盘",
    label: "复盘",
    items: [
      "看保存中心：确认认证勾选、材料勾选和日历备注是否还在。",
      "复盘已投岗位：哪些匹配，哪些不匹配。",
      "补 1 个面试追问：放样、导线、CASS/CAD、COLMAP 任选一个。",
      "决定下周优先方向：GNSS/海外技术支持、工程测量、俄语客户服务。"
    ]
  },
  "2026-06-23": {
    title: "德耐尔俄语外贸销售工程师面试",
    label: "面试",
    items: [
      "中国时间 10:00；叶卡捷琳堡时间 07:00，提前 20 分钟检查设备和网络。",
      "打开德耐尔面试作战卡，复习“值得去但不是唯一主线”的判断。",
      "背熟 60 秒中文自我介绍，突出俄语 B2、俄罗斯经历、工程背景和客户沟通。",
      "练 2 遍俄语开场，语速放慢，重点说清楚俄罗斯/独联体客户沟通意愿。",
      "面试结束前必须问清：客户来源、产品培训、薪资结构、试用期目标、外派周期和补贴。",
      "不要提前承诺任何国家长期外派；先了解区域、周期、安全支持和考核方式。"
    ]
  }
};

const profileResources = [
  { group: "主推简历", title: "大地测量外派俄罗斯方向简历", href: "materials/viewer.html?id=survey-overseas-resume", desc: "主推 GNSS/国际技术支持/海外项目。" },
  { group: "主推简历", title: "大地测量方向简历", href: "materials/viewer.html?id=survey-resume", desc: "匹配工程测量、测绘技术员、地理信息项目助理。" },
  { group: "主推简历", title: "俄语销售方向简历", href: "materials/viewer.html?id=russian-sales-resume", desc: "匹配俄语销售、海外客户服务、外贸助理。" },
  { group: "面试与认证", title: "求职面试与留服认证行动手册", href: "materials/viewer.html?id=interview-cert-handbook", desc: "自我介绍、项目讲解、材料包、留服认证步骤。" },
  { group: "面试与认证", title: "英俄语面试自我介绍速记卡", href: "materials/viewer.html?id=en-ru-intro-card", desc: "20 秒应急版和 45 秒标准版。" },
  { group: "面试与认证", title: "周四取证与留服认证清单", href: "../求职行动包/08_周四取证与留服认证清单.md", desc: "去系办前后和认证提交前的检查项。" },
  { group: "工具与来源", title: "个人资料摘要", href: "../个人资料摘要.md", desc: "学历、语言、项目、方向和近期提醒的统一底稿。" },
  { group: "工具与来源", title: "求职行动包", href: "../求职行动包/00_先读我.md", desc: "睡醒后 90 分钟、岗位筛选、作品集模板、HR 模板。" },
  { group: "工具与来源", title: "招聘链接来源", href: "招聘链接来源.md", desc: "方向页招聘入口的来源和更新说明。" }
];

const views = {
  today: "今日行动",
  directions: "求职方向",
  materials: "材料包",
  interview: "面试速记",
  tracker: "投递记录",
  cert: "留服认证",
  calendar: "日历提醒",
  profile: "个人中心",
  storage: "保存中心"
};

let focusIndex = 0;
let timerId = null;
let seconds = 25 * 60;
let selectedCalendarDate = "2026-06-18";
let currentCalendarYear = 2026;
let currentCalendarMonth = 6;

const monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

function toast(text) {
  const node = document.getElementById("toast");
  node.textContent = text;
  node.classList.add("show");
  window.setTimeout(() => node.classList.remove("show"), 1800);
}

function getInitialView() {
  const hash = location.hash.replace("#", "");
  if (hash.startsWith("view=")) return hash.replace("view=", "");
  return hash || "today";
}

function setView(id, updateUrl = true) {
  if (!views[id]) id = "today";
  document.querySelectorAll(".nav-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === id);
  });
  document.querySelectorAll(".view").forEach(view => {
    view.classList.toggle("active", view.id === id);
  });
  document.getElementById("viewTitle").textContent = views[id];
  if (updateUrl && location.hash !== `#view=${id}`) {
    history.replaceState(null, "", `#view=${id}`);
  }
}

function markSaved(key) {
  const status = document.getElementById("certSaveStatus");
  if (!status || key !== "certDone") return;
  const saved = store.get("certDone", []);
  status.textContent = `已自动保存 ${saved.length}/${data.cert.length} 项到本机。刷新后仍会保留；也可以点“导出进度”备份。`;
}

function checkboxRow(item, key, index) {
  const checked = store.get(key, []);
  const isDone = checked.includes(index);
  const row = document.createElement("label");
  row.className = `check-item ${isDone ? "done" : ""}`;
  row.innerHTML = `
    <input type="checkbox" ${isDone ? "checked" : ""}>
    <span><strong>${item[0]}</strong><p>${item[1]}</p></span>
  `;
  row.querySelector("input").addEventListener("change", event => {
    const next = new Set(store.get(key, []));
    event.target.checked ? next.add(index) : next.delete(index);
    const ok = store.set(key, [...next]);
    row.classList.toggle("done", event.target.checked);
    ok ? markSaved(key) : toast("浏览器阻止了本机保存，请使用导出进度备份");
  });
  return row;
}

function renderToday() {
  const root = document.getElementById("todayTasks");
  root.innerHTML = "";
  const checked = store.get("todayDone", []);
  data.todayTasks.forEach((item, index) => {
    const isDone = checked.includes(index);
    const row = document.createElement("label");
    row.className = `task ${isDone ? "done" : ""}`;
    row.innerHTML = `
      <input type="checkbox" ${isDone ? "checked" : ""}>
      <span><strong>${item.title}</strong><p>${item.detail}</p></span>
    `;
    row.querySelector("input").addEventListener("change", event => {
      const next = new Set(store.get("todayDone", []));
      event.target.checked ? next.add(index) : next.delete(index);
      store.set("todayDone", [...next]);
      row.classList.toggle("done", event.target.checked);
    });
    root.appendChild(row);
  });
}

function renderDirections() {
  const root = document.getElementById("directionGrid");
  root.innerHTML = "";
  data.directions.forEach((item, index) => {
    const panel = document.createElement("button");
    panel.className = "panel direction direction-card";
    panel.type = "button";
    panel.dataset.index = index;
    panel.innerHTML = `
      <div class="rank">${index + 1}</div>
      <h3>${item.title}</h3>
      <p>${item.why}</p>
      <div class="tags">${item.evidence.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
      <p><strong>下一步：</strong>${item.next}</p>
    `;
    panel.addEventListener("click", () => openDirection(index));
    root.appendChild(panel);
  });
}

function renderChecks() {
  const materialRoot = document.getElementById("materialList");
  materialRoot.innerHTML = "";
  data.materials.forEach((item, index) => materialRoot.appendChild(checkboxRow(item, "materialDone", index)));

  const certRoot = document.getElementById("certList");
  certRoot.innerHTML = "";
  data.cert.forEach((item, index) => certRoot.appendChild(checkboxRow(item, "certDone", index)));
  markSaved("certDone");
}

function parseDateParts(date) {
  const [year, month, day] = date.split("-").map(Number);
  return { year, month, day };
}

function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function mondayFirstOffset(year, month) {
  const jsDay = new Date(year, month - 1, 1).getDay();
  return (jsDay + 6) % 7;
}

function renderYearStrip() {
  const root = document.getElementById("yearStrip");
  root.innerHTML = monthNames.map((name, index) => {
    const month = index + 1;
    return `<button class="${month === currentCalendarMonth ? "active" : ""}" data-month="${month}">${name}</button>`;
  }).join("");
  root.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      currentCalendarMonth = Number(btn.dataset.month);
      const date = `${currentCalendarYear}-${String(currentCalendarMonth).padStart(2, "0")}-01`;
      renderCalendar(date);
    });
  });
}

function renderCalendar(selectedDate = "2026-06-18") {
  const parts = parseDateParts(selectedDate);
  currentCalendarYear = parts.year || 2026;
  currentCalendarMonth = parts.month || 6;
  const root = document.getElementById("calendarGrid");
  root.innerHTML = "";
  document.getElementById("calendarTitle").textContent = `${currentCalendarYear} 年 ${currentCalendarMonth} 月`;
  renderYearStrip();
  ["一", "二", "三", "四", "五", "六", "日"].forEach(day => {
    const node = document.createElement("div");
    node.className = "calendar-weekday";
    node.textContent = day;
    root.appendChild(node);
  });
  const firstDayOffset = mondayFirstOffset(currentCalendarYear, currentCalendarMonth);
  for (let i = 0; i < firstDayOffset; i += 1) {
    const empty = document.createElement("div");
    empty.className = "calendar-day is-empty";
    root.appendChild(empty);
  }
  const totalDays = daysInMonth(currentCalendarYear, currentCalendarMonth);
  for (let day = 1; day <= totalDays; day += 1) {
    const date = `${currentCalendarYear}-${String(currentCalendarMonth).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const event = calendarEvents[date];
    const btn = document.createElement("button");
    btn.className = `calendar-day ${event ? "has-event" : ""} ${date === selectedDate ? "active" : ""}`;
    btn.type = "button";
    btn.dataset.date = date;
    btn.innerHTML = `
      <span class="day-number">${day}</span>
      <span class="day-note">${event ? event.label : ""}</span>
    `;
    btn.addEventListener("click", () => showEvent(date));
    root.appendChild(btn);
  }
  showEvent(selectedDate);
}

function moveCalendarMonth(delta) {
  currentCalendarMonth += delta;
  if (currentCalendarMonth < 1) {
    currentCalendarMonth = 12;
    currentCalendarYear -= 1;
  }
  if (currentCalendarMonth > 12) {
    currentCalendarMonth = 1;
    currentCalendarYear += 1;
  }
  const clampedYear = Math.min(Math.max(currentCalendarYear, 2026), 2026);
  currentCalendarYear = clampedYear;
  const date = `${currentCalendarYear}-${String(currentCalendarMonth).padStart(2, "0")}-01`;
  renderCalendar(date);
}

function showEvent(date) {
  selectedCalendarDate = date;
  document.querySelectorAll(".calendar-day").forEach(day => {
    day.classList.toggle("active", day.dataset.date === date);
  });
  const event = calendarEvents[date] || {
    title: "暂无具体安排",
    items: ["可以用这一天继续投递、复盘或整理材料。"]
  };
  document.getElementById("eventTitle").textContent = event.title;
  document.getElementById("eventDate").textContent = date;
  document.getElementById("eventBody").innerHTML = `<ul>${event.items.map(item => `<li>${item}</li>`).join("")}</ul>`;
  const notes = store.get("calendarNotes", {});
  document.getElementById("eventNote").value = notes[date] || "";
}

function saveEventNote() {
  const notes = store.get("calendarNotes", {});
  notes[selectedCalendarDate] = document.getElementById("eventNote").value.trim();
  store.set("calendarNotes", notes);
  toast("日历备注已保存");
}

function renderProfileResources() {
  const root = document.getElementById("profileResources");
  const groups = [...new Set(profileResources.map(item => item.group))];
  root.innerHTML = groups.map(group => `
    <div class="resource-group">
      <h4>${group}</h4>
      ${profileResources.filter(item => item.group === group).map(item => `
        <a class="resource-link" href="${item.href}">
          <strong>${item.title}</strong>
          <span>${item.desc}</span>
        </a>
      `).join("")}
    </div>
  `).join("");
}

function getSaveSnapshot() {
  const notes = store.get("calendarNotes", {});
  return {
    todayDone: store.get("todayDone", []),
    materialDone: store.get("materialDone", []),
    certDone: store.get("certDone", []),
    calendarNotes: notes,
    applications: store.get("applications", [])
  };
}

function renderStorageCenter() {
  const root = document.getElementById("storageGrid");
  if (!root) return;
  const snapshot = getSaveSnapshot();
  const noteCount = Object.values(snapshot.calendarNotes).filter(Boolean).length;
  const cards = [
    [`${snapshot.todayDone.length}/${data.todayTasks.length}`, "今日任务勾选"],
    [`${snapshot.materialDone.length}/${data.materials.length}`, "材料包勾选"],
    [`${snapshot.certDone.length}/${data.cert.length}`, "认证材料勾选"],
    [`${noteCount}`, "日历个人备注"],
    [`${snapshot.applications.length}`, "投递记录"],
    [localStorage.length, "浏览器保存项"]
  ];
  root.innerHTML = cards.map(([value, label]) => `
    <div class="storage-card">
      <strong>${value}</strong>
      <span>${label}</span>
    </div>
  `).join("");
}

function openDirection(index) {
  const item = data.directions[index];
  const keywords = item.next.replace("投递关键词：", "").replace("。", "");
  const firstKeyword = keywords.split("、")[0];
  const encoded = encodeURIComponent(firstKeyword);
  document.getElementById("directionModalTitle").textContent = item.title;
  document.getElementById("directionModalBody").innerHTML = `
    <p class="muted-copy">${item.why}</p>
    <div class="button-row modal-actions">
      <button class="primary-btn" data-copy-direction-keywords="${index}">复制搜索关键词</button>
      <a class="primary-btn ghost-btn modal-action-link" href="../岗位匹配打分器/index.html">岗位匹配打分器</a>
      <a class="primary-btn ghost-btn modal-action-link" href="招聘链接来源.md">查看链接来源</a>
    </div>
    <div class="modal-section">
      <h4>推荐简历</h4>
      <p class="muted-copy">${item.resume}</p>
    </div>
    <div class="modal-section">
      <h4>材料包</h4>
      <p class="muted-copy">${item.package}</p>
    </div>
    <div class="modal-section">
      <h4>招聘入口</h4>
      <div class="direction-links">
        ${item.links.map(([title, href, desc]) => `
          <a class="direction-link" href="${href}" target="_blank" rel="noreferrer">
            <strong>${title}</strong>
            <span>${desc}</span>
          </a>
        `).join("")}
      </div>
    </div>
    <div class="modal-section">
      <h4>按关键词快速搜索：${firstKeyword}</h4>
      <div class="direction-links">
        <a class="direction-link" href="https://www.zhipin.com/web/geek/job?query=${encoded}" target="_blank" rel="noreferrer">
          <strong>BOSS直聘搜索</strong>
          <span>适合快速看岗位数量、薪资和要求。</span>
        </a>
        <a class="direction-link" href="https://www.liepin.com/zhaopin/?key=${encoded}" target="_blank" rel="noreferrer">
          <strong>猎聘搜索</strong>
          <span>适合看更完整的岗位描述和中高端岗位。</span>
        </a>
        <a class="direction-link" href="https://www.zhaopin.com/sou/?kw=${encoded}" target="_blank" rel="noreferrer">
          <strong>智联搜索</strong>
          <span>适合补充传统招聘网站岗位。</span>
        </a>
        <a class="direction-link" href="https://www.iguopin.com/search/jobs?keyword=${encoded}" target="_blank" rel="noreferrer">
          <strong>国聘搜索</strong>
          <span>适合看国企、央企和事业单位相关机会。</span>
        </a>
      </div>
    </div>
    <div class="modal-section">
      <h4>搜索关键词</h4>
      <div class="tags">${keywords.split("、").map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
    </div>
  `;
  const modal = document.getElementById("directionModal");
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeDirection() {
  const modal = document.getElementById("directionModal");
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

function renderInterview() {
  document.getElementById("cnIntro").textContent = data.cnIntro;
  document.getElementById("enIntro").textContent = data.enIntro;
  const root = document.getElementById("phraseGrid");
  root.innerHTML = "";
  data.phrases.forEach(([title, text]) => {
    const node = document.createElement("button");
    node.className = "phrase";
    node.innerHTML = `<strong>${title}</strong><span>${text}</span>`;
    node.addEventListener("click", () => copyText(text));
    root.appendChild(node);
  });
}

function renderApplications() {
  const root = document.getElementById("applicationList");
  const apps = store.get("applications", []);
  root.innerHTML = "";
  if (!apps.length) {
    root.innerHTML = '<div class="application-item"><p>还没有记录。醒来后先加 1 个目标岗位就够。</p></div>';
    return;
  }
  apps.forEach(app => {
    const node = document.createElement("div");
    node.className = "application-item";
    node.innerHTML = `
      <div>
        <strong>${app.company || "未填写公司"} · ${app.role || "未填写岗位"}</strong>
        <p>${app.direction} | 下一步：${app.next || "待补充"}</p>
      </div>
      <span class="status">${app.status}</span>
    `;
    root.appendChild(node);
  });
}

function exportApplications() {
  const apps = store.get("applications", []);
  if (!apps.length) {
    toast("还没有投递记录");
    return;
  }
  const headers = ["创建时间", "公司", "岗位", "方向", "状态", "下一步"];
  const rows = apps.map(app => [app.createdAt, app.company, app.role, app.direction, app.status, app.next]);
  const csv = [headers, ...rows]
    .map(row => row.map(cell => `"${String(cell || "").replace(/"/g, '""')}"`).join(","))
    .join("\n");
  const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "康康投递记录.csv";
  link.click();
  URL.revokeObjectURL(link.href);
}

function exportProgress() {
  const progress = { exportedAt: new Date().toISOString(), ...getSaveSnapshot() };
  const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "康康求职行动台进度备份.json";
  link.click();
  URL.revokeObjectURL(link.href);
  toast("已导出进度备份");
}

function importProgressFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const progress = JSON.parse(reader.result);
      ["todayDone", "materialDone", "certDone", "applications"].forEach(key => {
        if (Array.isArray(progress[key])) store.set(key, progress[key]);
      });
      if (progress.calendarNotes && typeof progress.calendarNotes === "object") {
        store.set("calendarNotes", progress.calendarNotes);
      }
      renderToday();
      renderChecks();
      renderCalendar(selectedCalendarDate);
      renderApplications();
      renderStorageCenter();
      toast("已导入进度");
    } catch {
      toast("导入失败，请选择正确的 JSON 备份");
    }
  };
  reader.readAsText(file, "utf-8");
}

function checkStorageHealth() {
  const key = "storageHealthCheck";
  const value = { checkedAt: new Date().toISOString(), ok: true };
  const ok = store.set(key, value);
  const readBack = store.get(key, null);
  if (ok && readBack && readBack.ok) {
    toast("本机保存可用，刷新后应会保留");
  } else {
    toast("保存自检失败，请优先使用导出备份");
  }
  renderStorageCenter();
}

function copyStorageSummary() {
  const snapshot = getSaveSnapshot();
  const noteCount = Object.values(snapshot.calendarNotes).filter(Boolean).length;
  const text = [
    "康康求职行动台保存摘要",
    `今日任务：${snapshot.todayDone.length}/${data.todayTasks.length}`,
    `材料包：${snapshot.materialDone.length}/${data.materials.length}`,
    `认证材料：${snapshot.certDone.length}/${data.cert.length}`,
    `日历备注：${noteCount}`,
    `投递记录：${snapshot.applications.length}`,
    `生成时间：${new Date().toLocaleString()}`
  ].join("\n");
  copyText(text);
}

function addApplication() {
  const form = document.getElementById("applicationForm");
  const formData = new FormData(form);
  const app = Object.fromEntries(formData.entries());
  if (!app.company && !app.role) {
    toast("先填公司或岗位");
    return;
  }
  const apps = store.get("applications", []);
  store.set("applications", [{ ...app, createdAt: new Date().toISOString() }, ...apps]);
  form.reset();
  renderApplications();
  toast("已保存投递记录");
}

function copyText(idOrText) {
  const node = document.getElementById(idOrText);
  const text = node ? node.textContent : idOrText;
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => toast("已复制"));
    return;
  }
  const area = document.createElement("textarea");
  area.value = text;
  area.style.position = "fixed";
  area.style.left = "-9999px";
  document.body.appendChild(area);
  area.focus();
  area.select();
  document.execCommand("copy");
  area.remove();
  toast("已复制");
}

function updateTimer() {
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  document.getElementById("timer").textContent = `${min}:${sec}`;
}

function startFocus() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    document.getElementById("startFocus").textContent = "继续 25 分钟";
    return;
  }
  document.getElementById("startFocus").textContent = "暂停";
  timerId = setInterval(() => {
    seconds -= 1;
    updateTimer();
    if (seconds <= 0) {
      clearInterval(timerId);
      timerId = null;
      focusIndex = Math.min(focusIndex + 1, data.focus.length - 1);
      seconds = 25 * 60;
      document.getElementById("focusTitle").textContent = data.focus[focusIndex][0];
      document.getElementById("focusDetail").textContent = data.focus[focusIndex][1];
      document.getElementById("startFocus").textContent = "开始下一块";
      updateTimer();
      toast("这一块结束，换下一个小动作");
    }
  }, 1000);
}

document.querySelectorAll(".nav-tab").forEach(btn => {
  btn.addEventListener("click", () => setView(btn.dataset.view));
});

document.querySelectorAll("[data-copy]").forEach(btn => {
  btn.addEventListener("click", () => copyText(btn.dataset.copy));
});

document.getElementById("resetToday").addEventListener("click", () => {
  store.set("todayDone", []);
  renderToday();
});
document.getElementById("resetMaterials").addEventListener("click", () => {
  store.set("materialDone", []);
  renderChecks();
});
document.getElementById("resetCert").addEventListener("click", () => {
  store.set("certDone", []);
  renderChecks();
});
document.getElementById("exportProgress").addEventListener("click", exportProgress);
document.getElementById("exportProgressStorage").addEventListener("click", exportProgress);
document.getElementById("importProgress").addEventListener("click", () => {
  document.getElementById("progressFile").click();
});
document.getElementById("importProgressStorage").addEventListener("click", () => {
  document.getElementById("progressFile").click();
});
document.getElementById("progressFile").addEventListener("change", event => {
  importProgressFile(event.target.files[0]);
  event.target.value = "";
});
document.getElementById("checkStorage").addEventListener("click", checkStorageHealth);
document.getElementById("copyStorageSummary").addEventListener("click", copyStorageSummary);
document.getElementById("addApplication").addEventListener("click", addApplication);
document.getElementById("exportApplications").addEventListener("click", exportApplications);
document.getElementById("clearApplications").addEventListener("click", () => {
  store.set("applications", []);
  renderApplications();
});
document.getElementById("startFocus").addEventListener("click", startFocus);
document.getElementById("openProfile").addEventListener("click", () => setView("profile"));
document.querySelectorAll("[data-open-event]").forEach(btn => {
  btn.addEventListener("click", () => {
    setView("calendar");
    renderCalendar(btn.dataset.openEvent);
  });
});
document.getElementById("todayCalendar").addEventListener("click", () => renderCalendar("2026-06-18"));
document.getElementById("prevMonth").addEventListener("click", () => moveCalendarMonth(-1));
document.getElementById("nextMonth").addEventListener("click", () => moveCalendarMonth(1));
document.getElementById("saveEventNote").addEventListener("click", saveEventNote);
document.getElementById("closeDirectionModal").addEventListener("click", closeDirection);
document.getElementById("directionModal").addEventListener("click", event => {
  if (event.target.id === "directionModal") closeDirection();
  const copyButton = event.target.closest("[data-copy-direction-keywords]");
  if (copyButton) {
    const item = data.directions[Number(copyButton.dataset.copyDirectionKeywords)];
    copyText(item.next.replace("投递关键词：", "").replace("。", ""));
  }
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeDirection();
});
window.addEventListener("hashchange", () => {
  setView(getInitialView(), false);
});
window.addEventListener("popstate", () => {
  setView(getInitialView(), false);
});

renderToday();
renderDirections();
renderChecks();
renderCalendar();
renderInterview();
renderProfileResources();
renderApplications();
renderStorageCenter();
updateTimer();
setView(getInitialView(), false);
