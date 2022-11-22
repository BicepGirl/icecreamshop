FROM node:19-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000
CMD ["node", "server.js"]



# Kör dessa commands i terminalen.

#Bygger en docker image för att använda, dubbelkolla att den finns via docker images
#docker build . -t node-icecreamshop

#Kör dockerfilen, verifiera med docker ps
#docker run -dp 3000:3000 -d node-icecreamshop