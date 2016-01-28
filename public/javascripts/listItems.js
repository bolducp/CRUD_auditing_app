'use strict';

$(document).ready(init);

function init() {
	$('#search').keyup(searchList);
}

function searchList() {
  var $rows = $('.rows')
	var text = $('#search').val();
	var $filtered = $rows.filter(function() {
		return $(this).children('.searchable').text().includes(text);
	});
	$('tbody').empty().append($filtered);
}
