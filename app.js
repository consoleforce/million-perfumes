const pricesByML = {
  20: 16000,
  30: 22000,
  50: 35000,
  100: 60000
};

const comboConfigs = {
  "combo-bro": {
    title: "COMBO BRO 2+1",
    ml: 20,
    totalML: 60,
    price: 35000,
    oldPrice: 45000,
    perfumes: [
      "Sauvage Eau de Parfum Dior ( мужской )",
      "Sauvage Elixir Dior ( мужской )",
      "Versace Pour Homme Dylan Blue ( мужской )",
      "K by Dolce&Gabbana ( мужской )",
      "Light Blue pour Homme Dolce&Gabbana ( мужской )",
      "Haltane Parfums de Marly ( мужской )",
      "Explorer Ultra Blue Montblanc ( мужской )",
      "Vercase Man Eau Fraiche ( мужской )",
      "Royal Eagle Gold Stefano Ricci ( мужской )",
      "1 Million Rabanne ( мужской )",
      "Le Male Jean Paul Gaultier ( мужской )",
      "Dior Homme Cologne 2022 ( мужской )",
      "Epic Man Amouage ( мужской )",
      "Interlude Man Amouage ( мужской )",
      "Blue Seduction Antonio Banderas ( мужской )",
      "Eau de Lacoste L.12.12 White ( мужской )",
      "Aventus Creed ( мужской )",
      "Absolu Aventus Creed ( мужской )",
      "Meteore Louis Vuitton ( мужской )",
      "Imagination Louis Vuitton ( мужской )",
      "L'Immensite Louis Vuitton ( мужской )",
      "Oligarch Roja Dove ( мужской )",
      "Colonia C.L.U.B. Acqua di Parma ( мужской )",
      "Explorer Montblanc ( мужской )",
      "Elysium Pour Homme Parfum Cologne Roja Dove ( мужской )",
      "212 VIP Men Carolina Herrera ( мужской )",
      "Invictus Rabanne ( мужской )",
      "Tygar Bvlgari ( мужской )",
      "Versace Pour Homme ( мужской )",
      "Eros Versace ( мужской )",
      "Le Beau Paradise Garden Jean Paul Gaultier ( мужской )",
      "Le Male Le Parfum Jean Paul Gaultier ( мужской )",
      "Le Beau Jean Paul Gaultier ( мужской )",
      "Emporio Armani Stronger With You Tobacco Giorgio Armani ( мужской )",
      "Dior Homme Sport 2012 Dior ( мужской )",
      "Emporio Armani Stronger With You Intensely ( мужской )",
      "Acqua di Gio Armani ( мужской )",
      "Bleu de Chanel ( мужской )",
      "Allure Homme Sport Eau Extreme Chanel ( мужской )",
      "Emporio Armani Stronger With You Giorgio Armani ( мужской )",
      "Dior Homme Intense 2011 Dior ( мужской )",
      "Hugo Boss Bottled Unlimited ( мужской )",
      "Invictus Aqua (2018) Rabanne ( мужской )",
      "212 Sexy Men Carolina Herrera ( мужской )",
      "Phantom Rabanne ( мужской )",
      "Miss Dior Blooming Bouquet ( женский )",
      "Chance Eau Tendre Chanel ( женский )",
      "Good Girl Gone Bad by Kilian ( женский )",
      "Black Opium Yves Saint Laurent ( женский )",
      "Coco Mademoiselle Chanel ( женский )",
      "Blanche Byredo ( женский )",
      "Flora by Gucci Eau de Parfum Gucci ( женский )",
      "Peony & Blush Suede Jo Malone London ( женский )",
      "Gaultier Divine Jean Paul Gaultier ( женский )",
      "Bright Crystal Versace  ( женский )",
      "D&G Anthology L'Imperatrice 3 ( женский )",
      "Cheap&Chic I Love Love Moschino ( женский )",
      "Lady Million Rabanne ( женский )",
      "Bombshell Eau de Parfum Victoria's Secret ( женский )",
      "Eau So Sexy Victoria's Secret ( женский )",
      "Carmina Creed ( женский )",
      "Si Passione Giorgio Armani ( женский )",
      "Libre Yves Saint Laurent ( женский )",
      "Lacoste Pour Femme ( женский )",
      "Honour Woman Amouage ( женский )",
      "Lucky Wish Anna Sui ( женский )",
      "My Way Giorgio Armani ( женский )",
      "Eclat d'Arpege Lanvin ( женский )",
      "Flora Gorgeous Magnolia Gucci ( женский )",
      "Yara Lattafa Perfumes ( женский )",
      "Roses Must Montale ( женский )",
      "Dark Purple Montale ( женский )",
      "Dolce Violet Dolce&Gabbana ( женский )",
      "Dolce Peony Dolce&Gabbana ( женский )",
      "Delina Exclusif Parfums de Marly ( женский )",
      "Angels' Share By Kilian ( unisex )",
      "Kirke Tiziana Terenzi ( unisex )",
      "Gumin Tiziana Terenzi ( unisex )",
      "Layton Parfums de Marly ( unisex )",
      "Baccarat Rouge 540 Maison Francis Kurkdjian ( unisex )",
      "Oud for Greatness Initio Parfums Prives ( unisex )",
      "Fleur Narcotique Ex Nihilo ( unisex )",
      "Amber Musk Montale ( unisex )",
      "Blue Talisman Ex Nihilo ( unisex )",
      "Molecule 02 Escentric ( unisex )",
      "More Than Words Xerjoff ( unisex )",
      "Colonia Futura Acqua di Parma ( unisex )",
      "London WIDIAN ( unisex )",
      "Oceania Roja Dove ( unisex )",
      "Blue Moon Ginger Dash by Kilian ( unisex )",
      "Erba Pura Magica Sospiro Perfumes ( unisex )",
      "Oud Minerale Tom Ford ( unisex )",
      "Arabians Tonka Montale ( unisex )",
      "Black Phantom By Kilian ( unisex )",
      "Musk Abiyad Afnan ( unisex )",
      "Ganymede Marc-Antoine Barrois ( unisex )",
      "Greenley Parfums de Marly ( unisex )",
      "Pacific Chill Louis Vuitton ( unisex )",
      "Silver Moutain Water Creed ( unisex )",
      "Tobacco Vanille Tom Ford ( unisex )",
      "Oud Minerale Tom Ford ( unisex )",
      "Must Kashmir Attar Collection ( unisex )",
      "Ombre Leather (2018) Tom Ford ( unisex )",
      "Oud Wood Tom Ford ( unisex )",
      "Lost Cherry Tom Ford ( unisex )",
      "Afternoon Swim Louis Vuitton ( unisex )",
      "Ombre Nomade Louis Vuitton ( unisex )",
      "Ani Nishane ( unisex )",
      "Megamare Orto Parisi ( unisex )",
      "Nefs Nishane ( unisex )",
      "Bois Imperial Essential Parfums ( unisex )",
      "Black Pepper & Amber, Neroli Zielinski & Rozen ( unisex )",
      "Oud Maracuja Maison Crivelli ( unisex )",
      "Escentric 04 Escentric Molecules ( unisex )",
      "Black Afgano Nasomatto ( unisex )",
      "Mukhallat Montale ( unisex )",
      "Intoxicated By Kilian ( unisex )",
      "Hibiscus Mahajad Maison Crivelli ( unisex )",
      "More Than Words Xerojoff ( unisex )"
    ]
  },
  "combo-million": {
    title: "COMBO MILLION 2+1",
    ml: 30,
    totalML: 90,
    price: 49990,
    oldPrice: 65000,
    perfumes: [
      "Sauvage Eau de Parfum Dior ( мужской )",
      "Sauvage Elixir Dior ( мужской )",
      "Versace Pour Homme Dylan Blue ( мужской )",
      "K by Dolce&Gabbana ( мужской )",
      "Light Blue pour Homme Dolce&Gabbana ( мужской )",
      "Haltane Parfums de Marly ( мужской )",
      "Explorer Ultra Blue Montblanc ( мужской )",
      "Vercase Man Eau Fraiche ( мужской )",
      "Royal Eagle Gold Stefano Ricci ( мужской )",
      "1 Million Rabanne ( мужской )",
      "Le Male Jean Paul Gaultier ( мужской )",
      "Dior Homme Cologne 2022 ( мужской )",
      "Epic Man Amouage ( мужской )",
      "Interlude Man Amouage ( мужской )",
      "Blue Seduction Antonio Banderas ( мужской )",
      "Eau de Lacoste L.12.12 White ( мужской )",
      "Aventus Creed ( мужской )",
      "Absolu Aventus Creed ( мужской )",
      "Meteore Louis Vuitton ( мужской )",
      "Imagination Louis Vuitton ( мужской )",
      "L'Immensite Louis Vuitton ( мужской )",
      "Oligarch Roja Dove ( мужской )",
      "Colonia C.L.U.B. Acqua di Parma ( мужской )",
      "Explorer Montblanc ( мужской )",
      "Elysium Pour Homme Parfum Cologne Roja Dove ( мужской )",
      "212 VIP Men Carolina Herrera ( мужской )",
      "Invictus Rabanne ( мужской )",
      "Tygar Bvlgari ( мужской )",
      "Versace Pour Homme ( мужской )",
      "Eros Versace ( мужской )",
      "Le Beau Paradise Garden Jean Paul Gaultier ( мужской )",
      "Le Male Le Parfum Jean Paul Gaultier ( мужской )",
      "Le Beau Jean Paul Gaultier ( мужской )",
      "Emporio Armani Stronger With You Tobacco Giorgio Armani ( мужской )",
      "Dior Homme Sport 2012 Dior ( мужской )",
      "Emporio Armani Stronger With You Intensely ( мужской )",
      "Acqua di Gio Armani ( мужской )",
      "Bleu de Chanel ( мужской )",
      "Allure Homme Sport Eau Extreme Chanel ( мужской )",
      "Emporio Armani Stronger With You Giorgio Armani ( мужской )",
      "Dior Homme Intense 2011 Dior ( мужской )",
      "Hugo Boss Bottled Unlimited ( мужской )",
      "Invictus Aqua (2018) Rabanne ( мужской )",
      "212 Sexy Men Carolina Herrera ( мужской )",
      "Phantom Rabanne ( мужской )",
      "Miss Dior Blooming Bouquet ( женский )",
      "Chance Eau Tendre Chanel ( женский )",
      "Good Girl Gone Bad by Kilian ( женский )",
      "Black Opium Yves Saint Laurent ( женский )",
      "Coco Mademoiselle Chanel ( женский )",
      "Blanche Byredo ( женский )",
      "Flora by Gucci Eau de Parfum Gucci ( женский )",
      "Peony & Blush Suede Jo Malone London ( женский )",
      "Gaultier Divine Jean Paul Gaultier ( женский )",
      "Bright Crystal Versace  ( женский )",
      "D&G Anthology L'Imperatrice 3 ( женский )",
      "Cheap&Chic I Love Love Moschino ( женский )",
      "Lady Million Rabanne ( женский )",
      "Bombshell Eau de Parfum Victoria's Secret ( женский )",
      "Eau So Sexy Victoria's Secret ( женский )",
      "Carmina Creed ( женский )",
      "Si Passione Giorgio Armani ( женский )",
      "Libre Yves Saint Laurent ( женский )",
      "Lacoste Pour Femme ( женский )",
      "Honour Woman Amouage ( женский )",
      "Lucky Wish Anna Sui ( женский )",
      "My Way Giorgio Armani ( женский )",
      "Eclat d'Arpege Lanvin ( женский )",
      "Flora Gorgeous Magnolia Gucci ( женский )",
      "Yara Lattafa Perfumes ( женский )",
      "Roses Must Montale ( женский )",
      "Dark Purple Montale ( женский )",
      "Dolce Violet Dolce&Gabbana ( женский )",
      "Dolce Peony Dolce&Gabbana ( женский )",
      "Delina Exclusif Parfums de Marly ( женский )",
      "Angels' Share By Kilian ( unisex )",
      "Kirke Tiziana Terenzi ( unisex )",
      "Gumin Tiziana Terenzi ( unisex )",
      "Layton Parfums de Marly ( unisex )",
      "Baccarat Rouge 540 Maison Francis Kurkdjian ( unisex )",
      "Oud for Greatness Initio Parfums Prives ( unisex )",
      "Fleur Narcotique Ex Nihilo ( unisex )",
      "Amber Musk Montale ( unisex )",
      "Blue Talisman Ex Nihilo ( unisex )",
      "Molecule 02 Escentric ( unisex )",
      "More Than Words Xerjoff ( unisex )",
      "Colonia Futura Acqua di Parma ( unisex )",
      "London WIDIAN ( unisex )",
      "Oceania Roja Dove ( unisex )",
      "Blue Moon Ginger Dash by Kilian ( unisex )",
      "Erba Pura Magica Sospiro Perfumes ( unisex )",
      "Oud Minerale Tom Ford ( unisex )",
      "Arabians Tonka Montale ( unisex )",
      "Black Phantom By Kilian ( unisex )",
      "Musk Abiyad Afnan ( unisex )",
      "Ganymede Marc-Antoine Barrois ( unisex )",
      "Greenley Parfums de Marly ( unisex )",
      "Pacific Chill Louis Vuitton ( unisex )",
      "Silver Moutain Water Creed ( unisex )",
      "Tobacco Vanille Tom Ford ( unisex )",
      "Oud Minerale Tom Ford ( unisex )",
      "Must Kashmir Attar Collection ( unisex )",
      "Ombre Leather (2018) Tom Ford ( unisex )",
      "Oud Wood Tom Ford ( unisex )",
      "Lost Cherry Tom Ford ( unisex )",
      "Afternoon Swim Louis Vuitton ( unisex )",
      "Ombre Nomade Louis Vuitton ( unisex )",
      "Ani Nishane ( unisex )",
      "Megamare Orto Parisi ( unisex )",
      "Nefs Nishane ( unisex )",
      "Bois Imperial Essential Parfums ( unisex )",
      "Black Pepper & Amber, Neroli Zielinski & Rozen ( unisex )",
      "Oud Maracuja Maison Crivelli ( unisex )",
      "Escentric 04 Escentric Molecules ( unisex )",
      "Black Afgano Nasomatto ( unisex )",
      "Mukhallat Montale ( unisex )",
      "Intoxicated By Kilian ( unisex )",
      "Hibiscus Mahajad Maison Crivelli ( unisex )",
      "More Than Words Xerojoff ( unisex )"
    ]
  },
  "student-combo": {
    title: "STUDENT COMBO 2+1",
    ml: 10,
    totalML: 30,
    price: 21990,
    oldPrice: 29990,
    perfumes: [
      "Sauvage Eau de Parfum Dior ( мужской )",
      "Sauvage Elixir Dior ( мужской )",
      "Versace Pour Homme Dylan Blue ( мужской )",
      "K by Dolce&Gabbana ( мужской )",
      "Light Blue pour Homme Dolce&Gabbana ( мужской )",
      "Haltane Parfums de Marly ( мужской )",
      "Explorer Ultra Blue Montblanc ( мужской )",
      "Vercase Man Eau Fraiche ( мужской )",
      "Royal Eagle Gold Stefano Ricci ( мужской )",
      "1 Million Rabanne ( мужской )",
      "Le Male Jean Paul Gaultier ( мужской )",
      "Dior Homme Cologne 2022 ( мужской )",
      "Epic Man Amouage ( мужской )",
      "Interlude Man Amouage ( мужской )",
      "Blue Seduction Antonio Banderas ( мужской )",
      "Eau de Lacoste L.12.12 White ( мужской )",
      "Aventus Creed ( мужской )",
      "Absolu Aventus Creed ( мужской )",
      "Meteore Louis Vuitton ( мужской )",
      "Imagination Louis Vuitton ( мужской )",
      "L'Immensite Louis Vuitton ( мужской )",
      "Oligarch Roja Dove ( мужской )",
      "Colonia C.L.U.B. Acqua di Parma ( мужской )",
      "Explorer Montblanc ( мужской )",
      "Elysium Pour Homme Parfum Cologne Roja Dove ( мужской )",
      "212 VIP Men Carolina Herrera ( мужской )",
      "Invictus Rabanne ( мужской )",
      "Tygar Bvlgari ( мужской )",
      "Versace Pour Homme ( мужской )",
      "Eros Versace ( мужской )",
      "Le Beau Paradise Garden Jean Paul Gaultier ( мужской )",
      "Le Male Le Parfum Jean Paul Gaultier ( мужской )",
      "Le Beau Jean Paul Gaultier ( мужской )",
      "Emporio Armani Stronger With You Tobacco Giorgio Armani ( мужской )",
      "Dior Homme Sport 2012 Dior ( мужской )",
      "Emporio Armani Stronger With You Intensely ( мужской )",
      "Acqua di Gio Armani ( мужской )",
      "Bleu de Chanel ( мужской )",
      "Allure Homme Sport Eau Extreme Chanel ( мужской )",
      "Emporio Armani Stronger With You Giorgio Armani ( мужской )",
      "Dior Homme Intense 2011 Dior ( мужской )",
      "Hugo Boss Bottled Unlimited ( мужской )",
      "Invictus Aqua (2018) Rabanne ( мужской )",
      "212 Sexy Men Carolina Herrera ( мужской )",
      "Phantom Rabanne ( мужской )",
      "Miss Dior Blooming Bouquet ( женский )",
      "Chance Eau Tendre Chanel ( женский )",
      "Good Girl Gone Bad by Kilian ( женский )",
      "Black Opium Yves Saint Laurent ( женский )",
      "Coco Mademoiselle Chanel ( женский )",
      "Blanche Byredo ( женский )",
      "Flora by Gucci Eau de Parfum Gucci ( женский )",
      "Peony & Blush Suede Jo Malone London ( женский )",
      "Gaultier Divine Jean Paul Gaultier ( женский )",
      "Bright Crystal Versace  ( женский )",
      "D&G Anthology L'Imperatrice 3 ( женский )",
      "Cheap&Chic I Love Love Moschino ( женский )",
      "Lady Million Rabanne ( женский )",
      "Bombshell Eau de Parfum Victoria's Secret ( женский )",
      "Eau So Sexy Victoria's Secret ( женский )",
      "Carmina Creed ( женский )",
      "Si Passione Giorgio Armani ( женский )",
      "Libre Yves Saint Laurent ( женский )",
      "Lacoste Pour Femme ( женский )",
      "Honour Woman Amouage ( женский )",
      "Lucky Wish Anna Sui ( женский )",
      "My Way Giorgio Armani ( женский )",
      "Eclat d'Arpege Lanvin ( женский )",
      "Flora Gorgeous Magnolia Gucci ( женский )",
      "Yara Lattafa Perfumes ( женский )",
      "Roses Must Montale ( женский )",
      "Dark Purple Montale ( женский )",
      "Dolce Violet Dolce&Gabbana ( женский )",
      "Dolce Peony Dolce&Gabbana ( женский )",
      "Delina Exclusif Parfums de Marly ( женский )",
      "Angels' Share By Kilian ( unisex )",
      "Kirke Tiziana Terenzi ( unisex )",
      "Gumin Tiziana Terenzi ( unisex )",
      "Layton Parfums de Marly ( unisex )",
      "Baccarat Rouge 540 Maison Francis Kurkdjian ( unisex )",
      "Oud for Greatness Initio Parfums Prives ( unisex )",
      "Fleur Narcotique Ex Nihilo ( unisex )",
      "Amber Musk Montale ( unisex )",
      "Blue Talisman Ex Nihilo ( unisex )",
      "Molecule 02 Escentric ( unisex )",
      "More Than Words Xerjoff ( unisex )",
      "Colonia Futura Acqua di Parma ( unisex )",
      "London WIDIAN ( unisex )",
      "Oceania Roja Dove ( unisex )",
      "Blue Moon Ginger Dash by Kilian ( unisex )",
      "Erba Pura Magica Sospiro Perfumes ( unisex )",
      "Oud Minerale Tom Ford ( unisex )",
      "Arabians Tonka Montale ( unisex )",
      "Black Phantom By Kilian ( unisex )",
      "Musk Abiyad Afnan ( unisex )",
      "Ganymede Marc-Antoine Barrois ( unisex )",
      "Greenley Parfums de Marly ( unisex )",
      "Pacific Chill Louis Vuitton ( unisex )",
      "Silver Moutain Water Creed ( unisex )",
      "Tobacco Vanille Tom Ford ( unisex )",
      "Oud Minerale Tom Ford ( unisex )",
      "Must Kashmir Attar Collection ( unisex )",
      "Ombre Leather (2018) Tom Ford ( unisex )",
      "Oud Wood Tom Ford ( unisex )",
      "Lost Cherry Tom Ford ( unisex )",
      "Afternoon Swim Louis Vuitton ( unisex )",
      "Ombre Nomade Louis Vuitton ( unisex )",
      "Ani Nishane ( unisex )",
      "Megamare Orto Parisi ( unisex )",
      "Nefs Nishane ( unisex )",
      "Bois Imperial Essential Parfums ( unisex )",
      "Black Pepper & Amber, Neroli Zielinski & Rozen ( unisex )",
      "Oud Maracuja Maison Crivelli ( unisex )",
      "Escentric 04 Escentric Molecules ( unisex )",
      "Black Afgano Nasomatto ( unisex )",
      "Mukhallat Montale ( unisex )",
      "Intoxicated By Kilian ( unisex )",
      "Hibiscus Mahajad Maison Crivelli ( unisex )",
      "More Than Words Xerojoff ( unisex )"
    ]
  }
};

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartVisible = false;

window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".product-card");
  const comboButtons = document.querySelectorAll(".select-combo");
  const searchInput = document.getElementById("search");
  const sectionLinks = document.querySelectorAll(".section-link");
  const orderForm = document.getElementById("order-form");
  const navbar = document.querySelector(".navbar");

  // Создаем контейнер для результатов поиска
  let searchResultsContainer = document.querySelector(".search-results");
  if (!searchResultsContainer) {
    searchResultsContainer = document.createElement("section");
    searchResultsContainer.className = "search-results catalog-section";
    searchResultsContainer.style.display = "none";
    document.querySelector(".promo-offers").insertAdjacentElement("afterend", searchResultsContainer);
  }

  // Обработчик прокрутки для navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Обработчик для карточек каталога
  cards.forEach((card) => {
    const title = card.querySelector(".product-title").textContent.trim();
    const imageSrc = card.querySelector("img")?.src || "images/fallback.jpg";
    const priceDisplay = card.querySelector(".product-price");
    const mlButtons = card.querySelectorAll(".ml-buttons button");
    let selectedML = parseInt(card.querySelector(".ml-buttons .active")?.dataset.ml || mlButtons[0].dataset.ml);
    highlightSelected(card.querySelector(`.ml-buttons button[data-ml="${selectedML}"]`));
    updatePrice();

    mlButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        selectedML = parseInt(btn.dataset.ml);
        highlightSelected(btn);
        updatePrice();
      });
    });

    function highlightSelected(activeBtn) {
      mlButtons.forEach((btn) => btn.classList.remove("active"));
      activeBtn.classList.add("active");
    }

    function updatePrice() {
      // Используем цену напрямую из pricesByML
      const price = pricesByML[selectedML] || 0;
      priceDisplay.textContent = `Цена: ${price.toLocaleString()} ₸`;
    }

    const buyBtn = card.querySelector(".buy-btn");
    buyBtn.addEventListener("click", () => {
      const price = pricesByML[selectedML] || 0; // Берем цену напрямую из pricesByML
      addToCart({ title, ml: selectedML, price, imageSrc, quantity: 1 });
      showNotification("Товар добавлен в корзину!");
    });
  });

  // Обработчик для кнопок "Выбрать" в промо-карточках
  comboButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const comboType = btn.dataset.combo;
      openComboModal(comboType);
    });
  });

  // Функция для поиска и отображения результатов
  function searchPerfumes(searchTerm) {
    const trimmedTerm = searchTerm.trim().toLowerCase();
    const menSection = document.getElementById("men");
    const womenSection = document.getElementById("women");
    const unisexSection = document.getElementById("unisex");

    // Скрываем каталоги, если есть поиск
    menSection.style.display = trimmedTerm ? "none" : "block";
    womenSection.style.display = trimmedTerm ? "none" : "block";
    unisexSection.style.display = trimmedTerm ? "none" : "block";

    // Очищаем и скрываем результаты поиска, если запрос пуст
    searchResultsContainer.innerHTML = "";
    searchResultsContainer.style.display = trimmedTerm ? "block" : "none";

    if (!trimmedTerm) {
      return;
    }

    // Собираем все карточки из каталогов
    const allCards = document.querySelectorAll(".catalog .product-card");
    const filteredCards = Array.from(allCards).filter(card => {
      const title = card.querySelector(".product-title").textContent.trim().toLowerCase();
      return title.includes(trimmedTerm);
    });

    // Создаем заголовок и каталог для результатов
    if (filteredCards.length > 0) {
      const title = document.createElement("h1");
      title.className = "page-title";
      title.textContent = "Результаты поиска";
      searchResultsContainer.appendChild(title);

      const catalog = document.createElement("div");
      catalog.className = "catalog";
      searchResultsContainer.appendChild(catalog);

      // Клонируем и добавляем отфильтрованные карточки
      filteredCards.forEach(card => {
        const clonedCard = card.cloneNode(true);
        // Добавляем обработчики для клонированной карточки
        const clonedTitle = clonedCard.querySelector(".product-title").textContent.trim();
        const clonedImageSrc = clonedCard.querySelector("img")?.src || "images/fallback.jpg";
        const clonedPriceDisplay = clonedCard.querySelector(".product-price");
        const clonedMlButtons = clonedCard.querySelectorAll(".ml-buttons button");
        let clonedSelectedML = parseInt(clonedCard.querySelector(".ml-buttons .active")?.dataset.ml || clonedMlButtons[0].dataset.ml);

        clonedMlButtons.forEach(btn => {
          btn.addEventListener("click", () => {
            clonedSelectedML = parseInt(btn.dataset.ml);
            clonedMlButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const price = pricesByML[clonedSelectedML] || 0;
            clonedPriceDisplay.textContent = `Цена: ${price.toLocaleString()} ₸`;
          });
        });

        const clonedBuyBtn = clonedCard.querySelector(".buy-btn");
        clonedBuyBtn.addEventListener("click", () => {
          const price = pricesByML[clonedSelectedML] || 0;
          addToCart({
            title: clonedTitle,
            ml: clonedSelectedML,
            price,
            imageSrc: clonedImageSrc,
            quantity: 1
          });
          showNotification("Товар добавлен в корзину!");
        });

        catalog.appendChild(clonedCard);
      });
    } else {
      const noResults = document.createElement("p");
      noResults.textContent = "Ничего не найдено";
      noResults.style.textAlign = "center";
      noResults.style.fontSize = "16px";
      noResults.style.margin = "20px 0";
      searchResultsContainer.appendChild(noResults);
    }
  }

  // Обработчик для поиска
  searchInput.addEventListener("input", () => {
    searchPerfumes(searchInput.value);
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchPerfumes(searchInput.value);
    }
  });

  // Обработчик для ссылок на секции
  sectionLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute("href").substring(1);
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
      searchInput.value = "";
      searchPerfumes("");
    });
  });

  // Обработчик для формы заказа
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const orderComment = document.getElementById("order-comment").value;
    const city = document.getElementById("city").value;
    const address = document.getElementById("address").value;
    const deliveryComment = document.getElementById("delivery-comment").value;
    sendOrderToWhatsApp({ name, phone, orderComment, city, address, deliveryComment });
    document.getElementById("order-modal").style.display = "none";
    orderForm.reset();
  });

  document.getElementById("close-order-modal").addEventListener("click", () => {
    document.getElementById("order-modal").style.display = "none";
  });

  // Восстановить корзину при загрузке
  if (cart.length > 0) {
    createCartUI();
    createCartIcon();
    renderCartItems();
    showCartIcon();
    updateCartNotification();
    cartVisible = true;
  }
});

// Открытие модального окна для выбора ароматов
function openComboModal(comboType) {
  const modal = document.getElementById("combo-modal");
  const modalTitle = document.getElementById("modal-title");
  const perfumeList = document.querySelector(".perfume-list");
  const confirmBtn = document.getElementById("confirm-combo");
  const config = comboConfigs[comboType];

  modalTitle.textContent = `Выберите 3 аромата для ${config.title}`;
  perfumeList.innerHTML = "";
  config.perfumes.forEach((perfume) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" data-perfume="${perfume}"> ${perfume}`;
    perfumeList.appendChild(label);
  });

  modal.style.display = "flex";

  const checkboxes = perfumeList.querySelectorAll("input[type=checkbox]");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const selectedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
      confirmBtn.disabled = selectedCount !== 3;
      checkboxes.forEach(cb => {
        if (!cb.checked && selectedCount >= 3) {
          cb.disabled = true;
        } else {
          cb.disabled = false;
        }
      });
    });
  });

  document.getElementById("close-modal").onclick = () => {
    modal.style.display = "none";
  };

  confirmBtn.onclick = () => {
    const selectedPerfumes = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.dataset.perfume);
    if (selectedPerfumes.length === 3) {
      addComboToCart(comboType, selectedPerfumes);
      modal.style.display = "none";
      showNotification("Товар добавлен в корзину!");
    }
  };
}

// Добавление комбо в корзину
function addComboToCart(comboType, selectedPerfumes) {
  const config = comboConfigs[comboType];
  const comboItem = {
    title: `${config.title}: ${selectedPerfumes.join(", ")}`,
    ml: config.totalML,
    price: config.price,
    imageSrc: `images/${comboType}.jpg`,
    quantity: 1
  };

  const existing = cart.find(item => item.title === comboItem.title);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push(comboItem);
  }

  saveCart();
  if (!cartVisible) {
    createCartUI();
    createCartIcon();
    cartVisible = true;
  }

  renderCartItems();
  showCartIcon();
  updateCartNotification();
}

// Добавление обычного товара в корзину
function addToCart(newItem) {
  newItem.imageSrc = newItem.imageSrc || "images/fallback.jpg";
  const existing = cart.find(item => item.title === newItem.title && item.ml === newItem.ml);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push(newItem);
  }

  saveCart();
  if (!cartVisible) {
    createCartUI();
    createCartIcon();
    cartVisible = true;
  }

  renderCartItems();
  showCartIcon();
  updateCartNotification();
}

// Сохранение в localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Создание UI корзины
function createCartUI() {
  if (document.querySelector(".cart")) return;

  const cartBox = document.createElement("div");
  cartBox.className = "cart modal";
  cartBox.style.display = "none";
  cartBox.innerHTML = `
    <div class="cart-content">
      <div class="cart-header">
        <h3>Корзина</h3>
        <button class="close-cart-btn">×</button>
      </div>
      <div class="cart-items"></div>
      <div class="cart-total">Итого: <span id="total-price">0₸</span></div>
      <button id="order-btn">Заполнить данные</button>
    </div>
  `;
  document.body.appendChild(cartBox);
  document.getElementById("order-btn").addEventListener("click", () => {
    document.querySelector(".cart").style.display = "none";
    document.getElementById("order-modal").style.display = "flex";
  });
  document.querySelector(".close-cart-btn").addEventListener("click", toggleCart);
}

// Создание иконки корзины
function createCartIcon() {
  if (document.querySelector(".cart-icon")) return;

  const cartIcon = document.createElement("div");
  cartIcon.className = "cart-icon";
  cartIcon.innerHTML = `
    <img src="images/cart-icon.png" alt="Корзина" class="cart-icon-img">
    <span class="cart-notification">0</span>
  `;
  document.body.appendChild(cartIcon);

  cartIcon.addEventListener("click", toggleCart);
}

// Показать иконку корзины
function showCartIcon() {
  const cartIcon = document.querySelector(".cart-icon");
  if (cartIcon) {
    cartIcon.style.display = "block";
  }
}

// Обновление notification корзины
function updateCartNotification() {
  const notification = document.querySelector(".cart-notification");
  if (!notification) return;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  notification.textContent = totalItems;
  notification.style.display = totalItems > 0 ? "flex" : "none";
}

// Переключение видимости корзины
function toggleCart() {
  const cart = document.querySelector(".cart");
  if (!cart) return;

  if (cart.length === 0) {
    cart.style.display = "none";
    const cartIcon = document.querySelector(".cart-icon");
    if (cartIcon) cartIcon.style.display = "none";
    cartVisible = false;
  } else {
    cart.style.display = cart.style.display === "none" ? "flex" : "none";
    if (cart.style.display === "flex") {
      renderCartItems();
    }
  }
}

// Отрисовка корзины
function renderCartItems() {
  const container = document.querySelector(".cart-items");
  if (!container) return;

  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.imageSrc}" alt="${item.title}" class="cart-thumb">
      <div class="cart-info">
        <span class="cart-item-title">${item.title} (${item.ml} мл)</span>
        <div class="cart-item-details">
          <div class="cart-item-controls">
            <button class="qty-btn" data-index="${index}" data-action="-">−</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" data-index="${index}" data-action="+">+</button>
          </div>
          <div class="cart-item-price">${itemTotal.toLocaleString()}₸</div>
        </div>
      </div>
      <button class="remove-btn" data-index="${index}">×</button>
    `;
    container.appendChild(div);
  });

  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index);
      cart.splice(index, 1);
      saveCart();
      renderCartItems();
      updateCartNotification();
      if (cart.length === 0) {
        toggleCart();
      }
    });
  });

  document.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index);
      const action = btn.dataset.action;
      if (action === "+") {
        cart[index].quantity++;
      } else if (action === "-" && cart[index].quantity > 1) {
        cart[index].quantity--;
      }
      saveCart();
      renderCartItems();
      updateCartNotification();
    });
  });

  document.getElementById("total-price").textContent = `${total.toLocaleString()}₸`;
  saveCart();
  updateCartNotification();
}

// Отправка в WhatsApp
function sendOrderToWhatsApp({ name, phone, orderComment, city, address, deliveryComment }) {
  if (cart.length === 0) {
    alert("Корзина пуста!");
    return;
  }

  let message = "Здравствуйте! Хочу оформить заказ:\n\n";
  let total = 0;
  cart.forEach((item, i) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    message += `${i + 1}) ${item.title}, ${item.ml} мл × ${item.quantity} = ${itemTotal.toLocaleString()}₸\n`;
  });
  message += `\nИтого: ${total.toLocaleString()}₸\n`;
  message += `\nКонтакты:\nИмя: ${name}\nТелефон: ${phone}\nКомментарий: ${orderComment || '-'}\n`;
  message += `\nДоставка:\nГород: ${city}\nАдрес: ${address}\nКомментарий к доставке: ${deliveryComment || '-'}`;
  const url = `https://wa.me/+77718857832?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Показ уведомления
function showNotification(message) {
  let notification = document.querySelector(".notification");
  if (!notification) {
    notification = document.createElement("div");
    notification.className = "notification";
    document.body.appendChild(notification);
  }
  notification.textContent = message;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 2000);
}
