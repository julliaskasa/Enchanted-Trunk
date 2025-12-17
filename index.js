const PRODUCTS = [
    { id: 1, category: 'wands', name: 'Паличка Гаррі Поттера', price: 950, image: 'https://i.pinimg.com/736x/75/86/48/7586483160321f48ccc37138c8465232.jpg', desc: 'Славнозвісна паличка з гостролиста з пером фенікса. Довжина 11 дюймів, ідеальна для захисних заклинань.' },
    { id: 2, category: 'wands', name: 'Бузинова Паличка', price: 1500, image: 'https://i.pinimg.com/1200x/40/07/b2/4007b2cb240315b60960e28a178f39c4.jpg', desc: 'Легендарний артефакт, одна з трьох Реліквій Смерті. Належить найсильнішому чарівнику.' },
    { id: 3, category: 'clothing', name: 'Шарф Ґрифіндору', price: 600, image: 'https://i.pinimg.com/1200x/7e/01/2b/7e012be03a35d13fd09a36b1301428c2.jpg', desc: 'Теплий вовняний шарф у червоно-золотих кольорах. Вишитий герб факультету лева.' },
    { id: 4, category: 'artifacts', name: 'Карта Мародерів', price: 450, image: 'https://i.pinimg.com/1200x/ae/9c/84/ae9c848e5ba17c0521b4da35adaa687b.jpg', desc: 'Чарівна карта, що показує кожен куточок Хогвартсу та місцезнаходження людей.' },
    { id: 5, category: 'artifacts', name: 'Маховик Часу', price: 850, image: 'https://i.pinimg.com/1200x/00/ee/5e/00ee5e1867e41a98bb8ea98fdbe6eac7.jpg', desc: 'Магічний кулон для подорожей у минуле. Одне обертання — одна година назад.' },
    { id: 6, category: 'potions', name: 'Фелікс Феліціс', price: 1200, image: 'https://i.pinimg.com/736x/60/a3/ac/60a3ac45d4b00d70241c463dd9c3e9e8.jpg', desc: 'Рідка удача. Кожна справа, за яку ви візьметеся сьогодні, завершиться успіхом.' },
    { id: 7, category: 'wands', name: 'Паличка Герміони Грейнджер', price: 920, image: 'https://i.pinimg.com/736x/5f/7e/9c/5f7e9cfa5870bd7a230a9afd98b57b05.jpg', desc: 'Витончена паличка з виноградної лози та серцевини дракона. Для мудрих чарівників.' },
    { id: 8, category: 'clothing', name: 'Шарф Слизерину', price: 600, image: 'https://i.pinimg.com/1200x/bd/af/d2/bdafd230b9f8bfa0c0f13d6a6ddc0ec0.jpg', desc: 'Елегантний зелено-сріблястий шарф для амбітних та хитрих учнів.' },
    { id: 9, category: 'artifacts', name: 'Золотий Снітч', price: 700, image: 'https://i.pinimg.com/1200x/0c/b6/12/0cb612578eb804f62bafea211955b7cb.jpg', desc: 'Найшвидший м’яч у Квідичі. Спіймайте його, щоб отримати 150 очок та завершити гру.' },
    { id: 10, category: 'clothing', name: 'Мантія Невидимка', price: 2500, image: 'https://i.pinimg.com/1200x/5e/b9/b4/5eb9b446723472f58d6a586f63050ac5.jpg', desc: 'Тканина зі срібної пряжі, що робить власника повністю невидимим. Справжня Реліквія Смерті.' },
    { id: 11, category: 'potions', name: 'Амортенція (Любов)', price: 1100, image: 'https://i.pinimg.com/736x/b7/d2/19/b7d2196eaacd0e57633e269983118b41.jpg', desc: 'Наймогутніший приворотний засіб у світі. Пахне тим, що вам найбільше подобається.' },
    { id: 12, category: 'artifacts', name: 'Скляна куля Невиправдальник', price: 350, image: 'https://i.pinimg.com/736x/69/01/4e/69014e4ee1d72b6d18d9810de7091412.jpg', desc: 'Куля наповнюється червоним димом, якщо ви про щось забули. Дуже корисно для студентів.' },
    { id: 13, category: 'wands', name: 'Паличка Дамблдора', price: 1400, image: 'https://i.pinimg.com/736x/fe/99/86/fe9986fb66e1247ecdd88b81aa3b35dc.jpg', desc: 'Професійна репліка палички Альбуса Дамблдора до того, як він став власником Бузинової.' },
    { id: 14, category: 'clothing', name: 'Светр місіс Візлі', price: 1300, image: 'https://i.pinimg.com/736x/60/3d/15/603d151ef140e374e5f44ea6874a4ecd.jpg', desc: 'В’язаний вручну Молі Візлі. Кожна петелька наповнена любов’ю та домашнім затишком.' },
    { id: 15, category: 'potions', name: 'Зілля Живої Смерті', price: 980, image: 'https://i.pinimg.com/736x/c2/3c/3a/c23c3ae8c71efdf9039360c816d9bddb.jpg', desc: 'Надзвичайно потужне снодійне. Одного ковтка достатньо для глибокого магічного сну.' },
    { id: 16, category: 'artifacts', name: 'Щоденник Тома Редла', price: 1800, image: 'https://questbox.com.ua/wp-content/uploads/2025/05/1D1A8463-%D0%B2%D1%96%D0%B4%D1%80%D0%B5%D0%B4%D0%B0%D0%B3%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE-1-700x700.jpg', desc: 'Таємничий блокнот у чорній шкіряній обкладинці. Будьте обережні з тим, що ви в ньому пишете.' },
    { id: 17, category: 'wands', name: 'Паличка Белатріси Лестрейндж', price: 1100, image: 'https://i.pinimg.com/1200x/b5/99/d4/b599d4a91473b2f9fa966b0f00f3aeac.jpg', desc: 'Вигнута паличка з волоського горіха та серцевини дракона. Відчувається дуже важкою у руці.' },
    { id: 18, category: 'clothing', name: 'Офіційна краватка Хогвартсу', price: 250, image: 'https://i.pinimg.com/1200x/5e/b9/b4/5eb9b446723472f58d6a586f63050ac5.jpg', desc: 'Шовкова краватка для щоденного навчання. Оберіть свій факультет.' },
    { id: 19, category: 'potions', name: 'Екстракт Бадьорості', price: 400, image: 'https://i.pinimg.com/736x/02/fa/65/02fa65a172f849d95eaf98e171189fea.jpg', desc: 'Знімає будь-яку втому та сонливість за лічені секунди. Ідеально під час іспитів.' },
    { id: 20, category: 'artifacts', name: 'Медальйон Салазара Слизерина', price: 2200, image: 'https://i.pinimg.com/1200x/2d/c4/21/2dc4215aff44f082046915b0fc9f8a25.jpg', desc: 'Стародавня реліквія зі зміїним орнаментом. Випромінює дивну холодну енергію.' },
    { id: 21, category: 'wands', name: 'Паличка Сіріуса Блека', price: 1050, image: 'https://i.pinimg.com/736x/47/19/1c/47191c7f834f4870cafe5a9c97611e45.jpg', desc: 'Пряма паличка з рунічними символами на руків’ї. Потужний інструмент досвідченого мага.' },
    { id: 22, category: 'clothing', name: 'Гостроверхий капелюх', price: 800, image: 'https://i.pinimg.com/736x/d5/4c/bb/d54cbbc6c9c76f1761d909644883add0.jpg', desc: 'Класичний головний убір чарівника. Захищає від дощу та додає авторитету.' },
    { id: 23, category: 'potions', name: 'Веритасерум', price: 1600, image: 'https://i.pinimg.com/1200x/71/50/68/715068c722f193d1978c15165510242c.jpg', desc: 'Три краплі — і ви не зможете сказати жодного слова неправди. Використовуйте відповідально.' },
    { id: 24, category: 'artifacts', name: 'Діадема Ровени Когтевран', price: 2600, image: 'https://i.pinimg.com/736x/e3/b2/e7/e3b2e761ae5e1cf85983c8774a1ab1ac.jpg', desc: 'Напис на діадемі: "Розум понад усе — це найбільший скарб людини". Додає мудрості.' },
    { id: 25, category: 'wands', name: 'Паличка Луни Лавґуд', price: 880, image: 'https://i.pinimg.com/736x/ae/ef/3f/aeef3f91bfdaca528b3c321fd3d19b1d.jpg', desc: 'Паличка з витонченим дизайном, що нагадує пелюстки квітів. Для творчих натур.' },
    { id: 26, category: 'clothing', name: 'Рукавиці з драконячої шкіри', price: 550, image: 'https://i.pinimg.com/736x/a1/e2/6b/a1e26b0e649c83b424f09314390d626b.jpg', desc: 'Непробивні рукавиці для роботи з небезпечними рослинами та зіллями.' },
    { id: 27, category: 'potions', name: 'Кров Єдинорога', price: 3000, image: 'https://i.pinimg.com/736x/1c/ac/51/1cac51df901ed8832badb49f73f8aa41.jpg', desc: 'Заборонена до вільного продажу речовина, що дарує безсмертя, але страшною ціною.' },
    { id: 28, category: 'artifacts', name: 'Келих Трьох Чарівників', price: 4500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8H_AXa5N48iulk0qNJtDkqHiigRZb_kFOpi2RFQgsotf2HFXeftyBu--dpWWdRG5RNO0&usqp=CAU', desc: 'Головна нагорода магічного турніру. Світиться блакитним магічним полум’ям.' },
    { id: 29, category: 'wands', name: 'Паличка Рона Візлі', price: 850, image: 'https://i.pinimg.com/1200x/a9/ac/07/a9ac07f82d7e89aded9b812da61baa9c.jpg', desc: 'Паличка з верби та волосини єдинорога. Друга паличка Рона, вірна та надійна.' },
    { id: 30, category: 'artifacts', name: 'Кришталева куля для пророцтв', price: 1100, image: 'https://i.pinimg.com/1200x/c0/ec/e0/c0ece048ef673cee19265a78f907c45c.jpg', desc: 'Професійний інструмент для віщування майбутнього. Дивіться глибше в туман.' }
];

let cart = JSON.parse(localStorage.getItem('et_cart_data')) || [];
let filteredProducts = [...PRODUCTS];

function renderProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x300?text=Magic+Item'">
            <div class="card-info">
                <h3 class="card-title">${product.name}</h3>
                <p class="card-price">${product.price} грн</p>
                <div class="card-btns">
                    <button class="btn-more" data-id="${product.id}">Детальніше</button>
                    <button class="btn-buy" data-id="${product.id}">Купити</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener('click', (e) => {
    const target = e.target;
    
    if (target.classList.contains('btn-more')) {
        const id = parseInt(target.getAttribute('data-id'));
        showProductDetails(id);
    }
    
    if (target.classList.contains('btn-buy')) {
        const id = parseInt(target.getAttribute('data-id'));
        addToCart(id);
    }
});

function showProductDetails(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;

    document.getElementById('catalogSection').classList.add('hidden');
    document.getElementById('detailSection').classList.remove('hidden');
    window.scrollTo(0, 0);

    document.getElementById('productDetailContent').innerHTML = `
        <div class="detail-container">
            <img src="${p.image}" alt="${p.name}">
            <div>
                <h1>${p.name}</h1>
                <h2 style="color: var(--primary)">${p.price} грн</h2>
                <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 25px;">${p.desc}</p>
                <ul style="margin-bottom: 30px; opacity: 0.8;">
                    <li>✓ Матеріал: Високоякісні магічні компоненти</li>
                    <li>✓ Доставка: Совиною поштою (1-2 дні)</li>
                    <li>✓ Стан: Очищено від темних заклять</li>
                </ul>
                <button class="btn-buy" style="width: 100%; padding: 20px; font-size: 1.1rem;" data-id="${p.id}">Покласти у валізу</button>
            </div>
        </div>
    `;
}

document.getElementById('backToCatalog').addEventListener('click', () => {
    document.getElementById('catalogSection').classList.remove('hidden');
    document.getElementById('detailSection').classList.add('hidden');
});

function addToCart(id) {
    const product = PRODUCTS.find(x => x.id === id);
    if (product) {
        cart.push(product);
        localStorage.setItem('et_cart_data', JSON.stringify(cart));
        updateCartUI();
        const cartBtn = document.getElementById('openCart');
        cartBtn.style.transform = 'scale(1.1)';
        setTimeout(() => cartBtn.style.transform = 'scale(1)', 200);
    }
}

function updateCartUI() {
    const countEl = document.getElementById('cartCount');
    const listEl = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    
    countEl.innerText = cart.length;
    listEl.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const itemDiv = document.createElement('div');
        itemDiv.style = "display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #eee;";
        itemDiv.innerHTML = `
            <div>
                <strong style="display:block;">${item.name}</strong>
                <small>${item.price} грн</small>
            </div>
            <button onclick="removeFromCart(${index})" style="background:none; border:none; color:red; cursor:pointer; font-size: 1.2rem;">✕</button>
        `;
        listEl.appendChild(itemDiv);
    });

    totalEl.innerText = total;
}

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('et_cart_data', JSON.stringify(cart));
    updateCartUI();
};

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        filteredProducts = filter === 'all' ? [...PRODUCTS] : PRODUCTS.filter(p => p.category === filter);
        renderProducts();
    });
});

document.getElementById('sortLow').addEventListener('click', () => {
    filteredProducts.sort((a, b) => a.price - b.price);
    renderProducts();
});

document.getElementById('sortHigh').addEventListener('click', () => {
    filteredProducts.sort((a, b) => b.price - a.price);
    renderProducts();
});

document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    filteredProducts = PRODUCTS.filter(p => p.name.toLowerCase().includes(term));
    renderProducts();
});

document.getElementById('openCart').addEventListener('click', () => {
    document.getElementById('cartOverlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

document.getElementById('closeCart').addEventListener('click', () => {
    document.getElementById('cartOverlay').classList.add('hidden');
    document.body.style.overflow = 'auto';
});

document.getElementById('orderBtn').addEventListener('click', () => {
    if (cart.length === 0) return alert("Ваша валіза порожня!");
    alert("Ваше магічне замовлення прийнято! Чекайте на сову.");
    cart = [];
    localStorage.removeItem('et_cart_data');
    updateCartUI();
    document.getElementById('cartOverlay').classList.add('hidden');
    document.body.style.overflow = 'auto';
});

document.getElementById('toggleSidebar').addEventListener('click', () => {
    document.getElementById('sidebar').style.display = 'block';
});
document.getElementById('closeSidebar').addEventListener('click', () => {
    document.getElementById('sidebar').style.display = 'none';
});

// Запуск
updateCartUI();
renderProducts();