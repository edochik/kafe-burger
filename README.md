
- [✅] Хорошо
- [❌] Плохо
   src/
   ├── app/
   │ ├── App.tsx - приложение [✅]
   │ ├── AppRouter.tsx - Router приложения [❌] переделать для разных ролей
   │ ├── global.d.ts использования scss [✅]
   │ ├── listenerMiddleware.ts - мидлвара для обработки побочных эффектов [❌] проверить на актуальность
   │ └── store.ts - Redux/toolkit [❌]
   ├── entities/
   │ ├── cart/ - срез cart [✅]
   │ ├── categories/ - срез categories [✅] 
   │ ├── product/ - срез product [✅]
   │ └── profile/ - срез profile [✅]  [❌]
   ├── features/
   │ ├── AuthorizationModal/ модальное окно авторизации [✅]
   │ ├── Cart/ корзина [✅]
   │ ├── LoginOrUserMenu/ вход или меню пользователя [✅]
   │ ├── OrderDetails/ данные о Истории заказов [✅]
   │ ├── OrderModal/ модальное окно заказ [✅]
   │ ├── Pagination/ пагинация [✅]
   │ ├── Card/ продукт  [✅]
   │ ├── CartItem/ продукция в корзине  [✅]
   │ ├── Cards/ список продукции  [✅]
   │ ├── RadioButton/ радио кнопка  [✅]
   │ ├── RadioButtons/ радио кнопки  [✅]
   │ ├── RegistrationModal/ модальное окно регистрации  [✅]
   │ └── Sort/ сортировка кнопки  [✅]
   ├── pages/
   │ ├── CreateProduct/ создать продукцию [✅]
   │ ├── HistoryOrders/ история заказов [✅]
   │ ├── Main/ основной контент [✅]
   │ ├── NotFoundPage/ если нет страницы [✅]
   │ └── Profile/ профиль пользователя [✅]
   ├── services/ пустой???
   ├── shared/
   │ ├── api / api и функция fetchData 
   │ ├── assets
   │ │ ├── fonts/+ // фон
   │ │ ├── icon/+ // иконки
   │ │ └── images/+ // изображения
   │ ├── lib / папка hooks => Типизация hooks и два hook useCloseHandler и useEscapeHandler
   │ ├── style / fonst, global, mixin, modal.module.scss, variable
   │ ├── types / global types 
   │ ├── ui / FormInput, ResponseServer,SVGIcons, ToggleProductButton переиспользуемые фитчи
   ├── widgets/
   │ ├── Footer/ 
   │ ├── Header/  
   │ └── ProductPage/ страница продукции
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
   
