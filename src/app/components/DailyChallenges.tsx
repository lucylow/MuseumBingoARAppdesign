import { motion } from 'motion/react';
import { Calendar, Target, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const challenges = [
  {
    id: 1,
    title: 'French Impressionists',
    description: 'Find 3 Monet paintings',
    progress: 2,
    total: 3,
    reward: 150,
    timeLeft: '8h',
    img: 'https://images.unsplash.com/photo-1700405084495-464922ad8b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    type: 'daily',
  },
  {
    id: 2,
    title: 'Speed Hunter',
    description: 'Scan 5 artworks in 10 minutes',
    progress: 0,
    total: 5,
    reward: 200,
    timeLeft: '23h',
    img: 'https://images.unsplash.com/photo-1580687774275-4e14b364f6e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    type: 'challenge',
  },
  {
    id: 3,
    title: 'Renaissance Master',
    description: 'Find works from 3 different Renaissance artists',
    progress: 1,
    total: 3,
    reward: 300,
    timeLeft: '6d',
    img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    type: 'weekly',
  },
];

const typeColors = {
  daily: { bg: 'from-cyan-500/20 to-blue-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400' },
  challenge: { bg: 'from-orange-500/20 to-red-500/10', border: 'border-orange-500/30', text: 'text-orange-400' },
  weekly: { bg: 'from-purple-500/20 to-pink-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
};

export function DailyChallenges() {
  return (
    <div className="mt-6 space-y-2">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <h3 className="text-white/60 text-xs uppercase tracking-wide font-semibold">Active Challenges</h3>
          <div className="inline-flex items-center space-x-1 bg-purple-500/15 border border-purple-500/30 rounded-full px-2 py-0.5">
            <Zap className="w-2.5 h-2.5 text-purple-400" />
            <span className="text-purple-300 text-[10px] font-semibold">{challenges.length}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {challenges.map((challenge, index) => {
          const colors = typeColors[challenge.type as keyof typeof typeColors];
          const progressPercent = (challenge.progress / challenge.total) * 100;

          return (
            <motion.div
              key={challenge.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} rounded-2xl overflow-hidden shadow-lg`}
            >
              <div className="flex items-start space-x-3 p-3">
                {/* Challenge artwork thumbnail */}
                <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-white/10 flex-shrink-0">
                  <ImageWithFallback
                    src={challenge.img}
                    alt={challenge.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Challenge info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex-1 min-w-0 pr-2">
                      <div className="text-white font-semibold text-sm mb-0.5">{challenge.title}</div>
                      <div className="text-blue-300/60 text-xs">{challenge.description}</div>
                    </div>
                    <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-2 py-0.5 flex-shrink-0">
                      <Calendar className="w-2.5 h-2.5 text-white/60" />
                      <span className="text-white/80 text-[10px] font-medium">{challenge.timeLeft}</span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-white/70 text-xs">{challenge.progress}/{challenge.total} completed</div>
                      <div className="flex items-center space-x-1">
                        <Target className={`w-3 h-3 ${colors.text}`} />
                        <span className={`${colors.text} text-xs font-bold`}>+{challenge.reward}</span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercent}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                        className={`h-full bg-gradient-to-r ${colors.text.replace('text-', 'from-')} to-white/80 rounded-full`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
