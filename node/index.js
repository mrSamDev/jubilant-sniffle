const fs = require("fs");
const readline = require("readline");
const path = require("path");

const dataPath = path.resolve("data/");
const formattedPath = path.resolve(process.env.output + "/");

const log = console.log;

async function processLineByLine(fileName) {
  try {
    const fileStream = fs.createReadStream(dataPath + `/${fileName}`);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    const data = [];

    for await (const line of rl) data.push(JSON.parse(line));

    fs.appendFile(formattedPath + `/${fileName}.json`, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        log("Error writing file", err);
      } else {
        log("Successfully wrote the file " + fileName);
      }
    });
  } catch (error) {
    throw error;
  }
}

fs.readdir(dataPath, function (err, files) {
  if (err) throw err;
  files.forEach(function (file) {
    processLineByLine(file);
  });
});
