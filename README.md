# CSV to JSON and JSON to CSV Converter

This Node.js script converts data between CSV and JSON formats. It provides flexibility for converting arrays of strings and objects. Follow the instructions below for proper usage.

## Usage

Run the script with Node.js using the following commands:

### Convert CSV to JSON

```bash
node app.js csv-to-json input.csv output.json
```

### Convert JSON to CSV

```bash
node app.js json-to-csv input.json output.csv
```

Replace `input.csv`, `input.json`, `output.json`, and `output.csv` with your actual file paths.

## Important Notes

1. **CSV to JSON:**

   - Ensure the CSV file follows a valid format.
   - Array of strings in CSV may not work as expected. Use arrays of objects.

     **Example Input:**

     ```csv
     "John","Doe"
     "Jane","Smith"
     ```

2. **JSON to CSV:**

   - Ensure the JSON file follows a valid format.
   - Array of strings may not work as expected. Use arrays of objects.

     **Example Input: Wrong**

     ```json
     ["John", "Doe", "Jane", "Smith"]
     ```

     **Example Input: Right**

     ```json
     [
       { "firstName": "John", "lastName": "Doe", "age": 30 },
       { "firstName": "Jane", "lastName": "Smith", "age": 25 }
     ]
     ```

3. **Usage Syntax:**

   - Follow the correct syntax for executing the script.

     **Example:**

     ```bash
     node app.js csv-to-json input.csv output.json
     ```

4. **Output:**
   - Check the console for success or error messages.
   - Ensure the output file is generated successfully.

## Dependencies

- `csvtojson`: Converts CSV to JSON.
- `json2csv`: Converts JSON to CSV.

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE.md](LICENSE.md) file for details.
