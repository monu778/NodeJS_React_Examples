var express = require('express');
var router = express.Router();
var multer  = require('multer');
var timestamp = require('unix-timestamp');
var fs = require('fs');
var path = require('path');
var csv= require('fast-csv');


timestamp.round = true;

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/tmp/')
    },
    filename: function (req, file, cb) {
        cb(null, timestamp.now()+".csv")
    },
    rename: function (fieldname, filename) {
        return filename+"_"+Date.now();
    }
});

var uploads = multer({
    storage:storage
}).single('file');


/* GET home page. */
router.get('/', function(req, res) {
  res.render("main1",{});
});

router.post('/upload', uploads, function(req, res,next) {

  uploads(req, res, function (err) {
      if (err) {
        console.log("error in uploading")
        return
      } else {
          console.log(req.file);
          var count=0;
          var jsonData = [];
          var keys= [];
          fs.createReadStream(req.file.path).pipe(csv()).on('data',function(data){
              if(count==0) {
                  keys = data;
              } else {
                  var jsonObj = {};
                  keys.forEach(function(e,i) {
                      jsonObj[e] = data[i];
                  });
                  jsonData.push(jsonObj);
              }
              count++;
          }).on('end',function(data) {
              res.render("audiolist",{list:jsonData})
          });
      }
  });
});

module.exports = router;
