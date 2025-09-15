import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Crown, Star, Users, Award, ArrowRight, Play, Shield, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function LandingPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-float mb-8">
            <Crown className="w-20 h-20 text-rose-400 mx-auto mb-6" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-playfair font-bold text-white mb-6">
            Bringing <span className="gradient-text">Creative Dreams</span>
            <br />
            to Life
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Celebrate and support the Creatives you love. Discover your potential and flourish through our Masterclasses, Media, and Career Projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/signup"
              className="px-8 py-4 bg-gradient-to-r from-rose-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-glow"
            >
              Start Your Journey <ArrowRight className="inline w-5 h-5 ml-2" />
            </Link>
            <button className="px-8 py-4 glass-effect text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-gray-300">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>100% Secure Platform</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span>Global Audience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>Certification</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-white mb-6">
              The Ultimate Creator Space to <span className="gradient-text">Flourish</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From portfolio creation to getting hired, we provide all the tools and opportunities you need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Outstanding Portfolios",
                description: "Create outstanding portfolios with our advanced tools and templates. Showcase your work with confidence.",
              },
              {
                icon: <Play className="w-8 h-8" />,
                title: "Media Streaming",
                description: "Share videos, photos, and audio content. Build your fanbase and monetize your content effectively."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Masterclasses",
                description: "Learn from industry experts. Get certified in digital marketing, acting, modeling, music, and more."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Get Hired",
                description: "Connect with clients looking for talent. From gigs to full-time opportunities, find your perfect match."
              },
              {
                icon: <Crown className="w-8 h-8" />,
                title: "Career Projects",
                description: "Explore live projects to join or hire for. Build your portfolio with real-world work."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Events & Competitions",
                description: "Participate in exclusive events, competitions, and networking opportunities."
              }
            ].map((feature, index) => (
              <div key={index} className="glass-effect p-8 rounded-2xl hover-lift">
                <div className="text-rose-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Releases Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Featured <span className="gradient-text">Releases</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Check out the latest and greatest from our talented creators.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            {
                type: 'Music',
                title: 'Midnight Drive',
                creator: 'DJ Apio',
                thumbnail: 'https://i.ibb.co/3Y7f4kC/ugandan-musician-1.jpg'
            },
            {
                type: 'Video',
                title: 'City of Dreams',
                creator: 'FilmMaker Akello',
                thumbnail: 'https://i.ibb.co/z4VSCB8/ugandan-musician-2.jpg'
            },
            {
                type: 'Art',
                title: 'Abstract Dimensions',
                creator: 'Artisan Mumbere',
                thumbnail: 'https://i.ibb.co/PNqC1D8/ugandan-musician-3.jpg'
            },
            {
                type: 'Podcast',
                title: 'The Creative Journey',
                creator: 'Host Dembe',
                thumbnail: 'https://i.ibb.co/yQdZpS4/ugandan-musician-4.jpg'
            }
            ].map((release, index) => (
            <div key={index} className="glass-effect rounded-2xl overflow-hidden hover-lift group">
                <div className="relative aspect-video bg-gray-800">
                <img src={release.thumbnail} alt={release.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                </div>
                <div className="absolute top-2 left-2 px-2 py-1 bg-rose-500/80 text-white text-xs font-bold rounded-full">
                    {release.type}
                </div>
                </div>
                <div className="p-4">
                <h3 className="text-white font-semibold mb-1">{release.title}</h3>
                <p className="text-gray-400 text-sm">by {release.creator}</p>
                </div>
            </div>
            ))}
        </div>

        <div className="text-center mt-12">
            <Link
            to="/media"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700"
            >
            View More
            </Link>
        </div>
        </div>
    </div>

      {/* Featured Creators */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-white mb-6">
              Featured <span className="gradient-text">Creators</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore standout profiles and discover creatives to follow and hire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Nakamya Fiona',
                role: 'Digital Marketer',
                avatar: 'https://i.ibb.co/3Y7f4kC/ugandan-musician-1.jpg'
              },
              {
                name: 'Nabatanzi Brenda',
                role: 'Model & Actress',
                avatar: 'https://i.ibb.co/z4VSCB8/ugandan-musician-2.jpg'
              },
              {
                name: 'Apio Sharon',
                role: 'Event Manager',
                avatar: 'https://i.ibb.co/PNqC1D8/ugandan-musician-3.jpg'
              },
              {
                name: 'Mugisha John',
                role: 'Content Creator',
                avatar: 'https://i.ibb.co/yQdZpS4/ugandan-musician-4.jpg'
              }
            ].map((creator, index) => (
              <div key={index} className="glass-effect rounded-2xl p-6 hover-lift text-center">
                <img src={creator.avatar} alt={creator.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-white font-semibold">{creator.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{creator.role}</p>
                <Link to="/portfolio" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all text-sm">
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Membership Overview */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-white mb-6">
              Choose Your <span className="gradient-text">Membership</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Access premium features, personalized content and exclusive support.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 w-2/3">
            {[
              {
                name: 'For Members',
                description: 'Support creators, access exclusive media, follow favorites, and get early access to events.',
                benefits: ['Exclusive Media', 'Follow & Support', 'Priority Access', 'Community'],
                link: '/member-membership'
              },
              {
                name: 'For Creators',
                description: 'Build a standout portfolio, stream your media, access masterclasses, and apply to projects.',
                benefits: ['Advanced Portfolio', 'Media & Streaming', 'Masterclasses', 'Career Projects'],
                link: '/creator-membership'
              }
            ].map((tier, index) => {
              const isCreator = tier.name.includes('Creator');
              const ringClass = isCreator ? 'ring-2 ring-blue-400' : 'ring-2 ring-yellow-400';
              const badgeClass = isCreator
                ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white'
                : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black';
              const ctaClass = isCreator
                ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:shadow-xl'
                : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:shadow-xl';

              return (
                <div key={index} className={`relative glass-effect p-8 rounded-2xl hover-lift ${ringClass}`}>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`${badgeClass} px-4 py-1 rounded-full text-sm font-semibold`}>
                      Recommended
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-rose-500 to-purple-600 flex items-center justify-center mb-4">
                    <Crown className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>

                  <ul className="space-y-2 mb-6">
                    {tier.benefits.map((b) => (
                      <li key={b} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => (user ? navigate(tier.link) : navigate(`/signin?redirect=${tier.link}`))}
                    className={`block w-full py-3 text-center font-semibold rounded-lg transition-all duration-300 ${ctaClass}`}
                  >
                    View Details
                  </button>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Ready to <span className="gradient-text">show up?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us today to build your career and achieve your dreams.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
