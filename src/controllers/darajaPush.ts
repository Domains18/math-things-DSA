import axios from "axios";
import { generateToken } from "utils/token";

interface sophia {
  phoneNumber: string;
  amount: string;
}

export async function generateStkPush(payload: sophia) {
  const { phoneNumber, amount } = payload;
  const shortKey: undefined | string = process.env.SHORT_KEY;
  const passKey: undefined | string = process.env.SHORT_KEY;
  const date = new Date();
  const timestamp =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);

  //@ts-ignore
  const password: string = new Buffer.from(shortKey + passKey + timestamp).toString("base64");
  const data = {
    BusinessShortCode: shortKey,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: phoneNumber,
    PartyB: shortKey,
    CallBackURL: "https://goose-merry-mollusk.ngrok-free.app/api/callback",
    AccountReference: "purchase",
    TransactionDesc: "purchase",
  };
  const token = await generateToken();
  await axios.post("https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest",data,{
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  ).then((data: any) => {
      
  })
}
