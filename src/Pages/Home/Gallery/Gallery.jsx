import { useEffect, useState } from "react";
import Image from "./Image";

const Gallery = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div
      className="mb-10 max-w-7xl mx-auto p-4 lg:p-0 text-center "
      data-aos="zoom-in"
    >
      <span className="text-black">Image Tour</span>
      <h1 className="font-bold  text-black text-4xl mb-6">
        <span className="text-[rgb(203,62,6)]">Our</span> Gallery
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-6 gap-x-1">
        {toys && toys.map((toy) => <Image key={toy._id} toy={toy}></Image>)}
      </div>
    </div>
  );
};

export default Gallery;
