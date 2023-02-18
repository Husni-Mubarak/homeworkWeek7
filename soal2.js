const fs = require("fs");

// Read data Synchronous
const data = fs.readFileSync("./homework.log", "utf-8");
console.log(data);

// Write data Asynchronous
fs.writeFile("log.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  }

  console.log("Data successfully writed");
});

// commit "Merubah Read data payload menjadi Read data Synchronous"
