FROM node:slim

WORKDIR /learn-docker
COPY . /learn-docker

RUN npm install
EXPOSE 3000

CMD npm start