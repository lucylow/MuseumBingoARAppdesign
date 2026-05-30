import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Zap, X, Lightbulb, FlashlightOff, Flashlight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

type CameraState = 'idle' | 'focusing' | 'scanning' | 'matched' | 'low-confidence' | 'error';

export function EnhancedCameraScreen() {
  const navigate = useNavigate();
  const [cameraState, setCameraState] = useState<CameraState>('idle');
  const [confidence, setConfidence] = useState(0);
  const [flashEnabled, setFlashEnabled] = useState(false);
  const [detectedArtwork] = useState('The Starry Night');
  const [detectedArtist] = useState('Vincent van Gogh');

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setCameraState('focusing');
    }, 1000);

    const timeout2 = setTimeout(() => {
      setCameraState('scanning');
      setConfidence(0);

      const interval = setInterval(() => {
        setConfidence((prev) => {
          if (prev >= 96) {
            clearInterval(interval);
            setCameraState('matched');
            return 96;
          }
          return prev + 8;
        });
      }, 100);
    }, 2500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  const handleConfirm = () => navigate('/reward');
  const handleRetry = () => {
    setCameraState('idle');
    setConfidence(0);
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col">
      {/* Camera Viewport */}
      <div className="flex-1 relative overflow-hidden">
        {/* Mock Camera Feed — real painting photo */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1619878627081-85dd33d8667e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbXByZXNzaW9uaXN0JTIwb2lsJTIwcGFpbnRpbmclMjBsYW5kc2NhcGUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3ODAwNzU0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Artwork being scanned"
            className="w-full h-full object-cover"
          />
          {/* Darkening overlay so UI stays readable */}
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* Scan line effect over entire viewport when scanning */}
        {cameraState === 'scanning' && (
          <motion.div
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent blur-sm pointer-events-none z-20"
            initial={{ top: '10%' }}
            animate={{ top: '90%' }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
          />
        )}

        {/* AR grid overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Top Controls */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
          <button
            onClick={() => navigate('/home')}
            className="w-11 h-11 bg-black/60 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 active:scale-95 transition-transform"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="bg-black/50 backdrop-blur-xl border border-white/15 rounded-full px-4 py-2">
            <span className="text-white/70 text-xs font-medium">AR Scanner v2.1</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setFlashEnabled(!flashEnabled)}
              className={`w-11 h-11 rounded-full flex items-center justify-center border active:scale-95 transition-all ${
                flashEnabled
                  ? 'bg-yellow-500/30 backdrop-blur-xl border-yellow-400/60'
                  : 'bg-black/60 backdrop-blur-xl border-white/20'
              }`}
            >
              {flashEnabled ? (
                <Flashlight className="w-5 h-5 text-yellow-300" />
              ) : (
                <FlashlightOff className="w-5 h-5 text-white" />
              )}
            </button>

            <button className="w-11 h-11 bg-black/60 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 active:scale-95 transition-transform">
              <Lightbulb className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Camera Frame Guide */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative w-80 h-[380px]"
            animate={{
              scale: cameraState === 'focusing' ? [1, 1.02, 1] : 1,
            }}
            transition={{ duration: 1.5, repeat: cameraState === 'focusing' ? Infinity : 0 }}
          >
            {/* Frame Corners */}
            {(['tl', 'tr', 'bl', 'br'] as const).map((corner) => (
              <motion.div
                key={corner}
                className={`absolute w-16 h-16 ${
                  corner === 'tl' ? '-top-1 -left-1 border-t-4 border-l-4 rounded-tl-2xl' :
                  corner === 'tr' ? '-top-1 -right-1 border-t-4 border-r-4 rounded-tr-2xl' :
                  corner === 'bl' ? '-bottom-1 -left-1 border-b-4 border-l-4 rounded-bl-2xl' :
                  '-bottom-1 -right-1 border-b-4 border-r-4 rounded-br-2xl'
                }`}
                animate={{
                  borderColor:
                    cameraState === 'matched' ? '#10b981' :
                    cameraState === 'scanning' ? '#06b6d4' :
                    cameraState === 'error' || cameraState === 'low-confidence' ? '#f59e0b' :
                    '#3b82f6',
                }}
              />
            ))}

            {/* Focus Ring */}
            {cameraState === 'focusing' && (
              <motion.div
                className="absolute inset-0 border-2 border-cyan-400 rounded-2xl"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}

            {/* Success Glow */}
            {cameraState === 'matched' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                className="absolute inset-0 bg-emerald-400/20 rounded-2xl blur-xl"
              />
            )}

            {/* Crosshair center dot */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="w-4 h-4 border-2 border-white/40 rounded-full"
                animate={{ scale: cameraState === 'scanning' ? [1, 1.3, 1] : 1 }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>

        {/* Center Status Messages */}
        <AnimatePresence mode="wait">
          {cameraState === 'idle' && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            >
              <div className="bg-black/60 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20">
                <span className="text-white/70 text-sm">Point camera at artwork</span>
              </div>
            </motion.div>
          )}

          {cameraState === 'focusing' && (
            <motion.div
              key="focusing"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="bg-cyan-500/20 backdrop-blur-xl px-6 py-3 rounded-2xl border border-cyan-400/40">
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full"
                  />
                  <span className="text-cyan-100 font-medium">Focusing...</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Status Card */}
        <AnimatePresence>
          {(cameraState === 'scanning' || cameraState === 'matched') && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="absolute bottom-32 left-6 right-6"
            >
              <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Artwork thumbnail strip */}
                {cameraState === 'matched' && (
                  <div className="relative h-24 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1619878627081-85dd33d8667e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                      alt="The Starry Night"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900" />
                    <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between">
                      <span className="text-emerald-300 text-xs font-semibold">Match confirmed</span>
                      <div className="flex items-center space-x-1 bg-emerald-500/30 rounded-full px-2 py-0.5">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                        <span className="text-emerald-300 text-[10px]">96% confidence</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-5">
                  <div className="flex items-center space-x-3 mb-3">
                    {cameraState === 'matched' ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <Zap className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <div className={`font-semibold ${cameraState === 'matched' ? 'text-emerald-300' : 'text-cyan-200'}`}>
                        {cameraState === 'matched' ? 'Artwork Recognized!' : 'Analyzing artwork...'}
                      </div>
                      <div className="text-white/70 text-sm">
                        {detectedArtwork}
                        {cameraState === 'matched' && <span className="text-white/50"> • {detectedArtist}</span>}
                      </div>
                    </div>
                  </div>

                  {/* Confidence Bar */}
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 h-3 bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          cameraState === 'matched'
                            ? 'bg-gradient-to-r from-emerald-400 to-green-500'
                            : 'bg-gradient-to-r from-cyan-400 to-blue-500'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${confidence}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <span className="text-white font-mono text-sm font-semibold min-w-[3ch]">
                      {confidence}%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {cameraState === 'low-confidence' && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="absolute bottom-32 left-6 right-6"
            >
              <div className="bg-gradient-to-br from-amber-900/95 to-orange-900/95 backdrop-blur-2xl rounded-3xl p-5 border border-amber-400/30 shadow-2xl">
                <div className="flex items-center space-x-3 mb-3">
                  <AlertCircle className="w-6 h-6 text-amber-400 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-amber-200 font-semibold">Try moving closer</div>
                    <div className="text-amber-100/70 text-sm">Low lighting detected</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-amber-100/60 text-xs">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  <span>Tap flash icon to enable light</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Action Area */}
      <div className="bg-gradient-to-t from-black via-black/95 to-black/80 pt-6 pb-8 px-6">
        <AnimatePresence mode="wait">
          {cameraState === 'matched' ? (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-3"
            >
              <button
                onClick={handleRetry}
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white font-semibold py-4 rounded-2xl active:scale-98 transition-all"
              >
                Retake
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white font-semibold py-4 rounded-2xl shadow-xl shadow-emerald-500/30 active:scale-98 transition-all"
              >
                Confirm Match
              </button>
            </motion.div>
          ) : (
            <motion.button
              key="scan"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              disabled={cameraState === 'scanning' || cameraState === 'focusing'}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-cyan-600 disabled:to-blue-600 disabled:opacity-50 text-white font-semibold py-5 rounded-2xl flex items-center justify-center space-x-2 shadow-2xl shadow-cyan-500/40 active:scale-98 transition-all"
            >
              <Camera className="w-6 h-6" />
              <span>{cameraState === 'scanning' || cameraState === 'focusing' ? 'Scanning...' : 'Tap to Scan'}</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
