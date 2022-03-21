var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.app.locals.db;
  var cursor = db.collection("users").find();
  cursor.toArray().then(c => res.json(c));
});

router.get('/:id', function(req, res, next) {
  var db = req.app.locals.db;
  var id = req.params.id;
  console.log(id);
  const query = {'id':id};
  db.collection("users")
    .findOne(query)
    .then(result => {
      console.log('Got user ${result}');
      res.json(result);
    })
    .catch(err=>{
      console.log('Error: ${err}');
    });

});

router.post('/', function(req, res, next) {
  const user = {
    "id": req.body.id,
    "name": req.body.name
  }
  console.log(user);
  var db = req.app.locals.db;
  db.collection("users").insertOne(user);
  res.send("User inserted");
});

module.exports = router;
