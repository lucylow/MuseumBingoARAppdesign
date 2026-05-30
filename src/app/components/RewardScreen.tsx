import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, Share2, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router';
import confetti from 'canvas-confetti';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function RewardScreen() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#06b6d4', '#fbbf24', '#10b981']
    });
    setTimeout(() => setShowContent(true), 300);
  }, []);

  return (
    <div className="flex-1 overflow-y-auto pb-24 relative bg-gradient-to-b from-[#0a1628] to-[#0f1e35]">
      {/* Hero artwork banner */}
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1619878627081-85dd33d8667e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
          alt="Scanned artwork — The Starry Night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a1628]" />
        <div className="absolute inset-x-0 bottom-4 px-5 flex items-end justify-between">
          <div>
            <div className="text-white/60 text-xs mb-0.5">Just scanned</div>
            <div className="text-white font-semibold">The Starry Night</div>
            <div className="text-blue-300/60 text-sm">Vincent van Gogh</div>
          </div>
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/40">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      <div className="px-5 pt-4">
        {/* Trophy badge */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="relative mb-6 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500/30 blur-3xl rounded-full" />
            <div className="relative w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/30">
              <Trophy className="w-16 h-16 text-white" strokeWidth={1.5} />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-4 border-dashed border-yellow-300/30 rounded-full"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={showContent ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wide">Bingo Complete!</span>
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Art Explorer</h1>
          <p className="text-blue-300/70">+150 pts • Badge unlocked • 18:42 elapsed</p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={showContent ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-3 mb-6"
        >
          <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-5 shadow-xl shadow-blue-500/10">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide opacity-60">Your Achievement</h3>
            <div className="space-y-3">
              {[
                { label: 'Items Found', value: '7/16', color: 'text-white' },
                { label: 'Time Elapsed', value: '18:42', color: 'text-white' },
                { label: 'Streak', value: '3 in a row', color: 'text-white' },
                { label: 'Current Rank', value: '3rd Place', color: 'text-green-400' },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <span className="text-blue-300/70">{row.label}</span>
                  <span className={`font-semibold ${row.color}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bonus unlocked with artwork thumbnail */}
          <div className="bg-purple-500/15 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden shadow-xl shadow-purple-500/10">
            <div className="flex items-center space-x-3 p-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-purple-500/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1703593693037-3f816218baa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                  alt="Bonus artwork"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-white font-semibold mb-0.5">Bonus Unlocked</div>
                <div className="text-purple-300/60 text-sm">European Paintings audio guide unlocked</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={showContent ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="space-y-3"
        >
          <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 active:scale-98 text-white font-semibold py-4 rounded-2xl flex items-center justify-center space-x-2 transition-all shadow-lg shadow-blue-500/30">
            <Share2 className="w-5 h-5" />
            <span>Share Achievement</span>
          </button>

          <button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 active:scale-98 text-white font-semibold py-4 rounded-2xl flex items-center justify-center space-x-2 transition-all shadow-lg shadow-emerald-500/30">
            <span>Start New Challenge</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => navigate('/home')}
            className="w-full bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 active:scale-98 text-blue-300 font-semibold py-4 rounded-2xl transition-all shadow-lg shadow-blue-500/5"
          >
            View Bingo Card
          </button>
        </motion.div>
      </div>
    </div>
  );
}
