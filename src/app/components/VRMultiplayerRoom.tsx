import { motion } from 'motion/react';
import { Users, Trophy, Clock, Wifi } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Player {
  id: number;
  name: string;
  avatar: string | null;
  found: number;
  position: { x: number; y: number };
  isYou?: boolean;
}

const players: Player[] = [
  { id: 1, name: 'Maya R.', avatar: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200', found: 9, position: { x: 70, y: 25 } },
  { id: 2, name: 'Liam T.', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200', found: 8, position: { x: 45, y: 65 } },
  { id: 3, name: 'You', avatar: null, found: 7, position: { x: 30, y: 40 }, isYou: true },
  { id: 4, name: 'Sofia K.', avatar: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200', found: 6, position: { x: 60, y: 55 } },
  { id: 5, name: 'Noah P.', avatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200', found: 5, position: { x: 20, y: 70 } },
  { id: 6, name: 'Emma W.', avatar: 'https://images.unsplash.com/photo-1600603406200-5b2a104684ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200', found: 4, position: { x: 80, y: 50 } },
  { id: 7, name: 'Aiden C.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200', found: 4, position: { x: 55, y: 30 } },
  { id: 8, name: 'Olivia M.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200', found: 3, position: { x: 35, y: 15 } },
];

export function VRMultiplayerRoom() {
  return (
    <div className="flex-1 overflow-y-auto px-5 py-6 pb-24 bg-gradient-to-b from-[#050a14] to-[#0f1828]">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Room MB-2481</h1>
            <p className="text-blue-200/60 text-sm">The Met • European Paintings</p>
          </div>
          <div className="flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm px-3 py-2 rounded-xl border border-green-500/30">
            <Wifi className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm font-medium">8 Online</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-3 shadow-lg shadow-blue-500/5">
            <Users className="w-4 h-4 text-blue-400 mb-1" />
            <div className="text-white font-semibold">8</div>
            <div className="text-blue-200/50 text-xs">Online</div>
          </div>
          <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-3 shadow-lg shadow-blue-500/5">
            <Trophy className="w-4 h-4 text-yellow-400 mb-1" />
            <div className="text-white font-semibold">3rd</div>
            <div className="text-blue-200/50 text-xs">Your Rank</div>
          </div>
          <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-3 shadow-lg shadow-blue-500/5">
            <Clock className="w-4 h-4 text-cyan-400 mb-1" />
            <div className="text-white font-semibold">12:18</div>
            <div className="text-blue-200/50 text-xs">Remaining</div>
          </div>
        </div>
      </motion.div>

      {/* Spatial Map */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide opacity-60">
          Live Positions
        </h2>
        <div className="relative h-64 bg-blue-950/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden shadow-xl shadow-blue-500/10">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(59,130,246,0.1)_32px),repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(59,130,246,0.1)_32px)]" />

          {/* Player Markers */}
          {players.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
              className="absolute"
              style={{
                left: `${player.position.x}%`,
                top: `${player.position.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Pulse Ring */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`absolute inset-0 w-12 h-12 rounded-full ${
                  player.isYou ? 'bg-cyan-400/30' : 'bg-blue-400/20'
                }`}
              />

              {/* Avatar */}
              <div
                className={`relative w-12 h-12 rounded-full overflow-hidden border-2 shadow-lg ${
                  player.isYou
                    ? 'bg-cyan-500/30 border-cyan-400 shadow-cyan-500/30'
                    : 'bg-blue-500/20 border-blue-400/40 shadow-blue-500/20'
                }`}
              >
                {player.isYou ? (
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-xl">
                    🎨
                  </div>
                ) : player.avatar ? (
                  <ImageWithFallback
                    src={player.avatar}
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                ) : null}
              </div>

              {/* Name Tag */}
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full border border-blue-400/30">
                <span className="text-white text-xs font-medium">{player.name}</span>
              </div>

              {/* Progress Badge */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center border-2 border-[#050a14] shadow-lg">
                <span className="text-white text-[10px] font-bold">{player.found}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Player List */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide opacity-60">
          Rankings
        </h2>
        <div className="space-y-2">
          {players
            .sort((a, b) => b.found - a.found)
            .map((player, index) => (
              <motion.div
                key={player.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
                className={`
                  rounded-2xl p-4 flex items-center space-x-4
                  ${player.isYou
                    ? 'bg-cyan-500/20 backdrop-blur-sm border-2 border-cyan-400/60 shadow-xl shadow-cyan-500/20'
                    : 'bg-blue-950/30 backdrop-blur-sm border border-blue-500/10 shadow-lg shadow-blue-500/5'
                  }
                `}
              >
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 flex-shrink-0">
                  {player.isYou ? (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-xl">
                      🎨
                    </div>
                  ) : player.avatar ? (
                    <ImageWithFallback
                      src={player.avatar}
                      alt={player.name}
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-0.5">
                    <span className={`font-semibold ${player.isYou ? 'text-cyan-300' : 'text-white'}`}>
                      {player.name}
                    </span>
                    {player.isYou && (
                      <span className="text-xs bg-cyan-500/30 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-400/30">
                        You
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 h-1.5 bg-blue-950/60 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                        style={{ width: `${(player.found / 16) * 100}%` }}
                      />
                    </div>
                    <span className="text-blue-200/50 text-xs font-mono">{player.found}/16</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-xl font-bold ${index === 0 ? 'text-yellow-400' : 'text-white'}`}>
                    #{index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  );
}
