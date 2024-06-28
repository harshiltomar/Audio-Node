import Link from "next/link";
import Card from "./components/Card";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center w-1/2 mx-80 my-32 p-10 rounded-xl bg-gray-900 font-thin">
        <div className="text-center m-4">Thanks a lot for  entering AudioNode ✨. We are working hard to get AudioNode ready for everyone! While we wrap up the finishing touches, we're adding people gradually to the platform.</div>
        <div className="text-center m-4">
          We have shifted. Kindly go to{" "}
          <Link href="/home">
            <div className="bg-blue-700 rounded-xl p-2 px -3 inline-block ml-3">Home &rarr;</div>
          </Link>
        </div>
      </div>
    </main>
  );
}
