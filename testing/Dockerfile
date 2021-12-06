FROM node:10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
RUN npm install jest --global 
RUN npm audit; exit 0 && npm audit fix
COPY . /usr/src/app
EXPOSE 4000

