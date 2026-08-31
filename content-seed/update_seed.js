const fs = require("fs");
const path = require("path");

const inputFile = path.join(__dirname, "seed.sql");
const outputFile = path.join(__dirname, "seed_updated.sql");

// 1. Read the SQL file content
const sqlContent = fs.readFileSync(inputFile, "utf8");

// 2. Target integers positioned directly before the closing parenthesis: ), or );
const regex = /(\b\d+)(\s*\)[,;])/g;

const updatedContent = sqlContent.replace(regex, (match, num, rest) => {
  const multipliedNumber = Number(num) * 100;
  return `${multipliedNumber}${rest}`;
});

// 3. Write out to the new file
fs.writeFileSync(outputFile, updatedContent, "utf8");

console.log("Successfully updated seed_updated.sql!");
