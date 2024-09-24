export interface Product {
  id: number;
  nameRu: string;
  nameEn: string;
  price: number;
  description: string;
  categoryRu: string;
  categoryEn: string;
  categoryImg: string;
  composition: string[];
  weight: number;
  kilocalories: number;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    nameRu: "Мясная бомба",
    nameEn: "Meat Bomb",
    price: 689,
    description: 'Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.',
    categoryEn: "burgers",
    categoryRu: "бургеры",
    categoryImg: '/images/icons/burger.png',
    composition: ['Пшеничная булочка',
      'Котлета из говядины',
      'Красный лук',
      'Листья салата',
      'Соус горчичный'],
    weight: 520,
    kilocalories: 430,
    imageUrl: "/images/meat-bomb.jpg",
  },
  {
    id: 2,
    nameRu: "Супер сырный",
    nameEn: "Super Cheesy",
    price: 639,
    description: 'Нежный бургер с расплавленным сыром, который подарит вам наслаждение на каждом укусе. Мягкая булочка, хрустящие овощи и насыщенный сырный вкус — идеальное сочетание для любителей сыра.',
    categoryEn: "burgers",
    categoryRu: "бургеры",
    categoryImg: '/images/icons/burger.png',
    composition: [
      'Пшеничная булочка',
      'Котлета из говядины',
      'Двойной слой сыра чеддер',
      'Маринованные огурчики',
      'Соус сырный',
      'Листья салата'
    ],
    weight: 512,
    kilocalories: 610,
    imageUrl: "/images/super-cheesy.jpg"
  },
  {
    id: 3,
    nameRu: "Сытный",
    nameEn: "Hearty",
    price: 450,
    description: 'Большой и насыщенный бургер для тех, кто хочет хорошо подкрепиться. Сытная котлета из говядины, свежие овощи и ароматный соус делают этот бургер идеальным выбором для настоящих гурманов.',
    categoryEn: "burgers",
    categoryRu: "бургеры",
    categoryImg: '/images/icons/burger.png',
    composition: [
      'Пшеничная булочка',
      'Котлета из говядины',
      'Помидоры',
      'Листья салата',
      'Соус барбекю',
      'Сыр моцарелла'
    ],
    weight: 580,
    kilocalories: 520,
    imageUrl: "/images/hearty.jpg"
  },
  {
    id: 4,
    nameRu: "Тяжелый удар",
    nameEn: "Heavy Hit",
    price: 470,
    description: 'Сочный бургер с двойной котлетой и усиленным вкусом для тех, кто хочет получить настоящий удар по голоду. Великолепное сочетание мясной начинки и пикантного соуса подарит вам незабываемые ощущения.',
    categoryEn: "burgers",
    categoryRu: "бургеры",
    categoryImg: '/images/icons/burger.png',
    composition: [
      'Пшеничная булочка',
      'Две котлеты из говядины',
      'Красный лук',
      'Маринованные огурчики',
      'Соус чили',
      'Сыр чеддер'
    ],
    weight: 470,
    kilocalories: 580,
    imageUrl: "/images/heavy-hit.jpg"
  },
  {
    id: 5,
    nameRu: "Вечная классика",
    nameEn: "Eternal Classic",
    categoryImg: '/images/icons/burger.png',
    price: 450,
    description: 'Настоящий классический бургер, который сочетает в себе сочную котлету, свежие овощи и насыщенный соус. Идеальный выбор для тех, кто ценит проверенные временем вкусы.',
    categoryEn: "burgers",
    categoryRu: "бургеры",
    composition: [
      'Пшеничная булочка',
      'Котлета из говядины',
      'Томат',
      'Маринованные огурчики',
      'Листья салата',
      'Кетчуп',
      'Сыр чеддер'
    ],
    weight: 450, // Вес в граммах
    kilocalories: 490, // Калорийность
    imageUrl: "/images/eternal-classic.jpg"
  },
  {
    id: 6,
    nameRu: "Итальянский",
    nameEn: "Italian",
    price: 560,
    description: 'Бургер с итальянским акцентом — свежий базилик, ароматный соус песто и тянущийся сыр моцарелла. Идеальный выбор для тех, кто любит итальянскую кухню в новом формате.',
    categoryEn: "burgers",
    categoryRu: "бургеры",
    categoryImg: '/images/icons/burger.png',
    composition: [
      'Пшеничная булочка',
      'Котлета из говядины',
      'Свежий базилик',
      'Томаты',
      'Соус песто',
      'Сыр моцарелла'
    ],
    weight: 510, // Вес в граммах
    kilocalories: 530, // Калорийность
    imageUrl: "/images/italian.jpg"
  },
  {
    id: 7,
    nameRu: "Начос",
    nameEn: "Nachos",
    price: 250,
    description: 'Хрустящие кукурузные начос, обжаренные до золотистой корочки. Подаются с острым соусом чили и сырным соусом для настоящих любителей мексиканских закусок.',
    categoryEn: "snacks",
    categoryRu: "закуски",
    categoryImg: '/images/icons/snacks.png',
    composition: [
      'Кукурузные чипсы',
      'Соус чили',
      'Сырный соус'
    ],
    kilocalories: 350,
    weight: 220,
    imageUrl: "/images/nachos.jpg"
  },
  {
    id: 8,
    nameRu: "Картошка фри",
    nameEn: "French Fries",
    price: 245,
    description: 'Классическая картошка фри, обжаренная до хрустящей золотистой корочки. Подаётся с кетчупом или любым другим соусом на ваш выбор.',
    categoryEn: "snacks",
    categoryRu: "закуски",
    categoryImg: '/images/icons/snacks.png',
    composition: [
      'Картофель',
      'Растительное масло',
      'Соль'
    ],
    weight: 180,
    kilocalories: 320,
    imageUrl: "/images/french-fries.jpg"
  },
  {
    id: 9,
    nameRu: "Луковые кольца",
    nameEn: "Onion Rings",
    price: 230,
    description: 'Хрустящие луковые кольца в золотистой панировке, идеально подходящие в качестве закуски. Подаются с пикантным соусом для усиления вкуса.',
    categoryEn: "snacks",
    categoryRu: "закуски",
    categoryImg: '/images/icons/snacks.png',
    composition: [
      'Лук',
      'Панировочные сухари',
      'Растительное масло',
      'Соус'
    ],
    weight: 160,
    kilocalories: 310,
    imageUrl: "/images/onion-rings.jpg"
  },
  {
    id: 10,
    nameRu: "Домашний хот-дог",
    nameEn: "Homemade Hot Dog",
    price: 290,
    description: 'Аппетитный хот-дог с сочной сосиской, свежими овощами и классическими соусами. Идеальный выбор для тех, кто любит простую, но сытную еду.',
    categoryEn: "hot-dogs",
    categoryRu: "хот-доги",
    categoryImg: '/images/icons/hot-dog.png',
    composition: [
      'Булочка для хот-дога',
      'Сосиска',
      'Томаты',
      'Маринованные огурчики',
      'Кетчуп',
      'Горчица'
    ],
    weight: 250,
    kilocalories: 420,
    imageUrl: "/images/homemade-hot-dog.jpg"
  },
  {
    id: 11,
    nameRu: "Жгучий хот-дог",
    nameEn: "Spicy Hot Dog",
    price: 239,
    description: 'Острый хот-дог с пикантной сосиской и соусом чили для настоящих любителей острых вкусов. Подается с хрустящими овощами и яркими соусами.',
    categoryEn: "hot-dogs",
    categoryRu: "хот-доги",
    categoryImg: '/images/icons/hot-dog.png',
    composition: [
      'Булочка для хот-дога',
      'Острая сосиска',
      'Перец халапеньо',
      'Томаты',
      'Маринованные огурчики',
      'Соус чили',
      'Кетчуп',
      'Горчица'
    ],
    weight: 245,
    kilocalories: 430,
    imageUrl: "/images/spicy-hot-dog.jpg"
  },
  {
    id: 12,
    nameRu: "Классический хот-дог",
    nameEn: "Classic Hot Dog",
    price: 220,
    description: 'Простой и вкусный классический хот-дог с сочной сосиской, свежими овощами и классическими соусами. Отличный выбор для быстрого перекуса.',
    categoryEn: "hot-dogs",
    categoryRu: "хот-доги",
    categoryImg: '/images/icons/hot-dog.png',
    composition: [
      'Булочка для хот-дога',
      'Сосиска',
      'Маринованные огурчики',
      'Томаты',
      'Кетчуп',
      'Горчица'
    ],
    weight: 215,
    kilocalories: 410,
    imageUrl: "/images/classic-hot-dog.jpg"
  },
  {
    id: 13,
    nameRu: "Комбо-1",
    nameEn: "Combo-1",
    price: 650,
    description: 'Выгодное комбо для настоящих гурманов: бургер, картошка фри,стрипсы и прохладительный напиток. Идеальный выбор для сытного обеда или ужина.',
    categoryEn: "combos",
    categoryRu: "комбо",
    categoryImg: '/images/icons/combo.png',
    composition: [
      'Бургер "Мясная бомба"',
      'Картошка фри',
      'Прохладительный напиток (Coca-Cola, Fanta или Sprite)',
      'Стрипсы'
    ],
    weight: 725, // Вес в граммах
    kilocalories: 850, // Калорийность
    imageUrl: "/images/combo-1.jpg"
  },
  {
    id: 14,
    nameRu: "Комбо-2",
    nameEn: "Combo-2",
    price: 1200,
    description: 'Выгодное комбо для двоих: шашлык, картошка фри, хлеб и соусы. Идеальный выбор для сытного обеда.',
    categoryEn: "combos",
    categoryRu: "комбо",
    categoryImg: '/images/icons/combo.png',
    composition: [
      'Шашлык"',
      'Картошка фри',
      'Прохладительные напитки (Coca-Cola, Fanta или Sprite)',
    ],
    weight: 940,
    kilocalories: 1300,
    imageUrl: "/images/combo-2.jpg",
  },
  {
    id: 15,
    nameRu: "Комбо-3",
    nameEn: "Combo-3",
    price: 1100,
    description: 'Выгодное комбо для двоих: шашлык, картошка фри, хлеб и соусы. Идеальный выбор для сытного обеда.',
    categoryEn: "combos",
    categoryRu: "комбо",
    categoryImg: '/images/icons/combo.png',
    composition: [
      'Шашлык"',
      'Картошка фри',
    ],
    weight: 900,
    kilocalories: 1200,
    imageUrl: "/images/combo-3.jpg",
  },
  {
    id: 16,
    nameRu: "Комбо-4",
    nameEn: "Combo-4",
    price: 700,
    description: 'Выгодное комбо для настоящих гурманов: бургер, картошка фри,стрипсы и прохладительный напиток. Идеальный выбор для сытного обеда или ужина.',
    categoryEn: "combos",
    categoryRu: "комбо",
    categoryImg: '/images/icons/combo.png',
    composition: [
      'Бургер "Мясная бомба"',
      'Картошка фри',
      'Прохладительный напиток (Coca-Cola, Fanta или Sprite)',
    ],
    weight: 650,
    kilocalories: 700,
    imageUrl: "/images/combo-4.jpg",
  },
];

// export const categoryUrls = {
// 	burgers: '/images/icons/burger.png',
// 	snacks: '/images/icons/snacks.png',
// 	'hot-dogs': '/images/icons/hot-dog.png',
// 	combos: '/images/icons/combo.png',
// 	shawarma: '/images/icons/shawarma.png',
// 	pizza: '/images/icons/pizza.png',
// 	wok: '/images/icons/wok.png',
// 	desserts: '/images/icons/dessert.png',
// 	sauces: '/images/icons/sauces.png'
// }

// function getProductObject(products: Product[]) {
//   return Object.fromEntries(products.map(product => [product.id, product]))
// }
// export const productsObject = getProductObject(products)
