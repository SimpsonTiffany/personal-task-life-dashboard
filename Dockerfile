# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source
COPY . .

# Expose application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

Note: Docker build is included as part of the MVP workflow demonstration. The container may not fully run due to incomplete dependency wiring at this stage.
