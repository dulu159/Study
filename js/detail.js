const container = document.getElementById('detail-content');
const params = new URLSearchParams(window.location.search);
const id = Number(params.get('id'));
const record = RECORDS.find((r) => r.id === id);

if (!record) {
  container.innerHTML = '<p class="empty">未找到对应的就诊记录</p>';
} else {
  container.innerHTML = `
    <h2>${record.name} · ${record.diagnosis}</h2>
    <div class="detail-grid">
      <div class="detail-item">
        <span class="label">就诊编号</span>
        <span class="value">No.${record.id}</span>
      </div>
      <div class="detail-item">
        <span class="label">患者姓名</span>
        <span class="value">${record.name}</span>
      </div>
      <div class="detail-item">
        <span class="label">性别 / 年龄</span>
        <span class="value">${record.gender} / ${record.age} 岁</span>
      </div>
      <div class="detail-item">
        <span class="label">就诊科室</span>
        <span class="value">${record.department}</span>
      </div>
      <div class="detail-item">
        <span class="label">主治医生</span>
        <span class="value">${record.doctor}</span>
      </div>
      <div class="detail-item">
        <span class="label">诊断结果</span>
        <span class="value">${record.diagnosis}</span>
      </div>
      <div class="detail-item">
        <span class="label">就诊时间</span>
        <span class="value">${record.time}</span>
      </div>
      <div class="detail-item full">
        <span class="label">医嘱</span>
        <span class="value prescription">${record.prescription}</span>
      </div>
    </div>`;
}
