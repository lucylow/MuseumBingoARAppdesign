import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Compass, Lightbulb, MapPin, Flame } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HintScreen() {
  const [direction, setDirection] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(prev => (prev + 2) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 overflow-y-auto px-5 py-6 pb-24 bg-gradient-to-b from-[#0a1628] to-[#0f1e35]">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-1">Heat Vision</h1>
        <p className="text-blue-300/60 text-sm">Follow the compass to your next item</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative mb-8"
      >
        <div className="w-72 h-72 mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full" />
          <div className="absolute inset-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full" />
          <div className="absolute inset-8 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full" />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: direction }}
              transition={{ duration: 0.05 }}
              className="relative"
            >
              <Compass className="w-32 h-32 text-cyan-400" strokeWidth={1.5} />
              <motion.div
                className="absolute top-8 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-red-500 to-transparent"
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute top-4 text-blue-300 text-sm font-semibold">N</div>
            <div className="absolute right-4 text-blue-300 text-sm font-semibold">E</div>
            <div className="absolute bottom-4 text-blue-300 text-sm font-semibold">S</div>
            <div className="absolute left-4 text-blue-300 text-sm font-semibold">W</div>
          </div>
        </div>

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl"
        />
      </motion.div>

      <div className="space-y-3">
        <div className="bg-yellow-500/15 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-4 shadow-xl shadow-yellow-500/10">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Flame className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <div className="text-white font-semibold">Getting Closer!</div>
              <div className="text-yellow-300/60 text-sm">~12 meters ahead</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex-1 h-2.5 bg-yellow-950/40 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg shadow-yellow-500/50" />
            </div>
            <span className="text-yellow-400 text-sm font-bold">78%</span>
          </div>
        </div>

        <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/5">
          <div className="flex items-center space-x-3 p-4">
            <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-blue-500/30">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1569084024058-1632922a4e1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                alt="Artwork hint"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <Lightbulb className="w-4 h-4 text-blue-400" />
                <div className="text-white font-semibold">Artwork Hint</div>
              </div>
              <div className="text-blue-300/60 text-sm">
                Look for a marble sculpture with crossed arms near the entrance
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-4 shadow-lg shadow-blue-500/5">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold mb-1">Location Guide</div>
              <div className="text-blue-300/60 text-sm">
                Room 21 • Second Floor • Near Sculpture Hall
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
