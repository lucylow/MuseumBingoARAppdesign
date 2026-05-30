import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Eye, Target, Navigation } from 'lucide-react';
import { SpatialHintArrow } from './SpatialHintArrow';

interface VRGalleryViewProps {
  onArtworkFound: (id: number) => void;
}

const artworkMarkers = [
  { id: 0, name: 'Abstract Art', x: -30, y: 10 },
  { id: 1, name: 'Portrait', x: 20, y: 5 },
  { id: 2, name: 'Van Gogh', x: -10, y: -15 },
  { id: 3, name: 'Landscape', x: 45, y: 0 },
  { id: 4, name: 'Monet', x: -50, y: 20 },
];

export function VRGalleryView({ onArtworkFound }: VRGalleryViewProps) {
  const [gyroX, setGyroX] = useState(0);
  const [gyroY, setGyroY] = useState(0);
  const [focusedArtwork, setFocusedArtwork] = useState<number | null>(null);
  const [gazeDuration, setGazeDuration] = useState(0);
  const [showHintArrow, setShowHintArrow] = useState(true);

  // Track distances for all markers
  const markerDistances = artworkMarkers.map((marker) => {
    const offsetX = marker.x + gyroX * 40;
    const offsetY = marker.y + gyroY * 20;
    return { id: marker.id, distance: Math.sqrt(offsetX ** 2 + offsetY ** 2) };
  });

  // Update focused artwork based on closest marker
  useEffect(() => {
    const closestMarker = markerDistances.find((m) => m.distance < 15);
    if (closestMarker && focusedArtwork !== closestMarker.id) {
      setFocusedArtwork(closestMarker.id);
    } else if (!closestMarker && focusedArtwork !== null) {
      setFocusedArtwork(null);
    }
  }, [gyroX, gyroY]);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.beta !== null && event.gamma !== null) {
        setGyroX(event.gamma / 90);
        setGyroY((event.beta - 90) / 90);
      }
    };

    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, []);

  useEffect(() => {
    if (focusedArtwork !== null) {
      const timer = setInterval(() => {
        setGazeDuration((prev) => {
          if (prev >= 100) {
            onArtworkFound(focusedArtwork);
            return 0;
          }
          return prev + 5;
        });
      }, 50);
      return () => clearInterval(timer);
    } else {
      setGazeDuration(0);
    }
  }, [focusedArtwork, onArtworkFound]);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#050a14] via-[#0a1220] to-[#0f1828] overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
          transform: `translate(${gyroX * -20}px, ${gyroY * -20}px)`,
        }}
      />

      {/* Gallery Floor Grid */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/2 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 0%, rgba(59, 130, 246, 0.2) 100%)',
          transform: `perspective(800px) rotateX(60deg) translateY(${gyroY * 30}px)`,
        }}
      >
        <div className="w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_49px,rgba(59,130,246,0.3)_50px),repeating-linear-gradient(90deg,transparent,transparent_49px,rgba(59,130,246,0.3)_50px)]" />
      </motion.div>

      {/* Floating Artwork Markers */}
      {artworkMarkers.map((marker) => {
        const offsetX = marker.x + gyroX * 40;
        const offsetY = marker.y + gyroY * 20;
        const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);
        const isFocused = focusedArtwork === marker.id;

        return (
          <motion.div
            key={marker.id}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${offsetX}vw), calc(-50% + ${offsetY}vh))`,
            }}
          >
            <motion.div
              animate={{
                scale: isFocused ? 1.2 : 1,
                opacity: isFocused ? 1 : 0.7,
              }}
              className="relative"
            >
              {/* Glow Effect */}
              {isFocused && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.5, opacity: 0.3 }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                  className="absolute inset-0 bg-cyan-400 rounded-full blur-xl"
                />
              )}

              {/* Frame */}
              <div className="relative w-32 h-32 bg-gradient-to-br from-slate-700/40 to-slate-800/40 backdrop-blur-sm border-2 border-cyan-400/40 rounded-lg shadow-2xl shadow-cyan-500/20">
                <div className="absolute inset-2 border border-cyan-500/20 rounded" />

                {/* Target Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Target className={`w-12 h-12 ${isFocused ? 'text-cyan-300' : 'text-cyan-500/50'}`} />
                </div>

                {/* Label */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan-500/30">
                  <span className="text-cyan-100 text-sm font-medium">{marker.name}</span>
                </div>

                {/* Gaze Progress Ring */}
                {isFocused && (
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="62"
                      stroke="rgba(6, 182, 212, 0.3)"
                      strokeWidth="3"
                      fill="none"
                    />
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="62"
                      stroke="url(#gazeGradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 62}`}
                      strokeDashoffset={`${2 * Math.PI * 62 * (1 - gazeDuration / 100)}`}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gazeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Crosshair Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="relative w-8 h-8">
          <div className="absolute top-0 left-1/2 w-0.5 h-2 bg-white/50 -translate-x-1/2" />
          <div className="absolute bottom-0 left-1/2 w-0.5 h-2 bg-white/50 -translate-x-1/2" />
          <div className="absolute left-0 top-1/2 w-2 h-0.5 bg-white/50 -translate-y-1/2" />
          <div className="absolute right-0 top-1/2 w-2 h-0.5 bg-white/50 -translate-y-1/2" />
          <div className="absolute inset-0 border border-white/30 rounded-full" />
        </div>
      </div>

      {/* VR HUD - Top */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
        <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/10">
          <Eye className="w-4 h-4 text-cyan-400" />
          <span className="text-white text-sm font-medium">VR Mode</span>
        </div>
        <div className="bg-black/40 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/10">
          <span className="text-cyan-300 text-sm font-mono">4/16</span>
        </div>
      </div>

      {/* VR HUD - Bottom Hint */}
      {focusedArtwork !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-xl px-6 py-3 rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
        >
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="rgba(6, 182, 212, 0.3)"
                  strokeWidth="3"
                  fill="none"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="#10b981"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 20}`}
                  strokeDashoffset={`${2 * Math.PI * 20 * (1 - gazeDuration / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-white font-medium">Keep looking to scan...</span>
          </div>
        </motion.div>
      )}

      {/* Compass Indicator */}
      <div className="absolute bottom-24 right-6 w-20 h-20 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xl rounded-full border border-white/10" />
          <motion.div
            className="absolute inset-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Navigation className="w-full h-full text-cyan-400/50" />
          </motion.div>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 text-white text-xs font-mono">N</div>
        </div>
      </div>

      {/* Spatial Hint Arrow */}
      {showHintArrow && !focusedArtwork && (
        <SpatialHintArrow
          direction="right"
          distance={35}
          targetName="Van Gogh - Starry Night"
        />
      )}
    </div>
  );
}
