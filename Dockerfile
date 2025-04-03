FROM node:20.18.3-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

# Build the app using the script defined in package.json
RUN npm run build

# Install serve for a more reliable static file server
RUN npm install -g serve

# Expose the port
EXPOSE 3000

# Start the app using serve with explicit host binding
# Use the -s flag to serve the single-page application
# The -S flag disables directory listing
CMD ["serve", "-s", "-S", "dist", "-l", "tcp://0.0.0.0:3000"]
