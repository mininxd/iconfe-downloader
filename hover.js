$(document).on('mouseenter', '.grid-item', function(event) {
  event.preventDefault();
  var clickedItem = $(this);
  var icon = clickedItem.find('.icon').toArray();
  var gridBottom = clickedItem.find('.grid-item-bottom').toArray();
  var itemName = clickedItem.find('.item-name').toArray();
  var downloadContainer = clickedItem.find('.download-container').toArray();
  icon[0].style.height = "50px";
  icon[0].style.width = "50px";
  gridBottom[0].style.height = "50px";
  itemName[0].style.display = "none";
  downloadContainer[0].style.display = "flex";
});


$(document).on('mouseleave', '.grid-item', function(event) {
  event.preventDefault();
  var clickedItem = $(this);
  var icon = clickedItem.find('.icon').toArray();
  var gridBottom = clickedItem.find('.grid-item-bottom').toArray();
  var itemName = clickedItem.find('.item-name').toArray();
  var downloadContainer = clickedItem.find('.download-container').toArray();
  icon[0].style.height = "75px";
  icon[0].style.width = "75px";
  gridBottom[0].style.height = "auto";
  itemName[0].style.display = "block";
  downloadContainer[0].style.display = "none";
});
