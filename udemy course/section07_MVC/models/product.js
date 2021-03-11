const fs = require('fs');
const path = require('path');

module.exports = class Product {

    constructor(t){
        this.title = t;
    }

    save(){
        const p = path.join(
            path.dirname(process.mainModule.filename), 
            'data', 
            'products.json');
        fs.readFile(p, (err, fileContent) => {            
            if (err){
                return [];                
            }
            return JSON.parse(fileContent);            
        })
    }

    static fetchAll(){
        const p = path.join(
            path.dirname(process.mainModule.filename), 
            'data', 
            'products.json');
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err){
                products = JSON.parse(fileContent);
            }            
            fs.writeFile(p, JSON.stringify(products));
        })
    }
}