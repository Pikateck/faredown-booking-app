#!/bin/bash
set -e

echo "🔧 Installing dependencies..."
npm install

echo "⚙️ Building client with Vite..."
npx vite build

echo "🛠 Building server with Vite server config..."
npx vite build --config vite.config.server.ts
