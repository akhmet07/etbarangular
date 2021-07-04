export interface Product {
    id?: number;
    availability?: boolean;
    company?: string;
    title?: string;
    image?: string;
    rating?: ProductRaiting;
    price?: ProductPrice;
    bage?: ProductBage;
}

export interface ProductRaiting {
    value?: number;
    reviews?: number;
}

export interface ProductPrice {
    value: number;
    discount?: number;
}

export interface ProductBage {
    color?: string;
    text?: string;
}