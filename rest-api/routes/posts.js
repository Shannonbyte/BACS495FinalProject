var express = require('express');
var router = express.Router();



/* GET Posts listing. */
router.get('/', function(req, res, next) {
  var db = req.app.locals.db;
  var cursor = db.collection("posts").find();
  cursor.toArray().then(c => res.json(c));
});

/*GET Posts by ID*/
router.get('/:id', function(req, res, next) {
  var db = req.app.locals.db;
  var id = req.params.id;
  console.log(id);
  const query = {'id':id};
  db.collection("posts")
    .findOne(query)
    .then(result => {
      console.log('Got post ${result}');
      res.json(result);
    })
    .catch(err=>{
      console.log('Error: ${err}');
    });

});

/*POST Posts*/
router.post('/', function(req, res, next) {
  const post = {
    "id": req.body.id,
    "title": req.body.title,
    "content": req.body.content,
    "votes": req.body.votes,
    "answers":req.body.answers
  }
  console.log(post);
  var db = req.app.locals.db;
  db.collection("posts").insertOne(post);
  res.send("Post inserted");

});

/*PATCH votes for Posts*/
router.patch("/", function(req, res, next){
  const post = {
    "id": req.body.id

  }
  var db = req.app.locals.db;
  db.collection("posts").updateOne(post
  , {$set: {"votes": req.body.votes}}
  , {upsert: true});
  res.send("vote counted");
});


/*PUT answers into Posts*/
router.patch("/answers", function(req, res, next){
  console.log('here');
  const post = {
    "id":req.body.id
  }
  var db = req.app.locals.db;


  db.collection("posts").updateOne(post
  , {$set: {"answers": req.body.answers}}
  , {upsert:true});
  res.send("answer submitted")

});



module.exports = router;
