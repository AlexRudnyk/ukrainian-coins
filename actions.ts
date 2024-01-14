"use server";

import { revalidatePath } from "next/cache";
import connect from "./db";
import Coin from "./model/Coin";
import { CoinType, CommentType } from "./types";

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
  revalidatePath("/");
}

export async function deleteCoin(id: string) {
  try {
    await connect();

    await Coin.findByIdAndDelete({ _id: id });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/");
}

export async function addComment(
  { userName, text }: { userName: string; text: string },
  id: string
) {
  try {
    await connect();

    const coin = await Coin.findById({ _id: id });

    if (!coin) {
      console.log("Coin is not found");
      return;
    }

    coin.comments.unshift({ userName, text });

    await coin.save();
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/coin/[id]");
}

export async function deleteComment(coinId: string, commentId: string) {
  try {
    await connect();

    const coin = await Coin.findById({ _id: coinId });

    if (!coin) {
      console.log("Coin is not found");
      return;
    }

    coin.comments = coin.comments.filter(
      (comment: CommentType) => comment._id?.toString() !== commentId
    );

    await coin.save();
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/coin/[id]");
}

export async function replyComment(
  text: string,
  coinId: string,
  commentId: string
) {
  try {
    await connect();

    const coin = await Coin.findById({ _id: coinId });
    if (!coin) {
      console.log("Coin is not found");
      return;
    }

    const comment = coin.comments.find(
      (comment: CommentType) => comment._id?.toString() === commentId
    );
    if (!comment) {
      console.log("Comment is not found");
      return;
    }

    comment.reply = text;

    await coin.save();
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/coin/[id]");
}
