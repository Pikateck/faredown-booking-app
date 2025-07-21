#!/bin/bash
set -e

echo "🧹 Cleaning Vite cache..."
rm -rf node_modules/.vite

echo "🔧 Installing dependencies..."
npm install

echo "⚙️ Building client with Vite..."
npx vite build

echo "🛠 Building server with Vite server config..."
npx vite build --config vite.config.server.ts
