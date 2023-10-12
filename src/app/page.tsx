import Image from "next/image";
import Calculator from "./components/Calculator";

export default function Home() {
  return (
    <main className='flex flex-col items-center '>
      <div className='w-3/12 mt-4'>
        <Calculator />
      </div>
    </main>
  );
}
