const Guest = require('../models/guest');

exports.getAllGuests = (req, res, next) => {
  // find method returns an array containing all of the
  //  Sauces in the database
  console.log(Guest);
  Guest.find()
    .then((guests) => {
      console.log('HEREREARASDF');
      res.status(200).json(guests);
      console.log(guests);
    })
    .catch((error) => {
      console.log('error here', error);
      res.status(400).json({
        error: error,
      });
    });
};
