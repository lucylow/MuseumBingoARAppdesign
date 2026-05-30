import { motion } from 'motion/react';
import { Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const nearbyPlayers = [
  {
    id: 1,
    name: 'Maya R.',
    avatar: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
    status: 'scanning',
    distance: '15 ft',
  },
  {
    id: 2,
    name: 'Liam T.',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
    status: 'active',
    distance: '28 ft',
  },
  {
    id: 3,
    name: 'Sofia K.',
    avatar: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
    status: 'active',
    distance: '42 ft',
  },
  {
    id: 4,
    name: 'Noah P.',
    avatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
    status: 'idle',
    distance: '58 ft',
  },
  {
    id: 5,
    name: 'Emma W.',
    avatar: 'https://images.unsplash.com/photo-1600603406200-5b2a104684ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
    status: 'active',
    distance: '64 ft',
  },
];

const statusColors = {
  scanning: 'bg-emerald-400',
  active: 'bg-blue-400',
  idle: 'bg-slate-400',
};

export function PlayersNearby() {
  return (
    <div className="mt-6 space-y-2">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <h3 className="text-white/60 text-xs uppercase tracking-wide font-semibold">Players Nearby</h3>
          <div className="inline-flex items-center space-x-1 bg-blue-500/15 border border-blue-500/30 rounded-full px-2 py-0.5">
            <Users className="w-2.5 h-2.5 text-blue-400" />
            <span className="text-blue-300 text-[10px] font-semibold">{nearbyPlayers.length}</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-3 space-y-2">
        {nearbyPlayers.map((player, index) => (
          <motion.div
            key={player.id}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="flex items-center space-x-3 p-2 rounded-xl hover:bg-blue-500/5 transition-colors"
          >
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500/30">
                <ImageWithFallback
                  src={player.avatar}
                  alt={player.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 ${statusColors[player.status as keyof typeof statusColors]} rounded-full border-2 border-[#0a1628]`} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-white text-sm font-medium">{player.name}</div>
              <div className="text-blue-300/50 text-xs capitalize">{player.status}</div>
            </div>

            <div className="text-blue-400/60 text-xs flex-shrink-0">{player.distance}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
