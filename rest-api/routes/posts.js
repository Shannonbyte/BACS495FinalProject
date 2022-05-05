var express = require('express');
var router = express.Router();

/* GET Posts listing. */
router.get('/', function(req, res, next) {
  var db = req.app.locals.db;
  var cursor = db.collection("posts").find();
  cursor.toArray().then(c => res.json(c));
});

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

router.post('/', function(req, res, next) {
  const post = {
    "id": req.body.id,
    "title": req.body.title,
    "content": req.body.content
  }
  console.log(post);
  var db = req.app.locals.db;
  db.collection("posts").insertOne(post);
  res.send("Post inserted");
});

module.exports = router;
