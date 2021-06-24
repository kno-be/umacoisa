import React from 'react';

var logs = ['1-create', '2-update', '3-remove',];
var count = 0;

class Product {
    constructor(props){
        this.title = props.title;
        this.price = props.price;
        this.imgURL = props.imgURL;
        this.tags = props.tags;

    }



    createProduct() {
        count++;
        logs.push("Action: Add", + this.title)
        console.log(logs[0], [logs.length-1])
        
    }
}


export default Product;