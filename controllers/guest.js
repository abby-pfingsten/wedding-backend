const Guest = require("../models/guest");


exports.getAllGuests = (req, res, next) => {
  // find method returns an array containing all of the
  //  Sauces in the database
  Guest.find()
    .then((guests) => {
       
       
       
        res.status(200).json(guests);
        console.log(guests);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};