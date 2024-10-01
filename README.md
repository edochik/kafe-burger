1. команда для установки create-react-app {name-project} --template typescript
   --template typescript - создать проект с использованием готового шаблона, который включает TypeScript
2. Иерархия папок по FSD
   семь папок app,pages,widgets,entities,features,shared,components,utils
   если код относится только к одному компоненту, то он остается только в папке компонента
   src/
   ├── app/
   │ ├── App.tsx - приложение
   │ ├── global.d.ts
   │ ├── helper.ts - массив путей
   │ ├── interface.ts - interface путей
   │ ├── router.tsx - пути приложения
   │ └── store.ts - хранилище
   ├── pages/
   │ ├── Main/ + основной контент
   │ └── NotFoundPage/ + если нет страницы
   ├── widgets/
   │ ├── Footer/+ 
   │ ├── Header/+  
   │ ├── Modal/+
   │ └── ProductPage/+
   ├── features/
   │ ├── Cart/ корзина
   │ ├── ProductCard/+ продукт
   │ ├── ProductCart/+ продукция в корзине
   │ ├── ProductList/+ список продукции
   │ ├── RadioButton/+ радио кнопка 
   │ └── RadioButtons/ + радио кнопки
   ├── entities/
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

# Добавить
# reduxToolkit
# вход для user +
# видит текущий заказ и историю заказов
# вход для admin +
# admin может удалять добавлять изменять продукцию
# видеть что заказывали user - отменять заказ
# переключение света на темный/светлый
# sort дорогой дешевый по названию по киллокаллориям
# страница с ошибкой
### Сервер
# должен хранить у себя данные по продуктам и их количеству
# данные о пользователях с возможностью Admin и user
# User заказы(в процессе, доставка, выполнен) и выполненные или отменные.
# Admin должен иметь свою панель где может создавать продукцию исправлять и удалять.
# Действия Admin скорей всего должны оставлять т.е в системе чтобы можно было проверить, что он сделал.

для валидации скорей всего нужно использовать react-hook-form.com
так как с ней можно будет валидировать телефон и email 
для пароля и повторного пароля нужна проверка, что они соответствуют.