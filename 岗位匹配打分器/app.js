const profiles = [
  {
    name: "GNSS/国际技术支持",
    resume: "大地测量外派俄罗斯方向简历-修订版",
    keywords: ["gnss", "rtk", "gps", "北斗", "测绘设备", "技术支持", "海外", "出差", "驻场", "俄语", "俄罗斯", "中亚", "培训", "客户", "售后", "工程师"],
    materials: "外派俄罗斯简历 + 1:500 地形图 2 页 + 3DGS 2 页 + 英俄自我介绍"
  },
  {
    name: "工程测量/大地测量",
    resume: "大地测量方向简历-修订版",
    keywords: ["工程测量", "测量员", "测绘", "放样", "导线", "全站仪", "rtk", "cad", "cass", "地形图", "施工", "内业", "外业", "数据处理"],
    materials: "大地测量简历 + 天津地铁脱敏证据 2 页 + 1:500 地形图 2 页"
  },
  {
    name: "俄语销售/客户服务",
    resume: "俄语销售方向简历",
    keywords: ["俄语", "销售", "客户", "外贸", "市场", "俄罗斯", "独联体", "接待", "沟通", "翻译", "运营", "售前", "售后", "商务"],
    materials: "俄语销售简历 + 留学生落地服务经历 + 展会翻译经历"
  },
  {
    name: "航空航天轨道仿真",
    resume: "航空航天轨道仿真方向简历",
    keywords: ["轨道", "卫星", "空间目标", "仿真", "python", "数据分析", "gnss", "摄动", "预报", "建模", "算法", "太空垃圾"],
    materials: "轨道仿真简历 + 硕士论文 45 秒讲法 + Python/数据处理说明"
  },
  {
    name: "羽毛球教学",
    resume: "羽毛球教学方向简历",
    keywords: ["羽毛球", "少儿", "助教", "教练", "陪练", "体育", "课程", "学员", "前台", "场馆"],
    materials: "羽毛球教学简历 + 助教经历 + 混双二等奖"
  }
];

const sample = `岗位：GNSS海外技术支持工程师
职责：
1. 负责RTK、GNSS测绘设备的海外客户培训、技术支持和现场问题排查；
2. 支持俄罗斯及中亚区域项目交付，能接受长期出差；
3. 协助销售团队完成产品演示、客户沟通和售后支持。
要求：
测绘、地理信息、大地测量相关专业；熟悉RTK、全站仪、CAD；英语或俄语可工作沟通。`;

function countMatches(text, keywords) {
  const lower = text.toLowerCase();
  return keywords.reduce((sum, key) => sum + (lower.includes(key.toLowerCase()) ? 1 : 0), 0);
}

function scoreJob() {
  const text = document.getElementById("jobText").value.trim();
  if (!text) {
    document.getElementById("summary").textContent = "先粘贴岗位描述。";
    document.getElementById("scores").innerHTML = "";
    return;
  }

  const results = profiles.map(profile => {
    const matches = countMatches(text, profile.keywords);
    const score = Math.min(100, Math.round(matches / Math.max(5, profile.keywords.length * 0.55) * 100));
    return { ...profile, matches, score };
  }).sort((a, b) => b.score - a.score);

  const best = results[0];
  const level = best.score >= 75 ? "高" : best.score >= 45 ? "中" : "低";
  document.getElementById("summary").innerHTML = `推荐方向：<strong>${best.name}</strong><br>匹配度：<strong>${level}</strong>（${best.score} 分）<br>建议先用：<strong>${best.resume}</strong>`;

  document.getElementById("scores").innerHTML = results.map(item => `
    <div class="score-row">
      <span>${item.name}</span>
      <div class="bar"><span style="--w:${item.score}%"></span></div>
      <strong>${item.score}</strong>
    </div>
  `).join("");

  document.getElementById("advice").innerHTML = `
    <div class="advice-card">
      <h3>推荐简历</h3>
      <p><strong>${best.resume}</strong></p>
      <p>如果岗位同时提到俄语和测绘，优先用外派俄罗斯方向。</p>
    </div>
    <div class="advice-card">
      <h3>材料包</h3>
      <p>${best.materials}</p>
    </div>
    <div class="advice-card">
      <h3>HR 开场重点</h3>
      <p>${best.name.includes("技术支持") ? "测绘技术 + 俄语/英语沟通 + 海外适应 + 可出差驻场。" : best.name.includes("工程") ? "RTK/全站仪/CAD/CASS + 施工测量 + 数据复核。" : best.name.includes("俄语") ? "俄语 B2 + 俄罗斯生活经验 + 客户接待和流程跟进。" : "专业背景匹配，但先确认岗位是否接受应届生或助理岗位。"}</p>
    </div>
  `;
}

document.getElementById("sample").addEventListener("click", () => {
  document.getElementById("jobText").value = sample;
  scoreJob();
});

document.getElementById("score").addEventListener("click", scoreJob);

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("jobText").value = "";
  document.getElementById("summary").textContent = "等待岗位描述。";
  document.getElementById("scores").innerHTML = "";
  document.getElementById("advice").innerHTML = "<p>粘贴岗位后，这里会显示推荐简历、材料包和 HR 开场方向。</p>";
});
