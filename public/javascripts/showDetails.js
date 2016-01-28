'use strict';

$(document).ready(init);

function init(){
  $('#makeEdits').click(editItem);
  $('#delete').click(deleteItem);
}

function editItem(event){
  event.preventDefault();
  var itemName = $('#name').val();
  var value = $('#price').val();
  var description = $('#description').val();
  var photo = $('#photo').val();
  var id = $('#itemID').text();
  var updatedItem = {name: itemName, price: value, description: description, photo: photo, id: id};

  $.ajax({
    url: '/items/' + id,
    method: 'PUT',
    data: updatedItem
  })
    .success(function(data){
      window.location = "/items";
  });
}

function deleteItem(event){
  event.preventDefault();
  var id = $('#itemID').text();

  $.ajax({
    url: '/items/' + id,
    method: 'DELETE'
  })
    .success(function(data){
      window.location = "/items";
  });
}
