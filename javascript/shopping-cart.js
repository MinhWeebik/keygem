function openCartNav()
{
  
  if(document.querySelector('.search-nav').classList.contains('search-nav-open'))
  {
    closeSearchNav();
  }
  if(document.getElementById("mini-menu-container").style.transform = "translateX(-340px)")
  {
    closeMenu();
  }
  document.querySelector('.cart-footer').classList.add('cart-footer-animation');
  document.getElementById("cart-nav").style.transform = "translateX(0)";
  document.getElementById("cart-background").style.opacity ="1";
  document.getElementById("cart-background").style.zIndex="12";
  document.body.style.overflow = "hidden";
  if(cart.length===0)
  {
    btnEl.disabled = true;
  }
  else
  {
    btnEl.disabled = false;
  }
}

function closeItem()
{
  if(document.querySelector('.search-nav').classList.contains('search-nav-open'))
  {
    closeSearchNav();
  }
  if(document.getElementById("mini-menu-container").style.transform = "translateX(-340px)")
  {
    closeMenu();
  }
  closeCartNav();
}

let btnEl = document.querySelector('.cart-footer .custom-button');

function openMenu()
{
  if(document.querySelector('.search-nav').classList.contains('search-nav-open'))
  {
    closeSearchNav();
  }
  document.getElementById("mini-menu-container").style.transform = "translateX(0)";
  document.getElementById("cart-background").style.opacity ="1";
  document.getElementById("cart-background").style.zIndex="11";
  document.body.style.overflow = "hidden";
}

function closeMenu()
{
    document.getElementById("mini-menu-container").style.transform = "translateX(-340px)";
    document.getElementById("cart-background").style.opacity ="0";
    document.getElementById("cart-background").style.zIndex="-1";
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = 'hidden';
    setTimeout(() => {
      miniMenuItemEl.classList.remove('info');
    miniMenuItemEl.classList.add('info-dissappear');
    miniItemInfoContainer.style.display = 'none';
    }, 500);
    miniItemInfoContainer.classList.remove('mini-info-item-appear');
    miniItemInfoContainer.classList.add('mini-info-item-dissappear');
}

function closeCartNav()
{
    document.getElementById("cart-nav").style.transform = "translateX(400px)";
    document.getElementById("cart-background").style.opacity ="0";
    document.getElementById("cart-background").style.zIndex="-1";
    document.querySelector('.cart-footer').classList.remove('cart-footer-animation');
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = 'hidden';
}

function openSearchNav()
{
  if(document.getElementById("mini-menu-container").style.transform = "translateX(-340px)")
  {
    closeMenu();
  }
  document.querySelector('.search-nav').classList.add('search-nav-open');
  document.querySelector('.search-nav').classList.remove('search-nav-close');
  document.getElementById("search-nav").style.pointerEvents = 'auto';
  document.getElementById("cart-background").style.opacity = "1";
  document.getElementById("cart-background").style.zIndex = "5";
  document.body.style.overflow = "hidden";
  document.getElementById("header").style.backgroundColor = "black";
  document.querySelector('.search-input').value='';
}

function closeSearchNav()
{
  document.querySelector('.search-nav').classList.remove('search-nav-open');
  document.querySelector('.search-nav').classList.add('search-nav-close');
  document.getElementById("search-nav").style.pointerEvents = 'none';
  document.getElementById("cart-background").style.opacity ="0";
  document.getElementById("cart-background").style.zIndex="-1";
  document.body.style.overflowY = "auto";
  document.body.style.overflowX = 'hidden';
  document.getElementById("header").style.backgroundColor = "";
  searchResultGridEl.innerHTML = '';
    productResultEl.style.display = 'none';
}

function changeLayout1()
{
  document.getElementById("layout").style.gridTemplateColumns = "1fr 1fr";
  document.getElementById("block1").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block2").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block3").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block4").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block5").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block6").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block7").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block8").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block9").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block10").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block11").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block12").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block13").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById('block14').style.backgroundColor = 'rgb(85, 84, 83)';
}

function changeLayout2()
{
  document.getElementById("layout").style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
  document.getElementById("block1").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block2").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block3").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block4").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block5").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block6").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block7").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block8").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block9").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block10").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block11").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block12").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block13").style.backgroundColor = 'rgb(229, 227, 219)';
}

function changeLayout3()
{
   document.getElementById("layout").style.gridTemplateColumns = "1fr";
  document.getElementById('block14').style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block1").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block2").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block3").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block4").style.backgroundColor = 'rgb(85, 84, 83)';
}

function sortMenu()
{
  var sc = document.getElementById("sort-container");
  var check = window.getComputedStyle(sc , null).opacity.toString();
  if(check == "1")
  {
    sc.style.opacity = "0";
    sc.style.pointerEvents = "none";
    document.body.style.overflow = "auto";
  }
  else
  {
    sc.style.opacity = "1";
  sc.style.pointerEvents = "auto";
  document.body.style.overflow = "hidden";
  }
}

const cartItemEl = document.querySelector('.cart-body');
const subTotalEl = document.querySelector('.cart-footer .custom-button');
const totalItemInCartEl = document.querySelector('.menu-cart');
const productAmountTextEl = document.querySelector('.product-amount-text');

let cart = JSON.parse(localStorage.getItem('CART')) || [];
updateCart();

function testAddToCart(id)
{
  for(let i=0;i<Number(productAmountTextEl.value);i++)
    setTimeout(addToCart(id),100);
}

function addToCart(id)
{
    if(cart.some((item) => item.id === id))
  {
    changeNumberOfUnit('plus',id);
  }
  else
  {
  const item = product.find((product)=>product.id===id);
  cart.push({
    ...item,
    numberOfUnits: 1,
  });
  }
  updateCart()
  openCartNav();
}

function updateCart()
{
  renderCartItem();
  renderSubTotal();

  localStorage.setItem('CART',JSON.stringify(cart));
}

function reduceString(item)
{
  return item.slice(0,17) + ' ...';
}

function renderCartItem()
{
  cartItemEl.innerHTML='';
  cart.forEach((item) =>
  {
    cartItemEl.innerHTML += `
    <div class="cart-item-container">
          <div class="item-flexbox">
            <div>
              <img src="${item.imgSrc}" class="cart-item-image" />
            </div>
            <div class="cart-item-info">
              <div class="cart-item-name">${reduceString(item.name)}</div>
              <div class="cart-item-price">$ ${item.price}</div>
              <div class="cart-item-bottom">
                <div class="cart-change-amount">
                  <div class="cart-change-minus" onclick="changeNumberOfUnit('minus',${item.id})">-</div>
                  <div class="cart-change-input">${item.numberOfUnits}</div>
                  <div class="cart-change-plus" onclick="changeNumberOfUnit('plus',${item.id})">+</div>
                </div>
                <button class="custom-button" onclick='removeItemFromCart(${item.id})'>REMOVE</button>
              </div>
            </div>
          </div>
        </div>
    `;
  })
}

function changeNumberOfUnit(action, id)
{
  cart = cart.map((item)=>
  {
    let numberOfUnits = item.numberOfUnits;
    if(item.id===id)
    {
      if(action==='minus' && numberOfUnits > 1)
        numberOfUnits--;
      else if(action==='plus' && numberOfUnits < item.instock)
        numberOfUnits++;
    }
    return {
      ...item,
      numberOfUnits,
    }
  })
  updateCart();
}

function renderSubTotal()
{
  let totalPrice = 0;
  let totalItems = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  subTotalEl.innerHTML = `CHECKOUT &#8226; $ ${totalPrice.toFixed(2)}`;
  totalItemInCartEl.innerHTML = `CART (${totalItems})`;
}

function removeItemFromCart(id)
{
  cart = cart.filter((item)=>item.id!==id);
  updateCart()
  if(cart.length===0)
  {
    btnEl.disabled = true;
  }
  else
  {
    btnEl.disabled = false;
  }
}

let searchResult = [];

const searchInputEl = document.querySelector('.search-input');
const searchResultGridEl = document.querySelector('.search-result-grid');
const productResultEl = document.getElementById('search-result-container');
const searchResultAmountEl = document.querySelector('.search-result-amount');
let checkForItem = 0;
let SearchItemAmount = 0;

searchInputEl.addEventListener('input', () => {
searchResultGridEl.innerHTML = ''
SearchItemAmount = 0;
for(let i=0;i<product.length;i++)
{
  if(product[i].name.toLowerCase().includes(searchInputEl.value.toLowerCase())===true&&searchInputEl.value!=='')
  {
    productResultEl.style.display = 'block';
    searchResultGridEl.innerHTML += `
    <div class="search-result-item">
       <div class="search-item-photo-container">
        <a href="${product[i].productLink}"><img
         src="${product[i].imgSrc}"
         class="search-item-photo"
           /></a>
       </div>
         <div>
         <div class="search-item-name"><a href="${product[i].productLink}">
            ${product[i].name}</a>
            </div>
          <div class="search-item-price">$ ${product[i].price}</div>
         </div>
       </div>
    `
    checkForItem = 1;
    SearchItemAmount += 1;
    if(SearchItemAmount===4)
      break;
  }
}
if(SearchItemAmount===1)
{
  searchResultAmountEl.innerHTML = '1 RESULT';
}
else
{
  searchResultAmountEl.innerHTML = `${SearchItemAmount} RESULTS`
}
if(searchInputEl === '' || !checkForItem)
  {
    searchResultGridEl.innerHTML = '';
    productResultEl.style.display = 'none';
  }
  checkForItem = 0;
})

let miniMenuItemEl = document.querySelector('.item-info');
let miniItemInfoContainer = document.querySelector('.mini-info-item-container');

function openInfoMenu()
{
  if(miniMenuItemEl.classList.contains('info'))
  {
    setTimeout(() => {
      miniMenuItemEl.classList.remove('info');
    miniMenuItemEl.classList.add('info-dissappear');
    miniItemInfoContainer.style.display = 'none';
    }, 500);
    miniItemInfoContainer.classList.remove('mini-info-item-appear');
    miniItemInfoContainer.classList.add('mini-info-item-dissappear');
  }
  else
  {
    miniMenuItemEl.classList.remove('info-dissappear');
    miniMenuItemEl.classList.add('info');
  setTimeout(() => {
    miniItemInfoContainer.style.display = 'block';
    miniItemInfoContainer.classList.remove('mini-info-item-dissappear');
    miniItemInfoContainer.classList.add('mini-info-item-appear');
  }, 500);
  console.log('2');
  }
}