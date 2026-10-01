(() => {
  'use strict';
  const search = document.getElementById('project-search');
  const list = document.getElementById('project-list');
  const count = document.getElementById('result-count');
  const empty = document.getElementById('no-results');
  const cash = document.getElementById('sort-cash');
  const self = document.getElementById('sort-self');
  if (!search || !list || !count || !empty || !cash || !self) return;
  const rows = Array.from(list.querySelectorAll('.project-row'));
  const normalize = value => value.toLocaleLowerCase('tr').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/ı/g, 'i');
  let mode = 'cash';
  const number = (row, key) => {
    const value = row.dataset[key];
    return value && Number.isFinite(Number(value)) ? Number(value) : -Infinity;
  };
  function update() {
    const query = normalize(search.value.trim());
    let visible = 0;
    rows.forEach(row => {
      row.hidden = Boolean(query && !normalize(row.dataset.search || '').includes(query));
      if (!row.hidden) visible += 1;
    });
    count.textContent = `${rows.length} aileden ${visible} gösteriliyor · ${mode === 'cash' ? 'Reklamsız satış için nitel uyum' : 'Düşük satış emeği uyumu'} sırası`;
    empty.hidden = visible !== 0;
  }
  function sort(next) {
    mode = next;
    const key = next === 'cash' ? 'cash' : 'self';
    rows.sort((a, b) => number(b, key) - number(a, key) || Number(a.dataset.order) - Number(b.dataset.order));
    rows.forEach(row => list.appendChild(row));
    cash.setAttribute('aria-pressed', String(next === 'cash'));
    self.setAttribute('aria-pressed', String(next === 'self'));
    update();
  }
  search.addEventListener('input', update);
  cash.addEventListener('click', () => sort('cash'));
  self.addEventListener('click', () => sort('self'));
  sort('cash');
})();
