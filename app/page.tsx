import connect from "@/db";

export default function Home() {
  connect();

  return (
    <main className="">
      <p>Hello World</p>
    </main>
  );
}
