import { motion } from 'motion/react';
import { Camera, Frame, Sparkles, ArrowRight } from 'lucide-react';

interface CameraOnboardingProps {
  onComplete: () => void;
}

export function CameraOnboarding({ onComplete }: CameraOnboardingProps) {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#050a14] via-[#0a1220] to-[#0f1828] z-50 flex flex-col items-center justify-center px-6">
      {/* Camera Preview Frame */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mb-8"
      >
        <div className="w-72 h-96 bg-gradient-to-br from-slate-700/20 to-slate-800/20 rounded-3xl border-2 border-cyan-400/40 overflow-hidden relative">
          {/* Mock Artwork */}
          <div className="absolute inset-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-cyan-400/30" />

          {/* Scanning Corners */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t-4 border-l-4 border-cyan-400 rounded-tl-lg" />
          <div className="absolute top-6 right-6 w-12 h-12 border-t-4 border-r-4 border-cyan-400 rounded-tr-lg" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b-4 border-l-4 border-cyan-400 rounded-bl-lg" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b-4 border-r-4 border-cyan-400 rounded-br-lg" />

          {/* Scan Line */}
          <motion.div
            animate={{ top: ['10%', '90%', '10%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm"
          />

          {/* Success Indicator */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/40 rounded-full px-4 py-2"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span className="text-emerald-300 text-sm font-medium">Match Found</span>
            </div>
          </motion.div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-3xl" />
      </motion.div>

      {/* Instructions */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-3">
          Scan Artwork<br />Instantly
        </h2>
        <p className="text-blue-200/70 max-w-sm leading-relaxed">
          Point your camera at any painting or sculpture. The app will automatically detect and match it to your bingo card.
        </p>
      </motion.div>

      {/* Tips */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="w-full max-w-sm space-y-3 mb-8"
      >
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Frame className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="flex-1">
            <div className="text-white font-medium mb-1">Center the artwork</div>
            <div className="text-blue-200/60 text-sm">Keep the entire piece inside the frame</div>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="flex-1">
            <div className="text-white font-medium mb-1">Wait for focus</div>
            <div className="text-blue-200/60 text-sm">Hold steady while the app analyzes</div>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-xl">✓</span>
          </div>
          <div className="flex-1">
            <div className="text-white font-medium mb-1">Confirm your match</div>
            <div className="text-blue-200/60 text-sm">Review and add to your bingo card</div>
          </div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.button
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        onClick={onComplete}
        className="w-full max-w-sm bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold py-5 rounded-2xl flex items-center justify-center space-x-2 shadow-2xl shadow-cyan-500/40 active:scale-98 transition-all"
      >
        <Camera className="w-5 h-5" />
        <span>Start Scanning</span>
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </div>
  );
}
