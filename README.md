1. команда для установки create-react-app {name-project} --template typescript
   --template typescript - создать проект с использованием готового шаблона, который включает TypeScript
2. Иерархия папок по FSD
   семь папок app,pages,widgets,entities,features,shared,components,utils
   если код относится только к одному компоненту, то он остается только в папке компонента
   src/
   ├── app/
   │ ├── providers/ -
   │ ├── routes/ -
   │ └── App.tsx +
   ├── pages/
   │ └── Main/ +
   ├── widgets/
   │ ├── Footer/+
   │ ├── Header/+  
   │ ├── ModalCard/+
   │ ├── ModalForm/+
   │ └── Sidebar/+
   ├── features/
   │ ├── redux/ -
   │ ├── Cart/+
   │ ├── ProductCard/+
   │ ├── ProductCart/+
   │ ├── ProductList/ +
   │ ├── RadioButton/+
   │ └── RadioButtons/ +
   ├── entities/
   ├── shared/
   │ ├── ui // переиспользуемые компоненты
   │ │ . └── SVGIcons/ +
   │ │ . └── ToggleProductButton/ +
   │ ├── assets
   │ │ ├── fonts/+ // фон
   │ │ ├── icon/+ // иконки
   │ │ └── images/+ // изображения
   │ └── style // стили
   │ . ├── fonts.css +
   │ . ├── global.css +
   │ . ├── normalize.css +
   │ . └── variable.css +
   ├── utils/ ?
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