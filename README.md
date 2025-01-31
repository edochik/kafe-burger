# Пэт проект: Кафе с доставкой еды

**Описание проекта**  
Веб-приложение для кафе, которое предоставляет возможность пользователям заказывать бургеры, шаурму, салаты и другие блюда с доставкой.

**Основной функционал:**

1. **Для пользователей**:

   - Регистрация и авторизация пользователей.
   - Добавление товаров в корзину.
   - Оформление заказов с указанием данных для доставки.
   - Просмотр истории заказов.
   - Изменение профиля для зарегистрированных пользователей.

2. **Для администраторов**: login: superAdmin, password: 123456
   - Создание и удаление продукции.

**Используемые технологии:**

- **Frontend**:  
  Языки: HTML, CSS, Typescript  
  Библиотеки: React, Redux/Toolkit  
  Маршрутизация: `react-router-dom`

- **Backend**:  
  Сервер: Fastify  
  База данных: SQLite

**Потенциальные улучшения:**

- Поддержка многоязычности.
- Мобильная версия приложения (React Native).
- Расширение функционала для администраторов (например, управление товарами, изменение заказов).

---

## Установка и запуск проекта

1. Клонируйте репозиторий:

- `git clone https://github.com/edochik/kafe-burger.git`

2. Перейдите в директорию проекта:

- `cd kafe-burger`

3. Установите зависимости для фронтенда:

- `npm install`

4. API для бэкенда: Сервер используется на платформе Glitch.
   [link](https://glitch.com/edit/#!/kafe-burger)

### Работа с заказами:

- `GET` https://kafe-burger.glitch.me/api/orders - получить заказы
- `POST` https://kafe-burger.glitch.me/api/orders - создать заказ

### Работа с продукцией:

- `GET` https://kafe-burger.glitch.me/api/products - получить продукцию
- `POST` https://kafe-burger.glitch.me/api/products - создать новую продукцию
- `DELETE` https://kafe-burger.glitch.me/api/products:id - удалить продукцию

### Работа с пользователем:

- `POST` https://kafe-burger.glitch.me/api/auth/login - войти под логином
- `GET` https://kafe-burger.glitch.me/api/auth/verify - проверка регистрации
- `POST` https://kafe-burger.glitch.me/api/auth/logout - выйти

### Работа с состоянием пользователя:

- `POST` https://kafe-burger.glitch.me/api/account - создать пользователя
- `PUT` https://kafe-burger.glitch.me/api/account - обновить данные пользователя

5. Запустите фронтенд:

Проект будет доступен по адресу http://localhost:3000
