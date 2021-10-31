const express = require("express");
const router = express.Router();
const axios = require("axios");

//GET cvrnr
router.get("/", async (req, res) => {
  console.log("CVRnr route");

  let param = req.query.input;

  let data = JSON.stringify({
    _source: ["Vrvirksomhed.virksomhedMetadata"],
    query: {
      term: {
        "Vrvirksomhed.cvrNummer": `${param}`,
      },
    },
  });

  let config = {
    method: 'POST',
    url: 'http://distribution.virk.dk/cvr-permanent/virksomhed/_search\n',
    headers: { 
      'Authorization': 'Basic ' + process.env.VIRK_KEY, 
      'Content-Type': 'application/json; charset=UTF-8'
    },
    data : data
  };
  
  axios(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log(response.data)
    res.send(response.data)
    
    
  })
  .catch((error) => {
    console.log(error);
  });
  
});


module.exports = router;
