import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Trophy, Share2, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface VRCelebrationProps {
  badgeName: string;
  points: number;
  onContinue: () => void;
  onShare: () => void;
}

export function VRCelebration({ badgeName, points, onContinue, onShare }: VRCelebrationProps) {
  useEffect(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: ['#3b82f6', '#06b6d4', '#10b981', '#fbbf24'],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: ['#3b82f6', '#06b6d4', '#10b981', '#fbbf24'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#050a14] via-[#0a1220] to-[#0f1828] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),transparent_60%)]" />

      {/* Floating Trophy */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', duration: 1, bounce: 0.4 }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 bg-emerald-500/40 blur-3xl rounded-full" />
        <div className="relative w-40 h-40 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40">
          <Trophy className="w-24 h-24 text-white" strokeWidth={1.5} />

          {/* Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 border-4 border-dashed border-emerald-300/40 rounded-full"
          />
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center space-x-2 mb-3">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wide">
            Bingo Complete!
          </span>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          {badgeName}
        </h1>

        <div className="flex items-center justify-center space-x-6 text-blue-200/70">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400">+{points}</div>
            <div className="text-xs uppercase tracking-wide">Points</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">16/16</div>
            <div className="text-xs uppercase tracking-wide">Found</div>
          </div>
        </div>
      </motion.div>

      {/* Floating Action Buttons */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-full max-w-sm space-y-4"
      >
        <button
          onClick={onContinue}
          className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white font-semibold py-5 rounded-2xl flex items-center justify-center space-x-2 shadow-2xl shadow-emerald-500/40 active:scale-98 transition-all"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Start New Challenge</span>
        </button>

        <button
          onClick={onShare}
          className="w-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 text-white font-semibold py-5 rounded-2xl flex items-center justify-center space-x-2 active:scale-98 transition-all"
        >
          <Share2 className="w-5 h-5" />
          <span>Share Achievement</span>
        </button>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-emerald-400/60 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 20,
            scale: 0,
          }}
          animate={{
            y: -20,
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.2,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
