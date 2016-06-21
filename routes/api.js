/**
 * Created by sravan on 20/06/16.
 */
var express = require('express');
var router = express.Router();
var request=require('request');

router.get("/albumlist",function(req,res){
    console.log(req.query.name)
    request({
        uri: "https://itunes.apple.com/search?term="+req.query.name,
        method: "GET",
        timeout: 10000,
        followRedirect: true,
        maxRedirects: 10
    }, function(error, response, body) {
        if(error) {

        } else {
            var respBody = JSON.parse(body)
            var artistId;
            respBody.results.forEach(function (row, i) {
                var artists = row.artistName.split( /[,&]/);
                var count = 0;
                if(artists.length==1) {
                    if(artists[0].match(artistId)) {
                        artistId = row.artistId;
                        console.log(artistId);
                    }
                }
            });
            request({
                uri: "https://itunes.apple.com/lookup?id="+artistId+"&entity=album",
                method: "GET",
                timeout: 10000,
                followRedirect: true,
                maxRedirects: 10
            }, function(error, response, body) {
                if (error) {

                } else {
                    var respBody = JSON.parse(body)
                    var artistId;
                    console.log(body);
                    res.json(
                        respBody
                    )
                }
            });
        }
    });
});

router.get("/trackList",function(req,res){
    console.log(req.query.id);
    request({
        uri: "https://itunes.apple.com/lookup?id="+req.query.id+"&entity=song",
        method: "GET",
        timeout: 10000,
        followRedirect: true,
        maxRedirects: 10
    }, function(error, response, body) {
        if (error) {
            console.log("could not retrieve track list")
        } else {
            var respBody = JSON.parse(body)
            var artistId;
            console.log(body);
            res.json(
                respBody
            )
        }
    });
});
module.exports = router;
