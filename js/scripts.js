
$(function() {
  // initial variables
  var $productSidebar = $(".product-sidebar");
  var $overlay = $("<div class='overlay'></div>");
  
  // append .overlay to body
  $("body").append($overlay);
  $overlay.hide();
  
  $productSidebar.hide();
  
  $(".product").on("click", function(event) {
    event.preventDefault();
    $productSidebar.slideDown(1000);
    $overlay.slideDown(1000);
  });
  
  $(".button-collapse").on("click", function() {
    $productSidebar.slideUp(1000);
    $overlay.slideUp(1000);
  });
  
  
  
}) // End jQuery