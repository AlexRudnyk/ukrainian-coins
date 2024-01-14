export interface CoinType {
  _id?: string;
  title: string;
  year: string;
  photoURL: string[];
  spec: string;
  price: string;
  description: string;
  comments?: [
    {
      _id: string;
      userName: string;
      text: string;
      reply: string;
      date: Date;
    }
  ];
}

export interface CommentType {
  _id?: string;
  userName: string;
  text: string;
  reply: string;
  date: Date;
}
