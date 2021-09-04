const fs = require('fs/promises');

// const readFileJSON = async fileName => {
//   const result = await fs.readFile(fileName, 'utf8');
//   return JSON.parse(result);
// };

// const writeFileJSON = (fileName, data) => {
//   return fs.writeFile(fileName, JSON.stringify(data));
// };

// Method#1
// module.exports = {
//   readFileJSON: readFileJSON,
//   writeFileJSON: writeFileJSON
// };
// module.exports = {
//   readFileJSON,
//   writeFileJSON
// };

// Method#2
// exports.readFileJSON = readFileJSON;
// exports.writeFileJSON = writeFileJSON;

exports.readFileJSON = async fileName => {
  const result = await fs.readFile(fileName, 'utf8');
  return JSON.parse(result);
};

exports.writeFileJSON = (fileName, data) => {
  return fs.writeFile(fileName, JSON.stringify(data));
};
