class Product {
    product?: string;
    quantity?: number;
} 
export class Order {
    orderId?: string;
    subscriptionId?: string;
    deliveryDate?: string;
    paymentMethod?: string;
    products?: Product[];
    totalAmount?: number;
    status?: string;
}
