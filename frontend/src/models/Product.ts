class Product {
    private id: string;
    private name: string;
    private category: string;
    private description: string;
    private price: number;
    private currency: string;
    private quantity: number;
    private weight: number;
    private unit: string;
    private imageUrl: string;

    constructor(
        id: string,
        name: string,
        category: string,
        description: string,
        price: number,
        currency: string,
        quantity: number,
        weight: number,
        unit: string,
        imageUrl: string
    ) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
        this.currency = currency;
        this.quantity = quantity;
        this.weight = weight;
        this.unit = unit;
        this.imageUrl = imageUrl;
    }

    public getId(): string {
        return this.id;
    }

    public setId(newId: string) {
        this.id = newId;
    }

    public getName(): string {
        return this.name;
    }

    public setName(newName: string) {
        this.name = newName;
    }

    public getCategory(): string {
        return this.category;
    }

    public setCategory(newCategory: string) {
        this.category = newCategory;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(newDescription: string) {
        this.description = newDescription;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(newPrice: number) {
        this.price = newPrice;
    }

    public getCurrency(): string {
        return this.currency;
    }

    public setCurrency(newCurrency: string) {
        this.currency = newCurrency;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public setQuantity(newQuantity: number) {
        this.quantity = newQuantity;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setWeight(newWeight: number) {
        this.weight = newWeight;
    }

    public getUnit(): string {
        return this.unit;
    }

    public setUnit(newUnit: string) {
        this.unit = newUnit;
    }

    public getImageUrl(): string {
        return this.imageUrl;
    }

    public setImageUrl(newImageUrl: string) {
        this.imageUrl = newImageUrl;
    }
}

export default Product;
