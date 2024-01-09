"use server";

import { revalidatePath } from "next/cache";
import connect from "./db";
import Coin from "./model/Coin";
import { CoinType } from "./types";

export async function getAllCoins() {
  try {
    await connect();

    const coins = await Coin.find();
    return coins;
  } catch (error) {
    console.log(error);
  }
}

export async function addCoin(values: CoinType) {
  try {
    await connect();
    await Coin.create({
      title: values.title,
      year: values.year,
      spec: values.spec,
      price: values.price,
      description: values.description,
      photoURL: values.photoURL,
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/");
}

export async function getCoinById(id: string) {
  try {
    await connect();

    const coin = await Coin.findById({ _id: id });
    return coin;
  } catch (error) {
    console.log(error);
  }
}
