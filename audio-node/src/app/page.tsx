import Image from "next/image";
import Homepage from "./components/HomePage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex ">
      <div>
        <Navbar/>
        <Homepage/>
      </div>
    </main>
  );
}
