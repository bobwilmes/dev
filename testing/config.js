// testing/config.js
exports.config = {
    "url": process.env.API_URL || "http://localhost:80",
    "mongoClient": process.env.MONGO_URL || "mongodb://localhost:27017/bobwilmes",
};

