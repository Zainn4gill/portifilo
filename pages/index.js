import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-black/80 shadow-lg">
        <h1 className="text-2xl font-bold text-gold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-gold">About</a></li>
          <li><a href="#projects" className="hover:text-gold">Projects</a></li>
          <li><a href="#contact" className="hover:text-gold">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="h-[80vh] flex flex-col items-center justify-center text-center p-10">
        <h2 className="text-5xl font-extrabold text-gold">Welcome to My Portfolio</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-xl">
          Showcasing my best work and projects with a premium aesthetic.
        </p>
        <a href="#projects" className="mt-6 bg-gold text-black hover:bg-yellow-500 px-6 py-2 rounded-xl shadow-md">
          View Projects
        </a>
      </header>
    </div>
  );
}
