import { ImMobile } from "react-icons/im";
import DynamicMap from "../Map";
import Image from "next/image";
import { BsFillEnvelopeFill } from "react-icons/bs";

const MapSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:items-center gap-10 justify-between w-full max-w-[1240px] mx-auto px-5 py-10">
      <div className="">
        <Image
          src={"/superheat.png"}
          width={200}
          height={150}
          className="object-cover w-full h-auto max-w-[300px]"
          alt="logo"
        />
        <div className="text-sm min-w-[300px]">
          <div className="border-b-2 border-gray-300 pt-3 pb-1">
            <h2 className="font-semibold tracking-wider pb-2 text-lg">
              Kragujevac
            </h2>
            <a
              href="tel:+381652007778"
              className="flex items-center gap-2 hover:text-sky-500 transition duration-300"
            >
              <ImMobile />
              Tel: +381 65 200 77 78
            </a>
            <a
              href="mailto:m.popovic@superheat.rs"
              className="hover:text-sky-500 transition duration-300 flex items-center gap-2 mt-1"
            >
              <BsFillEnvelopeFill />
              m.popovic@superheat.rs
            </a>
          </div>
          <div className="border-b-2 border-gray-300 pt-3 pb-1">
            <h2 className="font-semibold tracking-wider pb-2 text-lg">
              Srnje - Kruševac
            </h2>
            <a
              href="tel:+381649255454"
              className="flex items-center gap-2 hover:text-sky-500 transition duration-300"
            >
              <ImMobile />
              Tel: +381 64 925 54 54
            </a>
            <a
              href="mailto:n.milojevic@superheat.rs"
              className="hover:text-sky-500 transition duration-300 flex items-center gap-2 mt-1"
            >
              <BsFillEnvelopeFill />
              n.milojevic@superheat.rs
            </a>
          </div>
          <div className="border-b-2 border-gray-300 border-c pt-3 pb-1">
            <h2 className="font-semibold tracking-wider pb-2 text-lg">Čačak</h2>
            <a
              href="tel:+381652007778"
              className="flex items-center gap-2 hover:text-sky-500 transition duration-300"
            >
              <ImMobile />
              Tel. +381 65 200 77 78
            </a>
            <a
              href="mailto:info@superheat.rs"
              className="hover:text-sky-500 transition duration-300 flex items-center gap-2 mt-1"
            >
              <BsFillEnvelopeFill />
              info@superheat.rs
            </a>
          </div>
        </div>
      </div>
      <div className=" z-20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-300 max-w-[600px] h-[400px] md:h-[500px] w-full self-center">
        <DynamicMap />
      </div>
    </div>
  );
};
export default MapSection;
// rgba(255,255,255,0.2)