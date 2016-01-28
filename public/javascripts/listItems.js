'use strict';

$(document).ready(init);

var $rows = $('.rows')

function init() {
	$('#search').keyup(searchList);
}

function searchList() {
	var text = $('#search').val();
	var $filtered = $rows.filter(function() {
		return $(this).children('.searchable').text().includes(text);
	});
  var sum = 0.00;
  	$filtered.children('.price').each(function(i, val) {
  		sum += parseFloat($(val).text().slice(1));
  	});
  $('#total').text('Total: $' + sum.toFixed(2));
	$('tbody').empty().append($filtered);
}
