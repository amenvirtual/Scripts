"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ShowCatalog_1 = require("./ShowCatalog");
class ApplicationCatalog {
    static main() {
        const prod1 = {
            id: 101,
            description: "crocin",
            imageRef: "assets/images"
        };
        const obj = new ShowCatalog_1.ShowCatalog(prod1);
        const prod2 = {
            id: 102,
            description: "action 500",
            imageRef: "assets/images"
        };
        obj.addToCatalog(prod2);
        obj.printCatalog();
    }
}
ApplicationCatalog.main();
