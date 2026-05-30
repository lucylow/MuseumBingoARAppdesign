import { motion } from 'motion/react';
import { Glasses, Sparkles, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ImmersiveWelcomeProps {
  onStartExploring: () => void;
  onEnterVR: () => void;
}

export function ImmersiveWelcome({ onStartExploring, onEnterVR }: ImmersiveWelcomeProps) {
  return (
    <div className="h-screen w-full max-w-md mx-auto flex flex-col items-center justify-end relative overflow-hidden">
      {/* Full-bleed hero background with parallax effect */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1606819717115-9159c900370b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1vdXMlMjBwYWludGluZ3MlMjBtdXNldW0lMjBhcnR3b3JrJTIwZ2FsbGVyeXxlbnwxfHx8fDE3ODAwNzUzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Museum gallery"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/90 to-[#050a14]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050a14_100%)]" />
      </div>

      {/* Floating frame decorations with improved animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border rounded-2xl"
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.15, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + i * 25}%`,
              top: `${5 + i * 18}%`,
              width: i % 2 === 0 ? '120px' : '80px',
              height: i % 2 === 0 ? '120px' : '80px',
              borderWidth: '2px',
              borderColor: i % 2 === 0 ? 'rgba(59, 130, 246, 0.2)' : 'rgba(6, 182, 212, 0.25)',
              boxShadow: `0 0 ${20 + i * 10}px rgba(6, 182, 212, 0.1)`,
            }}
          />
        ))}
      </div>

      {/* Logo badge with pulse animation */}
      <motion.div
        initial={{ scale: 0, opacity: 0, y: -20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="absolute top-20 left-1/2 -translate-x-1/2"
      >
        <div className="relative">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-cyan-500/30 blur-3xl rounded-full"
          />
          <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500/40 to-cyan-500/30 backdrop-blur-2xl rounded-3xl border-2 border-cyan-400/50 flex items-center justify-center shadow-2xl shadow-cyan-500/30">
            <motion.span
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-5xl"
            >
              🎨
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Content panel with enhanced glassmorphism */}
      <div className="relative w-full px-6 pb-12">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.9, type: "spring", stiffness: 100 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/15 border border-cyan-400/40 rounded-full px-4 py-1.5 mb-6 shadow-lg shadow-cyan-500/20"
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-cyan-400 rounded-full"
            />
            <span className="text-cyan-200 text-xs font-bold uppercase tracking-widest">Museum.Bingo</span>
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-5xl font-bold text-white mb-4 tracking-tight leading-tight"
          >
            Explore Art<br />in <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">3D Space</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-blue-100/70 leading-relaxed max-w-sm mx-auto"
          >
            Scan real museum artwork, collect bingo tiles, and compete with visitors in real time.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="space-y-4 mb-10"
        >
          <motion.button
            onClick={onEnterVR}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full overflow-hidden rounded-3xl shadow-2xl shadow-cyan-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_100%] animate-gradient" />
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)',
              }}
            />
            <div className="relative text-white font-bold py-6 flex items-center justify-center space-x-3">
              <Glasses className="w-6 h-6" />
              <span className="text-lg">Enter Immersive Mode</span>
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
          </motion.button>

          <motion.button
            onClick={onStartExploring}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white/10 backdrop-blur-xl border-2 border-white/20 hover:border-white/30 text-white font-semibold py-5 rounded-3xl flex items-center justify-center space-x-2 transition-all shadow-xl"
          >
            <span className="text-lg">Start Standard Mode</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: '📱', label: 'Gyroscope view' },
            { icon: '👁️', label: 'Gaze to scan' },
            { icon: '🎯', label: 'Earn badges' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center space-y-2"
            >
              <div className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-xl shadow-lg hover:scale-110 hover:border-cyan-400/40 transition-all">
                {item.icon}
              </div>
              <span className="text-blue-100/50 text-[11px] text-center leading-tight font-medium">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
