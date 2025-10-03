crop and straighten an image.
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/ussd", (req, res) => {
  const { text } = req.body;
  let response = "";

  if (text === "") {
    response = "CON Welcome to Dumu App\n1. Check Balance\n2. Send Money";
  } else if (text === "1") {
    response = "END Your balance is KES 500";
  } else if (text === "2") {
    response = "END Send Money option coming soon";
  } else {
    response = "END Invalid choice";
  }

  res.set("Content-Type", "text/plain");
  res.send(response);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
