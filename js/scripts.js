
$(function() {
  // initial variables
  var $productSidebar = $(".product-sidebar");
  var $overlay = $("<div id='overlay'></div>");
  var $productNavigation = $("#product-navigation");
  var  productList = $("#product-navigation > li");
  var $productImgList = $(".img-list");
  
  
  // append .overlay to body
  $("body").append($overlay);
  $overlay.hide();
  
  $(".product").on("click", function(e) {
    e.preventDefault();
    $overlay.slideDown(800);
    $productSidebar.delay(1000).slideDown(1100);
  });
  
  $(document).click(function(e) {
    var target = e.target;
    if (  target == document.getElementById('overlay')) {
      productMenu();
    }
  })
  
  $('.button-collapse').click(function() {
    productMenu();
  })
  
  function productMenu() {
    $productSidebar.slideUp(800)
    $('#overlay').delay(1000).slideUp(1100);
  }
}) // End jQuery
  
  
  // Google map 
    
  var apiKey = "AIzaSyBnPeo1myAU1zt3iWMX19lLD7JfpusDcWk";

  function initMap() {
    var showMap =  {
      center: new google.maps.LatLng(40.758701, -111.876183),
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      zoom: 13,
      streetViewControl: true,
      streetViewControlOptions: {
      style: google.maps.ZoomControlStyle.large,
      position: google.maps.ControlPosition.BOTTOM_LEFT	
    }
  }
    
  var venueMap;
  venueMap = new google.maps.Map(document.getElementById("map"), showMap);
    
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(40.758701, -111.876183),
    animation:google.maps.Animation.DROP,
    opacity: 1
  });
    
  marker.setMap(venueMap);
  }

  function loadScript() {
    var script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=initMap";
    document.body.appendChild(script);
  }
  window.onload = loadScript();