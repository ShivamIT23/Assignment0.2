import React from 'react';

function Hero() {
  return (
    <section id="home" className="relative flex items-center justify-center h-screen text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay loop muted>
        <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-32809-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="max-w-3xl px-5 z-20 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Welcome to Our Platform</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-0 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
          Innovative solutions for your business needs
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors duration-300 opacity-0 animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;