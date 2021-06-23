import React from 'react';

class Product {
    constructor(props){
        this.id = props.id;
        this.title = props.title;
        this.price = props.price;
        this.imgURL = props.imgURL;
        this.tags = props.tags;
        var date = new Date;
    }

    createProduct() {

    }
}

export default Product;