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
      <p className='text-4xl font-bold mb-4'>
        ✨✨✨✨✨✨✨✨✨
      </p>
      <p className='text-3xl font-bold mb-4'>
        ສຶກສາດີ ມີວິໄນ ວິໄຈເດັ່ນ
      </p>
      <p className='text-3xl font-bold mb-4'>
        ເນັ້ນການບໍລິການ ສືບສານວັດທະນະທຳ
      </p>
      <p className='text-3xl font-bold mb-4'>
        ນຳໜ້າດ້ານວິຊາການ
      </p>
      <p className='text-3xl font-bold mb-4'>
        ກ່າວຂານໃນຂົງເຂດພາກກາງ
      </p>
      <p className='text-4xl font-bold mb-4'>
        ✨✨✨✨✨✨✨✨✨
      </p>
      <hr />
      <iframe width="auto" height="auto" src="https://www.youtube.com/embed/8SYc39sSHgM?si=939ZV7siW6yPkPBd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
}
