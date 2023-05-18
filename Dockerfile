FROM node:18

WORKDIR /usr/src/app

COPY . .

EXPOSE 8083

CMD ["npm", "start"]
