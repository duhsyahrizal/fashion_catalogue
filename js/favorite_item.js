var url = '../js/products.json?v=1.2';
// var url = 'http://localhost/NYMAR-1/js/products.json';

// function to add dot (.) in integer for money
function numberWithCommas(x) {
	var parts = x.toString().split(".");
	parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
	return parts.join(",");
}

// variables
const productsDOMAll = document.querySelector(".product-dom-all");
const favBtn = document.querySelector('.showFav');
const closeFavBtn = document.querySelector('.close-fav');
const clearFavBtn = document.querySelector('.clear-fav');
const favDOM = document.querySelector('.fav');
const favOverlay = document.querySelector('.fav-overlay');
const favItems = document.querySelector('.badge');
const favTotal = document.querySelector('.fav-total');
const favContent = document.querySelector('.fav-content');
var totalPrice = document.getElementById('fav-total');
const buttons = document.querySelectorAll('.fav-btn');



let fav = [];
let buttonsDOM = [];

// display the products
class UIAll {
  getFavButtons(){
    const buttons = [...document.querySelectorAll('.fav-btn')];
    buttonsDOM = buttons;
    buttons.forEach(button =>{
      let id = button.dataset.id;
      let inFav = fav.find(item => item.product_id === id);
      if(inFav){
        button.innerText = "In Favorites";
        button.disabled = true;
      }
      button.addEventListener('click', (event)=>{
        event.target.innerText = "In Favorites";
        event.target.disabled = true;
        // get product from products
        let favItem = {...Storage.getProduct(id), amount: 1};
        // add product to favorites
        fav = [...fav,favItem];
        Storage.saveFav(fav);
        // set fav values
        this.setFavValues(fav);
        // display favorite item
        this.addFavItem(favItem);
      })
    })
  }
  // set values for total in favorites
  setFavValues(fav){
    let tempTotal = 0;
    let itemsTotal = 0;
    let moneywithDot;
    fav.map(item => {
      tempTotal += item.price * item.amount;
      itemsTotal += item.amount;
      moneywithDot = numberWithCommas((tempTotal));
    })
    favItems.innerText = itemsTotal;
    const div = document.createElement('div');
    div.classList.add('text-center');
    div.innerHTML = `
      <h5>Is'nt any item here ?</h5>
      <img class="my-2" src="../img/cart-plus-solid.svg" height="40px" width="40px" />
      <h5>Let's get some product</h5>
    `;
    if(tempTotal == 0){
      favContent.appendChild(div);
      favTotal.innerText = tempTotal;
    }
    else {
      favTotal.innerText = moneywithDot;
    }
  }
  addFavItem(item){
    var money = item.price;
		// get function numberWithCommas
		let moneywithDot = numberWithCommas((money));
    const div = document.createElement('div');
    div.classList.add('row', 'fav-items', 'align-items-center');
    div.innerHTML = `
      <div class="col-lg-3 col-md-3 col-sm-2 col-3 mb-3">
        <img src="../${item.image_thumb}" alt="product">
      </div>
      <div class="col-lg-7 col-md-6 col-sm-8 col-7 mb-3">
        <h4>${item.title}</h4>
        <h6 class="item-price">IDR. ${moneywithDot}</h6>
        <div class="item-price"><a href="../products/detail?product=${item.title}?category=${item.category}" data-id="${item.product_id}" id="product-id">Checkout</a></div>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-2 col-2">
        <span><i class="fa fa-trash remove-item" data-id="${item.product_id}"></i></span>
      </div>
    `;
    favContent.appendChild(div);
  }
  showFav(){
    favOverlay.classList.add('transparentBg');
    favDOM.classList.add('showFav');
  }
  setupAPP(){
    fav = Storage.getFav();
    this.setFavValues(fav);
    this.populateFav(fav);
    favBtn.addEventListener('click',this.showFav);
    closeFavBtn.addEventListener('click',this.hideFav);
  }
  populateFav(){
    fav.forEach(item => this.addFavItem(item));
  }
  hideFav(){
    favOverlay.classList.remove('transparentBg');
    favDOM.classList.remove('showFav');
  }
  favLogic(){
    clearFavBtn.addEventListener('click', () => {
      this.clearFav();
      location.reload();
    });
    // favorites functional
    favContent.addEventListener('click', event => {
      if (event.target.classList.contains("remove-item")){
        let removeItem = event.target;
        let id = removeItem.dataset.id;
        favContent.removeChild(removeItem.parentElement.parentElement.parentElement);
        this.removeItem(id);
      }
    })

  }
  clearFav(){
    let favItems = fav.map(item => item.product_id);
    favItems.forEach(product_id => this.removeItem(product_id));
    console.log(favContent.children);
    while(favContent.children.length>0){
      favContent.removeChild(favContent.children[0])
    }
    this.hideFav();
  }
  removeItem(product_id){
    fav = fav.filter(item => item.product_id !== product_id);
    Storage.saveFav(fav);
    this.setFavValues(fav);
  }
  getSingleButton(id){
    return buttonsDOM.find(button => button.dataset.id === id);
  }
}

// get the products
class Products {
	async getProducts(){
		try {
			let result = await fetch(url);
      let data = await result.json();
      
      return data;
		} catch (error){
      console.log(error);
    }
	}
}

class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  static getProduct(id){
    let products = JSON.parse(localStorage.getItem('products'));
    return products.find(product => product.product_id === id);
  }
  static saveFav(fav){
    localStorage.setItem('fav',JSON.stringify(fav));
  }
  static getFav(){
    return localStorage.getItem('fav')?JSON.parse(localStorage.getItem('fav')): [];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UIAll();
  const products = new Products();
  // setup app
  ui.setupAPP();
  // get all item in favorites
  ui.getFavButtons();
  ui.favLogic();
});