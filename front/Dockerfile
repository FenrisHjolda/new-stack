FROM node:14

RUN npm install --global yarn --force

WORKDIR /usr/src/mevn-front

COPY package.json /usr/src/mevn-front/

RUN yarn

ENV VUE_APP_API_URL=localhost:3001/api/v1
ENV VUE_PORT=3002

EXPOSE 3002
CMD yarn serve
