import { useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Users, Clock, Sparkles, Camera, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PopularArtworksGallery } from './PopularArtworksGallery';
import { PlayersNearby } from './PlayersNearby';
import { DailyChallenges } from './DailyChallenges';

const artworkImages = [
  'https://images.unsplash.com/photo-1699391202798-bec3f1c894bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  'https://images.unsplash.com/photo-1700405084495-464922ad8b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  'https://images.unsplash.com/photo-1703593693037-3f816218baa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  'https://images.unsplash.com/photo-1703593693145-c6df50259d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  'https://images.unsplash.com/photo-1619878627081-85dd33d8667e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  'https://images.unsplash.com/photo-1524664399170-77e7118fdb6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  'https://images.unsplash.com/photo-1554907984-15263bfd63bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
];

const bingoPrompts = [
  'Painting with a dog', 'Portrait in red', 'Landscape with water', 'Marble sculpture',
  'Artwork from 1800s', 'Gold details', 'Statue with crossed arms', 'Three people',
  'Self-portrait', 'Blue sky scene', 'Impressionist piece', 'Religious figure',
  'Still life with fruit', 'Urban street scene', 'Abstract shapes', 'Animal sculpture'
];

const foundItemIndices = [0, 2, 4, 6, 9, 11, 13];

export function HomeScreen() {
  const navigate = useNavigate();
  const [foundItems] = useState<number[]>(foundItemIndices);
  const progress = (foundItems.length / bingoPrompts.length) * 100;

  const getArtworkImg = (foundIndex: number) => artworkImages[foundIndex % artworkImages.length];

  return (
    <div className="flex-1 overflow-y-auto px-5 py-6 pb-28 bg-gradient-to-b from-[#0a1628] via-[#0f1e35] to-[#050a14]">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="mb-6"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white mb-1">The Met Challenge</h1>
            <p className="text-blue-300/60 text-sm">European Paintings Wing • Room 21</p>
          </div>
          <div className="relative">
            <svg className="w-16 h-16 -rotate-90">
              <circle cx="32" cy="32" r="28" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="4" fill="none" />
              <circle
                cx="32" cy="32" r="28"
                stroke="url(#homeGrad)"
                strokeWidth="4" fill="none"
                strokeDasharray={`${2 * Math.PI * 28}`}
                strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
                strokeLinecap="round"
                className="transition-all duration-500"
              />
              <defs>
                <linearGradient id="homeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-white text-lg font-bold">{foundItems.length}</div>
              <div className="text-blue-300/60 text-[10px]">of 16</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-xl border-2 border-blue-400/30 rounded-2xl p-4 shadow-xl shadow-blue-500/20"
          >
            <Clock className="w-5 h-5 text-blue-300 mb-2" />
            <div className="text-white font-bold text-lg">18:42</div>
            <div className="text-blue-200/60 text-xs uppercase tracking-wide">Elapsed</div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="bg-gradient-to-br from-emerald-500/20 to-green-600/10 backdrop-blur-xl border-2 border-emerald-400/30 rounded-2xl p-4 shadow-xl shadow-emerald-500/20"
          >
            <Users className="w-5 h-5 text-emerald-300 mb-2" />
            <div className="text-white font-bold text-lg">3rd</div>
            <div className="text-emerald-200/60 text-xs uppercase tracking-wide">Rank</div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-gradient-to-br from-yellow-500/20 to-amber-600/10 backdrop-blur-xl border-2 border-yellow-400/30 rounded-2xl p-4 shadow-xl shadow-yellow-500/20"
          >
            <Sparkles className="w-5 h-5 text-yellow-300 mb-2" />
            <div className="text-white font-bold text-lg">350</div>
            <div className="text-yellow-200/60 text-xs uppercase tracking-wide">Points</div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-white font-semibold">Bingo Card</h2>
          <div className="text-blue-400/70 text-xs bg-blue-500/10 px-3 py-1 rounded-full">Tap to scan</div>
        </div>

        <div className="bg-gradient-to-br from-blue-950/50 to-blue-900/30 backdrop-blur-xl border-2 border-blue-500/30 rounded-3xl p-4 mb-6 shadow-2xl shadow-blue-500/20">
          <div className="grid grid-cols-4 gap-3">
            {bingoPrompts.map((prompt, index) => {
              const isFound = foundItems.includes(index);
              const foundOrder = foundItems.indexOf(index);
              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.02, duration: 0.3 }}
                  className={`
                    aspect-square rounded-lg border-2 flex items-center justify-center p-1.5 text-center text-[10px] font-medium relative overflow-hidden
                    ${isFound
                      ? 'border-blue-400/60 shadow-lg shadow-blue-500/20'
                      : 'bg-blue-900/20 border-blue-700/30 text-blue-400/50'
                    }
                  `}
                >
                  {isFound ? (
                    <>
                      <ImageWithFallback
                        src={getArtworkImg(foundOrder)}
                        alt={prompt}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-blue-900/60" />
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="relative z-10 flex items-center justify-center"
                      >
                        <div className="w-6 h-6 bg-blue-500/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-300/60">
                          <CheckCircle className="w-3.5 h-3.5 text-white" />
                        </div>
                      </motion.div>
                    </>
                  ) : (
                    <span>{prompt}</span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quick Scan CTA */}
        <motion.button
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          onClick={() => navigate('/camera')}
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="group relative w-full overflow-hidden rounded-3xl shadow-2xl shadow-cyan-500/40 mb-6"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-[length:200%_100%] animate-gradient" />
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
            }}
          />
          <div className="relative p-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/25 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-xl mb-1">Scan Artwork</div>
                <div className="text-blue-50/80 font-medium">Point camera to find matches</div>
              </div>
            </div>
            <ArrowRight className="w-7 h-7 text-white/90 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.button>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gradient-to-br from-emerald-500/25 to-green-600/15 backdrop-blur-xl border-2 border-emerald-400/40 rounded-3xl p-5 flex items-center space-x-4 shadow-xl shadow-emerald-500/20"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-400/30 to-green-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
            <Trophy className="w-7 h-7 text-emerald-300" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white font-bold text-lg mb-1">Next: Art Explorer Badge</div>
            <div className="text-emerald-100/70 font-medium">Complete 2 more tiles for +150 pts</div>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <div className="mt-8 space-y-3">
          <h3 className="text-white/70 text-xs uppercase tracking-widest font-bold mb-4 flex items-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mr-3" />
            Recent Activity
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent ml-3" />
          </h3>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="bg-gradient-to-r from-blue-950/40 to-blue-900/20 backdrop-blur-xl border-2 border-blue-500/20 hover:border-emerald-400/40 rounded-2xl p-4 flex items-center space-x-4 transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-emerald-400/40 flex-shrink-0 relative shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1699391202798-bec3f1c894bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                alt="The Starry Night"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-end p-1">
                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/50">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-semibold mb-0.5">Found "The Starry Night"</div>
              <div className="text-blue-200/60 text-sm">Impressionist piece • 2 min ago</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.4 }}
            className="bg-gradient-to-r from-blue-950/40 to-blue-900/20 backdrop-blur-xl border-2 border-blue-500/20 hover:border-cyan-400/40 rounded-2xl p-4 flex items-center space-x-4 transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-cyan-400/40 flex-shrink-0 relative shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                alt="Gallery paintings"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-cyan-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl">👥</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-semibold mb-0.5">Joined Room MB-2481</div>
              <div className="text-blue-200/60 text-sm">12 players active • 12 min ago</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="bg-gradient-to-r from-blue-950/40 to-blue-900/20 backdrop-blur-xl border-2 border-blue-500/20 hover:border-blue-400/40 rounded-2xl p-4 flex items-center space-x-4 transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-blue-500/30 flex-shrink-0 shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1700405084495-464922ad8b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                alt="Trees and water painting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-semibold mb-0.5">Found "Waterlilies"</div>
              <div className="text-blue-200/60 text-sm">Landscape with water • 24 min ago</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.4 }}
            className="bg-gradient-to-r from-blue-950/40 to-blue-900/20 backdrop-blur-xl border-2 border-blue-500/20 hover:border-yellow-400/40 rounded-2xl p-4 flex items-center space-x-4 transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-yellow-400/40 flex-shrink-0 relative shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                alt="Museum architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-yellow-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl">🏆</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-semibold mb-0.5">Unlocked "Rookie Hunter"</div>
              <div className="text-blue-200/60 text-sm">Achievement earned • 35 min ago</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className="bg-gradient-to-r from-blue-950/40 to-blue-900/20 backdrop-blur-xl border-2 border-blue-500/20 hover:border-emerald-400/40 rounded-2xl p-4 flex items-center space-x-4 transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-emerald-400/40 flex-shrink-0 relative shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1619878627081-85dd33d8667e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                alt="Classic sculpture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-end p-1">
                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/50">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-semibold mb-0.5">Found "David"</div>
              <div className="text-blue-200/60 text-sm">Marble sculpture • 48 min ago</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.4 }}
            className="bg-gradient-to-r from-blue-950/40 to-blue-900/20 backdrop-blur-xl border-2 border-blue-500/20 hover:border-purple-400/40 rounded-2xl p-4 flex items-center space-x-4 transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-purple-400/40 flex-shrink-0 relative shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1580687774275-4e14b364f6e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                alt="Abstract art"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-purple-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-purple-300" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-semibold mb-0.5">Daily Challenge Started</div>
              <div className="text-blue-200/60 text-sm">3 of 5 items remaining • 1h ago</div>
            </div>
          </motion.div>
        </div>

        {/* Daily Challenges */}
        <DailyChallenges />

        {/* Achievements Gallery */}
        <div className="mt-6 space-y-2">
          <h3 className="text-white/60 text-xs uppercase tracking-wide font-semibold mb-3">Recent Achievements</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-3 flex flex-col items-center shadow-lg shadow-yellow-500/10">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-400/60 mb-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                  alt="Achievement"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white text-xs font-semibold text-center">Rookie Hunter</div>
              <div className="text-yellow-300/60 text-[10px]">First 5 finds</div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/10 backdrop-blur-sm border border-blue-500/30 rounded-xl p-3 flex flex-col items-center shadow-lg shadow-blue-500/10">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400/60 mb-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1524664399170-77e7118fdb6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                  alt="Achievement"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white text-xs font-semibold text-center">Speed Demon</div>
              <div className="text-blue-300/60 text-[10px]">5 scans in 5min</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 rounded-xl p-3 flex flex-col items-center shadow-lg shadow-purple-500/10">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-400/60 mb-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1703593693037-3f816218baa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                  alt="Achievement"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white text-xs font-semibold text-center">Socialite</div>
              <div className="text-purple-300/60 text-[10px]">Joined 3 rooms</div>
            </div>
          </div>
        </div>

        {/* Personal Stats */}
        <div className="mt-8 space-y-3">
          <h3 className="text-white/70 text-xs uppercase tracking-widest font-bold mb-4 flex items-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mr-3" />
            Your Stats
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent ml-3" />
          </h3>
          <div className="bg-gradient-to-br from-blue-950/50 to-blue-900/30 backdrop-blur-xl border-2 border-blue-500/30 rounded-3xl p-5 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-blue-500/20">
              <div className="text-blue-200/70 font-medium">Total Scans</div>
              <div className="text-white font-bold text-xl">47</div>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-blue-500/20">
              <div className="text-blue-200/70 font-medium">Museums Visited</div>
              <div className="text-white font-bold text-xl">3</div>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-blue-500/20">
              <div className="text-blue-200/70 font-medium">Total Points</div>
              <div className="text-cyan-300 font-bold text-xl">1,240</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-blue-200/70 font-medium">Games Played</div>
              <div className="text-white font-bold text-xl">8</div>
            </div>
          </div>
        </div>

        {/* Popular Artworks Gallery */}
        <PopularArtworksGallery />

        {/* Players Nearby */}
        <PlayersNearby />
      </motion.div>
    </div>
  );
}
