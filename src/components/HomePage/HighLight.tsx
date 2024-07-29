import React from 'react';

const HighLight = () => {
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center pt-14 px-80">
      <h1 className="text-5xl text-gray-900 font-bold">
        Available on all your devices
      </h1>

      <div
        className="w-full flex flex-col items-center justify-center text-lg
      "
      >
        <p>
          Download Simplenote for any device and stay in sync – all the time,
        </p>
        <p>everywhere.</p>
      </div>

      <aside className=" w-full grid grid-cols-2 gap-4">
        {highlightData?.map((item) => (
          <div
            key={item?.id}
            className="flex gap-2 w-full px-2  py-1 bg-[#333436] rounded-sm "
          >
            <aside className="w-[15%]">
              <img src={item?.logo} alt="broken-img" className="w-8" />
            </aside>
            <aside className="w-[85%] flex flex-col text-white">
              <p className="text-sm">{item?.description}</p>
              <p>{item?.name}</p>
            </aside>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default HighLight;

const highlightData = [
  {
    id: '1',
    logo: 'https://simplenote.com/wp-content/uploads/2010/01/ic-app-store-mac.png',
    description: 'Download on the',
    name: 'App Store'
  },
  {
    id: '2',
    logo: 'https://simplenote.com/wp-content/uploads/2010/01/ic-app-store-mac.png',
    description: 'Download on the',
    name: 'Mac App Store'
  },
  {
    id: '3',
    logo: 'https://simplenote.com/wp-content/uploads/2010/01/ic-play-store.png',
    description: 'Download on the',
    name: 'Play Store'
  },
  {
    id: '4',
    logo: 'https://simplenote.com/wp-content/uploads/2020/07/ic-windows.png',
    description: 'Download on the',
    name: 'Window Store'
  },
  {
    id: '5',
    logo: 'https://simplenote.com/wp-content/uploads/2020/07/ic-linux.png',
    description: 'Download on the',
    name: 'Linux'
  }
];
