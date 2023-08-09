FROM node:18-alpine


WORKDIR /usr/src/frontend

RUN npm install yarn

COPY yarn.lock .

RUN yarn install && npm install

COPY . .

EXPOSE 5173

ENTRYPOINT [ "npm", "run", "dev" ]
