import React from 'react';
import Header from '../components/Header';

function ProfilePage() {
  return (
    <div>
        <Header/>
        <div
          className="min-h-screen bg-cover bg-center text-white flex flex-col justify-center items-center p-6"
          style={{
            backgroundImage: `url('public/background4.jpg')`, // Replace with your PNG image path
            backgroundColor: 'rgba(0, 0, 0, 1)', // Dark overlay to keep the text readable
          }}
        >

          {/* Profile Info */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-red-600 shadow-lg">
              <img
                src="public\Screenshot 2024-06-06 120613.png" // Replace with your picture URL
                alt="Your Name"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-4xl font-bold ">Harsh Sharma</h2>
            <p className="text-lg">Registration Number: 20233137</p>
          </div>

          {/* Instagram Button */}
          <a
            href="https://instagram.com/not_too_harshh" // Replace with your Instagram handle
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-6 py-3 bg-red-600 text-black font-bold text-lg rounded-lg shadow-lg hover:bg-red-700 transition-all"
          >
            Follow Me on Instagram
          </a>

          {/* Footer */}
          <footer className="mt-12 text-gray-400 text-sm">
            <p>© 2025 Squid Game Themed Profile</p>
          </footer>
        </div>
    </div>
  );
}

export default ProfilePage;
