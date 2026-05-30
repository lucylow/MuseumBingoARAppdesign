import { Radio, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MuseumSelectionProps {
  onSelect: (museum: string) => void;
}

const museums = [
  {
    id: 'met',
    name: 'The Metropolitan Museum of Art',
    shortName: 'The Met',
    distance: '0.1 mi',
    live: true,
    players: 24,
    img: 'https://images.unsplash.com/photo-1764473814276-6032e9070f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtZXRyb3BvbGl0YW4lMjBtdXNldW0lMjBvZiUyMGFydCUyMG5ldyUyMHlvcmslMjBleHRlcmlvcnxlbnwxfHx8fDE3ODAwNzU0MDN8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 'moma',
    name: 'Museum of Modern Art',
    shortName: 'MoMA',
    distance: '0.8 mi',
    live: true,
    players: 18,
    img: 'https://images.unsplash.com/photo-1549791084-5f78368b208b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcnQlMjBtdXNldW0lMjBidWlsZGluZyUyMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzgwMDc1NDA4fDA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 'natural',
    name: 'American Museum of Natural History',
    shortName: 'AMNH',
    distance: '2.3 mi',
    live: true,
    players: 31,
    img: 'https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmYW1vdXMlMjBwYWludGluZ3MlMjBtdXNldW0lMjBhcnR3b3JrJTIwZ2FsbGVyeXxlbnwxfHx8fDE3ODAwNzUzOTd8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 'whitney',
    name: 'Whitney Museum of American Art',
    shortName: 'Whitney',
    distance: '1.4 mi',
    live: true,
    players: 12,
    img: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    id: 'frick',
    name: 'The Frick Collection',
    shortName: 'Frick',
    distance: '1.9 mi',
    live: true,
    players: 7,
    img: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    id: 'brooklyn',
    name: 'Brooklyn Museum',
    shortName: 'Brooklyn',
    distance: '4.7 mi',
    live: true,
    players: 22,
    img: 'https://images.unsplash.com/photo-1566127992631-137a642a90f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    id: 'guggenheim',
    name: 'Solomon R. Guggenheim Museum',
    shortName: 'Guggenheim',
    distance: '3.1 mi',
    live: false,
    players: 0,
    img: 'https://images.unsplash.com/photo-1575661660572-f4a954f6c66c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBhcnQlMjBtdXNldW0lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3ODAwNzU0MDh8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 'morgan',
    name: 'The Morgan Library & Museum',
    shortName: 'Morgan',
    distance: '2.8 mi',
    live: false,
    players: 0,
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
];

export function MuseumSelection({ onSelect }: MuseumSelectionProps) {
  return (
    <div className="h-screen w-full max-w-md mx-auto bg-gradient-to-b from-[#0a1628] via-[#0f1e35] to-[#050a14] flex flex-col px-5 py-8">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="mb-8"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/15 border border-green-400/40 rounded-full px-4 py-2 mb-4 shadow-lg shadow-green-500/20"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-green-400 rounded-full"
          />
          <span className="text-green-300 text-xs font-bold uppercase tracking-wider">8 museums nearby</span>
        </motion.div>
        <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Choose Museum</h1>
        <p className="text-blue-200/70">Select a venue to start your bingo challenge</p>
      </motion.div>

      <div className="flex-1 space-y-4 overflow-y-auto pb-4">
        {museums.map((museum, index) => (
          <motion.button
            key={museum.id}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.08, duration: 0.5, type: "spring", stiffness: 120 }}
            onClick={() => onSelect(museum.id)}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full bg-gradient-to-br from-blue-950/40 to-blue-900/20 backdrop-blur-xl border-2 border-blue-500/30 hover:border-cyan-400/60 rounded-3xl overflow-hidden transition-all shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-cyan-500/30 flex items-stretch"
          >
            {/* Museum thumbnail with overlay */}
            <div className="w-24 h-24 flex-shrink-0 relative overflow-hidden">
              <ImageWithFallback
                src={museum.img}
                alt={museum.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-950/30 to-blue-950/80" />
              {museum.live && (
                <div className="absolute top-2 left-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-lg shadow-green-500/50"
                  />
                </div>
              )}
            </div>

            <div className="flex-1 px-4 py-4 text-left flex flex-col justify-center">
              <h3 className="text-white font-bold text-base mb-1.5 leading-tight group-hover:text-cyan-300 transition-colors">{museum.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                {museum.live ? (
                  <div className="flex items-center space-x-1.5 bg-gradient-to-r from-green-500/25 to-emerald-500/20 text-green-300 text-[10px] px-2.5 py-1 rounded-full border border-green-400/40 shadow-sm">
                    <motion.div
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-1.5 h-1.5 bg-green-400 rounded-full"
                    />
                    <span className="font-bold uppercase tracking-wide">LIVE</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-1 bg-slate-500/20 text-slate-400 text-[10px] px-2.5 py-1 rounded-full border border-slate-500/30">
                    <span className="font-medium uppercase tracking-wide">OFFLINE</span>
                  </div>
                )}
              </div>
              <p className="text-blue-200/60 text-xs font-medium">
                📍 {museum.distance}
                {museum.live && (
                  <span className="ml-2 text-cyan-300/70">• {museum.players} playing</span>
                )}
              </p>
            </div>

            <div className="flex items-center pr-5">
              <ChevronRight className="w-6 h-6 text-cyan-400/50 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
            </div>
          </motion.button>
        ))}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-5 p-5 bg-gradient-to-r from-blue-500/15 to-cyan-500/10 backdrop-blur-xl border-2 border-blue-400/30 rounded-3xl shadow-xl"
      >
        <div className="flex items-center justify-center space-x-3">
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xl"
          >
            📍
          </motion.span>
          <p className="text-blue-100/80 text-sm font-medium text-center">
            Auto-detect enabled — we'll notify when you arrive
          </p>
        </div>
      </motion.div>
    </div>
  );
}
