import Link from "next/link";

const Index = () => (
  <div>
    <h1>SSR Magician</h1>
    <a href="/about">About (Server Side Routing)</a>
    <br />
    <Link href="/about">
      <button>About (Client Side Routing)</button>
    </Link>
    <Link href="/robots">
      <button>Robots (Client Side Routing)</button>
    </Link>
  </div>
);

export default Index;
