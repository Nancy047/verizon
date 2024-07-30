FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install @mui/base
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object
RUN npm install @fortawesome/fontawesome-svg-core
RUN npm run build --production
EXPOSE 3000
CMD ["npm", "start"]

