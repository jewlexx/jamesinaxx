const fs = require("fs");
const path = require("path");

fs.writeFileSync(
  path.join(__dirname, "./files.txt"),
  fs
    .readdirSync(path.join(__dirname, "../code/javascripts/codewars"))
    .join(" | ")
);
