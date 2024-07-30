import React from 'react';

const FeatureSection = () => {
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center pt-14 px-4 lg:px-52">
      <aside>
        <h1 className="text-5xl text-gray-900 font-bold">
          What people are saying
        </h1>
      </aside>
      <aside className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-2">
        {featureData?.map((item) => (
          <div
            key={item?.id}
            className="w-full flex items-start justify-start gap-0"
          >
            <aside className="w-[5%] h-full ">
              <p className={`w-[4px] bg-blue-300 ${item?.height}`}></p>
            </aside>{' '}
            <aside className="w-[95%] font-medium text-gray-700">
              <p className="text-lg">{item?.description}</p>
              <p className="mt-2 text-gray-600">{item?.author}</p>
            </aside>
          </div>
        ))}
      </aside>
      <div className="w-full mt-6">
        <hr className=" border-t-0 border-l-0 border-r-0 border border-gray-300" />
      </div>
    </div>
  );
};

export default FeatureSection;

const featureData = [
  {
    id: '1',
    description: 'If you’re not using Simplenote, you’re missing out.',
    author: 'TechCrunch',
    height: 'h-[80px]'
  },
  {
    id: '2',
    description:
      'If you’re looking for a cross-platform note-taking tool with just enough frills, it’s hard to look beyond Simplenote.',
    author: 'MacWorld',
    height: 'h-[135px]'
  },
  {
    id: '3',
    description:
      'If you want a truly distraction-free environment then you can’t do better than Simplenote for your note-taking needs.',
    author: 'Zapier',
    height: 'h-[140px]'
  }
];
