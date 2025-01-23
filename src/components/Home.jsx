import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function Home() {
  const [arr, setArr] = useState([]); 

  const isMobile = useMediaQuery({ query: '(max-width: 400px)' }); 
  const isTablet = useMediaQuery({ query: '(min-width: 401px) and (max-width: 800px)' });

  const handleClick = (index) => { 
    if (!arr.includes(index)) { 
      setArr([...arr, index]); 
    } 
   
    if (index === 8) { 
      let idx = 0; 
   
      const intervalId = setInterval(() => { 
        if (idx < arr.length) { 
          setArr((prev) => prev.filter((_, i) => i !== 0)); 
          idx++; 
        } else { 
          clearInterval(intervalId); 
        } 
      }, 500); 
    } 
  }; 

  const renderLayout = () => {
    if (isMobile) {
      return (
        <div className="flex flex-col-reverse items-center gap-4 p-3 py-10">
          <div className="w-60 h-60">
            <div className="w-full h-full rounded-lg shadow-lg bg-gradient-to-br from-blue-700 to-[#FF10F0]" 
              style={{ boxShadow: '0 0px 10px 0 rgba(0, 0, 0, 0.8)'}}/>
          </div>
          
          <div className="w-60 h-60">
            <div className="w-full h-full rounded-lg border-2 border-black overflow-hidden">
              <img src="/logo1.aa59d10dce000c1b6a45.png" alt="Description" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="w-60 h-60">
            <div className="w-full h-full rounded-lg bg-gray-200 overflow-hidden p-1" 
              style={{ boxShadow: 'inset 0 0px 8px 0 rgba(0, 0, 0, 0.5)' }}>
              <div className="grid grid-cols-3 grid-rows-3 gap-2 w-full h-full p-5">
                {Array.from({ length: 9 }, (_, i) => (
                  <div 
                    key={i} 
                    className={`${
                      (arr.includes(i) || i==8) ? 'bg-[#800000]' : 'bg-[#154780]'
                    } text-white flex justify-center items-center rounded-lg p-2 cursor-pointer`} 
                    onClick={() => handleClick(i)}
                  />
                ))}
              </div>
            </div>
          </div>
          
        </div>
      );
    }

    if (isTablet) {
      return (
        <div className="grid grid-cols-2 gap-4 p-3 py-10">
          <div className="col-span-2 h-[calc(50vw)]">
            <div className="w-full h-full rounded-lg shadow-lg bg-gradient-to-br from-blue-700 to-[#FF10F0]" 
              style={{ boxShadow: '0 0px 10px 0 rgba(0, 0, 0, 0.8)'}}/>
          </div>
          
          <div className="w-full aspect-square">
            <div className="w-full h-full rounded-lg border-2 border-black overflow-hidden">
              <img src="/logo1.aa59d10dce000c1b6a45.png" alt="Description" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="w-full aspect-square">
            <div className="w-full h-full rounded-lg bg-gray-200 overflow-hidden p-[10%]" 
              style={{ boxShadow: 'inset 0 0px 8px 0 rgba(0, 0, 0, 0.5)' }}>
              <div className="grid grid-cols-3 grid-rows-3 gap-2 w-full h-full">
                {Array.from({ length: 9 }, (_, i) => (
                  <div 
                    key={i} 
                    className={`${
                      (arr.includes(i) || i==8) ? 'bg-[#800000]' : 'bg-[#154780]'
                    } text-white flex justify-center items-center rounded-lg p-[10%] cursor-pointer`} 
                    onClick={() => handleClick(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Desktop layout (original layout)
    return (
      <div className="flex flex-row justify-center items-center gap-4 p-3 py-10">
        <div className="w-80 h-80">
          <div className="w-full aspect-square rounded-lg shadow-lg bg-gradient-to-br from-blue-700 to-[#FF10F0]" 
            style={{ boxShadow: '0 0px 10px 0 rgba(0, 0, 0, 0.8)'}}/>
        </div>
        
        <div className="w-80 h-80">
          <div className="w-full aspect-square rounded-lg border-2 border-black overflow-hidden">
            <img src="/logo1.aa59d10dce000c1b6a45.png" alt="Description" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="w-80 h-80">
          <div className="w-full aspect-square rounded-lg bg-gray-200 overflow-hidden p-2" 
            style={{ boxShadow: 'inset 0 0px 8px 0 rgba(0, 0, 0, 0.5)' }}>
            <div className="grid grid-cols-3 grid-rows-3 gap-2 w-full h-full p-5">
              {Array.from({ length: 9 }, (_, i) => (
                <div 
                  key={i} 
                  className={`${
                    (arr.includes(i) || i==8) ? 'bg-[#800000]' : 'bg-[#154780]'
                  } text-white flex justify-center items-center rounded-lg p-2 cursor-pointer`} 
                  onClick={() => handleClick(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return renderLayout();
}

export default Home;