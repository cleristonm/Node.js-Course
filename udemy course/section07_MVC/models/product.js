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

    static fetchAll(cb){
        const p = path.join(
            path.dirname(process.mainModule.filename), 
            'data', 
            'products.json');
        fs.readFile(p, (err, fileContent) => {            
            if (err){
                cb([]);
            }            
            cb(JSON.parse(fileContent));
        })
    }

    
}