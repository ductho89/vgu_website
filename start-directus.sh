#!/bin/bash

# Start the dependent system
echo "Starting the dependent system..."
# Replace with the actual command to start your dependent system
# Example: node start-server.js &
# Example: docker-compose -f dependent-system.yml up -d

# Wait for the dependent system to be ready
echo "Waiting for the dependent system to be ready..."
wait-on http://directus:8055

# Run the Next.js build
echo "Starting Next.js build..."
npm run build

# Optionally, start the Next.js server after the build
npm start
