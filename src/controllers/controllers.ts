import {Request, Response} from "express";
import axios from "axios";


interface IUrl{
    productBody: {}
    customerBody: {}
}


interface productBody{
    productID: string;
    variantId: string;
    quantity: number;
    price: number;
}


interface customerBody{
    name: string;
    email: string;
    phone: string;
    address: string;
}
export async function parseApi(url: string) {
    const {productBody, customerBody}: IUrl = JSON.parse(url);
 }
