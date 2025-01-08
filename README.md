
   src/
   ├── app/
   │ ├── App.tsx - приложение
   │ ├── AppRouter.tsx - Router приложения
   │ ├── global.d.ts использования scss
   │ ├── interface.ts - interface путей
   │ ├── router.tsx - пути приложения
   │ └── store.ts - Redux/toolkit
   ├── entities/
   │ ├── cart/ - срез cart
   │ ├── categories/ - срез categories
   │ ├── product/ - срез product
   │ └── profile/ - срез profile
   ├── features/
   │ ├── AuthorizationModal/ модальное окно авторизации
   │ ├── Cart/ корзина
   │ ├── OrderDetails/ данные о Истории заказов
   │ ├── OrderModal
   │ ├── 
   │ ├── ProductCard/+ продукт
   │ ├── ProductCart/+ продукция в корзине
   │ ├── ProductList/+ список продукции
   │ ├── RadioButton/+ радио кнопка
   │ └── RadioButtons/ + радио кнопки
   ├── pages/
   │ ├── Main/ + основной контент
   │ └── NotFoundPage/ + если нет страницы
   ├── widgets/
   │ ├── Footer/+
   │ ├── Header/+  
   │ ├── Modal/+
   │ └── ProductPage/+
   ├── shared/
   │ ├── assets
   │ │ ├── fonts/+ // фон
   │ │ ├── icon/+ // иконки
   │ │ └── images/+ // изображения
   │ ├── data
   │ │ └── productData.ts/+ // данные о продукте
   │ ├── lib
   │ │ └── hooks+ //
   │ │ . └── hooks.ts+ // костомные hooks для redux
   │ ├── ui // переиспользуемые компоненты
   │ │ . ├── Button/ +
   │ │ . ├── Input/ +
   │ │ . ├── SVGIcons/ +
   │ │ . ├── ToggleButton/ +
   │ │ . └── ToggleProductButton/ +
   │ └── style // стили
   │ . ├── fonts.css +
   │ . ├── global.css +
   │ . ├── normalize.css +
   │ . └── variable.css +
   ├── utils/
   └── index.tsx

3. Подключить модульный scss
   в src создать папку |global.d.ts|
   подключаем в index.tsx |import 'normalize.css'|

```
declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}
```

4. в проекте используется
   -react-router-dom +
   -typescript +
   -normalize +
   -redux-toolkit -
   
