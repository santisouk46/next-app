import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen font-bold flex-col items-center p-4">
      <Image src="/images/logo.svg" alt="Savannakhet University Logo" width={150} height={150} />
      <br />
      <p className='text-5xl font-bold mb-4'>
        ມະຫາວິທະຍາໄລສະຫວັນນະເຂດ
      </p>
      <p className='text-4xl font-bold mb-4'>
        Savannakhet University
      </p>
    </div>
  );
}
