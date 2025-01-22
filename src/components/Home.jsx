import React, { useState } from 'react';

function Home() {
  const [arr, setArr] = useState([]);

  const handleClick =(index) => {
    if (!arr.includes(index)) {
      setArr([...arr, index]);
    }
  
    if (index === 8) {
      let idx = 0;
  
      const intervalId =setInterval(() => {
        if (idx < arr.length) {
          setArr((prev) => prev.filter((_, i) => i !== 0)); // Remove the first item from `arr`
          idx++;
        } else {
          clearInterval(intervalId); // Clear the interval once all items are removed
        }
      }, 500); // 0.1 second delay
    }
  };
  

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row justify-center items-center gap-4 p-3 py-10">
      {/* Gradient div - full width on tablet, square otherwise */}
      <div className="w-80 h-80 md:w-full md:col-span-1 lg:w-80 order-3 md:order-1">
  <div className="w-full h-full rounded-lg shadow-lg bg-gradient-to-br from-blue-700 to-[#FF10F0] shadow-[0_4px_8px_rgba(0,0,0,0.4)]"></div>
</div>


      {/* Image div - maintains square shape */}
      <div className="w-80 h-80 md:w-full md:h-80 lg:w-80 order-2 md:order-2">
        <div className="w-full h-full rounded-lg border-2 border-black overflow-hidden">
          <img src="/logo1.aa59d10dce000c1b6a45.png" alt="Description" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Grid div - appears first on mobile, maintains square shape */}
      <div className="w-80 h-80 md:w-full md:h-80 lg:w-80 order-1 md:order-2">
        <div
          className="w-full h-full rounded-lg bg-gray-200 overflow-hidden p-2"
          style={{ boxShadow: 'inset 0 1px 4px 0 rgba(0, 0, 0, 0.5)' }}
        >
          <div className="grid grid-cols-3 grid-rows-3 gap-2 w-full h-full p-5">
            {Array.from({ length: 9 }, (_, i) => (
              <div
                key={i}
                className={`${
                  (arr.includes(i) || i==8) ? 'bg-[#800000]' : 'bg-[#154780]'
                } text-white flex justify-center items-center rounded-lg p-2 cursor-pointer`}
                id={i + 1}
                onClick={() => handleClick(i)}
              >
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
