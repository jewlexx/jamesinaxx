const $ = require("jquery");
import "../styles/index.scss";

console.log("Init");

/**
 *
 * @param {string} data
 */
function dataStuff(data) {
  console.log(data);
  data.split(" | ").forEach((fileName) => {
    $(".file-nav").append("<li>" + fileName.replace(".js", "") + "</li>");
  });
}

$.ajax("https://jamesinaxx.github.io/jamesinaxx/files.txt").then(dataStuff);
