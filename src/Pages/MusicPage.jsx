// import c1 from '../assets/cover/Proposal.png'
// import a1 from '../assets/music/Proposal.mp3'
// import am1 from '../assets/music/Prososal.m4a'
// import c2 from '../assets/cover/IsYou.png'
// import a2 from '../assets/music/IsYou.mp3'
// import am2 from '../assets/music/IsYou.m4a'
// import c3 from '../assets/cover/BKror.png'
// import a3 from '../assets/music/BKror.mp3'
// import am3 from '../assets/music/BKror.m4a'
// import c4 from '../assets/cover/FirstKisses.png'
// import a4 from '../assets/music/កុហក.mp3'
// import am4 from '../assets/music/កុហក.m4a'
// import c5 from '../assets/cover/KmeanPkay.png'
// import a5 from '../assets/music/KmeanPkay.mp3'
// import am5 from '../assets/music/KmeanPkay.m4a'
// import c6 from '../assets/cover/KomSark.png'
// import a6 from '../assets/music/KomSark.mp3'
// import am6 from '../assets/music/KomSark.m4a'

// export default function MusicPage() {
//   return (
//     <>
//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto pt-28">

//         {/* Box 1 */}
//         <div className="bg-gray-900 rounded-2xl p-4 shadow-md flex flex-col items-center">
//           <img
//             src={c1}
//             alt="Album"
//             className="rounded-xl mb-3 w-full object-cover"
//           />
//           <h2 className="text-lg font-semibold text-white text-center">The Proposal</h2>
//           <p className="text-gray-400 text-sm mb-3 text-center">By Propey</p>

//           {/* Audio */}
//           <audio
//             controls
//             preload="metadata"
//             playsInline
//             className="w-full mb-2 h-8"
//           >
//             <source src={am1} type="audio/mp4" />
//             <source src={a1} type="audio/mpeg" />
//           </audio>



//         </div>

//         {/* Box 2 */}
//         <div className="bg-gray-900 rounded-2xl p-4 shadow-md flex flex-col items-center">
//           <img
//             src={c2}
//             alt="Album"
//             className="rounded-xl mb-3 w-full object-cover"
//           />
//           <h2 className="text-lg font-semibold text-white text-center">Is You</h2>
//           <p className="text-gray-400 text-sm mb-3 text-center">By Tena</p>

//           <audio
//             controls
//             preload="metadata"
//             playsInline
//             className="w-full mb-2 h-8"
//           >
//             <source src={am2} type="audio/mp4" />
//             <source src={a2} type="audio/mpeg" />
//           </audio>


//         </div>

//         {/* Box 3 */}
//         <div className="bg-gray-900 rounded-2xl p-4 shadow-md flex flex-col items-center">
//           <img
//             src={c3}
//             alt="Album"
//             className="rounded-xl mb-3 w-full object-cover pt-1"
//           />
//           <h2 className="text-lg font-semibold text-white text-center">Baby I'm not your type</h2>
//           <p className="text-gray-400 text-sm mb-3 text-center">By Tena ft Rakhie</p>

//           {/* Audio */}
//           <audio
//             controls
//             preload="metadata"
//             playsInline
//             className="w-full mb-2 h-8"
//           >
//             <source src={am3} type="audio/mp4" />
//             <source src={a3} type="audio/mpeg" />
//           </audio>


//         </div>

//         {/* Box 4 */}
//         <div className="bg-gray-900 rounded-2xl p-4 shadow-md flex flex-col items-center">
//           <img
//             src={c4}
//             alt="Album"
//             className="rounded-xl mb-3 w-full object-cover"
//           />
//           <h2 className="text-lg font-semibold text-white text-center">First Kiss Speed Up</h2>
//           <p className="text-gray-400 text-sm mb-3 text-center">By SWSB</p>


//           {/* Audio */}
//           <audio
//             controls
//             preload="metadata"
//             playsInline
//             className="w-full mb-2 h-8"
//           >
//             <source src={am4} type="audio/mp4" />
//             <source src={a4} type="audio/mpeg" />
//           </audio>

//         </div>


//         {/* Box 5 */}
//         <div className="bg-gray-900 rounded-2xl p-4 shadow-md flex flex-col items-center">
//           <img
//             src={c5}
//             alt="Album"
//             className="rounded-xl mb-3 w-full object-cover pt-1"
//           />
//           <h2 className="text-lg font-semibold text-white text-center">គ្មានផ្កាយ</h2>
//           <p className="text-gray-400 text-sm mb-3 text-center">By Narik, Telong, Chhay Alex</p>


//           {/* Audio */}
//           <audio
//             controls
//             preload="metadata"
//             playsInline
//             className="w-full mb-2 h-8"
//           >
//             <source src={am5} type="audio/mp4" />
//             <source src={a5} type="audio/mpeg" />
//           </audio>

//         </div>

//            {/* Box 6 */}
//         <div className="bg-gray-900 rounded-2xl p-4 shadow-md flex flex-col items-center">
//           <img
//             src={c6}
//             alt="Album"
//             className="rounded-xl mb-3 w-full object-cover pt-1"
//           />
//           <h2 className="text-lg font-semibold text-white text-center">កំសាក</h2>
//           <p className="text-gray-400 text-sm mb-3 text-center">By ProPey</p>


//           {/* Audio */}
//           <audio
//             controls
//             preload="metadata"
//             playsInline
//             className="w-full mb-2 h-8 "
//           >
//             <source src={am6} type="audio/mp4" />
//             <source src={a6} type="audio/mpeg" />
//           </audio>

//         </div>



//       </div>
//     </>
//   );
// }



import { IoMdPlay } from "react-icons/io";
import { FaPause } from "react-icons/fa";

import { useRef, useState } from "react";

import c1 from "../assets/cover/Proposal.png";
import am1 from "../assets/music/Prososal.m4a";
import c2 from "../assets/cover/IsYou.png";
import am2 from "../assets/music/IsYou.m4a";
import c3 from "../assets/cover/BKror.png";
import am3 from "../assets/music/BKror.m4a";
import c4 from "../assets/cover/FirstKisses.png";
import am4 from "../assets/music/កុហក.m4a";
import c5 from "../assets/cover/KmeanPkay.png";
import am5 from "../assets/music/KmeanPkay.m4a";
import c6 from "../assets/cover/KomSark.png";
import am6 from "../assets/music/KomSark.m4a";

const playlist = [
  { title: "The Proposal", artist: "Propey", cover: c1, src: am1 },
  { title: "Is You", artist: "Tena", cover: c2, src: am2 },
  { title: "Baby I'm not your type", artist: "Tena ft Rakhie", cover: c3, src: am3 },
  { title: "First Kiss Speed Up", artist: "SWSB", cover: c4, src: am4 },
  { title: "គ្មានផ្កាយ", artist: "Narik, Telong, Chhay Alex", cover: c5, src: am5 },
  { title: "កំសាក", artist: "ProPey", cover: c6, src: am6 },
];

export default function MusicPage() {
  const audioRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  const togglePlay = (index) => {
    if (index !== current) {
      setCurrent(index);
      setTimeout(() => audioRef.current.play(), 0);
      setPlaying(true);
      return;
    }

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const playNext = () => {
    if (!autoplay) return;
    const next = (current + 1) % playlist.length;
    setCurrent(next);
    setTimeout(() => audioRef.current.play(), 0);
  };

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto pt-28 px-4 pb-28">
        {playlist.map((song, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-4 shadow-md"
          >
            <img src={song.cover} className="rounded-xl mb-3" />
            <h2 className="text-white font-semibold text-center">
              {song.title}
            </h2>
            <p className="text-gray-400 text-sm text-center mb-3">
              {song.artist}
            </p>

            <button
              onClick={() => togglePlay(index)}
              className="w-full bg-green-500 text-black rounded-lg py-2 font-semibold"
            >
              {playing && current === index ? <FaPause className="inline-block mr-1 mb-1" /> : <IoMdPlay className="inline-block mr-1 mb-1" />}
<span>{playing && current === index ? "Pause" : "Play"}</span>

            </button>
          </div>
        ))}
      </div>

     {/* PLAYER BAR */}
<div className="fixed bottom-0 left-0 right-0 bg-gray-950 border-t border-gray-800 px-4 py-2">
  <div className="max-w-7xl mx-auto flex items-center gap-4">

    {/* Cover */}
    <img
      src={playlist[current].cover}
      className="w-12 h-12 rounded-xl object-cover"
    />

    {/* Song Info */}
    <div className="flex-1 min-w-0">
      <p className="text-white text-sm font-semibold truncate">
        {playlist[current].title}
      </p>
      <p className="text-gray-400 text-xs truncate">
        {playlist[current].artist}
      </p>

      {/* Progress bar */}
      <audio
        ref={audioRef}
        src={playlist[current].src}
        playsInline
        preload="metadata"
        onEnded={playNext}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="w-full mt-1"
        controls
      />
    </div>

    {/* Autoplay toggle */}
    <button
      onClick={() => setAutoplay(!autoplay)}
      className={`text-xs px-3 py-1 rounded-full border ${
        autoplay
          ? "border-green-500 text-green-400"
          : "border-gray-600 text-gray-400"
      }`}
    >
      AUTO
    </button>
  </div>
</div>


    </>
  );
}

