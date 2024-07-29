import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="gap-6 w-full flex flex-col items-center justify-center pt-20">
      <aside className="flex flex-col items-center text-6xl text-gray-700 font-bold ">
        <h1>The simplest way to</h1>
        <h1>keep notes</h1>
      </aside>
      <aside className="flex flex-col items-center justify-center text-xl">
        <p>
          All your notes, synced on all your devices. Get Simplenote now for
          iOS,
        </p>
        <p>Android, Mac, Windows, Linux, or in your browser.</p>
      </aside>
      <Link href="/postsection">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Create Note
        </button>
      </Link>
      <div className="w-full flex items-center pt-8">
        <img
          src="https://simplenote.com/wp-content/uploads/2020/07/img_simplenote_hero.png"
          alt="broken-img"
        />
      </div>
    </div>
  );
};

export default HeroSection;
