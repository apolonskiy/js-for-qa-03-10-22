// You can use 'require' to import JSON files as well
let myjson = require("./1.json");

// JSON files will be automatically parsed from string to JSON
// so you dont need to use JSON.parse

console.log("Got specialization", myjson.specialization);