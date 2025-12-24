
const PRODUCTS = [
    { id: 1, category: 'wands', name: 'Паличка Гаррі Поттера', price: 950, image: 'https://i.pinimg.com/736x/75/86/48/7586483160321f48ccc37138c8465232.jpg', desc: 'Славнозвісна паличка з гостролиста з пером фенікса. Довжина 11 дюймів, ідеальна для захисних заклинань.' },
    { id: 2, category: 'wands', name: 'Паличка Драко Малфой', price: 1500, image: 'https://i.pinimg.com/1200x/40/07/b2/4007b2cb240315b60960e28a178f39c4.jpg', desc: 'Легендарний артефакт, одна з трьох Реліквій Смерті. Належить найсильнішому чарівнику.' },
    { id: 3, category: 'clothing', name: 'Шарф Ґрифіндору', price: 600, image: 'https://i.pinimg.com/1200x/7e/01/2b/7e012be03a35d13fd09a36b1301428c2.jpg', desc: 'Теплий вовняний шарф у червоно-золотих кольорах. Вишитий герб факультету лева.' },
    { id: 4, category: 'artifacts', name: 'Карта Мародерів', price: 450, image: 'https://i.pinimg.com/1200x/ae/9c/84/ae9c848e5ba17c0521b4da35adaa687b.jpg', desc: 'Чарівна карта, що показує кожен куточок Хогвартсу та місцезнаходження людей.' },
    { id: 5, category: 'artifacts', name: 'Артефакт часу', price: 850, image: 'https://i.pinimg.com/1200x/00/ee/5e/00ee5e1867e41a98bb8ea98fdbe6eac7.jpg', desc: 'Магічний кулон для подорожей у минуле. Одне обертання — одна година назад.' },
    { id: 6, category: 'potions', name: 'Фелікс Феліціс', price: 1200, image: 'https://i.pinimg.com/736x/60/a3/ac/60a3ac45d4b00d70241c463dd9c3e9e8.jpg', desc: 'Рідка удача. Кожна справа, за яку ви візьметеся сьогодні, завершиться успіхом.' },
    { id: 7, category: 'wands', name: 'Паличка Герміони Грейнджер', price: 920, image: 'https://i.pinimg.com/736x/5f/7e/9c/5f7e9cfa5870bd7a230a9afd98b57b05.jpg', desc: 'Витончена паличка з виноградної лози та серцевини дракона. Для мудрих чарівників.' },
    { id: 8, category: 'clothing', name: 'Шарф Слизерину', price: 600, image: 'https://i.pinimg.com/1200x/bd/af/d2/bdafd230b9f8bfa0c0f13d6a6ddc0ec0.jpg', desc: 'Елегантний зелено-сріблястий шарф для амбітних та хитрих учнів.' },
    { id: 9, category: 'artifacts', name: 'Картки з героями', price: 700, image: 'https://i.pinimg.com/1200x/0c/b6/12/0cb612578eb804f62bafea211955b7cb.jpg', desc: 'Найвидатніши герої серіалу - повісивши на рюкзак завжди будуть нагадувати гарні часи' },
    { id: 10, category: 'clothing', name: 'Краватки факультетів', price: 2500, image: 'https://i.pinimg.com/1200x/5e/b9/b4/5eb9b446723472f58d6a586f63050ac5.jpg', desc: 'Тканина зі срібної пряжі, одягни - щоб всі знали хто є твоїми улюбленцями' },
    { id: 11, category: 'potions', name: 'Жабки з послянням', price: 1100, image: 'https://i.pinimg.com/736x/b7/d2/19/b7d2196eaacd0e57633e269983118b41.jpg', desc: 'Наймогутніші найкращі герої серіалу бажають тобі дещо' },
    { id: 12, category: 'artifacts', name: 'Чашки з героями', price: 350, image: 'https://i.pinimg.com/736x/69/01/4e/69014e4ee1d72b6d18d9810de7091412.jpg', desc: 'Купуй щоб проводити вечір за чашкою кави і згадувати магію' },
    { id: 13, category: 'wands', name: 'Паличка Дамблдора', price: 1400, image: 'https://i.pinimg.com/736x/fe/99/86/fe9986fb66e1247ecdd88b81aa3b35dc.jpg', desc: 'Професійна репліка палички Альбуса Дамблдора до того, як він став власником Бузинової.' },
    { id: 14, category: 'clothing', name: 'Сова Гарі Поттера', price: 1300, image: 'https://i.pinimg.com/736x/60/3d/15/603d151ef140e374e5f44ea6874a4ecd.jpg', desc: 'Обіймай цю ішграшку і згадуй важкий шлях Гаррі' },
    { id: 15, category: 'potions', name: 'Зілля Живої Смерті', price: 980, image: 'https://i.pinimg.com/736x/c2/3c/3a/c23c3ae8c71efdf9039360c816d9bddb.jpg', desc: 'Надзвичайно потужне снодійне. Одного ковтка достатньо для глибокого магічного сну.' },
    { id: 16, category: 'artifacts', name: 'Настільна гра - Школа магії', price: 1800, image: 'https://questbox.com.ua/wp-content/uploads/2025/05/1D1A8463-%D0%B2%D1%96%D0%B4%D1%80%D0%B5%D0%B4%D0%B0%D0%B3%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE-1-700x700.jpg', desc: 'Таємничий блокнот у чорній шкіряній обкладинці. Будьте обережні з тим, що ви в ньому пишете.' },
    { id: 17, category: 'wands', name: 'Паличка Белатріси Лестрейндж', price: 1100, image: 'https://i.pinimg.com/1200x/b5/99/d4/b599d4a91473b2f9fa966b0f00f3aeac.jpg', desc: 'Вигнута паличка з волоського горіха та серцевини дракона. Відчувається дуже важкою у руці.' },
    { id: 19, category: 'potions', name: 'Екстракт Бадьорості', price: 400, image: 'https://i.pinimg.com/736x/02/fa/65/02fa65a172f849d95eaf98e171189fea.jpg', desc: 'Знімає будь-яку втому та сонливість за лічені секунди. Ідеально під час іспитів.' },
    { id: 20, category: 'artifacts', name: 'Медальйон Салазара Слизерина', price: 2200, image: 'https://i.pinimg.com/1200x/2d/c4/21/2dc4215aff44f082046915b0fc9f8a25.jpg', desc: 'Стародавня реліквія зі зміїним орнаментом. Випромінює дивну холодну енергію.' },
    { id: 21, category: 'wands', name: 'Паличка Сіріуса Блека', price: 1050, image: 'https://i.pinimg.com/736x/47/19/1c/47191c7f834f4870cafe5a9c97611e45.jpg', desc: 'Пряма паличка з рунічними символами на руків\'ї. Потужний інструмент досвідченого мага.' },
    { id: 22, category: 'clothing', name: 'Гостроверхий капелюх', price: 800, image: 'https://i.pinimg.com/736x/d5/4c/bb/d54cbbc6c9c76f1761d909644883add0.jpg', desc: 'Класичний головний убір чарівника. Захищає від дощу та додає авторитету.' },
    { id: 23, category: 'potions', name: 'Веритасерум', price: 1600, image: 'https://i.pinimg.com/1200x/71/50/68/715068c722f193d1978c15165510242c.jpg', desc: 'Три краплі — і ви не зможете сказати жодного слова неправди. Використовуйте відповідально.' },
    { id: 24, category: 'artifacts', name: 'Діадема Ровени Когтевран', price: 2600, image: 'https://i.pinimg.com/736x/e3/b2/e7/e3b2e761ae5e1cf85983c8774a1ab1ac.jpg', desc: 'Напис на діадемі: "Розум понад усе — це найбільший скарб людини". Додає мудрості.' },
    { id: 25, category: 'wands', name: 'Паличка Луни Лавґуд', price: 880, image: 'https://i.pinimg.com/736x/ae/ef/3f/aeef3f91bfdaca528b3c321fd3d19b1d.jpg', desc: 'Паличка з витонченим дизайном, що нагадує пелюстки квітів. Для творчих натур.' },
    { id: 26, category: 'clothing', name: 'Рукавиці з драконячої шкіри', price: 550, image: 'https://i.pinimg.com/736x/a1/e2/6b/a1e26b0e649c83b424f09314390d626b.jpg', desc: 'Непробивні рукавиці для роботи з небезпечними рослинами та зіллями.' },
    { id: 27, category: 'potions', name: 'Кров Єдинорога', price: 3000, image: 'https://i.pinimg.com/736x/1c/ac/51/1cac51df901ed8832badb49f73f8aa41.jpg', desc: 'Заборонена до вільного продажу речовина, що дарує безсмертя, але страшною ціною.' },
    { id: 28, category: 'artifacts', name: 'Келих Трьох Чарівників', price: 4500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8H_AXa5N48iulk0qNJtDkqHiigRZb_kFOpi2RFQgsotf2HFXeftyBu--dpWWdRG5RNO0&usqp=CAU', desc: 'Головна нагорода магічного турніру. Світиться блакитним магічним полум\'ям.' },
    { id: 29, category: 'wands', name: 'Паличка Рона Візлі', price: 850, image: 'https://i.pinimg.com/1200x/a9/ac/07/a9ac07f82d7e89aded9b812da61baa9c.jpg', desc: 'Паличка з верби та волосини єдинорога. Друга паличка Рона, вірна та надійна.' },
    { id: 30, category: 'artifacts', name: 'Кришталева куля для пророцтв', price: 1100, image: 'https://i.pinimg.com/1200x/c0/ec/e0/c0ece048ef673cee19265a78f907c45c.jpg', desc: 'Професійний інструмент для віщування майбутнього. Дивіться глибше в туман.' }
];

// Глобальні змінні
let cart = [];
let currentProducts = [...PRODUCTS];
let currentCategory = 'all';
let searchTerm = '';


function createMagicParticles() {
    const container = document.getElementById('magicParticles');
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(particle);
        
        setTimeout(() => particle.remove(), 8000);
    }, 300);
}

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


const searchToggle = document.getElementById('searchToggle');
const searchPanel = document.getElementById('searchPanel');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');

searchToggle.addEventListener('click', () => {
    searchPanel.classList.add('active');
    setTimeout(() => searchInput.focus(), 100);
});

searchClose.addEventListener('click', () => {
    searchPanel.classList.remove('active');
    searchInput.value = '';
    searchTerm = '';
    filterProducts();
});

let searchTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        searchTerm = e.target.value.toLowerCase().trim();
        filterProducts();
        
       
        if (searchTerm.length > 0) {
            setTimeout(() => {
                searchPanel.classList.remove('active');
            }, 500);
        }
    }, 300);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchPanel.classList.remove('active');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

const categoryTabs = document.querySelectorAll('.category-tab');
categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentCategory = tab.dataset.category;
        filterProducts();
    });
});

const sortButtons = document.querySelectorAll('.sort-btn');
sortButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const sortType = btn.dataset.sort;
        if (sortType === 'low') {
            currentProducts.sort((a, b) => a.price - b.price);
        } else if (sortType === 'high') {
            currentProducts.sort((a, b) => b.price - a.price);
        } else {
            filterProducts();
            return;
        }
        renderProducts();
    });
});

function filterProducts() {
    let filtered = [...PRODUCTS];
    

    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }
    

    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.desc.toLowerCase().includes(searchTerm) ||
            p.category.toLowerCase().includes(searchTerm)
        );
    }
    
    currentProducts = filtered;
    renderProducts();
}
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    if (currentProducts.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem;">
                <h3 style="font-size: 2rem; color: var(--brown-medium); margin-bottom: 1rem;">Нічого не знайдено 😔</h3>
                <p style="color: var(--brown-light);">Спробуйте інші критерії пошуку</p>
            </div>
        `;
        return;
    }
    
    currentProducts.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = (index * 0.1) + 's';
        
        const categoryEmoji = {
            'wands': '🪄',
            'clothing': '🧣',
            'artifacts': '📜',
            'potions': '⚗️'
        };
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x300?text=Magic'">
                <div class="product-badge">${categoryEmoji[product.category]} ${getCategoryName(product.category)}</div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${product.price} грн</div>
                <div class="product-actions">
                    <button class="btn btn-details" onclick="showProductDetails(${product.id})">
                        <span>Детальніше</span>
                    </button>
                    <button class="btn btn-cart" onclick="addToCart(${product.id})">
                        <span></span>
                    </button>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function getCategoryName(category) {
    const names = {
        'wands': 'Палички',
        'clothing': 'Одяг',
        'artifacts': 'Артефакти',
        'potions': 'Зілля'
    };
    return names[category] || category;
}

const modal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.querySelector('.modal-backdrop');

window.showProductDetails = function(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-details">
            <h2>${product.name}</h2>
            <div class="price">${product.price} грн</div>
            <p class="description">${product.desc}</p>
            <ul class="features">
                <li>✓ Автентичний магічний артефакт</li>
                <li>✓ Доставка совиною поштою (1-2 дні)</li>
                <li>✓ Очищено від темних заклять</li>
                <li>✓ Гарантія 100 років</li>
                <li>✓ Сертифікат від Міністерства Магії</li>
            </ul>
            <button class="btn btn-cart" onclick="addToCart(${product.id}); closeModal();" style="width: 100%; padding: 1rem; font-size: 1.1rem;">
                <span>Додати до кошика</span>
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

const cartToggle = document.getElementById('cartToggle');
const cartSidebar = document.getElementById('cartSidebar');
const cartClose = document.getElementById('cartClose');
const cartCounter = document.getElementById('cartCounter');

cartToggle.addEventListener('click', () => {
    cartSidebar.classList.add('active');
});

cartClose.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
});

window.addToCart = function(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;
    
    cart.push(product);
    updateCart();
    showToast('✨ Товар додано до кошика!', product.name);
}

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    cartCounter.textContent = cart.length;
    
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div style="text-align: center; padding: 3rem; color: var(--brown-light);"><p style="font-size: 1.2rem;">Кошик порожній 🧳</p></div>';
        cartTotal.textContent = '0 грн';
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = '';
    
    cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} грн</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})">✕</button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = total + ' грн';
}

const checkoutBtn = document.getElementById('checkoutBtn');
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('⚠️ Кошик порожній', 'Додайте товари перед оформленням');
        return;
    }
    
    showToast('🦉 Замовлення оформлено!', 'Очікуйте на сову з підтвердженням');
    cart = [];
    updateCart();
    cartSidebar.classList.remove('active');
});
function showToast(message, subtitle = '') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-icon">✨</div>
        <div class="toast-content">
            <div class="toast-message">${message}</div>
            ${subtitle ? `<div style="font-size: 0.9rem; opacity: 0.8;">${subtitle}</div>` : ''}
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
    `;
    
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

document.addEventListener('DOMContentLoaded', () => {
    createMagicParticles();
    renderProducts();
    updateCart();
    console.log('✨ Enchanted Trunk готовий до магії!');
});