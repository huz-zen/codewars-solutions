const crypto = require("crypto");

// Hash a password
const hash = crypto.createHash("sha256").update("abc123").digest("hex");
console.log("Hashed Password:", hash);

