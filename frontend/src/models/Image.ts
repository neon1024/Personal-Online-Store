class Image {
    private id: string;
    private productId: string;
    private publicId: string;
    private url: string;
    private position: number;

    public constructor(
        id: string,
        productId: string,
        publicId: string,
        url: string,
        position: number
    ) {
        this.id = id;
        this.productId = productId;
        this.publicId = publicId;
        this.url = url;
        this.position = position;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string) {
        this.id = id;
    }

    public getProductId(): string {
        return this.productId;
    }

    public setProductId(productId: string) {
        this.productId = productId;
    }

    public getPublicId(): string {
        return this.publicId;
    }

    public setPublicId(publicId: string) {
        this.publicId = publicId;
    }

    public getUrl(): string {
        return this.url;
    }

    public setUrl(url: string) {
        this.url = url;
    }

    public getPosition(): number {
        return this.position;
    }

    public setPosition(position: number) {
        this.position = position;
    }
}

export default Image;
