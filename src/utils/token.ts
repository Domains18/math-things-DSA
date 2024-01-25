import {Response } from "express";
import axios from "axios";

export async function generateToken() {
  try {
    let consumerKey: string | undefined = process.env.CONSUMER_KEY;
    let secretKey: string | undefined = process.env.SECRET_KEY;
    //@ts-ignore
    const auth = new Buffer.from(`${consumer}:${secret}`).toString("base64");
    return await axios.get(`${process.env.TOKENSTRING}`, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
