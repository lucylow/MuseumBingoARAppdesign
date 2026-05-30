import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

interface SpatialHintArrowProps {
  direction: 'up' | 'down' | 'left' | 'right';
  distance: number;
  targetName: string;
}

const directionAngles = {
  up: 0,
  right: 90,
  down: 180,
  left: 270,
};

const positionStyles = {
  up: 'top-12 left-1/2 -translate-x-1/2',
  down: 'bottom-32 left-1/2 -translate-x-1/2',
  left: 'left-6 top-1/2 -translate-y-1/2',
  right: 'right-6 top-1/2 -translate-y-1/2',
};

export function SpatialHintArrow({ direction, distance, targetName }: SpatialHintArrowProps) {
  const heatLevel = distance < 20 ? 'hot' : distance < 50 ? 'warm' : 'cool';

  const colorMap = {
    hot: { bg: 'from-orange-500 to-red-500', text: 'text-orange-100', glow: 'shadow-orange-500/50' },
    warm: { bg: 'from-yellow-500 to-orange-500', text: 'text-yellow-100', glow: 'shadow-yellow-500/40' },
    cool: { bg: 'from-cyan-500 to-blue-500', text: 'text-cyan-100', glow: 'shadow-cyan-500/30' },
  };

  const colors = colorMap[heatLevel];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`fixed ${positionStyles[direction]} pointer-events-none z-50`}
    >
      <div className="flex flex-col items-center space-y-2">
        {/* Arrow */}
        <motion.div
          animate={{
            y: direction === 'up' ? [-4, 0, -4] : direction === 'down' ? [4, 0, 4] : 0,
            x: direction === 'left' ? [-4, 0, -4] : direction === 'right' ? [4, 0, 4] : 0,
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-full flex items-center justify-center shadow-2xl ${colors.glow}`}
          style={{ transform: `rotate(${directionAngles[direction]}deg)` }}
        >
          <ArrowUp className="w-8 h-8 text-white" strokeWidth={3} />
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-black/80 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/20 shadow-xl"
        >
          <div className={`font-semibold ${colors.text} text-sm mb-0.5`}>{targetName}</div>
          <div className="text-white/70 text-xs font-mono">~{distance}ft away</div>
        </motion.div>

        {/* Heat Indicator */}
        <div className="flex items-center space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${
                (heatLevel === 'hot' && i <= 2) ||
                (heatLevel === 'warm' && i <= 1) ||
                (heatLevel === 'cool' && i === 0)
                  ? colors.bg.includes('orange') ? 'bg-orange-400' : colors.bg.includes('yellow') ? 'bg-yellow-400' : 'bg-cyan-400'
                  : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
