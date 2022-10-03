export interface Cliente{
    name: string;
    direccion: string;
    correo: string;
}
export interface Product{
    name: string;
    price: number;
    image: string;
    description: string;
    porcentaje: string;
    estado: string;
}
export interface Sale{
    fechaEntrega: string;
    fechaVenta: string;
    priceTotal: number;
    codCLiente: string;
}
export interface DetailSale{
    cantidad: number;
    precio: number;
    subtotal: number;
    codVenta: string;
    codProducto: string;
}

export interface Venta{
    name: string;
    image: string;
    description: string;
    porcentaje: string;
    estado: string;

}
