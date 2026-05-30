import { motion } from 'motion/react';
import { Gauge, Vibrate, Eye, Volume2, Moon } from 'lucide-react';
import { useState } from 'react';

export function VRComfortSettings() {
  const [motionIntensity, setMotionIntensity] = useState(75);
  const [haptics, setHaptics] = useState(true);
  const [eyeStrain, setEyeStrain] = useState(false);
  const [soundEffects, setSoundEffects] = useState(true);
  const [nightMode, setNightMode] = useState(true);

  return (
    <div className="flex-1 overflow-y-auto px-5 py-6 pb-24 bg-gradient-to-b from-[#050a14] to-[#0f1828]">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-1">VR Comfort</h1>
        <p className="text-blue-200/60 text-sm">Optimize for your viewing experience</p>
      </motion.div>

      <div className="space-y-6">
        {/* Motion Intensity */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h2 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide opacity-60">
            Motion Settings
          </h2>
          <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-5 shadow-xl shadow-blue-500/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Gauge className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Motion Intensity</span>
              </div>
              <span className="text-cyan-400 font-mono text-sm">{motionIntensity}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={motionIntensity}
              onChange={(e) => setMotionIntensity(Number(e.target.value))}
              className="w-full h-2 bg-blue-950/60 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-gradient-to-br [&::-webkit-slider-thumb]:from-cyan-400 [&::-webkit-slider-thumb]:to-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
            />
            <div className="mt-3 text-blue-200/50 text-xs">
              {motionIntensity < 30 && "Minimal parallax and camera movement"}
              {motionIntensity >= 30 && motionIntensity < 70 && "Balanced motion with smooth transitions"}
              {motionIntensity >= 70 && "Full immersive experience with dynamic effects"}
            </div>
          </div>
        </motion.div>

        {/* Toggle Settings */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide opacity-60">
            Comfort Features
          </h2>
          <div className="space-y-2">
            <button
              onClick={() => setHaptics(!haptics)}
              className="w-full bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 flex items-center justify-between hover:border-blue-400/40 transition-all active:scale-98 shadow-lg shadow-blue-500/5"
            >
              <div className="flex items-center space-x-3">
                <Vibrate className="w-5 h-5 text-blue-400" />
                <div className="text-left">
                  <div className="text-white font-medium">Haptic Feedback</div>
                  <div className="text-blue-200/50 text-sm">Vibration on interactions</div>
                </div>
              </div>
              <div className={`w-12 h-6 rounded-full transition-all ${haptics ? 'bg-cyan-500' : 'bg-blue-900/50'} relative`}>
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-lg ${haptics ? 'left-7' : 'left-1'}`} />
              </div>
            </button>

            <button
              onClick={() => setEyeStrain(!eyeStrain)}
              className="w-full bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 flex items-center justify-between hover:border-blue-400/40 transition-all active:scale-98 shadow-lg shadow-blue-500/5"
            >
              <div className="flex items-center space-x-3">
                <Eye className="w-5 h-5 text-blue-400" />
                <div className="text-left">
                  <div className="text-white font-medium">Eye Strain Reduction</div>
                  <div className="text-blue-200/50 text-sm">Softer colors, less contrast</div>
                </div>
              </div>
              <div className={`w-12 h-6 rounded-full transition-all ${eyeStrain ? 'bg-cyan-500' : 'bg-blue-900/50'} relative`}>
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-lg ${eyeStrain ? 'left-7' : 'left-1'}`} />
              </div>
            </button>

            <button
              onClick={() => setSoundEffects(!soundEffects)}
              className="w-full bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 flex items-center justify-between hover:border-blue-400/40 transition-all active:scale-98 shadow-lg shadow-blue-500/5"
            >
              <div className="flex items-center space-x-3">
                <Volume2 className="w-5 h-5 text-blue-400" />
                <div className="text-left">
                  <div className="text-white font-medium">Spatial Audio</div>
                  <div className="text-blue-200/50 text-sm">3D sound positioning</div>
                </div>
              </div>
              <div className={`w-12 h-6 rounded-full transition-all ${soundEffects ? 'bg-cyan-500' : 'bg-blue-900/50'} relative`}>
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-lg ${soundEffects ? 'left-7' : 'left-1'}`} />
              </div>
            </button>

            <button
              onClick={() => setNightMode(!nightMode)}
              className="w-full bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 flex items-center justify-between hover:border-blue-400/40 transition-all active:scale-98 shadow-lg shadow-blue-500/5"
            >
              <div className="flex items-center space-x-3">
                <Moon className="w-5 h-5 text-blue-400" />
                <div className="text-left">
                  <div className="text-white font-medium">Night Mode</div>
                  <div className="text-blue-200/50 text-sm">Warmer tones for evening use</div>
                </div>
              </div>
              <div className={`w-12 h-6 rounded-full transition-all ${nightMode ? 'bg-cyan-500' : 'bg-blue-900/50'} relative`}>
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-lg ${nightMode ? 'left-7' : 'left-1'}`} />
              </div>
            </button>
          </div>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-4 shadow-lg shadow-cyan-500/5"
        >
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-lg">💡</span>
            </div>
            <div>
              <div className="text-white font-medium mb-1">Feeling dizzy?</div>
              <div className="text-cyan-200/60 text-sm leading-relaxed">
                Lower motion intensity and enable eye strain reduction. Take breaks every 15 minutes.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
