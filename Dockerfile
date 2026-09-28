# Node.js LTS image
FROM node:20-alpine

# Work directory set karein
WORKDIR /usr/src/app

# Package files copy aur install karein
COPY package*.json ./
RUN npm ci

# Source code copy karein
COPY . .

# App Port expose karein
EXPOSE 3000

# App start command
CMD ["npm", "start"]