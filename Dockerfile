## Use Node Slim image
FROM node:14-slim

## Copy source code
COPY . .

EXPOSE 4000
## Start the application
CMD ["node", "dist/creativehub-world/server/main.js"]
