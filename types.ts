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
      name: string;
      text: string;
      date: Date;
    }
  ];
}
