export class Item {
    public itemId: number = 0.0;
    public itemName: string = '';
    public price: number = 0.0;
    public itemDiscount: number = 0;

    // constructor(itemId: number, itemName: string, price: number, itemDiscount: number) {
    //     this.itemId = itemId;
    //     this.itemName = itemName;
    //     this.price = price;
    //     this.itemDiscount = itemDiscount;
    // }
    public constructor(init?:Partial<Item>) {
        Object.assign(this, init);
    }
}
