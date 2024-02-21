"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TbSearch } from "react-icons/tb";

const Header = (): React.ReactNode => {
  return (
    <div className="flex flex-col bg-blue-100 p-1 ">
      <header>
        <div className="flex mt-1  justify-center mb-3">
          <Search />
        </div>
        <div className="flex items-center justify-center">
          <nav className="flex justify-around w-1/2">
            <Link href="/about">Jobs</Link>
            <Link href="">Saved</Link>
            <Link href="">Alerts</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

export const Search = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    // Only debounce when searchTerm is not empty
    if (searchTerm) {
      timeoutId = setTimeout(() => {
        router.push("/?query=" + searchTerm);
      }, 600);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [searchTerm, router]);

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <div className="w-1/2 p-3   rounded-3xl flex items-center gap-2    bg-white  ">
        <span>
          <TbSearch size={20} />
        </span>
        <input
          className="focus:outline-none focus:border-blue-500  w-full"
          type="search"
          name="searchTerm"
          onChange={handleChange}
          value={searchTerm}
        />
      </div>
    </>
  );
};
