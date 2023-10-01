'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
const router = useRouter();
  const handleButtonClick = (href) => {
    router.push(href);
  };

  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            Welcome to Drug Abuse Reporting website, NIT Hamirpur
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl ">
            Empowering Change, One Report at a Time
          </p>
          <button
            onClick={() => handleButtonClick("/user/login")}
            className="inline-flex items-center justify-center px-5 py-3 text-lg font-bold text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            User
          </button>
          <button
            onClick={() => handleButtonClick("/admin/login")}
            className="ml-4 inline-flex items-center justify-center px-5 py-3 text-lg font-bold text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Admin
          </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
          <img
            src="https://scontent.fixc1-2.fna.fbcdn.net/v/t1.6435-9/89989631_2631515407089491_332450904164794368_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=s23NEFLH4rYAX_bwIPu&_nc_ht=scontent.fixc1-2.fna&oh=00_AfDtN2IVB6uBipqE1FzYD7E4d8gGA4kRkcYhEeo0beGkdg&oe=653FC021"
            alt="image"
            className=" rounded-2xl shadow-black shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
