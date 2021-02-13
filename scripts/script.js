// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  function checkStorage() {
    return JSON.stringify(localStorage) == "{}" ? false : true;
  };
  console.log("into checkStorage");
  if(! checkStorage()){
    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(json => {
        for(let key in json){
          //contentString = JSON.stringify(json);;
          localStorage.setItem(key,JSON.stringify(json[key]));
          //console.log("11");
        }
      } );
  }
  console.log("line20");
  console.log(localStorage.length);

  var list = [];



});
