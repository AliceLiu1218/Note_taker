const notes = require('express').Router();
const notesRecord = require('../db/db.json');
const fs = require('fs');
const uuid = require('../helpers/uuid');


notes.get('/notes', (req, res) => {
    res.status(200).json(notesRecord);
});

notes.post('/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a review`);
  
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;
  
    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
      const newRecord = {
        title,
        text,
        
        review_id: uuid(),
      };
  
      // Obtain existing reviews
      fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          // Convert string into JSON object
          const parsedRecord = JSON.parse(data);
  
          // Add a new review
          parsedRecord.push(newRecord);
  
          // Write updated reviews back to the file
          fs.writeFile(
            './db/db.json',
            JSON.stringify(parsedRecord, null, 4),
            (writeErr) =>
              writeErr
                ? console.error(writeErr)
                : console.info('Successfully updated reviews!')
          );
        }
      });
  
      const response = {
        status: 'success',
        body: newRecord,
      };
  
      console.log(response);
      res.status(201).json(response);
    } else {
      res.status(500).json('Error in posting review');
    }
});




module.exports = notes;