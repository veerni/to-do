"use client";
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";
import Tasklist from "./tasklist";
//use client directive is used to indicate that this component should be rendered on the client side


export default function Home() {
  const print = () => {
    console.log("Hello World");
  };

  return (
    <div>
      <Header />
      <Tasklist />
      <Footer print={print} />
    </div>
  );
}
