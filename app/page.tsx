import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>TESTING</h1>
      <br/>
      <Link href="/posts">POSTING PAGE</Link> // Link meminimalisir resource yang ke load daripada menggunakan a href
      <br/>
      <Link href="/albums">ALBUM PAGE</Link>
    </>
  );
}
