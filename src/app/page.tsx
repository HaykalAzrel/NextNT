import React from "react";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 ">
      <div className="bg-amber-800 hover:bg-amber-900 rounded-lg">
        <Image 
          src="globe.svg"
          alt="globe"
          width={100}
          height={100}/>
          <h2 className="text-center">Minyak</h2>
          <p className="text-center">Rp9.000</p>
          <p className="text-center">20 pcs</p>
      </div>
      <div className="bg-amber-200 hover:bg-amber-300 rounded-lg">
        <Image
          src="globe.svg"
          alt="globe"
          width={100}
          height={100}/>
        <h2 className="text-center">Baju</h2>
        <p className="text-center">Rp100.000</p>
        <p className="text-center">7 pcs</p>
      </div>
      <div className="bg-amber-300 hover:bg-amber-400 rounded-lg">
        <Image
          src="globe.svg"
          alt="globe"
          width={100}
          height={100}/>
        <h2 className="text-center">Jasuke</h2>
        <p className="text-center">Rp5.000</p>
        <p className="text-center">15 pcs</p>
      </div>
      <div className="bg-amber-400 hover:bg-amber-500 rounded-lg">
        <Image
          src="globe.svg"
          alt="kopi"
          width={100}
          height={100}/>
        <h2 className="text-center">Kopi</h2>
        <p className="text-center">Rp15.000</p>
        <p className="text-center">50 pcs</p>
      </div>
      <div className="bg-amber-500 hover:bg-amber-600 rounded-lg">
        <Image
          src="globe.svg"
          alt="globe"
          width={100}
          height={100}/>
        <h2 className="text-center">Celana</h2>
        <p className="text-center">Rp80.000</p>
        <p className="text-center">10 pcs</p>
      </div>
      <div className="bg-amber-600 hover:bg-amber-700 rounded-lg">
        <Image
          src="globe.svg"
          alt="globe"
          width={100}
          height={100}/>
        <h2 className="text-center">Topi</h2>
        <p className="text-center">Rp25.000</p>
        <p className="text-center">30 pcs</p>
      </div>
      <div>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Masukkan data baru
        </button>
      </div>
      <div>
        <button 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Edit data
        </button>
      </div>
    </div>
  );
};

export default Homepage;