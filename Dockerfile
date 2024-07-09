FROM --platform=linux/amd64 node:18-alpine
<<<<<<< HEAD
WORKDIR /app/
=======
WORKDIR /api/dist
>>>>>>> 596ef1515625aadd071e967b674968f2475ac6ba
COPY package*.json ./
RUN npm install -g
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD npm rum migration:run && node dist/main.js