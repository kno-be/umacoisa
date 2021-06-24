import React from 'react';


var count = 0;
var inventory = [];
var favorites = [];
var cart = [];

class Product {
    constructor(props){
        this.title = props.title;
        this.price = props.price;
        this.imgURL = props.imgURL;
        this.tags = props.tags;

    }

    createProduct() {
        count++;
        inventory.push(this)
        console.log(count + " Added: " + this.title);
        console.log(inventory);
        
    }

    addFavorites() {

    }



}


export default Product;
