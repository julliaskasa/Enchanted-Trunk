const LS_CART = "et_cart_slide_v1";
const LS_REVIEWS = "et_reviews_slide_v1";

const PLACEHOLDER = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400"><rect width="100%" height="100%" fill="#f4f0ea"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="#6b5b5b">Зображення недоступне</text></svg>'
);
 
const PRODUCTS = [
    {
        id: "wand-elder", name: "Паличка Гарі Поттера", price: 499, category: "wands",
        image: "https://i.pinimg.com/736x/75/86/48/7586483160321f48ccc37138c8465232.jpg",
        full: "Легендарна паличка з рунами, створена за мотивами артефакту з найвищою репутацією. Репліка виготовлена з увагою до текстури деревини та гравіювання. Вага збалансована, що дає приємне відчуття контролю в руці. Підійде як частина колекції або естетичний аксесуар на полиці."
    },
    {
        id: "wand-elder", name: "Паличка Драко Малфой", price: 499, category: "wands",
        image: "https://i.pinimg.com/1200x/40/07/b2/4007b2cb240315b60960e28a178f39c4.jpg",
        full: "Легендарна паличка з рунами, створена за мотивами артефакту з найвищою репутацією. Репліка виготовлена з увагою до текстури деревини та гравіювання. Вага збалансована, що дає приємне відчуття контролю в руці. Підійде як частина колекції або естетичний аксесуар на полиці."
    },
    {
        id: "wand-holly", name: "Паличка з Герміони Грейнджер", price: 499, category: "wands",
        image: "https://i.pinimg.com/736x/5f/7e/9c/5f7e9cfa5870bd7a230a9afd98b57b05.jpg",
        full: "Елегантна паличка з падуба з м’яким глянцем та витонченим профілем. Міцність і легкість створюють комфорт при триманні. Деталі акуратно відшліфовані, а геометрія кінчика додає відчуття динаміки. Ідеальна для першого знайомства, чудово виглядає на фото."
    },
    {
        id: "scarf-gryff", name: "Шарф Ґрифіндор", price: 899, category: "scarves",
        image: "https://i.pinimg.com/1200x/7e/01/2b/7e012be03a35d13fd09a36b1301428c2.jpg",
        full: "Теплий шарф з класичними смугами у червоно-золотій гамі. Вовняна фактура, щільна в’язка та делікатний рубчик на краях. Добре поєднується як з повсякденним пальтом, так і зі світром. Легко доглядати, приємний на дотик."
    },
    {
        id: "scarf-gryff", name: "Шарф Пуфендуй", price: 899, category: "scarves",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8vxL-N3DaXKmDduzNzwXa3tbVMfA0xfdFZJhfQyACGxy4XHgM5KS_tFlS-XcfceWSTE&usqp=CAU",
        full: "Теплий шарф з класичними смугами у червоно-золотій гамі. Вовняна фактура, щільна в’язка та делікатний рубчик на краях. Добре поєднується як з повсякденним пальтом, так і зі світром. Легко доглядати, приємний на дотик."
    },
    {
        id: "scarf-gryff", name: "Шарф Когтевран", price: 899, category: "scarves",
        image: "https://i.pinimg.com/736x/ad/f0/d7/adf0d7ff6cef6a4145b5aeb95566143d.jpg",
        full: "Теплий шарф з класичними смугами у червоно-золотій гамі. Вовняна фактура, щільна в’язка та делікатний рубчик на краях. Добре поєднується як з повсякденним пальтом, так і зі світром. Легко доглядати, приємний на дотик."
    },
    {
        id: "scarf-slyth", name: "Шарф Слизерин", price: 899, category: "scarves",
        image: "https://i.pinimg.com/1200x/bd/af/d2/bdafd230b9f8bfa0c0f13d6a6ddc0ec0.jpg",
        full: "Стриманий зелено-срібний шарф з відчутною текстурою. Плавний перехід смуг та охайна кромка. Підкреслює мінімалістичний стиль і додає виразності образу. Теплий, але легкий."
    },
    {
        id: "choco-frog", name: "Шоколадні жаби", price: 249, category: "souvenirs",
        image: "https://i.pinimg.com/736x/b7/d2/19/b7d2196eaacd0e57633e269983118b41.jpg",
        full: "Класична солодкість з хрусткою текстурою та приємним молочним смаком. У кожній коробочці — випадкова картка з портретом легендарного чарівника. Упаковка з ретро‑ілюстрацією — гарний подарунок або дрібний сувенір."
    },
    {
        id: "time-turner", name: "Зворотник часу", price: 1499, category: "souvenirs",
        image: "https://i.pinimg.com/1200x/00/ee/5e/00ee5e1867e41a98bb8ea98fdbe6eac7.jpg",
        full: "Витончена металева репліка з тонкими кільцями, які плавно обертаються. Дзеркальна поверхня та дрібні насічки створюють ефект складної механіки. Виглядає дуже естетично на ланцюжку або стенді."
    },
    {
        id: "map-marauders", name: "Карта Мародерів", price: 799, category: "souvenirs",
        image: "https://i.pinimg.com/1200x/ae/9c/84/ae9c848e5ba17c0521b4da35adaa687b.jpg",
        full: "Детальна друкована репліка з вінтажним відтінком та мапою переходів. Папір щільний, з фактурою, друк чіткий — зберігає характер оригінального стилю. Ідеальна для декору, фотосесій та подарунків."
    },
    {
        id: "owl-plush", name: "Плюшева сова", price: 599, category: "souvenirs",
        image: "https://i.pinimg.com/736x/60/3d/15/603d151ef140e374e5f44ea6874a4ecd.jpg",
        full: "М’яка і пружна іграшка з акуратними швами. Великі очі і приємна текстура додають шарму. Легка в догляді — достатньо делікатного прання."
    },
    {
        id: "quid-kit", name: "Набір для квідичу", price: 1799, category: "sets",
        image: "https://questbox.com.ua/wp-content/uploads/2025/05/1D1A8463-%D0%B2%D1%96%D0%B4%D1%80%D0%B5%D0%B4%D0%B0%D0%B3%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE-1-700x700.jpg",
        full: "Настільний набір для дружніх змагань: м’ячі, міні‑кільця та золотий снітч. Компактний і легкий, швидко розкладається. Добре підходить для вечірок."
    },
    {
        id: "quid-kit", name: "Набір краваток", price: 999, category: "sets",
        image: "https://i.pinimg.com/1200x/5e/b9/b4/5eb9b446723472f58d6a586f63050ac5.jpg",
        full: "Настільний набір для дружніх змагань: м’ячі, міні‑кільця та золотий снітч. Компактний і легкий, швидко розкладається. Добре підходить для вечірок."
    },
    {
        id: "house-pins", name: "Набір значків факультетів", price: 399, category: "sets",
        image: "https://i.pinimg.com/1200x/0c/b6/12/0cb612578eb804f62bafea211955b7cb.jpg",
        full: "Комплект емалевих значків з міцними застібками. Яскраві кольори, глянцева поверхня, чисті контури — виглядають дорого та охайно."
    },
    {
        id: "mug-hogwarts", name: "Горнятко Hogwarts", price: 349, category: "souvenirs",
        image: "https://i.pinimg.com/736x/69/01/4e/69014e4ee1d72b6d18d9810de7091412.jpg",
        full: "Керамічне горнятко з емблемою школи. Добре зберігає тепло, зручна ручка та збалансована вага. Чудово підійде для ранкової кави."
    },
];

let cart = [];
let reviews = {};
let currentProductId = null;

const catalogPage = document.getElementById("catalogPage");
const productPage = document.getElementById("productPage");
const productGrid = document.getElementById("productGrid");
const productDetail = document.getElementById("productDetail");
const reviewsList = document.getElementById("reviewsList");
const reviewForm = document.getElementById("reviewForm");
const reviewInput = document.getElementById("reviewInput");
const backBtn = document.getElementById("backBtn");

const cartPanel = document.getElementById("cartPanel");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const openCartBtn = document.getElementById("openCart");
const closeCartBtn = document.getElementById("closeCart");
const checkoutBtn = document.getElementById("checkoutBtn");

const sidebar = document.getElementById("sidebar");
const toggleSidebarBtn = document.getElementById("toggleSidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");

function loadCart() { try { cart = JSON.parse(localStorage.getItem(LS_CART)) || []; } catch { cart = []; } }
function saveCart() { localStorage.setItem(LS_CART, JSON.stringify(cart)); }
function loadReviews() { try { reviews = JSON.parse(localStorage.getItem(LS_REVIEWS)) || {}; } catch { reviews = {}; } }
function saveReviews() { localStorage.setItem(LS_REVIEWS, JSON.stringify(reviews)); }

function renderCatalog(filter = "all") {
    productGrid.innerHTML = "";
    const list = PRODUCTS.filter(p => filter === "all" ? true : p.category === filter);
    list.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${p.image}" alt="${p.name}" onerror="this.src='${PLACEHOLDER}'">
            <div class="card-content">
                <h3 class="card-title">${p.name}</h3>
                <div class="price">${p.price} грн</div>
                <div class="actions">
                    <button class="view-btn" data-id="${p.id}">Детальніше</button>
                    <button class="add-btn" data-id="${p.id}">В кошик</button>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

function showProduct(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    currentProductId = id;

    productDetail.innerHTML = `
        <img src="${p.image}" alt="${p.name}" onerror="this.src='${PLACEHOLDER}'">
        <div class="product-info">
            <h2>${p.name}</h2>
            <div class="price">${p.price} грн</div>
            <p>${p.full}</p>
            <div class="detail-actions">
                <button class="add-btn" data-id="${p.id}">Додати в кошик</button>
                <button class="view-btn" id="backBtnTop">До каталогу</button>
            </div>
        </div>
    `;
    renderReviews(currentProductId);
    catalogPage.classList.add("hidden");
    productPage.classList.remove("hidden");

    const backTop = document.getElementById("backBtnTop");
    if (backTop) backTop.addEventListener("click", backToCatalog);
}

function backToCatalog() {
    productPage.classList.add("hidden");
    catalogPage.classList.remove("hidden");
    currentProductId = null;
}

function renderReviews(id) {
    const list = reviews[id] || [];
    reviewsList.innerHTML = "";
    list.forEach(r => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${r.date}</strong><br>${r.text}`;
        reviewsList.appendChild(li);
    });
    reviewForm.onsubmit = (e) => {
        e.preventDefault();
        const text = reviewInput.value.trim();
        if (!text) return;
        const entry = { text, date: new Date().toLocaleString("uk-UA", { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) };
        if (!reviews[id]) reviews[id] = [];
        reviews[id].push(entry);
        saveReviews();
        reviewInput.value = "";
        renderReviews(id);
    };
}

function renderCart() {
    cartItems.innerHTML = "";
    if (cart.length === 0) {
        cartItems.innerHTML = `<div class="item"><div class="item-name">Кошик порожній</div></div>`;
    } else {
        cart.forEach(it => {
            const p = PRODUCTS.find(x => x.id === it.id);
            const row = document.createElement("div");
            row.className = "item";
            row.innerHTML = `
                <div class="item-name">${p ? p.name : "Товар"}<br><span style="color:#6b5b5b;font-size:.9rem">${p ? p.price : 0} грн</span></div>
                <div class="qty">
                    <button class="qty-btn" data-act="dec" data-id="${it.id}">−</button>
                    <span>${it.qty}</span>
                    <button class="qty-btn" data-act="inc" data-id="${it.id}">+</button>
                </div>
                <button class="remove-btn" data-act="rm" data-id="${it.id}">Прибрати</button>
            `;
            cartItems.appendChild(row);
        });
    }
    const total = cart.reduce((sum, it) => {
        const p = PRODUCTS.find(x => x.id === it.id);
        return sum + (p ? p.price * it.qty : 0);
    }, 0);
    cartTotal.textContent = `${total} грн`;
    cartCount.textContent = cart.reduce((n, it) => n + it.qty, 0);
}

function addToCart(id) {
    const found = cart.find(x => x.id === id);
    if (found) { found.qty += 1; } else { cart.push({ id, qty: 1 }); }
    saveCart(); renderCart();
}

function updateQty(id, delta) {
    const found = cart.find(x => x.id === id);
    if (!found) return;
    found.qty += delta;
    if (found.qty <= 0) { cart = cart.filter(x => x.id !== id); }
    saveCart(); renderCart();
}

function removeItem(id) {
    cart = cart.filter(x => x.id !== id);
    saveCart(); renderCart();
}

function setActiveFilter(target) {
    document.querySelectorAll(".menu-item").forEach(btn => btn.classList.remove("active"));
    target.classList.add("active");
}

function openSidebar() { sidebar.classList.add("show"); }
function closeSidebar() { sidebar.classList.remove("show"); }

document.addEventListener("click", (e) => {
    const viewBtn = e.target.closest(".view-btn");
    const addBtn = e.target.closest(".add-btn");
    
    if (viewBtn && viewBtn.hasAttribute("data-id")) {
        showProduct(viewBtn.getAttribute("data-id"));
    }
    
    if (addBtn && addBtn.hasAttribute("data-id")) {
        addToCart(addBtn.getAttribute("data-id"));
    }

    const targetElement = e.target.closest(".qty-btn, .remove-btn");
    if (targetElement) {
        const id = targetElement.getAttribute("data-id");
        if (targetElement.classList.contains("qty-btn")) {
            const act = targetElement.getAttribute("data-act");
            updateQty(id, act === "inc" ? 1 : -1);
        }
        if (targetElement.classList.contains("remove-btn")) {
            removeItem(id);
        }
    }

    const menuItem = e.target.closest(".menu-item");
    if (menuItem) {
        const filter = menuItem.getAttribute("data-filter");
        setActiveFilter(menuItem);
        renderCatalog(filter);
    }
});

if (openCartBtn) {
    openCartBtn.addEventListener("click", () => { cartPanel.classList.remove("hidden"); renderCart(); });
}
if (closeCartBtn) {
    closeCartBtn.addEventListener("click", () => { cartPanel.classList.add("hidden"); });
}
if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) { alert("Ваш кошик порожній. Додайте товар перед оформленням."); return; }
        alert("Дякуємо! Це демо-версія. Тут буде оформлення замовлення.");
    });
}

if (backBtn) { backBtn.addEventListener("click", backToCatalog); }

if (toggleSidebarBtn) { toggleSidebarBtn.addEventListener("click", openSidebar); }
if (closeSidebarBtn) { closeSidebarBtn.addEventListener("click", closeSidebar); }

document.addEventListener("click", (e) => {
    const clickedInsideSidebar = sidebar.contains(e.target);
    const clickedToggle = e.target === toggleSidebarBtn || toggleSidebarBtn.contains(e.target);
    if (!clickedInsideSidebar && !clickedToggle) {
        closeSidebar();
    }
});

(function init() {
    loadCart(); 
    loadReviews();
    renderCatalog("all"); 
    renderCart();
})();