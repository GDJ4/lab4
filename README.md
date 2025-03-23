# Интернет-магазин с GraphQL, REST API и WebSocket чатом

Этот проект представляет собой демонстрационное приложение для интернет-магазина, которое включает в себя два отдельных приложения:

- **Покупательское приложение** – получает данные о товарах через GraphQL API и отображает их на фронтенде (buyer-frontend). Также включает чат поддержки через WebSocket.
- **Административное приложение** – управляет товарами через REST API и предоставляет интерфейс для администрирования (admin-frontend). Чат поддержки также интегрирован через WebSocket.
- **WebSocket сервер** – обеспечивает единый чат для обоих приложений.

## Требования

- [Node.js](https://nodejs.org/) (рекомендуется версия 14.x и выше)
- npm (входит в состав Node.js)
- Для запуска фронтенд-части можно использовать любой статический сервер (например, [http-server](https://www.npmjs.com/package/http-server)) или просто открыть HTML-файлы напрямую в браузере.

## Установка и запуск

### 1. Клонируйте репозиторий

```bash
git clone https://github.com/GDJ4/lab4.git
cd lab4
```

### 2. Установка и запуск серверных приложений

#### 2.1. Запуск административного API (REST API)

1. Перейдите в папку `admin-backend`:
   ```bash
   cd admin-backend
   ```
2. Установите зависимости:
   ```bash
   npm install
   ```
3. Запустите сервер:
   ```bash
   npm start
   ```
   Теперь REST API будет доступен по адресу: [http://localhost:3000/api/products](http://localhost:3000/api/products)

#### 2.2. Запуск покупательского API (GraphQL)

1. Перейдите в папку `buyer-backend`:
   ```bash
   cd ../buyer-backend
   ```
2. Установите зависимости:
   ```bash
   npm install
   ```
3. Запустите сервер:
   ```bash
   npm start
   ```
   GraphQL API будет доступен по адресу: [http://localhost:3001/graphql](http://localhost:3001/graphql)

#### 2.3. Запуск WebSocket сервера

1. Перейдите в папку `ws-server`:
   ```bash
   cd ../ws-server
   ```
2. Установите зависимости:
   ```bash
   npm install
   ```
3. Запустите сервер:
   ```bash
   npm start
   ```
   WebSocket сервер запустится на: `ws://localhost:4000`

### 3. Запуск фронтенд-приложений

#### 3.1. Покупательский фронтенд

1. Перейдите в папку `buyer-frontend`:
   ```bash
   cd ../buyer-frontend
   ```
2. Запустите статический сервер (например, с http-server). Если http-server не установлен, установите его глобально:
   ```bash
   npm install -g http-server
   ```
3. Запустите сервер:
   ```bash
   http-server -p 8081
   ```
4. Откройте браузер и перейдите по адресу: [http://localhost:8081](http://localhost:8081)

#### 3.2. Административный фронтенд

1. Перейдите в папку `admin-frontend`:
   ```bash
   cd ../admin-frontend
   ```
2. Запустите статический сервер (если используется http-server):
   ```bash
   http-server -p 8082
   ```
3. Откройте браузер и перейдите по адресу: [http://localhost:8082](http://localhost:8082)

