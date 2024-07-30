import React from 'react';

const AboutSection = () => {
  return (
    <div className="w-full pt-14">
      <aside className="px-4 md:px-0 text-4xl md:text-5xl font-bold text-gray-900 flex flex-col items-center justify-center gap-0 md:gap-4">
        <h1>Comprehensive underneath, </h1>
        <h1>simple on the surface</h1>
      </aside>

      <aside className="grid md:grid-cols-3 grid-cols-1  gap-8 lg:px-52 px-4 pt-14">
        {data?.map((item) => (
          <div key={item?.id} className="w-full flex flex-col gap-2">
            <aside className="flex items-start gap-2 text-lg text-black font-semibold">
              <img src={item?.logo} alt="broken-img" className="w-8" />
              <h1>{item?.title}</h1>
            </aside>
            <p className="text-gray-600">{item?.description}</p>
          </div>
        ))}
      </aside>
      <div className="w-full px-52 mt-6">
        <hr className=" border-t-0 border-l-0 border-r-0 border border-gray-300" />
      </div>
    </div>
  );
};

export default AboutSection;

const data = [
  {
    id: '1',
    logo: '	https://simplenote.com/wp-content/uploads/2020/07/ic_cloud-sync.png?w=72',
    title: 'Use it everywhere',
    description:
      'Notes stay updated across all your devices, automatically and in real time. There’s no “sync” button: It just works.'
  },
  {
    id: '2',
    logo: 'https://simplenote.com/wp-content/uploads/2020/07/ic_tags.png?w=72',
    title: 'Stay organized',
    description: 'Add tags to find notes quickly with instant searching.'
  },
  {
    id: '3',
    logo: '	https://simplenote.com/wp-content/uploads/2020/07/ic_collaborate.png?w=72',
    title: 'Work together',
    description:
      'Share a to-do list, post some instructions, or publish your notes online.'
  },
  {
    id: '4',
    logo: '	https://simplenote.com/wp-content/uploads/2020/07/ic_history.png?w=72',
    title: 'Go back in time',
    description:
      'Notes are backed up with every change, so you can see what you noted last week or last month.'
  },
  {
    id: '5',
    logo: '	https://simplenote.com/wp-content/uploads/2020/07/ic_notes.png?w=72',
    title: 'Markdown support',
    description: 'Write, preview, and publish your notes in Markdown format.'
  },
  {
    id: '6',
    logo: '	https://simplenote.com/wp-content/uploads/2020/07/ic_info.png?w=72',
    title: 'It’s free',
    description: 'Apps, backups, syncing, sharing – it’s all completely free.'
  }
];
