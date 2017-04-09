
$(function() {
  // initial variables
  var $productSidebar = $(".product-sidebar");
  var $overlay = $("<div class='overlay'></div>");
  var $productNavigation = $("#product-navigation");
  var  productList = $("#product-navigation > li");
  var $productImgList = $(".img-list");
  
  // Product photo list variables
  var jackets = "img/menu-jacket.jpg";
  var shirts = "img/menu-shirt.jpg";
  var pants = "img/menu-pants.jpg";
  var shoes = "img/menu-shoes.jpg";
  var watches = "img/menu-watch.jpg";
  var accessories = "img/menu-accessories.jpg";  
  
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
  
  // when hovering over an item in products menu show new image on right side
  $productNavigation.on("mouseover", "a", function() {
    var thisText = $(this).text().toLowerCase();
      $(".deafultProductImg").hide();
    
      if (thisText === "jackets") {
        $productImgList.append("<img class='showProductImg' src='" + jackets+"'>");
      } else if (thisText === "shirts") {
        $productImgList.append("<img class='showProductImg' src='" + shirts +"'>");
      } else if (thisText === "pants") {
        $productImgList.append("<img class='showProductImg' src='" + pants +"'>");
      } else if (thisText === "shoes") {
        $productImgList.append("<img class='showProductImg' src='" + shoes +"'>");
      } else if (thisText === "watches") {
        $productImgList.append("<img class='showProductImg' src='" + watches +"'>");
      } else if (thisText === "accessories") {
        $productImgList.append("<img class='showProductImg' src='" + accessories +"'>");
      }
    })
  
  $productNavigation.on("mouseout", "a", function() {
    if ( $(".img-list > img").hasClass("deafultProductImg") ) {
      $(".deafultProductImg").show();
      $(".showProductImg").remove();
  } 
  });
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