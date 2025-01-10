import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.listen(PORT, () => {
  console.log(`Your app is running on port ${PORT}`);
});
