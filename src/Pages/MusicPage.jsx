import c1 from '../assets/cover/Proposal.png'
import a1 from '../assets/music/Proposal.mp3'
import am1 from '../assets/music/Prososal.m4a'
import c2 from '../assets/cover/IsYou.png'
import a2 from '../assets/music/IsYou.mp3'
import am2 from '../assets/music/IsYou.m4a'
import c3 from '../assets/cover/BKror.png'
import a3 from '../assets/music/BKror.mp3'
import am3 from '../assets/music/BKror.m4a'
import c4 from '../assets/cover/FirstKisses.png'
import a4 from '../assets/music/កុហក.mp3'
import am4 from '../assets/music/កុហក.m4a'

export default function MusicPage() {
  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto pt-28">

        {/* Box 1 */}
        <div className="bg-gray-900 rounded-2xl p-4 shadow-md flex flex-col items-center">
          <img
            src={c1}
            alt="Album"
            className="rounded-xl mb-3 w-full object-cover"
          />
          <h2 className="text-lg font-semibold text-white text-center">The Proposal</h2>
          <p className="text-gray-400 text-sm mb-3 text-center">By Propey</p>

          {/* Audio */}
          <audio
            controls
            preload="metadata"
            playsInline
            className="w-full mb-2 h-8"
          >
            <source src={am1} type="audio/mp4" />
            <source src={a1} type="audio/mpeg" />
          </audio>



        </div>

        {/* Box 2 */}
        <div className="bg-gray-900 rounded-2xl p-4 shadow-md flex flex-col items-center">
          <img
            src={c2}
            alt="Album"
            className="rounded-xl mb-3 w-full object-cover"
          />
          <h2 className="text-lg font-semibold text-white text-center">Is You</h2>
          <p className="text-gray-400 text-sm mb-3 text-center">By Tena</p>

          <audio
            controls
            preload="metadata"
            playsInline
            className="w-full mb-2 h-8"
          >
            <source src={am2} type="audio/mp4" />
            <source src={a2} type="audio/mpeg" />
          </audio>


        </div>

        {/* Box 3 */}
        <div className="bg-gray-900 rounded-2xl p-4 shadow-md flex flex-col items-center">
          <img
            src={c3}
            alt="Album"
            className="rounded-xl mb-3 w-full object-cover pt-1"
          />
          <h2 className="text-lg font-semibold text-white text-center">Baby I'm not your type</h2>
          <p className="text-gray-400 text-sm mb-3 text-center">By Tena ft Rakhie</p>

          {/* Audio */}
          <audio
            controls
            preload="metadata"
            playsInline
            className="w-full mb-2 h-8"
          >
            <source src={am3} type="audio/mp4" />
            <source src={a3} type="audio/mpeg" />
          </audio>


        </div>

        {/* Box 4 */}
        <div className="bg-gray-900 rounded-2xl p-4 shadow-md flex flex-col items-center">
          <img
            src={c4}
            alt="Album"
            className="rounded-xl mb-3 w-full object-cover"
          />
          <h2 className="text-lg font-semibold text-white text-center">First Kiss Speed Up</h2>
          <p className="text-gray-400 text-sm mb-3 text-center">By SWSB</p>


          {/* Audio */}
          <audio
            controls
            preload="metadata"
            playsInline
            className="w-full mb-2 h-8"
          >
            <source src={am4} type="audio/mp4" />
            <source src={a4} type="audio/mpeg" />
          </audio>

        </div>


      </div>
    </>
  );
}
