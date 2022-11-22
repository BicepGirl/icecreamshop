FROM node:19-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000
CMD ["node", "server.js"]

# Kör dessa commands för att köra docker filen
#docker build . -t icecreamshop
#docker run -dp 3000:3000 -v shop.db:/usr/src/app/shop.db icecreamshop