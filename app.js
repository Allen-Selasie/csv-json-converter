const fs = require('fs');
const csv = require('csvtojson');
const { Parser } = require('json2csv');

// Function to convert CSV to JSON
const csvToJson = async (csvFilePath) => {
  try {
    const jsonArray = await csv().fromFile(csvFilePath);
    return jsonArray;
  } catch (error) {
    console.error('Error converting CSV to JSON:', error.message);
    throw error;
  }
};

// Function to convert JSON to CSV
const jsonToCsv = (jsonArray) => {
  try {
    const parser = new Parser();
    const csvData = parser.parse(jsonArray);
    return csvData;
  } catch (error) {
    console.error('Error converting JSON to CSV:', error.message);
    throw error;
  }
};

// Function to save data to a file
const saveToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data, 'utf8');
    console.log('Data has been written to', filePath);
  } catch (error) {
    console.error('Error writing to file:', error.message);
  }
};

// Main function
const main = async () => {
  const args = process.argv.slice(2);

  if (args.length !== 3 || !['csv-to-json', 'json-to-csv'].includes(args[0])) {
    console.log('Usage: node converter.js [csv-to-json|json-to-csv] inputFilePath outputFilePath');
    return;
  }

  const inputFilePath = args[1];
  const outputFilePath = args[2];

  if (args[0] === 'csv-to-json') {
    const jsonArray = await csvToJson(inputFilePath);
    saveToFile(outputFilePath, JSON.stringify(jsonArray, null, 2));
  } else if (args[0] === 'json-to-csv') {
    const jsonData = JSON.parse(fs.readFileSync(inputFilePath, 'utf8'));
    const csvData = jsonToCsv(jsonData);
    saveToFile(outputFilePath, csvData);
  }
};

main();
