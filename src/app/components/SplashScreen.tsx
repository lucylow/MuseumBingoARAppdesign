import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOnboarding(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-full max-w-md mx-auto bg-gradient-to-b from-[#0a1628] via-[#0f1e35] to-[#1a2844] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      <AnimatePresence mode="wait">
        {!showOnboarding ? (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative mb-8"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="relative w-28 h-28 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-400/30 flex items-center justify-center shadow-2xl shadow-blue-500/20">
                <div className="text-5xl">🎨</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
                MUSEUM<span className="text-blue-400">.BINGO</span>
              </h1>
              <p className="text-blue-300/60">Your AR Museum Adventure</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="onboarding"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center w-full max-w-sm"
          >
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-400/30 flex items-center justify-center shadow-xl shadow-blue-500/10 mb-8">
              <div className="text-5xl">🎨</div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-3 text-center">
              Turn Museums Into<br />Adventures
            </h2>
            <p className="text-blue-300/70 text-center mb-8 px-4 leading-relaxed">
              Scan artwork with AR, collect bingo tiles, and compete with other visitors in real-time
            </p>

            <div className="w-full space-y-3 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📸</span>
                </div>
                <div>
                  <div className="text-white font-medium">AR Scanning</div>
                  <div className="text-blue-300/60 text-sm">Point your camera at any artwork</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <div className="text-white font-medium">Complete Challenges</div>
                  <div className="text-blue-300/60 text-sm">Fill your bingo card to win badges</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🏆</span>
                </div>
                <div>
                  <div className="text-white font-medium">Compete & Collect</div>
                  <div className="text-blue-300/60 text-sm">Race friends on live leaderboards</div>
                </div>
              </div>
            </div>

            <button
              onClick={onComplete}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white font-semibold py-4 rounded-2xl shadow-lg shadow-blue-500/30 active:scale-98 transition-all"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
