#!/bin/bash
set -e

echo "🧹 Wiping Vite caches..."
rm -rf node_modules/.vite
rm -rf node_modules/vite-temp

echo "📦 Installing dependencies..."
npm install

echo "🛠 Building client..."
npx vite build

echo "🔧 Building server..."
npx vite build --config vite.config.server.ts
