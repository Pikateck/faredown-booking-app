#!/bin/bash
set -e

echo "🧹 Full Vite cache wipe..."
rm -rf node_modules/.vite
rm -rf node_modules/vite-temp

echo "🔧 Installing dependencies..."
npm install

echo "⚙️ Building client with Vite..."
npx vite build

echo "🛠 Building server with Vite server config..."
npx vite build --config vite.config.server.ts
