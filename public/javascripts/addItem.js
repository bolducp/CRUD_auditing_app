'use strict';

$(document).ready(init);

function init(){
  $("#submit").on("click", addItem);
}

function addItem(e){
  e.preventDefault();
  var itemName = $('#name').val();
  var value = $('#price').val();
  var description = $('#description').val();
  var photo = $('#photo').val();
  var newItem = {name: itemName, price: value, description: description, photo: photo};

  $.post('/items/', newItem)
    .success(function(data){
      window.location = "/items";
      console.log("newItem ", newItem);
  });
}
