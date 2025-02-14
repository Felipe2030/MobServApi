# Use uma imagem oficial do Node.js
FROM node:18

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos para o contêiner
COPY package.json ./
RUN npm install

COPY . .

# Expõe a porta do servidor
EXPOSE 3000

# Comando para iniciar a API
CMD ["node", "src/main.js"]
