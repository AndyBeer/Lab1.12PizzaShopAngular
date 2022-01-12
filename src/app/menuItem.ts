export class menuItem{
    name : string;
    category: string;
    price: number;
    inStock: boolean;

    constructor(name: string, category: string, price: number, inStock: boolean){
        this.name = name;
        this.category = category;
        this.price = price;
        this.inStock = inStock;
    }
}