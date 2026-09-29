const tbody = document.getElementById('record-list');

function renderList() {
  if (!RECORDS.length) {
    tbody.innerHTML = '<tr><td colspan="4" class="empty">暂无就诊记录</td></tr>';
    return;
  }

  tbody.innerHTML = RECORDS.map(
    (r) => `
      <tr data-id="${r.id}">
        <td>${r.name}</td>
        <td>${r.department}</td>
        <td>${r.diagnosis}</td>
        <td>${r.time}</td>
      </tr>`
  ).join('');
}

tbody.addEventListener('click', (e) => {
  const row = e.target.closest('tr[data-id]');
  if (row) {
    window.location.href = `detail.html?id=${row.dataset.id}`;
  }
});

renderList();
