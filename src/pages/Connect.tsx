import React from 'react';
import { Heart, MessageCircle, Share2, UserPlus, DollarSign } from 'lucide-react';

export default function Connect() {
  const creators = [
    {
      id: 1,
      name: 'Nakamya Fiona',
      title: 'Digital Marketing Specialist',
      avatar: 'https://i.ibb.co/3Y7f4kC/ugandan-musician-1.jpg',
      followers: 1256,
      rating: 4.9,
    },
    {
      id: 2,
      name: 'Nabatanzi Brenda',
      title: 'Professional Model & Actress',
      avatar: 'https://i.ibb.co/z4VSCB8/ugandan-musician-2.jpg',
      followers: 894,
      rating: 4.8,
    },
    {
        id: 3,
        name: 'Apio Sharon',
        title: 'Event Management Expert',
        avatar: 'https://i.ibb.co/PNqC1D8/ugandan-musician-3.jpg',
        followers: 1560,
        rating: 5.0,
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-playfair font-bold text-white mb-2">Connect</h1>
        <p className="text-gray-300 mb-8">Discover and connect with talented creators.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map(creator => (
            <div key={creator.id} className="bg-gray-800 border border-gray-700 p-6 rounded-2xl text-center">
              <img src={creator.avatar} alt={creator.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">{creator.name}</h3>
              <p className="text-gray-400 mb-4">{creator.title}</p>
              <div className="flex justify-center space-x-4 mb-4">
                <div className="text-center">
                  <p className="text-white font-bold">{creator.followers}</p>
                  <p className="text-gray-400 text-sm">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold">{creator.rating}</p>
                  <p className="text-gray-400 text-sm">Rating</p>
                </div>
              </div>
              <div className="flex justify-center space-x-2">
                <button className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20">
                  <UserPlus className="w-5 h-5" />
                </button>
                <button className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20">
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20">
                  <DollarSign className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
