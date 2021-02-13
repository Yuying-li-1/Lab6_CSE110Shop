// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  function checkStorage() {
    return JSON.stringify(localStorage) == "{}" ? false : true;
  };
  if(! checkStorage()){
    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(data => {
        for(let key in data){
          localStorage.setItem(key,JSON.stringify(data[key]));
        }
      } );
  }



//  console.log(localStorage.length);
var list = [];

function checkList() {
  return localStorage.getItem('list') == null ? false : true;
};

if(checkList()){
  list = localStorage.getItem('list').split(',');
  document.getElementById('cart-count').textContent = (list.length).toString();
}

  var product_list = document.getElementById("product-list");

  for(var i = 0; i < localStorage.length; i += 1){
    var fromJS = JSON.parse(localStorage.getItem(i));
    var temp = document.createElement('product-item');
    temp.id = i.toString();
    temp.title = fromJS['title'];
    //console.log(temp.title);
    temp.price = fromJS['price'];
    temp.src = fromJS['image'];
    if(list.indexOf(temp.id) < 0){
      temp.add = 0;
    }
    else{
      temp.add = 1;
    }
    product_list.appendChild(temp);
    addToCart(temp,list);



  }

  });

function addToCart(shad, list){
  const shadow = shad.shadowRoot;
  var tempBut = shadow.querySelector('button');
  tempBut.addEventListener('click', function(){
  var counts = parseInt(document.getElementById('cart-count').textContent);
  if(shad.add == 0){
    shad.add = 1;
    counts += 1;
    list.push(shad.id);
    document.getElementById('cart-count').textContent = counts.toString();
    localStorage.setItem('list', list);
  }

  else if(shad.add == 1){
    shad.add = 0;
    counts -= 1;
    list.splice(list.indexOf(shad.id), 1);
    document.getElementById('cart-count').textContent = counts.toString();
  }
  if(list.length > 0){
    localStorage.setItem('list', list);
  }
  else{
    localStorage.removeItem('list');
    document.getElementById('cart-count').textContent = '0';
  }
  });
}

//localStorage.clear();



//});
