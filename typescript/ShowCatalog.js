"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShowCatalog {
    constructor(catalog) {
        this.list = [catalog];
    }
    addToCatalog(...items) {
        items.forEach(eachItem => {
            this.list.push(eachItem);
        });
    }
    printCatalog(shopName = "Med Buddy") {
        console.log(shopName);
        this.list.forEach(eachItem => {
            console.log(eachItem);
        });
    }
}
exports.ShowCatalog = ShowCatalog;
