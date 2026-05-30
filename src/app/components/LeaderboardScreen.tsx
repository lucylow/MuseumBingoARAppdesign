import { motion } from 'motion/react';
import { Trophy, Medal, TrendingUp, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const leaderboard = [
  {
    rank: 1, name: 'Maya R.', score: 420, found: 9, time: '15:20',
    avatar: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  },
  {
    rank: 2, name: 'Liam T.', score: 380, found: 8, time: '16:45',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  },
  {
    rank: 3, name: 'You', score: 350, found: 7, time: '18:42',
    avatar: null, isYou: true,
  },
  {
    rank: 4, name: 'Sofia K.', score: 300, found: 6, time: '17:30',
    avatar: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  },
  {
    rank: 5, name: 'Noah P.', score: 250, found: 5, time: '19:10',
    avatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  },
  {
    rank: 6, name: 'Emma W.', score: 200, found: 4, time: '20:05',
    avatar: 'https://images.unsplash.com/photo-1600603406200-5b2a104684ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  },
  {
    rank: 7, name: 'Aiden C.', score: 180, found: 4, time: '21:15',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  },
  {
    rank: 8, name: 'Olivia M.', score: 160, found: 3, time: '19:50',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  },
  {
    rank: 9, name: 'Ethan B.', score: 140, found: 3, time: '22:30',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  },
  {
    rank: 10, name: 'Ava L.', score: 120, found: 2, time: '18:05',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  },
  {
    rank: 11, name: 'Lucas G.', score: 100, found: 2, time: '23:10',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  },
  {
    rank: 12, name: 'Mia H.', score: 80, found: 1, time: '17:45',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  },
];

const medalColors: Record<number, string> = { 1: 'bg-yellow-500', 2: 'bg-slate-400', 3: 'bg-orange-600' };
const medalEmojis: Record<number, string> = { 1: '🥇', 2: '🥈', 3: '🥉' };

export function LeaderboardScreen() {
  return (
    <div className="flex-1 overflow-y-auto px-5 py-6 pb-28 bg-gradient-to-b from-[#0a1628] via-[#0f1e35] to-[#050a14]">
      {/* Header with gallery backdrop */}
      <div className="relative rounded-3xl overflow-hidden mb-6 shadow-2xl">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
            alt="Museum gallery"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/70 via-[#0a1628]/90 to-[#0a1628]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_0%,#0a1628_100%)]" />
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="relative pt-6 pb-8 px-2"
        >
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Leaderboard</h1>
          <p className="text-cyan-200/70 font-medium">Room MB-2481 • The Met Challenge</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <motion.div
          initial={{ y: 30, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
          className="bg-gradient-to-br from-blue-500/25 to-blue-600/15 backdrop-blur-xl border-2 border-blue-400/40 rounded-2xl p-4 shadow-xl shadow-blue-500/20"
        >
          <Users className="w-6 h-6 text-blue-300 mb-2" />
          <div className="text-white text-2xl font-bold mb-0.5">12</div>
          <div className="text-blue-200/70 text-xs uppercase tracking-wide font-semibold">Players</div>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          className="bg-gradient-to-br from-yellow-500/25 to-amber-600/15 backdrop-blur-xl border-2 border-yellow-400/40 rounded-2xl p-4 shadow-xl shadow-yellow-500/20"
        >
          <Trophy className="w-6 h-6 text-yellow-300 mb-2" />
          <div className="text-white text-2xl font-bold mb-0.5">3rd</div>
          <div className="text-yellow-200/70 text-xs uppercase tracking-wide font-semibold">Your Rank</div>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          className="bg-gradient-to-br from-emerald-500/25 to-green-600/15 backdrop-blur-xl border-2 border-emerald-400/40 rounded-2xl p-4 shadow-xl shadow-emerald-500/20"
        >
          <TrendingUp className="w-6 h-6 text-emerald-300 mb-2" />
          <div className="text-white text-2xl font-bold mb-0.5">+1</div>
          <div className="text-emerald-200/70 text-xs uppercase tracking-wide font-semibold">Since last</div>
        </motion.div>
      </div>

      <div className="space-y-3">
        {leaderboard.map((player, index) => (
          <motion.div
            key={player.rank}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.04, duration: 0.5, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.02, x: 4 }}
            className={`
              rounded-3xl p-5 flex items-center space-x-4 transition-all
              ${player.isYou
                ? 'bg-gradient-to-r from-cyan-500/25 to-blue-600/20 backdrop-blur-xl border-2 border-cyan-400/60 shadow-2xl shadow-cyan-500/30'
                : 'bg-gradient-to-r from-blue-950/40 to-blue-900/20 backdrop-blur-xl border-2 border-blue-500/20 hover:border-blue-400/40 shadow-xl'
              }
            `}
          >
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
                {player.isYou ? (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                ) : (
                  <ImageWithFallback
                    src={player.avatar!}
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              {player.rank <= 3 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.04, type: "spring", bounce: 0.5 }}
                  className={`absolute -top-1 -right-1 w-6 h-6 ${medalColors[player.rank]} rounded-full flex items-center justify-center text-xs shadow-lg`}
                >
                  {medalEmojis[player.rank]}
                </motion.div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <span className={`font-bold text-lg ${player.isYou ? 'text-cyan-200' : 'text-white'}`}>
                  {player.name}
                </span>
                {player.isYou && (
                  <span className="text-xs bg-cyan-400/30 text-cyan-200 px-2.5 py-0.5 rounded-full border border-cyan-400/40 font-bold">You</span>
                )}
              </div>
              <div className="flex items-center space-x-3 mb-1">
                <span className="text-blue-200/60 text-sm font-medium">{player.found}/16 found</span>
                <span className="text-blue-300/40">•</span>
                <span className="text-blue-200/60 text-sm font-medium">{player.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex-1 h-2 bg-blue-950/60 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(player.found / 16) * 100}%` }}
                    transition={{ delay: 0.5 + index * 0.04, duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  />
                </div>
              </div>
            </div>

            <div className="text-right flex flex-col items-end space-y-1">
              <div className={`text-3xl font-bold ${player.rank <= 3 ? 'bg-gradient-to-br from-yellow-300 to-amber-400 bg-clip-text text-transparent' : 'text-white'}`}>
                {player.score}
              </div>
              <div className="text-blue-300/60 text-xs uppercase tracking-wide font-semibold">pts</div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6, type: "spring" }}
        className="mt-8 p-6 bg-gradient-to-br from-purple-500/25 to-pink-600/15 backdrop-blur-xl border-2 border-purple-400/40 rounded-3xl shadow-2xl shadow-purple-500/20"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-purple-400/30 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
            <Medal className="w-6 h-6 text-purple-200" />
          </div>
          <div className="flex-1 text-purple-100 font-medium">
            Find 2 more artworks to pass Liam T. and reach 2nd place!
          </div>
        </div>
      </motion.div>
    </div>
  );
}
