var urlBase = '../js/products.json';
// var urlBase = 'http://localhost/NYMAR-1/js/products.json';

// function to add dot (.) in integer for money
function numberWithCommas(x) {
	var parts = x.toString().split(".");
	parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
	return parts.join(",");
}

// preloader handler
$(window).on('load', function() {
  setTimeout(function() {
      removeLoader()
  }, 500)
});

function removeLoader(){
  $( "#preloader" ).fadeOut(500, function() {
    $( "#preloader" ).remove();
  });  
}

$(window).on('load', function() {
  $('#preloader').delay(1500).fadeOut('slow', function() { $(this).remove(); });
  $('#preloader-detail').delay(2000).fadeOut('slow', function() { $(this).remove(); });
  setTimeout(() => {
    $('body').removeClass('disscroll');
  }, 1500);
});

$('.fav-content').on('click', '#product-id', function (){
  var target_id = $(this).data('id');
  url = $(this).attr('href');
  var page = url.split('?product=');
  var page_id = page+target_id;
  let products = JSON.parse(localStorage.getItem('products'));
  for(let product of products){
    if(target_id == product.product_id){
      var idContent = product.product_id;
      localStorage.setItem('pageName', page[1]);
      localStorage.setItem('idContent', idContent);
    }
  }
})


// click handler for redirect to page detail
$('.product-dom-all').on('click', '#product-id', function (){
  var target_id = $(this).data('id');
  url = $(this).attr('href');
  var page = url.split('?product=');
  var page_id = page+target_id;
  let products = JSON.parse(localStorage.getItem('products'));
  for(let product of products){
    if(target_id == product.product_id){
      var idContent = product.product_id;
      localStorage.setItem('pageName', page[1]);
      localStorage.setItem('idContent', idContent);
    }
  }
});

$('#search-page').on('click', '#product-id', function (){
  var target_id = $(this).data('id');
  url = $(this).attr('href');
  var page = url.split('?product=');
  var page_id = page+target_id;

  let products = JSON.parse(localStorage.getItem('products'));
  for(let product of products){
    if(target_id == product.product_id){
      var idContent = product.product_id;
      localStorage.setItem('pageName', page[1]);
      localStorage.setItem('idContent', idContent);
    }
  }
});

$('.product-dom-gfe').on('click', '#product-id', function (){
  var target_id = $(this).data('id');
  url = $(this).attr('href');
  var page = url.split('?product=');
  var page_id = page+target_id;

  let products = JSON.parse(localStorage.getItem('products'));
  for(let product of products){
    if(target_id == product.product_id){
      var idContent = product.product_id;
      localStorage.setItem('pageName', page[1]);
      localStorage.setItem('idContent', idContent);
    }
  }
});

$('.product-dom-mfe').on('click', '#product-id', function (){
  var target_id = $(this).data('id');
  url = $(this).attr('href');
  var page = url.split('?product=');
  var page_id = page+target_id;

  let products = JSON.parse(localStorage.getItem('products'));
  for(let product of products){
    if(target_id == product.product_id){
      var idContent = product.product_id;
      localStorage.setItem('pageName', page[1]);
      localStorage.setItem('idContent', idContent);
    }
  }
});

$('.product-dom-kfe').on('click', '#product-id', function (){
  var target_id = $(this).data('id');
  url = $(this).attr('href');
  var page = url.split('?product=');
  var page_id = page+target_id;

  let products = JSON.parse(localStorage.getItem('products'));
  for(let product of products){
    if(target_id == product.product_id){
      var idContent = product.product_id;
      localStorage.setItem('pageName', page[1]);
      localStorage.setItem('idContent', idContent);
    }
  }
});

$('.product-dom-hfe').on('click', '#product-id', function (){
  var target_id = $(this).data('id');
  url = $(this).attr('href');
  var page = url.split('?product=');
  var page_id = page+target_id;

  let products = JSON.parse(localStorage.getItem('products'));
  for(let product of products){
    if(target_id == product.product_id){
      var idContent = product.product_id;
      localStorage.setItem('pageName', page[1]);
      localStorage.setItem('idContent', idContent);
    }
  }
});

$('.product-dom-accfe').on('click', '#product-id', function (){
  var target_id = $(this).data('id');
  url = $(this).attr('href');
  var page = url.split('?product=');
  var page_id = page+target_id;

  let products = JSON.parse(localStorage.getItem('products'));
  for(let product of products){
    if(target_id == product.product_id){
      var idContent = product.product_id;
      localStorage.setItem('pageName', page[1]);
      localStorage.setItem('idContent', idContent);
    }
  }
});

$('#list-product-gf').on('click', '#product-id', function() {
  var target_id = $(this).data('id');
  url = $(this).attr('href');
  var page = url.split('?product=');
  var page_id = page+target_id;

  let products = JSON.parse(localStorage.getItem('products'));
  for(let product of products){
    if(target_id == product.product_id){
      var idContent = product.product_id;
      localStorage.setItem('pageName', page[1]);
      localStorage.setItem('idContent', idContent);
    }
  }
});

$('#list-product-mf').on('click', '#product-id', function (){
  var target_id = $(this).data('id');
  url = $(this).attr('href');
  var page = url.split('?product=');
  var page_id = page+target_id;

  let products = JSON.parse(localStorage.getItem('products'));
  for(let product of products){
    if(target_id == product.product_id){
      var idContent = product.product_id;
      localStorage.setItem('pageName', page[1]);
      localStorage.setItem('idContent', idContent);
    }
  }
});

$('#list-product-kf').on('click', '#product-id', function (){
  var target_id = $(this).data('id');
  url = $(this).attr('href');
  var page = url.split('?product=');
  var page_id = page+target_id;
  
  let products = JSON.parse(localStorage.getItem('products'));
  for(let product of products){
    if(target_id == product.product_id){
      var idContent = product.product_id;
      localStorage.setItem('pageName', page[1]);
      localStorage.setItem('idContent', idContent);
    }
  }
});

$('#list-product-hijab').on('click', '#product-id', function (){
  var target_id = $(this).data('id');
  url = $(this).attr('href');
  var page = url.split('?product=');
  var page_id = page+target_id;
  
  let products = JSON.parse(localStorage.getItem('products'));
  for(let product of products){
    if(target_id == product.product_id){
      var idContent = product.product_id;
      localStorage.setItem('pageName', page[1]);
      localStorage.setItem('idContent', idContent);
    }
  }
});

$('#list-product-acc').on('click', '#product-id', function (){
  var target_id = $(this).data('id');
  url = $(this).attr('href');
  var page = url.split('?product=');
  var page_id = page+target_id;
  
  let products = JSON.parse(localStorage.getItem('products'));
  for(let product of products){
    if(target_id == product.product_id){
      var idContent = product.product_id;
      localStorage.setItem('pageName', page[1]);
      localStorage.setItem('idContent', idContent);
    }
  }
});

$('#category-girl').on('click', '#product-id', function() {
  var target_id = $(this).data('id');
  url = $(this).attr('href');
  var page = url.split('?product=');
  var page_id = page+target_id;

  let products = JSON.parse(localStorage.getItem('products'));
  for(let product of products){
    if(target_id == product.product_id){
      var idContent = product.product_id;
      localStorage.setItem('pageName', page[1]);
      localStorage.setItem('idContent', idContent);
    }
  }
});

$('#category-man').on('click', '#product-id', function() {
  var target_id = $(this).data('id');
  url = $(this).attr('href');
  var page = url.split('?product=');
  var page_id = page+target_id;

  let products = JSON.parse(localStorage.getItem('products'));
  for(let product of products){
    if(target_id == product.product_id){
      var idContent = product.product_id;
      localStorage.setItem('pageName', page[1]);
      localStorage.setItem('idContent', idContent);
    }
  }
});

$('#category-kid').on('click', '#product-id', function() {
  var target_id = $(this).data('id');
  url = $(this).attr('href');
  var page = url.split('?product=');
  var page_id = page+target_id;

  let products = JSON.parse(localStorage.getItem('products'));
  for(let product of products){
    if(target_id == product.product_id){
      var idContent = product.product_id;
      localStorage.setItem('pageName', page[1]);
      localStorage.setItem('idContent', idContent);
    }
  }
});

$('#category-hijab').on('click', '#product-id', function() {
  var target_id = $(this).data('id');
  url = $(this).attr('href');
  var page = url.split('?product=');
  var page_id = page+target_id;

  let products = JSON.parse(localStorage.getItem('products'));
  for(let product of products){
    if(target_id == product.product_id){
      var idContent = product.product_id;
      localStorage.setItem('pageName', page[1]);
      localStorage.setItem('idContent', idContent);
    }
  }
});

$('#category-acc').on('click', '#product-id', function() {
  var target_id = $(this).data('id');
  url = $(this).attr('href');
  var page = url.split('?product=');
  var page_id = page+target_id;

  let products = JSON.parse(localStorage.getItem('products'));
  for(let product of products){
    if(target_id == product.product_id){
      var idContent = product.product_id;
      localStorage.setItem('pageName', page[1]);
      localStorage.setItem('idContent', idContent);
    }
  }
});

// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:4,
//     loop:true,
//     margin:10
// });
// $('.customNextBtn').click(function() {
//   owl.trigger('next.owl.carousel');
// })
// // Go to the previous item
// $('.customPrevBtn').click(function() {
//   // With optional speed parameter
//   // Parameters has to be in square bracket '[]'
//   owl.trigger('prev.owl.carousel', [300]);
// })

// refresh new data on json every 3 seconds after it changes
var previous = null;
var current = null;
setInterval( function() {
  $.getJSON(urlBase, function(json) {
    current = JSON.stringify(json);
    if(previous && current && previous !== current){
      console.log('refresh');
      location.reload();
    }
    previous = current;
  })
}, 3000);


