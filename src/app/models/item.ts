import { Category } from "./category";

export class Item {
    public itemId: number = 0.0;
    public itemName: string = '';
    // public price: number = 0.0;
    // public itemDiscount: number = 0;
    public discount: number = 0;
    public pricePerUnit: number = 0;
    public category: Category = {
        categoryId: 0,
        categoryName: ''

    }

    // constructor(itemId: number, itemName: string, price: number, itemDiscount: number) {
    //     this.itemId = itemId;
    //     this.itemName = itemName;
    //     this.price = price;
    //     this.itemDiscount = itemDiscount;
    // }
    public constructor(init?: Partial<Item>) {
        Object.assign(this, init);
    }
}
