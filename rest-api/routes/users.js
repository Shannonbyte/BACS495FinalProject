var express = require('express');
var router = express.Router();

var users =[
  {"id":1, "name":"Shannon"},
  {"id":2, "name":"Bud"}
]


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  for(let user of users){
    if(user.id ==id){
      res.json(user)
    }
  }
  res.send("Cannot find user");
});

router.post('/', function(req, res, next) {
  const user = {
    "name": req.body.name
  }

  var db = req.app.locals.db;
  db.collection("users").insertOne(user);
  res.send("User inserted");
});

module.exports = router;
