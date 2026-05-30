import { motion } from 'motion/react';
import { Eye, Heart, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const popularArtworks = [
  {
    id: 1,
    title: 'The Starry Night',
    artist: 'Vincent van Gogh',
    views: 1247,
    scans: 89,
    img: 'https://images.unsplash.com/photo-1699391202798-bec3f1c894bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    id: 2,
    title: 'Girl with a Pearl Earring',
    artist: 'Johannes Vermeer',
    views: 982,
    scans: 67,
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    id: 3,
    title: 'The Kiss',
    artist: 'Gustav Klimt',
    views: 856,
    scans: 54,
    img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    id: 4,
    title: 'Waterlilies',
    artist: 'Claude Monet',
    views: 743,
    scans: 48,
    img: 'https://images.unsplash.com/photo-1700405084495-464922ad8b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    id: 5,
    title: 'The Thinker',
    artist: 'Auguste Rodin',
    views: 689,
    scans: 41,
    img: 'https://images.unsplash.com/photo-1619878627081-85dd33d8667e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    id: 6,
    title: 'The Great Wave',
    artist: 'Katsushika Hokusai',
    views: 612,
    scans: 39,
    img: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
];

export function PopularArtworksGallery() {
  return (
    <div className="mt-6 space-y-2">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white/60 text-xs uppercase tracking-wide font-semibold">Popular This Week</h3>
        <button className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors">View All</button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {popularArtworks.map((artwork, index) => (
          <motion.div
            key={artwork.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden shadow-lg shadow-blue-500/5 hover:border-blue-400/40 hover:shadow-blue-500/20 transition-all"
          >
            <div className="relative h-32 overflow-hidden">
              <ImageWithFallback
                src={artwork.img}
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />

              {/* Ranking badge */}
              {index < 3 && (
                <div className="absolute top-2 left-2 w-6 h-6 bg-yellow-500/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white fill-white" />
                </div>
              )}

              {/* Stats overlay */}
              <div className="absolute bottom-2 left-2 right-2">
                <div className="text-white font-semibold text-xs mb-0.5 line-clamp-1">{artwork.title}</div>
                <div className="text-blue-300/60 text-[10px] mb-1 line-clamp-1">{artwork.artist}</div>
                <div className="flex items-center space-x-2 text-[10px]">
                  <div className="flex items-center space-x-1 text-blue-300/70">
                    <Eye className="w-3 h-3" />
                    <span>{artwork.views}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-emerald-300/70">
                    <Heart className="w-3 h-3" />
                    <span>{artwork.scans}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
