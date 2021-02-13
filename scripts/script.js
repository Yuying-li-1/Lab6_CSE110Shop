// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  function checkStorage() {
    return JSON.stringify(localStorage) == "{}" ? false : true;
  };
  /*if(checkStorage){

  }*/
  fetch(`https://fakestoreapi.com/products`)
    .then(res => res.json())
    .then(json => {
      contentString = JSON.stringify(json);
      //console.log(contentString);
      localStorage.setItem("items",contentString);
    } );
  //const content = response.json();

});
