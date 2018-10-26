import { Catalog } from "./Catalog";
import { ShowCatalog } from "./ShowCatalog";

class ApplicationCatalog {
  static main(): void {
    const prod1: Catalog = {
      id: 101,
      description: "crocin",
      imageRef: "assets/images"
    };

    const obj = new ShowCatalog(prod1);

    const prod2: Catalog = {
      id: 102,
      description: "action 500",
      imageRef: "assets/images"
    };

    obj.addToCatalog(prod2);

    obj.printCatalog();
  }
}

ApplicationCatalog.main();
