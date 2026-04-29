/* ============================================================
   NEXUS GEAR - LOGICA SITE
   ============================================================ */

const CART_KEY = 'nexus_gear_cart';

/* ===== CART STORAGE ===== */
function getCart(){
  try{ return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch(e){ return []; }
}
function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}
function updateCartCount(){
  const total = getCart().reduce((s,i) => s + i.cantitate, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

function addToCart(id){
  const prod = PRODUSE.find(p => p.id === id);
  if(!prod) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if(existing) existing.cantitate++;
  else cart.push({id: prod.id, nume: prod.nume, pret: prod.pret, imagine: prod.imagine, cantitate: 1});
  saveCart(cart);
  toast('"' + prod.nume + '" adaugat in cos!');
  document.querySelectorAll('[data-add="' + id + '"]').forEach(btn => {
    const original = btn.textContent;
    btn.textContent = '✓ Adaugat';
    btn.classList.add('added');
    setTimeout(() => { btn.textContent = original; btn.classList.remove('added'); }, 1500);
  });
}

function toast(msg){
  let t = document.querySelector('.toast');
  if(!t){
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastT);
  window._toastT = setTimeout(() => t.classList.remove('show'), 2500);
}

/* ===== PRODUCT CARD ===== */
function renderProductCard(p){
  const reducere = p.pretVechi ? Math.round((1 - p.pret/p.pretVechi) * 100) : 0;
  const link = 'produs.html?id=' + p.id;
  return `
    <article class="product-card">
      ${p.nou ? '<span class="badge nou">Nou</span>' : ''}
      ${reducere > 0 ? `<span class="badge discount">-${reducere}%</span>` : ''}
      <a href="${link}" class="img-wrap">
        <img src="${p.imagine}" alt="${p.nume}" loading="lazy">
      </a>
      <div class="product-info">
        <span class="cat">${p.categorie}</span>
        <h3 onclick="window.location.href='${link}'">${p.nume}</h3>
        <p class="desc">${p.descriere}</p>
        <div class="price-row">
          <span class="price">${p.pret} lei</span>
          ${p.pretVechi ? `<span class="price-old">${p.pretVechi} lei</span>` : ''}
        </div>
        <button class="btn-add" data-add="${p.id}" onclick="addToCart(${p.id})">Adauga in cos</button>
      </div>
    </article>
  `;
}

function renderProducts(containerId, filterCat, limit){
  const container = document.getElementById(containerId);
  if(!container) return;
  let lista = PRODUSE;
  if(filterCat) lista = lista.filter(p => p.categorie === filterCat);
  if(limit) lista = lista.slice(0, limit);
  if(lista.length === 0){
    container.innerHTML = '<div class="empty"><div class="ico">🎮</div><h2>Nu exista produse</h2><p>In aceasta categorie momentan nu sunt produse disponibile.</p></div>';
    return;
  }
  container.innerHTML = lista.map(renderProductCard).join('');
}

/* ===== PRODUCT DETAIL PAGE ===== */
function renderProductDetail(){
  const container = document.getElementById('product-detail');
  if(!container) return;
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const p = PRODUSE.find(x => x.id === id);
  if(!p){
    container.innerHTML = '<div class="empty"><div class="ico">❓</div><h2>Produs negasit</h2><a href="catalog.html">Vezi toate produsele</a></div>';
    return;
  }
  document.title = p.nume + ' - Nexus Gear';
  const reducere = p.pretVechi ? Math.round((1 - p.pret/p.pretVechi) * 100) : 0;
  const specsHtml = Object.entries(p.specs || {}).map(([k,v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');
  container.innerHTML = `
    <div class="detail-img">
      <img src="${p.imagine}" alt="${p.nume}">
    </div>
    <div class="detail-info">
      <div class="breadcrumb"><a href="index.html">Acasa</a> / <a href="catalog.html">Catalog</a> / ${p.nume}</div>
      <span class="detail-cat">${p.categorie}</span>
      <h1>${p.nume}</h1>
      <div class="detail-price">
        <span class="price">${p.pret} lei</span>
        ${p.pretVechi ? `<span class="price-old">${p.pretVechi} lei</span>` : ''}
        ${reducere ? `<span class="badge discount" style="position:static">-${reducere}%</span>` : ''}
      </div>
      <p class="detail-desc">${p.descriere}</p>
      <div class="detail-actions">
        <button class="btn-buy" data-add="${p.id}" onclick="addToCart(${p.id})">🛒 Adauga in cos</button>
      </div>
      ${specsHtml ? `<div class="specs-table"><h3>Specificatii</h3><dl>${specsHtml}</dl></div>` : ''}
    </div>
  `;
  const desc = document.getElementById('product-description');
  if(desc && p.detalii){
    desc.innerHTML = '<h2>Despre produs</h2><p>' + p.detalii + '</p>';
  }
}

/* ===== CART PAGE ===== */
function renderCart(){
  const container = document.getElementById('cart-container');
  if(!container) return;
  const cart = getCart();
  if(cart.length === 0){
    container.innerHTML = '<div class="empty"><div class="ico">🛒</div><h2>Cosul tau este gol</h2><p>Adauga produse pentru a finaliza o comanda.</p><a href="catalog.html">Vezi produsele</a></div>';
    return;
  }
  let total = 0;
  let html = '<div class="cart-table">';
  cart.forEach(item => {
    const sub = item.pret * item.cantitate;
    total += sub;
    html += `
      <div class="cart-row">
        <img src="${item.imagine}" alt="${item.nume}">
        <div><strong>${item.nume}</strong></div>
        <div>${item.pret} lei</div>
        <div class="qty">
          <button onclick="changeQty(${item.id},-1)">−</button>
          <span>${item.cantitate}</span>
          <button onclick="changeQty(${item.id},1)">+</button>
        </div>
        <div><strong>${sub} lei</strong></div>
        <span class="remove" onclick="removeFromCart(${item.id})" title="Sterge">×</span>
      </div>`;
  });
  html += '</div>';
  html += `<div class="cart-summary">
    <div><div class="total-label">Total comanda</div><div class="total">${total} lei</div></div>
    <button class="btn-buy" style="flex:initial;padding:16px 40px" onclick="checkout()">Finalizeaza comanda</button>
  </div>`;
  container.innerHTML = html;
}
function changeQty(id, delta){
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if(!item) return;
  item.cantitate += delta;
  if(item.cantitate <= 0){ removeFromCart(id); return; }
  saveCart(cart); renderCart();
}
function removeFromCart(id){
  saveCart(getCart().filter(i => i.id !== id));
  renderCart();
}
function checkout(){
  toast('Comanda plasata! Te vom contacta in scurt timp.');
  saveCart([]); renderCart();
}

/* ===== SEARCH (live) ===== */
function setupSearch(){
  const inp = document.querySelector('.search-input');
  if(!inp) return;
  inp.addEventListener('input', e => {
    const q = e.target.value.trim().toLowerCase();
    const grid = document.getElementById('products-grid');
    if(!grid) return;
    if(!q){ renderProducts('products-grid'); return; }
    const filtrat = PRODUSE.filter(p =>
      p.nume.toLowerCase().includes(q) ||
      p.categorie.toLowerCase().includes(q) ||
      p.descriere.toLowerCase().includes(q)
    );
    grid.innerHTML = filtrat.length ? filtrat.map(renderProductCard).join('') :
      '<div class="empty"><div class="ico">🔍</div><h2>Niciun rezultat pentru "' + q + '"</h2></div>';
  });
}

/* ===== FORMS ===== */
function setupForms(){
  const cf = document.getElementById('contact-form');
  if(cf) cf.addEventListener('submit', e => {
    e.preventDefault(); toast('Mesaj trimis! Iti raspundem in 24h.'); cf.reset();
  });
  const nf = document.getElementById('newsletter-form');
  if(nf) nf.addEventListener('submit', e => {
    e.preventDefault(); toast('Te-ai abonat la newsletter!'); nf.reset();
  });
}

/* ===== MOBILE NAV ===== */
function setupNav(){
  const t = document.querySelector('.menu-toggle');
  const n = document.querySelector('.nav');
  if(t && n) t.addEventListener('click', () => n.classList.toggle('open'));
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  setupSearch();
  setupForms();
  setupNav();
  renderCart();
  renderProductDetail();
});
