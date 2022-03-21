const express = require("express");
const axios = require("axios");

const app = express();

const cardsUrl =
  "https://gist.githubusercontent.com/umar-ahmed/ae5c29f9a759a8877d14b700dc5c8f52/raw/26ff18f92b6dbcf417a1be1524fe847299c18dcd/cards.json";

app.get("/cards", (req, res) => {
  axios.get(cardsUrl).then(({ data }) => {
    console.log(data);
    res.status(200).json(data);
  });
});

app.get("/cards/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { data, status } = await axios.get(cardsUrl);
    console.log(`Status code of GIST Request: ${status}`);
    for (const item of data) {
      if (item.id === parseInt(id)) {
        res.status(200).json(item);
      } else {
        return res.status(404).json({});
      }
    }
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
