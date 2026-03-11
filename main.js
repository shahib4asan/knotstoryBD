/* ══════════════════════════════════════════
   KnotStory BD — Main Script
   © 2026 KnotStory BD
   Developed by SHAHIB HASAN
══════════════════════════════════════════ */

/* ══ BILINGUAL DATA ══ */
const PRODUCTS_BN = [
  {id:0,name:'ক্রোশেট ডেইজি ফুল',cat:'crochet',catLabel:'ক্রোশেট',price:280,img:'product1',tag:'সবচেয়ে জনপ্রিয়',colors:['#ffffff','#f0e040'],rating:'৫.০ (৪৮টি রিভিউ)',desc:'সাদা পাপড়ি ও হলুদ কেন্দ্রের চমৎকার হাতে বোনা ডেইজি ফুল। ঘরের সাজসজ্জা, উপহার বা বইমার্ক হিসেবে আদর্শ।'},
  {id:1,name:'ক্রোশেট ফ্লোরাল বুকমার্ক',cat:'crochet',catLabel:'ক্রোশেট',price:350,img:'product2',tag:'উপহারের জন্য আদর্শ',colors:['#e8c050','#8a1a1a','#4a78b0','#ffffff'],rating:'৪.৯ (৩৬টি রিভিউ)',desc:'সূর্যমুখী ও নীল-সাদা দুটি ডিজাইনে পাওয়া যায় এই সুন্দর ক্রোশেট ফ্লোরাল বুকমার্ক। বইপ্রেমীদের জন্য অসাধারণ উপহার।'},
  {id:2,name:'ক্রোশেট সফট পিঙ্ক বো',cat:'crochet',catLabel:'ক্রোশেট',price:380,img:'product3',tag:'নতুন',colors:['#f0a0b0'],rating:'৪.৮ (২৯টি রিভিউ)',desc:'নরম গোলাপি রঙের সুন্দর ক্রোশেট বো — হেয়ার ক্লিপ, ব্যাগ বা পোশাকের সাজ হিসেবে পারফেক্ট। হাতে তৈরি, প্রতিটি সুতায় যত্ন।'},
  {id:3,name:'ক্রোশেট ফ্রিলি স্ক্রাঞ্চি',cat:'crochet',catLabel:'ক্রোশেট',price:320,img:'product4',tag:'হাতে তৈরি',colors:['#f0a0b0','#fffde7'],rating:'৪.৯ (৪১টি রিভিউ)',desc:'পিঙ্ক ও ক্রিম রঙের ফ্রিলি ক্রোশেট স্ক্রাঞ্চি। চুলের জন্য স্টাইলিশ ও আরামদায়ক — প্রতিদিনের পারফেক্ট সঙ্গী।'},
  {id:4,name:'ক্রোশেট ডেইজি বুকমার্ক',cat:'crochet',catLabel:'ক্রোশেট',price:400,img:'product5',tag:'বেস্টসেলার',colors:['#ffffff','#f0e040','#4caf50'],rating:'৫.০ (৩৩টি রিভিউ)',desc:'সবুজ লম্বা স্টেম ও ডেইজি ফুলের অনন্য ক্রোশেট বুকমার্ক। বইয়ের পাতায় ব্যবহার করুন বা উপহার দিন — দুটোতেই অসাধারণ।'},
];

const PRODUCTS_EN = [
  {id:0,name:'Crochet Daisy Flower',cat:'crochet',catLabel:'Crochet',price:280,img:'product1',tag:'Most Popular',colors:['#ffffff','#f0e040'],rating:'5.0 (48 reviews)',desc:'Adorable handcrafted daisy with white petals and a bright yellow centre. Perfect for home décor, as a gift, or a sweet bookmark accent.'},
  {id:1,name:'Crochet Floral Bookmarks',cat:'crochet',catLabel:'Crochet',price:350,img:'product2',tag:'Gift Pick',colors:['#e8c050','#8a1a1a','#4a78b0','#ffffff'],rating:'4.9 (36 reviews)',desc:'Two gorgeous designs — a sunflower and a blue-white bloom — handwoven with love. The perfect gift for any book lover.'},
  {id:2,name:'Crochet Soft Pink Bow',cat:'crochet',catLabel:'Crochet',price:380,img:'product3',tag:'New',colors:['#f0a0b0'],rating:'4.8 (29 reviews)',desc:'A delicate soft pink crochet bow — perfect as a hair clip, bag charm or outfit accessory. Handcrafted with care in every stitch.'},
  {id:3,name:'Crochet Frilly Scrunchie',cat:'crochet',catLabel:'Crochet',price:320,img:'product4',tag:'Handmade',colors:['#f0a0b0','#fffde7'],rating:'4.9 (41 reviews)',desc:'Fluffy pink and cream frilly crochet scrunchie — stylish, gentle on hair, and a joy to wear every day.'},
  {id:4,name:'Crochet Daisy Bookmark',cat:'crochet',catLabel:'Crochet',price:400,img:'product5',tag:'Bestseller',colors:['#ffffff','#f0e040','#4caf50'],rating:'5.0 (33 reviews)',desc:'A whimsical daisy bloom on a long green stem — use it in your favourite book or give it as a charming handcrafted gift.'},
];

const REVIEWS_BN = [
  {name:'রিয়া আহমেদ',loc:'ঢাকা',av:'#c4714a',rating:5,text:'আমি যে বুকমার্কটি অর্ডার করেছিলাম তা একেবারে অসাধারণ। কারুকাজ অবিশ্বাস্য — প্রতিটি সুতায় যত্নটি অনুভব করা যায়!'},
  {name:'সাবরিনা ইসলাম',loc:'চট্টগ্রাম',av:'#2e7060',rating:5,text:'স্ক্রাঞ্চিটি উপহার হিসেবে কমিশন করেছিলাম — এটি আমার কল্পনার চেয়েও সুন্দর হয়েছে। পুরো প্রক্রিয়ায় যোগাযোগ ছিল অসাধারণ।'},
  {name:'নাদিয়া রহমান',loc:'সিলেট',av:'#c4a060',rating:5,text:'স্লিপ মাস্কটি এখন আমার প্রিয় সঙ্গী। সবাই জিজ্ঞেস করে কোথায় পেলাম! দ্রুত ডেলিভারি এবং সুন্দরভাবে প্যাকেজ করা।'},
];

const REVIEWS_EN = [
  {name:'Riya Ahmed',loc:'Dhaka',av:'#c4714a',rating:5,text:'The bookmark I ordered is absolutely stunning. The craftsmanship is incredible — you can feel the care in every stitch!'},
  {name:'Sabrina Islam',loc:'Chittagong',av:'#2e7060',rating:5,text:'I commissioned a scrunchie as a gift and it was more beautiful than I imagined. Communication was wonderful throughout.'},
  {name:'Nadia Rahman',loc:'Sylhet',av:'#c4a060',rating:5,text:'The sleep mask is now my favourite companion. Everyone asks where I got it! Fast delivery and beautifully packaged too.'},
];

const INSTA_IMGS = ['product1','product2','product3','product4','product5'];

const FILTER_LABELS = {
  bn: {all:'সব',crochet:'ক্রোশেট',bags:'ব্যাগ ও টোট',hats:'হ্যাট ও ক্যাপ',home:'ঘরের সাজ',accessories:'আনুষঙ্গিক'},
  en: {all:'All',crochet:'Crochet',bags:'Bags',hats:'Hats',home:'Décor',accessories:'Accessories'}
};

const COMING_SOON_CATS = ['bags','hats','home','accessories'];

const MARQUEE_BN = ['ভালোবেসে হাতে তৈরি','✦','ঢাকায় তৈরি','✦','উন্নত মানের সুতো','✦','কাস্টম অর্ডার গ্রহণযোগ্য','✦','টেকসই শিল্পকর্ম','✦','সারা বাংলাদেশে ডেলিভারি','✦','প্রতিটি পণ্য অনন্য','✦'];
const MARQUEE_EN = ['Handcrafted with Love','✦','Made in Dhaka','✦','Premium Yarn','✦','Custom Orders Welcome','✦','Sustainable Craft','✦','Ships Across Bangladesh','✦','Every piece unique','✦'];

/* ══ STATE ══ */
let lang = 'en';
let cart = JSON.parse(localStorage.getItem('kns_bi_cart') || '[]');
let activeFilter = 'all';
let activeProd = null;
let activePage = 'home';
let activePayment = 'cod';

function PRODUCTS() { return lang === 'bn' ? PRODUCTS_BN : PRODUCTS_EN; }
function REVIEWS() { return lang === 'bn' ? REVIEWS_BN : REVIEWS_EN; }

/* ══ Image helper ══ */
const FALLBACK_IMAGES = {
  'product1': 'images/product-1.jpg',
  'product2': 'images/product-2.jpg',
  'product3': 'images/product-3.jpg',
  'product4': 'images/product-4.jpg',
  'product5': 'images/product-5.jpg',
};

function imgSrc(key) {
  const k = key + '_png';
  if (typeof IMAGES !== 'undefined' && IMAGES[k]) return IMAGES[k];
  // Fallback: try matching key prefix, then default
  for (const fb of Object.keys(FALLBACK_IMAGES)) {
    if (key && key.toLowerCase().includes(fb.replace(/[0-9]/g, ''))) return FALLBACK_IMAGES[fb];
  }
  return FALLBACK_IMAGES[key] || FALLBACK_IMAGES['default'];
}

/* ══ Language Switcher ══ */
function setLang(l) {
  lang = l;
  const html = document.getElementById('htmlRoot');
  html.lang = l;
  html.classList.toggle('en', l === 'en');

  document.getElementById('ltBn').classList.toggle('active', l === 'bn');
  document.getElementById('ltEn').classList.toggle('active', l === 'en');
  syncLang2Buttons();

  document.querySelectorAll('.t').forEach(el => {
    const key = l === 'bn' ? 'bn' : 'en';
    if (el.dataset[key] !== undefined) el.innerHTML = el.dataset[key];
  });

  document.querySelectorAll('[data-bn-placeholder]').forEach(el => {
    el.placeholder = l === 'bn' ? el.dataset.bnPlaceholder : el.dataset.enPlaceholder;
  });

  const logo = document.querySelector('.logo-text');
  if (logo) logo.innerHTML = l === 'bn' ? 'নট<em>স্টোরি</em>' : 'Knot<em>Story</em>';

  buildFilters();
  renderProducts();
  renderReviews();
  renderInsta();
  buildMarquee();
}

/* ══ Page Navigation ══ */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id + '-page').classList.add('active');
  activePage = id;
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (id === 'checkout') buildOrderSummary();
  initReveal();
}

function goTo(secId) {
  if (activePage !== 'home') showPage('home');
  setTimeout(() => {
    const el = document.getElementById(secId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, activePage !== 'home' ? 120 : 0);
}

function filterScroll(cat) {
  if (COMING_SOON_CATS.includes(cat)) {
    toast(lang === 'bn' ? '🔜 শীঘ্রই আসছে!' : '🔜 Coming Soon!');
    return;
  }
  activeFilter = cat;
  if (activePage !== 'home') showPage('home');
  setTimeout(() => {
    renderProducts();
    document.querySelectorAll('.f-chip').forEach(c => c.classList.toggle('active', c.dataset.f === cat));
    document.getElementById('shop-sec').scrollIntoView({ behavior: 'smooth' });
  }, activePage !== 'home' ? 150 : 0);
}

/* ══ Marquee ══ */
function buildMarquee() {
  const items = lang === 'bn' ? MARQUEE_BN : MARQUEE_EN;
  const doubled = [...items, ...items];
  document.getElementById('marqueeInner').innerHTML = doubled.map(s =>
    s === '✦' ? `<span class="m-dot">✦</span>` : `<span>${s}</span>`
  ).join('');
}

/* ══ Products ══ */
function buildFilters() {
  const lbl = FILTER_LABELS[lang];
  const allCats = ['all', 'crochet', 'bags', 'hats', 'home', 'accessories'];
  document.getElementById('filterBar').innerHTML = allCats.map(c => {
    const isCS = COMING_SOON_CATS.includes(c);
    const csLabel = lang === 'bn' ? 'শীঘ্রই' : 'Soon';
    return `<button class="f-chip${c === activeFilter ? ' active' : ''}${isCS ? ' coming-soon' : ''}" data-f="${c}" onclick="setFilter('${c}',this)">
      ${lbl[c] || c}${isCS ? `<span class="coming-badge">${csLabel}</span>` : ''}
    </button>`;
  }).join('');
}

function setFilter(cat, btn) {
  if (COMING_SOON_CATS.includes(cat)) {
    toast(lang === 'bn' ? '🔜 শীঘ্রই আসছে!' : '🔜 Coming Soon!');
    return;
  }
  activeFilter = cat;
  document.querySelectorAll('.f-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  renderProducts();
}

function renderProducts() {
  const all = activeFilter === 'all' || activeFilter === 'crochet'
    ? PRODUCTS()
    : PRODUCTS().filter(p => p.cat === activeFilter);

  const list = all;
  const freeDeliveryLabel = lang === 'bn' ? '🚚 বিনামূল্যে ডেলিভারি' : '🚚 Free delivery';
  const stdDeliveryLabel  = lang === 'bn' ? '🚚 ৳১০০ ডেলিভারি'      : '🚚 ৳100 delivery';
  const cartLabel         = lang === 'bn' ? 'কার্টে যোগ করুন'        : 'Add to Cart';
  const buyLabel          = lang === 'bn' ? 'এখনই কিনুন'             : 'Buy Now';

  document.getElementById('prodGrid').innerHTML = list.map(p => {
    const stars = p.rating ? p.rating.split(' ')[0] : '5.0';
    const reviewCount = p.rating ? p.rating.match(/\((.+)\)/)?.[1] || '' : '';
    const delivery = p.price >= 2000 ? freeDeliveryLabel : stdDeliveryLabel;
    return `
    <article class="pcard" onclick="openProduct(${p.id})">
      <div class="pcard-thumb">
        <div class="pcard-img-frame">
          <img src="${imgSrc(p.img)}" alt="${p.name}" loading="lazy">
          <div class="pcard-img-shine"></div>
        </div>
        ${p.tag ? `<div class="pcard-tag">${p.tag}</div>` : ''}
        <div class="pcard-rating">
          <span class="pcard-rating-star">★</span>
          ${stars}${reviewCount ? `<span style="opacity:.7;font-weight:500"> · ${reviewCount}</span>` : ''}
        </div>
      </div>
      <div class="pcard-body">
        <div class="pcard-cat">${p.catLabel}</div>
        <div class="pcard-name">${p.name}</div>
        <div class="pcard-desc">${p.desc.slice(0, 72)}…</div>
        <div class="swatch-row">
          ${p.colors.slice(0, 5).map(c => `<div class="swatch" style="background:${c}"></div>`).join('')}
          ${p.colors.length > 5 ? `<span style="font-size:.65rem;color:var(--muted);margin-left:2px">+${p.colors.length - 5}</span>` : ''}
        </div>
      </div>
      <div class="pcard-commerce">
        <div class="pcard-price-row">
          <span class="pcard-currency">৳</span>
          <span class="pcard-price">${p.price.toLocaleString()}</span>
          <span class="pcard-delivery">${delivery}</span>
        </div>
        <div class="pcard-actions">
          <button class="pcard-btn-cart" id="pcard-cart-${p.id}"
            onclick="event.stopPropagation();handleCardCart(${p.id})">
            <span class="pcard-btn-icon">🛒</span>
            <span>${cartLabel}</span>
          </button>
          <button class="pcard-btn-buy"
            onclick="event.stopPropagation();handleCardBuy(${p.id})">
            <span class="pcard-btn-icon">⚡</span>
            <span>${buyLabel}</span>
          </button>
        </div>
      </div>
    </article>
    `;
  }).join('');
}

function handleCardCart(id) {
  doAddToCart(id);
  const btn = document.getElementById(`pcard-cart-${id}`);
  if (!btn) return;
  btn.classList.add('added');
  btn.innerHTML = `<span class="pcard-btn-icon">✓</span><span>${lang === 'bn' ? 'যোগ হয়েছে!' : 'Added!'}</span>`;
  setTimeout(() => {
    btn.classList.remove('added');
    btn.innerHTML = `<span class="pcard-btn-icon">🛒</span><span>${lang === 'bn' ? 'কার্টে যোগ করুন' : 'Add to Cart'}</span>`;
  }, 2000);
  toast(lang === 'bn' ? `${PRODUCTS()[id].name} যোগ হয়েছে! 🛒` : `${PRODUCTS()[id].name} added! 🛒`);
}

function handleCardBuy(id) {
  doAddToCart(id);
  if (!cart.length) return;
  buildModalOrderSummary();
  document.getElementById('checkoutModal').classList.add('on');
  document.getElementById('checkoutModalVeil').classList.add('on');
  document.body.style.overflow = 'hidden';
}


/* ══ Product Detail ══ */
function openProduct(id) {
  const p = PRODUCTS()[id];
  if (!p) return;
  activeProd = { ...p, qty: 1, selColor: p.colors[0] };
  showPage('product');

  document.getElementById('pdBreadName').textContent = p.name;
  document.getElementById('pdCatLbl').textContent = p.catLabel;
  document.getElementById('pdTitle').textContent = p.name;
  document.getElementById('pdPriceLbl').textContent = `৳ ${p.price.toLocaleString()}`;
  document.getElementById('pdStars').textContent = p.rating;
  document.getElementById('pdDescTxt').textContent = p.desc;
  document.getElementById('pdQty').value = 1;

  const main = document.getElementById('pdMain');
  main.innerHTML = `<img src="${imgSrc(p.img)}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover">`;

  document.getElementById('pdThumbs').innerHTML = [p.img, 'product1', 'product2', 'product3'].map((img, i) =>
    `<div class="pd-thumb${i === 0 ? ' sel' : ''}" onclick="pickThumb(this,'${img}','${p.name}')">
      <img src="${imgSrc(img)}" alt="" style="width:100%;height:100%;object-fit:cover">
    </div>`
  ).join('');

  document.getElementById('pdColorRow').innerHTML = p.colors.map((c, i) =>
    `<div class="color-circle${i === 0 ? ' sel' : ''}" style="background:${c}" onclick="pickColor(this,'${c}')"></div>`
  ).join('');

  document.querySelectorAll('.pd-detail .t').forEach(el => {
    if (el.dataset[lang]) el.innerHTML = el.dataset[lang];
  });
  const addBtn = document.getElementById('pdAddBtn');
  if (addBtn) addBtn.querySelector('.t').innerHTML = lang === 'bn' ? 'কার্টে যোগ করুন 🛒' : 'Add to Cart 🛒';
}

function pickThumb(el, img, name) {
  document.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('sel'));
  el.classList.add('sel');
  document.getElementById('pdMain').innerHTML = `<img src="${imgSrc(img)}" alt="${name}" style="width:100%;height:100%;object-fit:cover">`;
}

function pickColor(el) {
  document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
}

function changeQty(d) {
  const inp = document.getElementById('pdQty');
  const v = Math.min(10, Math.max(1, parseInt(inp.value) + d));
  inp.value = v;
  if (activeProd) activeProd.qty = v;
}

function addFromDetail() {
  if (!activeProd) return;
  const qty = parseInt(document.getElementById('pdQty').value);
  for (let i = 0; i < qty; i++) doAddToCart(activeProd.id);
  toast(lang === 'bn' ? `${activeProd.name} কার্টে যোগ হয়েছে! 🎉` : `${activeProd.name} added to cart! 🎉`);
  const btn = document.getElementById('pdAddBtn');
  const span = btn.querySelector('.t');
  span.innerHTML = lang === 'bn' ? '✓ কার্টে যোগ হয়েছে!' : '✓ Added to Cart!';
  btn.style.background = 'var(--teal)';
  setTimeout(() => {
    span.innerHTML = lang === 'bn' ? 'কার্টে যোগ করুন 🛒' : 'Add to Cart 🛒';
    btn.style.background = '';
  }, 2200);
}

/* ══ Cart ══ */
function addToCart(id) { doAddToCart(id); toast(lang === 'bn' ? `${PRODUCTS()[id].name} যোগ হয়েছে! 🛒` : `${PRODUCTS()[id].name} added! 🛒`); }
function quickAdd(id) { doAddToCart(id); toast(lang === 'bn' ? `${PRODUCTS()[id].name} যোগ হয়েছে! 🛒` : `${PRODUCTS()[id].name} added! 🛒`); }

function doAddToCart(id) {
  const p = PRODUCTS()[id];
  const ex = cart.find(c => c.id === id);
  if (ex) ex.qty++;
  else cart.push({ id, name: p.name, price: p.price, img: p.img, qty: 1, cat: p.catLabel });
  saveCart(); renderCart();
}

function removeItem(id) { cart = cart.filter(c => c.id !== id); saveCart(); renderCart(); }

function bumpQty(id, d) {
  const it = cart.find(c => c.id === id);
  if (!it) return;
  it.qty += d;
  if (it.qty <= 0) cart = cart.filter(c => c.id !== id);
  saveCart(); renderCart();
}

function saveCart() { localStorage.setItem('kns_bi_cart', JSON.stringify(cart)); }

function renderCart() {
  const scroll = document.getElementById('cartScroll');
  const ft = document.getElementById('cartFt');
  const nil = document.getElementById('cartNil');
  const badge = document.getElementById('cartBadge');
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const qty = cart.reduce((s, c) => s + c.qty, 0);

  badge.textContent = qty;
  badge.classList.toggle('on', qty > 0);

  if (!cart.length) {
    nil.style.display = 'block'; ft.style.display = 'none';
    scroll.innerHTML = ''; scroll.appendChild(nil); return;
  }
  nil.style.display = 'none'; ft.style.display = 'block';
  document.getElementById('cartTotal').textContent = `৳ ${total.toLocaleString()}`;

  scroll.innerHTML = cart.map(it => `
    <div class="cart-row">
      <div class="cart-img"><img src="${imgSrc(it.img)}" alt="${it.name}"></div>
      <div class="cart-info">
        <div class="cart-item-name">${it.name}</div>
        <div class="cart-item-cat">${it.cat}</div>
        <div class="cart-item-row">
          <div class="qty-mini">
            <button class="qm-btn" onclick="bumpQty(${it.id},-1)">−</button>
            <span class="qm-val">${it.qty}</span>
            <button class="qm-btn" onclick="bumpQty(${it.id},1)">+</button>
          </div>
          <div class="cart-item-price">৳ ${(it.price * it.qty).toLocaleString()}</div>
        </div>
        <button class="cart-item-del" onclick="removeItem(${it.id})">${lang === 'bn' ? 'সরিয়ে দিন' : 'Remove'}</button>
      </div>
    </div>
  `).join('');
}

function openCart() { document.getElementById('cartDrawer').classList.add('on'); document.getElementById('cartVeil').classList.add('on'); }
function closeCart() { document.getElementById('cartDrawer').classList.remove('on'); document.getElementById('cartVeil').classList.remove('on'); }
function goCheckout() {
  if (!cart.length) { toast(lang === 'bn' ? '⚠️ আপনার কার্ট খালি!' : '⚠️ Your cart is empty!'); return; }
  closeCart();
  buildModalOrderSummary();
  document.getElementById('checkoutModal').classList.add('on');
  document.getElementById('checkoutModalVeil').classList.add('on');
  document.body.style.overflow = 'hidden';
}
function closeCheckoutModal() {
  document.getElementById('checkoutModal').classList.remove('on');
  document.getElementById('checkoutModalVeil').classList.remove('on');
  document.body.style.overflow = '';
}

function buildModalOrderSummary() {
  const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const del = sub >= 2000 ? 0 : 100;
  document.getElementById('modalOrderItems').innerHTML = cart.map(c => `
    <div class="o-item">
      <div class="o-img"><img src="${imgSrc(c.img)}" alt="${c.name}"></div>
      <div><div class="o-name">${c.name}</div><div class="o-qty">${lang === 'bn' ? 'পরিমাণ' : 'Qty'}: ${c.qty}</div></div>
      <div class="o-price">৳ ${(c.price * c.qty).toLocaleString()}</div>
    </div>
  `).join('');
  document.getElementById('modalSubtotal').textContent = `৳ ${sub.toLocaleString()}`;
  document.getElementById('modalDelivery').textContent = del === 0 ? (lang === 'bn' ? 'বিনামূল্যে 🎉' : 'FREE 🎉') : `৳ ${del}`;
  document.getElementById('modalTotal').textContent = `৳ ${(sub + del).toLocaleString()}`;
}

function modalPlaceOrder() {
  const fname = document.getElementById('m-fname').value.trim();
  const phone = document.getElementById('m-phone').value.trim();
  if (!fname) { toast(lang === 'bn' ? '⚠️ আপনার নাম লিখুন' : '⚠️ Please enter your name'); return; }
  if (!phone) { toast(lang === 'bn' ? '⚠️ আপনার ফোন নম্বর লিখুন' : '⚠️ Please enter your phone number'); return; }

  const btn = document.querySelector('.modal-place-btn');
  const span = btn.querySelector('.t');
  span.innerHTML = lang === 'bn' ? 'প্রক্রিয়াকরণ হচ্ছে...' : 'Processing...';
  btn.disabled = true;

  setTimeout(() => {
    const orderId = '#KNS-' + Math.floor(1000 + Math.random() * 9000);
    document.getElementById('successId').textContent = orderId;
    cart = []; saveCart(); renderCart();
    closeCheckoutModal();
    showSuccessPopup();
    span.innerHTML = lang === 'bn' ? 'অর্ডার দিন →' : 'Place Order →';
    btn.disabled = false;
    // Reset form
    document.getElementById('m-fname').value = '';
    document.getElementById('m-phone').value = '';
    document.getElementById('m-addr').value = '';
  }, 1700);
}

/* ── User Menu ── */
let currentUser = null; // { name, email/phone }

function toggleUserMenu() {
  document.getElementById('userMenuWrap').classList.toggle('open');
}
function closeUserMenu() {
  document.getElementById('userMenuWrap').classList.remove('open');
}

function showUdropView(view) {
  document.getElementById('udropAuthView').style.display   = view === 'auth'   ? '' : 'none';
  document.getElementById('udropSigninView').style.display = view === 'signin' ? '' : 'none';
  document.getElementById('udropSignupView').style.display = view === 'signup' ? '' : 'none';
  document.getElementById('udropLoggedView').style.display = view === 'logged' ? '' : 'none';
}

function handleSignIn() {
  const id  = document.getElementById('siIdentifier').value.trim();
  const pw  = document.getElementById('siPassword').value.trim();
  if (!id)  { toast(lang === 'bn' ? '⚠️ ইমেইল বা ফোন লিখুন' : '⚠️ Enter email or phone'); return; }
  if (!pw)  { toast(lang === 'bn' ? '⚠️ পাসওয়ার্ড লিখুন' : '⚠️ Enter password'); return; }
  // Simulate sign in
  currentUser = { name: id.split('@')[0] || id, email: id };
  applyLoggedIn();
}

function handleSignUp() {
  const name = document.getElementById('suName').value.trim();
  const id   = document.getElementById('suIdentifier').value.trim();
  const pw   = document.getElementById('suPassword').value.trim();
  if (!name) { toast(lang === 'bn' ? '⚠️ আপনার নাম লিখুন' : '⚠️ Enter your name'); return; }
  if (!id)   { toast(lang === 'bn' ? '⚠️ ইমেইল বা ফোন লিখুন' : '⚠️ Enter email or phone'); return; }
  if (pw.length < 6) { toast(lang === 'bn' ? '⚠️ পাসওয়ার্ড কমপক্ষে ৬ অক্ষর' : '⚠️ Password min 6 chars'); return; }
  currentUser = { name, email: id };
  applyLoggedIn();
}

function applyLoggedIn() {
  const initials = (currentUser.name || 'U').split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();
  const firstName = (currentUser.name || '').split(' ')[0];
  // Update dropdown logged view
  document.getElementById('udropUserAvatarLg').textContent   = initials;
  document.getElementById('udropUserNameDisplay').textContent = currentUser.name;
  document.getElementById('udropUserEmailDisplay').textContent = currentUser.email;
  // Update button: replace icon with initials + name label
  const btn = document.getElementById('userMenuBtn');
  if (btn) {
    btn.innerHTML = `
      <span class="user-avatar-initials">${initials}</span>
      <span class="user-menu-label">${firstName}</span>
      <svg class="user-chevron" width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
    `;
  }
  showUdropView('logged');
  // Sync second set of lang buttons if present
  syncLang2Buttons();
  toast(lang === 'bn' ? `✅ স্বাগতম, ${currentUser.name}!` : `✅ Welcome, ${currentUser.name}!`);
}

function handleSignOut() {
  currentUser = null;
  const btn = document.getElementById('userMenuBtn');
  if (btn) {
    btn.innerHTML = `
      <span class="user-avatar-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.8"/>
          <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      </span>
      <svg class="user-chevron" width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
    `;
  }
  showUdropView('auth');
  toast(lang === 'bn' ? '👋 সাইন আউট হয়েছেন' : '👋 Signed out');
}


function toggleUdropPw(id, btn) {
  const input = document.getElementById(id);
  if (!input) return;
  const isText = input.type === 'text';
  input.type = isText ? 'password' : 'text';
  btn.style.opacity = isText ? '0.5' : '1';
}

function syncLang2Buttons() {
  const bn2 = document.getElementById('ltBn2');
  const en2 = document.getElementById('ltEn2');
  if (bn2) bn2.classList.toggle('active', lang === 'bn');
  if (en2) en2.classList.toggle('active', lang === 'en');
}

// Close user menu when clicking outside
document.addEventListener('click', (e) => {
  const wrap = document.getElementById('userMenuWrap');
  if (wrap && !wrap.contains(e.target)) closeUserMenu();
});

/* ══ Checkout ══ */
function buildOrderSummary() {
  const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const del = sub >= 2000 ? 0 : 100;
  document.getElementById('orderItems').innerHTML = cart.map(c => `
    <div class="o-item">
      <div class="o-img"><img src="${imgSrc(c.img)}" alt="${c.name}"></div>
      <div><div class="o-name">${c.name}</div><div class="o-qty">${lang === 'bn' ? 'পরিমাণ' : 'Qty'}: ${c.qty}</div></div>
      <div class="o-price">৳ ${(c.price * c.qty).toLocaleString()}</div>
    </div>
  `).join('');
  document.getElementById('oSubtotal').textContent = `৳ ${sub.toLocaleString()}`;
  document.getElementById('oDelivery').textContent = del === 0 ? (lang === 'bn' ? 'বিনামূল্যে 🎉' : 'FREE 🎉') : `৳ ${del}`;
  document.getElementById('oTotal').textContent = `৳ ${(sub + del).toLocaleString()}`;
}

function pickPay(el, m) {
  document.querySelectorAll('.pay-card').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel'); activePayment = m;
}

function placeOrder() {
  const fname = document.getElementById('co-fname').value.trim();
  const phone = document.getElementById('co-phone').value.trim();
  const addr = document.getElementById('co-addr').value.trim();
  if (!fname) { toast(lang === 'bn' ? '⚠️ আপনার নাম লিখুন' : '⚠️ Please enter your name'); return; }
  if (!phone) { toast(lang === 'bn' ? '⚠️ আপনার ফোন নম্বর লিখুন' : '⚠️ Please enter your phone number'); return; }
  if (!addr) { toast(lang === 'bn' ? '⚠️ আপনার ডেলিভারি ঠিকানা লিখুন' : '⚠️ Please enter your delivery address'); return; }
  if (!cart.length) { toast(lang === 'bn' ? '⚠️ আপনার কার্ট খালি!' : '⚠️ Your cart is empty!'); return; }

  const btn = document.querySelector('.place-btn');
  const span = btn.querySelector('.t');
  span.innerHTML = lang === 'bn' ? 'প্রক্রিয়াকরণ হচ্ছে...' : 'Processing...';
  btn.disabled = true;

  setTimeout(() => {
    const orderId = '#KNS-' + Math.floor(1000 + Math.random() * 9000);
    document.getElementById('successId').textContent = orderId;
    cart = []; saveCart(); renderCart();
    // Show success popup instead of page change
    showSuccessPopup();
    span.innerHTML = lang === 'bn' ? 'অর্ডার দিন →' : 'Place Order →';
    btn.disabled = false;
  }, 1700);
}

/* ══ Success Popup ══ */
function showSuccessPopup() {
  document.getElementById('successOverlay').classList.add('on');
  document.body.style.overflow = 'hidden';
}

function closeSuccessPopup() {
  document.getElementById('successOverlay').classList.remove('on');
  document.body.style.overflow = '';
  showPage('home');
}

/* ══ Custom Form ══ */
function submitCustom(btn) {
  const name = document.getElementById('cf-name').value.trim();
  const phone = document.getElementById('cf-phone').value.trim();
  if (!name || !phone) { toast(lang === 'bn' ? '⚠️ আপনার নাম এবং ফোন নম্বর দিন' : '⚠️ Please fill in name and phone'); return; }
  const span = btn.querySelector('.t');
  span.innerHTML = lang === 'bn' ? 'পাঠানো হচ্ছে...' : 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    span.innerHTML = lang === 'bn' ? '✓ অনুরোধ পাঠানো! শীঘ্রই হোয়াটসঅ্যাপ করব' : "✓ Request Sent! We'll WhatsApp you soon";
    btn.style.background = 'var(--teal)';
    ['cf-name', 'cf-phone', 'cf-email', 'cf-desc'].forEach(id => document.getElementById(id).value = '');
    setTimeout(() => { span.innerHTML = lang === 'bn' ? 'অনুরোধ পাঠান ✦' : 'Send Custom Request ✦'; btn.style.background = ''; btn.disabled = false; }, 4000);
  }, 1500);
}

/* ══ Reviews & Insta ══ */
function renderReviews() {
  document.getElementById('reviewsGrid').innerHTML = REVIEWS().map(r => `
    <div class="rev-card">
      <div class="rev-stars">${'★'.repeat(r.rating)}</div>
      <p class="rev-quote">"${r.text}"</p>
      <div class="rev-author">
        <div class="rev-av" style="background:${r.av}">${r.name[0]}</div>
        <div><div class="rev-name">${r.name}</div><div class="rev-loc">${r.loc}, ${lang === 'bn' ? 'বাংলাদেশ' : 'Bangladesh'}</div></div>
      </div>
    </div>
  `).join('');
}

function renderInsta() {
  document.getElementById('instaMosaic').innerHTML = INSTA_IMGS.map(img => `
    <div class="insta-tile">
      <div class="insta-vis"><img src="${imgSrc(img)}" alt="KnotStory BD" loading="lazy"></div>
      <div class="insta-hover-ic">♥</div>
    </div>
  `).join('');
}

/* ══ Mobile Menu ══ */
function toggleMob() { document.getElementById('mobDrawer').classList.toggle('on'); document.getElementById('mobVeil').classList.toggle('on'); }
function closeMob() { document.getElementById('mobDrawer').classList.remove('on'); document.getElementById('mobVeil').classList.remove('on'); }

/* ══ Nav scroll ══ */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 50);
});

/* ══ Reveal ══ */
const revObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revObserver.unobserve(e.target); } });
}, { threshold: 0.05 });
function initReveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) { el.classList.add('in'); }
    else { revObserver.observe(el); }
  });
}

/* ══ Toast ══ */
let _tTimer;
function toast(msg) {
  const t = document.getElementById('toast');
  t.innerHTML = msg; t.classList.add('on');
  clearTimeout(_tTimer);
  _tTimer = setTimeout(() => t.classList.remove('on'), 2800);
}

/* ══ FILE UPLOAD ══ */
function handleFileSelect(input) {
  const file = input.files[0];
  if (!file) return;
  const allowed = ['image/jpeg','image/jpg','image/png'];
  if (!allowed.includes(file.type)) {
    toast(lang === 'bn' ? '⚠️ শুধুমাত্র JPG, JPEG বা PNG ফাইল গ্রহণযোগ্য' : '⚠️ Only JPG, JPEG or PNG files accepted');
    input.value = ''; return;
  }
  if (file.size > 5 * 1024 * 1024) {
    toast(lang === 'bn' ? '⚠️ ফাইলের আকার ৫MB-এর বেশি হবে না' : '⚠️ File size must be under 5MB');
    input.value = ''; return;
  }
  const reader = new FileReader();
  reader.onload = e => {
    document.getElementById('filePreviewImg').src = e.target.result;
    document.getElementById('filePreviewName').textContent = file.name;
    document.getElementById('fileUploadArea').style.display = 'none';
    document.getElementById('filePreview').style.display = 'flex';
  };
  reader.readAsDataURL(file);
}

function clearFile() {
  const input = document.getElementById('cf-file');
  input.value = '';
  document.getElementById('filePreview').style.display = 'none';
  document.getElementById('fileUploadArea').style.display = 'block';
}

// Drag & drop support
document.addEventListener('DOMContentLoaded', () => {
  const area = document.getElementById('fileUploadArea');
  if (!area) return;
  area.addEventListener('dragover', e => { e.preventDefault(); area.classList.add('dragover'); });
  area.addEventListener('dragleave', () => area.classList.remove('dragover'));
  area.addEventListener('drop', e => {
    e.preventDefault(); area.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file) {
      const input = document.getElementById('cf-file');
      const dt = new DataTransfer(); dt.items.add(file);
      input.files = dt.files;
      handleFileSelect(input);
    }
  });
});

/* ══ DARK MODE ══ */
let darkMode = localStorage.getItem('kns_dark') === 'true';

function applyDark(on) {
  const html = document.getElementById('htmlRoot');
  html.classList.toggle('dark', on);
  const icon = document.querySelector('.dm-icon');
  if (icon) icon.textContent = on ? '🌙' : '☀️';
  localStorage.setItem('kns_dark', on);
}

function toggleDark() {
  darkMode = !darkMode;
  applyDark(darkMode);
}

/* ══ INIT ══ */
(function init() {
  applyDark(darkMode);
  setLang('en');
  renderCart();
  initReveal();
})();
