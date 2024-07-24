import React from 'react';

export const Blog = () => {

  const posts = [
    {
      title: 'Types of Therapy',
      description: 'Tune in to hear our specialists discuss the latest trends within the industry.',
    },
    {
      title: 'CBT',
      description: 'Tune in to hear our specialists discuss the latest trends within the industry.',
    },
    {
      title: 'Anxiety',
      description: 'Keep up to date with the latest from our products.',
    },
    {
      title: 'Trauma',
      description: 'Watch our consultants walk you through tech challenges.',
    },
    {
      title: 'Trauma',
      description: 'Watch our consultants walk you through tech challenges.',
    },
    {
      title: 'Trauma',
      description: 'Watch our consultants walk you through tech challenges.',
    },
    {
      title: 'Trauma',
      description: 'Watch our consultants walk you through tech challenges.',
    },
  ];


  return (
    <div className="bg-[#efbc75] p-8 font-sans">
      <div className="grid grid-cols-3 gap-8 justify-items-center items-end">
        <div className='flex col-span-2'>
          <img src="/Images/blog.png" alt="blog" className='w-[250px]'/>
          <h1 className="text-center text-[64px] text-[#fff8ef] font-coustard">Blog Posts</h1>
        </div>
        {posts.map((post, index) => (
          <div key={index} className="bg-[#fdf6eb] p-6 shadow-md w-[317px] h-[256px] flex flex-col">
            <h2 className="text-[28px] text-[#362d64] mb-4 text-left font-coustard ">{post.title}</h2>
            <p className="text-[#362d64] text-[21px] text-left">{post.description}</p>
          </div>
        ))}

      </div>
    </div>
  );
};
