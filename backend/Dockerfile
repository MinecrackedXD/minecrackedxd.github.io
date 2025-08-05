FROM node:18

WORKDIR /app

# Copy package files from the current directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
