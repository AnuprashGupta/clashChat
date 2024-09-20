import express from 'express';
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 7000;
app.get("/", (req, res) => {
    return res.send("Hey It's Working...");
});
app.listen(PORT, () => console.log(`Server is running on the port , ${PORT}`));
