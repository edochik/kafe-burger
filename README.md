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

2. **Для администраторов**:
   - Создание и удаление заказов.
   - Управление доступом и ролями пользователей.

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

    ```bash
    git clone https://github.com/your-username/food-delivery.git
    ```

2. Перейдите в директорию проекта:

    ```bash
    cd food-delivery
    ```

3. Установите зависимости для фронтенда:

    ```bash
    cd frontend
    npm install
    ```

4. Api бэкенд: 
 Api = 'https://chip-patch-papaya.glitch.me/api/'
 работа с заказами:
 Api GET   https://chip-patch-papaya.glitch.me/api/orders
 Api POST  https://chip-patch-papaya.glitch.me/api/orders
 работа с продукцией:
 Api GET    https://chip-patch-papaya.glitch.me/api/products
 Api POST   https://chip-patch-papaya.glitch.me/api/products
 Api DELETE https://chip-patch-papaya.glitch.me/api/products:id
 работа с пользователем:
 Api https://chip-patch-papaya.glitch.me/api/auth/login // это отдельно
 Api https://chip-patch-papaya.glitch.me/api/auth/verify // это отдельно
 Api https://chip-patch-papaya.glitch.me/api/auth/logout // это отдельно
 это работа с состоянием пользователя
 Api https://chip-patch-papaya.glitch.me/api/auth/register // это создание
 Api https://chip-patch-papaya.glitch.me/api/account/update // это обновление
 
5. Запустите фронтенд:

    ```bash
    cd frontend
    npm start
    ```

6. Запустите бэкенд:

    ```bash
    cd backend
    npm start
    ```

Проект будет доступен по адресу [http://localhost:3000](http://localhost:3000).

---

## Структура проекта

- `frontend/` - Исходный код фронтенда.
- `backend/` - Исходный код бэкенда.

---

## Как внести изменения

1. Сделайте форк репозитория.
2. Создайте ветку для вашей фичи или исправления багов:

    ```bash
    git checkout -b my-feature
    ```

3. Внесите необходимые изменения.
4. Протестируйте изменения.
5. Закоммитьте и отправьте изменения на свой форк:

    ```bash
    git add .
    git commit -m "Description of the changes"
    git push origin my-feature
    ```

6. Создайте Pull Request.

---

## Лицензия

Этот проект лицензируется под лицензией MIT. Подробнее см. файл [LICENSE](LICENSE).
