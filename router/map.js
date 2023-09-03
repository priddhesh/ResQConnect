// const express = require('express')
// const router = express.Router()

// const {
//   locations
// } = require("../database")

// router.route('/test')
//   .get(async (req, res) => {
//     const coOrdinates = await locations();
//     let tourStops = [];

//     coOrdinates.forEach(element => {
//       tourStops.push([{ lat: parseFloat(element.lati), long: parseFloat(element.longi) }, "Boynton Pass"]);
//     });
//     res.render('index', { coOrdinates: tourStops })
//   }
//   )

// router.route('/test1')
//   .get(async (req, res) => {
//     res.render('test')
//   }
//   )

// module.exports = router

const express = require('express');
const router = express.Router();

const { locations } = require("../database");

router.route('/test').get(async (req, res) => {
  const coOrdinates = await locations();
  const tourStops = [];

  coOrdinates.forEach(element => {
    tourStops.push({
      lat: parseFloat(element.lati),
      lng: parseFloat(element.longi),
      name: "Boynton Pass"
    });
  });

  res.render('index', { coOrdinates: tourStops });
});

router.route('/test1')
  .get(async (req, res) => {
    res.render('test')
  }
  )

module.exports = router