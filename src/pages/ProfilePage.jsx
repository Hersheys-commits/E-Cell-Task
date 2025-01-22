import React from 'react';
import Header from '../components/Header';

function ProfilePage() {
  return (
    <div>
        <Header style={{ fontFamily: 'MyFont' }}/>
        <div
          className="min-h-screen bg-cover bg-center text-white flex flex-col justify-center items-center p-6"
          style={{
            backgroundImage: `url('background4.jpg')`, // Replace with your PNG image path
            backgroundColor: 'rgba(0, 0, 0, 1)', // Dark overlay to keep the text readable
          }}
        >

          {/* Profile Info */}
          <div className="flex flex-col items-center space-y-4 rounded-lg bg-opacity-35 bg-[#e0ac69] p-4 shadow-lg shadow-[#e0ac69]">
            <div className="w-50 h-60 rounded-full overflow-hidden border-4 border-red-400 shadow-lg">
              <img
                src="Screenshot 2024-06-06 120613.png" // Replace with your picture URL
                alt="Your Name"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'MyFont' }}>
                Harsh Sharma
                </h2>

            <p className="text-lg">Registration Number: 20233137</p>
          </div>

          {/* Instagram Button */}
            <a
            href="https://instagram.com/not_too_harshh" // Replace with your Instagram handle
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-6 py-3 bg-red-400 text-black font-bold text-lg rounded-lg shadow-lg hover:bg-red-500 transition-all flex items-center space-x-2"
            >
            <span>Follow Me on</span>
            <img
                src="instagram.png" // Replace with your Instagram logo path
                alt="Instagram"
                className="w-6 h-6 object-cover"
            />
            </a>


        </div>
    </div>
  );
}

export default ProfilePage;
