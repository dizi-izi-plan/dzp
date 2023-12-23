# Используйте официальный образ Node.js для сборки
FROM node:16-alpine as build

# Установите рабочую директорию
WORKDIR /app

# Копируйте файлы package.json и package-lock.json
COPY package*.json ./

# Установите зависимости
RUN npm install

# Скопируйте остальные файлы приложения
COPY . .

# Соберите приложение
RUN npm run build

# Используйте образ Node.js для выполнения приложения
FROM node:16-alpine

# Установите рабочую директорию
WORKDIR /app

# Скопируйте только необходимые файлы из этапа сборки
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

# Установите зависимости только для выполнения приложения
COPY --from=build /app/package*.json ./
RUN npm install

# Откройте порт, на котором работает Next.js
EXPOSE 3000

# Запустите приложение
CMD ["npm", "start"]
