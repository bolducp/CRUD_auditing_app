var express = require('express');
var router = express.Router();

var Item = require('../models/items')

/* GET items listing. */
router.get('/', function(req, res, next) {
  Item.find({}, function(err, items){
    if (err) {
      return res.status(400).send(err);
    }
    res.send(items)
  });
});


/* POST item to create listing */
router.post('/', function(req, res){
  var item = new Item(req.body);

  item.save(function(err, savedItem){
    if (err){
      return res.status(400).send(err);
    }
    res.send(savedItem);
  });
});


/* DELETE item to delete listing */
router.delete('/:itemID', function(req, res){
  Item.findById(req.params.itemID, function(err, item){
    item.remove(function(err){
      if (err){
        return res.status(400).send(err);
      }
      res.send(null);
    });
  });
});


/* PUT request to UPDATE item listing */
router.put('/:itemID/:propertyToChange/:newValue', function(req, res){
  Item.findById(req.params.itemID, function(err, item){
    item[req.params.propertyToChange] = req.params.newValue;
    item.save(function(err, updatedItem){
      if (err){
        return res.status(400).send(err);
      }
      res.send(updatedItem);
    });
  });
});









module.exports = router;
