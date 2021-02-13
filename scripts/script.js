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
  var counts;
  var product_list = document.getElementById("product_list");

  for(var i = 0; i < localStorage.length; i += 1){
    var fromJS = JSON.parse(localStorage.getItem(i));
    var temp = document.createElement('product_item');
    temp.id = i.toString();
    temp.title = fromJS['title'];
    //console.log(temp.title);
    temp.price = fromJS['price'];
    temp.src = fromJS['image'];

    //product_list.appendChild(temp);

  }

  });

function addToCart(){

}

//localStorage.clear();
  /*  if(checkStorage()){
    list = (localStorage.getItem('list')).split(',');
  }*/



//});
