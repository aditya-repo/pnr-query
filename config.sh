#!/bin/bash

# Install Nginx 

sudo apt update
sudo apt 
sudo apt install nginx
sudo nano /etc/nginx/sites-available/app

# Server configuration

# server {
#     listen 80;
#     server_name yourdomain.com www.yourdomain.com;

#     location /pnr-query {
#         proxy_pass http://localhost:4500;  # Point to your Node.js app's address
#         proxy_http_version 1.1;
#         proxy_set_header Upgrade $http_upgrade;
#         proxy_set_header Connection 'upgrade';
#         proxy_set_header Host $host;
#         proxy_cache_bypass $http_upgrade;
#     }
#     # Additional configurations can be added here if needed
# }


#Nginx start command
sudo systemctl start nginx
sudo systemctl enable nginx


# Install Nodejs on server

sudo apt install curl gnupg
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs
node -v
npm -v

# Install PM2 Manager
sudo npm install -g pm2


# Install third party module

sudo apt install libgbm1 libnss3-dev libgconf-2-4 libfontconfig1 libxss1

sudo apt install libasound2 libnss3-dev libgconf-2-4 libfontconfig1 libxss1

sudo apt install libatk-bridge2.0-0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libxkbcommon0

sudo apt update && sudo apt install libatk-bridge2.0-0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libxkbcommon0

# Modify the code as below
#   const browser = await puppeteer.launch({
#     args: ['--no-sandbox'],
#     headless: true,
#   })