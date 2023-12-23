FROM node:18-alpine

WORKDIR /chatbot-portafolio

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]