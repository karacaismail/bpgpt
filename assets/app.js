(() => {
  'use strict';
  const search=document.getElementById('project-search'),list=document.getElementById('project-list'),count=document.getElementById('result-count'),empty=document.getElementById('no-results');
  const discover=document.getElementById('view-discover'),decide=document.getElementById('view-decide'),cash=document.getElementById('sort-cash'),self=document.getElementById('sort-self'),reset=document.getElementById('reset-filters');
  if(!search||!list||!count||!empty||!discover||!decide||!cash||!self||!reset)return;
  const rows=Array.from(list.querySelectorAll('.project-row')),filters=Array.from(document.querySelectorAll('[data-filter]'));
  const normalize=s=>s.toLocaleLowerCase('tr').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/ı/g,'i');
  let view='discover',rank='cash',group='all';
  function update(){const query=normalize(search.value.trim());let visible=0;rows.forEach(row=>{row.hidden=(group!=='all'&&row.dataset.group!==group)||(query&&!normalize(row.textContent).includes(query));if(!row.hidden)visible++;});count.textContent=`${rows.length} girişimden ${visible} gösteriliyor · ${view==='discover'?'İsme göre':rank==='cash'?'Satış uyumuna göre':'Düşük satış emeğine göre'}`;empty.hidden=visible!==0;reset.hidden=!query&&group==='all';}
  function sort(){const order=rows.slice().sort((a,b)=>view==='discover'?a.dataset.name.localeCompare(b.dataset.name,'tr'):Number(b.dataset[rank])-Number(a.dataset[rank])||Number(a.dataset.order)-Number(b.dataset.order));order.forEach(row=>list.appendChild(row));cash.setAttribute('aria-pressed',String(rank==='cash'));self.setAttribute('aria-pressed',String(rank==='self'));update();}
  function setView(next){view=next;document.body.dataset.view=next;discover.setAttribute('aria-pressed',String(next==='discover'));decide.setAttribute('aria-pressed',String(next==='decide'));sort();}
  function setGroup(next){group=next;filters.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===next)));update();}
  search.addEventListener('input',update);discover.addEventListener('click',()=>setView('discover'));decide.addEventListener('click',()=>setView('decide'));cash.addEventListener('click',()=>{rank='cash';sort();});self.addEventListener('click',()=>{rank='self';sort();});filters.forEach(button=>button.addEventListener('click',()=>setGroup(button.dataset.filter)));
  reset.addEventListener('click',()=>{search.value='';setGroup('all');search.focus();});
  document.querySelectorAll('[data-open-project]').forEach(link=>link.addEventListener('click',()=>{search.value='';setGroup('all');const target=document.getElementById(link.hash.slice(1));if(target)target.open=true;}));
  if(location.hash.startsWith('#proje-')){const target=document.getElementById(location.hash.slice(1));if(target)target.open=true;}
  document.querySelector('.toolbar').hidden=false;document.querySelector('.filters').hidden=false;sort();
})();
