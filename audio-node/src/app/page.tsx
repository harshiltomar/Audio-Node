import Link from "next/link";
import Card from "./components/Card";
import Button from "./components/Button";

export default function Home() {
  return (
    <main>
      <Card title="We have Shifted">
        </Card>
        <Link href="/home" className='flex justify-center p-2 bg-neutral-900 mx-80 pb-5 rounded-b-lg'>
            <Button text="Checkout New Page"/>
        </Link>
    </main>
  );
}
