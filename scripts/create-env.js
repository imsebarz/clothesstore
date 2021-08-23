const fs = require("fs");

fs.writeFileSync(
  "./.env",
  `API_URL=${process.env.API_URL}\n
REFRESH_TOKEN=${process.env.REFRESH_TOKEN}\n
CLIENT_SECRET=${process.env.CLIENT_SECRET}\n
CLIENT_ID=${process.env.CLIENT_ID}\n`
);
