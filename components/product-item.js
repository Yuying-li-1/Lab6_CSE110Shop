// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor() {
    //super();
    var shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML = `
      <li class="product">
      <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
      <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
      <p class="price">$109.95</p>
      <button onclick="alert('Added to Cart!')">Add to Cart</button>
      </li>`;

    var style = document.createElement('style');

    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }

    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas:
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }

    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }

    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }

    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }

    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }
    `;

    shadow.appendChild(style);
  }

    static get observedAttributes() {
      return ['id', 'title', 'price', 'src', 'add'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
      let shadow = this.shadowRoot;

      if(name == 'title'){
        shadow.querySelector('img').alt = newVal;
        shadow.querySelector('p').textContent = newVal;
      }

      else if(name == 'src'){
        shadow.querySelector('img').src = newVal;
      }

      else if(name == 'price'){
        shadow.getElementById('price').textContent = '$'+newVal;
      }

      else if(name == 'add'){
        let button = shadow.querySelector('button');
        if(newVal == 0){
          button.textContent = "Add to Cart";
        }
        else{
          button.textContent = "Remove from Cart";
        }
      }
   }





    set title(newTitle){
      this.setAttribute('title', newTitle);
    }
    set price(newPrice){
      this.setAttribute('price', newPrice);
    }

    set src(newScr){
      this.setAttribute('src', newScr);
    }

    set add(newAdd){
      this.setAttribute('add', newAdd);
    }
    /*shadow.appendChild(product);
    product.appendChild(image);
    product.appendChild(title);
    product.appendChild(price);*/


}

customElements.define('product-item', ProductItem);
/*
<!-- Sample Product -->
<!-- li class="product">
    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
    <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
    <p class="price">$109.95</p>
    <button onclick="alert('Added to Cart!')">Add to Cart</button>
</li -->
*/
