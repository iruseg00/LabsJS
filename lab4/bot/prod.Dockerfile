FROM node:12.13.1

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install 

COPY . .

EXPOSE 11311

RUN ["apt-get" , "update"]

CMD ["npm" , "run" , "start:prod"]
