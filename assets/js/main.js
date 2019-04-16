var btnAddToCart = document.querySelectorAll('.item-actions__cart');
var cartCounterlabel = document.querySelector('#cart-counter');
var cartCounter = 0;
var cartPrice = 0;

function fnPriceCalculator(elem) {
  var tmpPrice = elem.parentElement.previousElementSibling.innerHTML;

  cartPrice += +tmpPrice.
    replace('$', '').
    replace(' <sup>', '.').
    replace('</sup>', '');

  return 'Added ' + cartPrice.toFixed(2) + ' $';
}

function fnCounter() {
  if (!cartCounter) cartCounterlabel.style.display = 'block';
  cartCounterlabel.innerHTML = ++cartCounter;

  var tmpThis = this;
  var tmpInnerHtml = this.innerHTML;
  
  this.innerHTML = fnPriceCalculator(this);

  cartCounterlabel.title = this.innerHTML;

  this.removeEventListener('click', fnCounter);

  setTimeout(function () {
    tmpThis.innerHTML = tmpInnerHtml;
    tmpThis.addEventListener('click', fnCounter);
  }, 2000);
}

for (var i = 0; i < btnAddToCart.length; i++) btnAddToCart[i].addEventListener('click', fnCounter);