import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Zap, X } from 'lucide-react';
import { useNavigate } from 'react-router';

export function CameraScreen() {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);
  const [match, setMatch] = useState<number | null>(null);
  const [matchConfidence, setMatchConfidence] = useState(0);

  useEffect(() => {
    const scanTimer = setTimeout(() => {
      setScanning(true);
      setMatchConfidence(0);
      const confidenceInterval = setInterval(() => {
        setMatchConfidence(prev => {
          if (prev >= 96) {
            clearInterval(confidenceInterval);
            setMatch(1);
            setTimeout(() => navigate('/reward'), 1500);
            return 96;
          }
          return prev + 8;
        });
      }, 100);
    }, 500);

    return () => clearTimeout(scanTimer);
  }, [navigate]);

  return (
    <div className="flex-1 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxYTI4NDQiLz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
        <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/10">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-white text-sm font-medium">AR LIVE</span>
        </div>
        <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/40 rounded-xl px-3 py-2">
          <span className="text-blue-200 text-sm font-medium">Scanning...</span>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative w-64 h-80"
          animate={{ scale: scanning ? [1, 1.02, 1] : 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg" />

          <motion.div
            className="absolute inset-0 border-4 rounded-lg"
            animate={{
              borderColor: scanning
                ? match
                  ? '#22c55e'
                  : ['#3b82f6', '#06b6d4', '#3b82f6']
                : '#3b82f6'
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-green-400" />
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-green-400" />
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-green-400" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-green-400" />
          </motion.div>

          {scanning && (
            <motion.div
              initial={{ top: 0, opacity: 0.8 }}
              animate={{ top: '100%', opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{ filter: 'blur(2px)' }}
            />
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {scanning && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-32 left-0 right-0 flex flex-col items-center space-y-4"
          >
            <div className="bg-blue-950/90 backdrop-blur-xl border border-blue-400/40 rounded-2xl px-6 py-4 shadow-2xl shadow-blue-500/20 mx-6">
              <div className="flex items-center space-x-3 mb-2">
                <Zap className={`w-5 h-5 ${match ? 'text-green-400' : 'text-cyan-400'}`} />
                <span className="text-white font-semibold">
                  {match ? 'MATCH CONFIRMED' : 'SCANNING...'}
                </span>
              </div>
              <div className={`text-sm mb-3 ${match ? 'text-green-300' : 'text-cyan-300/70'}`}>
                {match ? 'Van Gogh - Starry Night' : 'Analyzing artwork...'}
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex-1 h-2.5 bg-blue-950/60 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${match ? 'bg-gradient-to-r from-green-400 to-emerald-400' : 'bg-gradient-to-r from-cyan-400 to-blue-400'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${matchConfidence}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <span className="text-white text-sm font-mono font-semibold min-w-[3ch]">
                  {matchConfidence.toFixed(0)}%
                </span>
              </div>
            </div>

            {match && (
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-xl shadow-green-500/50"
              >
                <div className="text-4xl">✓</div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center pb-20">
        <div className="text-blue-200/70 text-sm mb-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
          Point camera at artwork
        </div>
        <button className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 active:scale-95 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 border-4 border-white/30 transition-all">
          <Camera className="w-9 h-9 text-white" />
        </button>
      </div>
    </div>
  );
}
