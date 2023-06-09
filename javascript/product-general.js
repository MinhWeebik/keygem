let productAmount = document.querySelector('.product-amount-text');
productAmount.value = 1;
let stockAmount = product.find((product)=>product.name.toLowerCase()===document.querySelector('.product-main-info-header').innerHTML.toLowerCase().trim()).instock;
console.log(stockAmount);

function addAmount()
{
  if(productAmount.value<stockAmount)
  {
    productAmount.value = Number(productAmount.value)+1;
  }
}

function minusAmount()
{
  if(productAmount.value>1)
  {
    productAmount.value = Number(productAmount.value)-1;
  }
}

function checkAmount()
{
  if(productAmount.value<1 || !isOnlyDigits(productAmount.value))
  {
    productAmount.value = 1;
  }
  else if(productAmount.value>stockAmount)
  {
    productAmount.value = stockAmount;
  }
  productAmount.value = Number(productAmount.value);
}

function isOnlyDigits(string) {
   for (let i = 0; i < string.length; i++) {
      var ascii = string.charCodeAt(i);
      if (ascii < 48 || ascii > 57) {
         return false;
      }
   }
   return true;
}

