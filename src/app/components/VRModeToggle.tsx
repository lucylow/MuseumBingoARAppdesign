import { motion } from 'motion/react';
import { Glasses, X } from 'lucide-react';

interface VRModeToggleProps {
  isVRMode: boolean;
  onToggle: () => void;
}

export function VRModeToggle({ isVRMode, onToggle }: VRModeToggleProps) {
  if (isVRMode) {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={onToggle}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-2xl shadow-black/50 active:scale-95 transition-transform"
      >
        <X className="w-6 h-6 text-white" />
      </motion.button>
    );
  }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      onClick={onToggle}
      className="fixed bottom-24 right-6 z-50 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 active:scale-95 transition-transform"
    >
      <Glasses className="w-8 h-8 text-white" />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 border-2 border-blue-400 rounded-full opacity-50"
      />
    </motion.button>
  );
}
