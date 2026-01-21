import banner from '../assets/Banner/about.png'

export default function AboutPage() {
  return (
    <>
    <div className="min-h-screen bg-white text-white px-4 py-16 pt-20">
      {/* Container */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Image / Illustration */}
        <div className="flex justify-center">
          <img
            src={banner}
            alt="About MusicVibes"
            className="rounded-3xl shadow-lg w-full max-w-sm object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-purple-500">About MusicVibes</h1>
          <p className="text-gray-400 mb-4">
            MusicVibes is your ultimate destination to discover, listen, and enjoy the latest music trends.
            Our mission is to bring high-quality music to everyone, everywhere.
          </p>
          <p className="text-gray-400 mb-6">
            Whether you’re into chill beats, bass drops, or soothing acoustic tracks, we’ve got something for every mood.
            Explore our curated playlists and enjoy your favorite tunes anytime.
          </p>
          
          {/* Call to Action */}
          <button className="self-start bg-purple-600 px-6 py-3 rounded-2xl hover:bg-purple-700 transition">
            Explore Music
          </button>
        </div>
      </div>

      {/* Optional Extra Info */}
      <div className="mt-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="text-gray-400">
          We aim to create a vibrant community of music lovers, connecting people with the sounds they love and new artists they’ll discover.
        </p>
      </div>

       {/* Team Section */}
      <div className="mt-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-md flex flex-col items-center">
            <img src="https://i.pravatar.cc/150?img=1" alt="Team" className="rounded-full mb-4 w-24 h-24 object-cover" />
            <h3 className="font-semibold text-white mb-1">Alex Johnson</h3>
            <p className="text-gray-400 text-sm">Founder & CEO</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl shadow-md flex flex-col items-center">
            <img src="https://i.pravatar.cc/150?img=2" alt="Team" className="rounded-full mb-4 w-24 h-24 object-cover" />
            <h3 className="font-semibold text-white mb-1">Samantha Lee</h3>
            <p className="text-gray-400 text-sm">Head of Music Curation</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl shadow-md flex flex-col items-center">
            <img src="https://i.pravatar.cc/150?img=3" alt="Team" className="rounded-full mb-4 w-24 h-24 object-cover" />
            <h3 className="font-semibold text-white mb-1">Michael Chen</h3>
            <p className="text-gray-400 text-sm">Lead Developer</p>
          </div>
        </div>
      </div>

      
    </div>
    </>
  );
}
