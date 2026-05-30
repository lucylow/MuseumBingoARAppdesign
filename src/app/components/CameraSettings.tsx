import { motion } from 'motion/react';
import { Vibrate, Volume2, Zap, Eye, Gauge, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export function CameraSettings() {
  const navigate = useNavigate();
  const [haptics, setHaptics] = useState(true);
  const [sound, setSound] = useState(true);
  const [autoScan, setAutoScan] = useState(true);
  const [highContrast, setHighContrast] = useState(false);
  const [scanSpeed, setScanSpeed] = useState(75);

  return (
    <div className="flex-1 overflow-y-auto px-5 py-6 pb-24 bg-gradient-to-b from-[#050a14] to-[#0f1828]">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-cyan-400 mb-4 active:scale-95 transition-transform"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>
        <h1 className="text-3xl font-bold text-white mb-1">Camera Settings</h1>
        <p className="text-blue-200/60 text-sm">Customize your scanning experience</p>
      </motion.div>

      <div className="space-y-6">
        {/* Scan Speed */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h2 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide opacity-60">
            Performance
          </h2>
          <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-5 shadow-xl shadow-blue-500/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Scan Speed</span>
              </div>
              <span className="text-cyan-400 font-mono text-sm">
                {scanSpeed < 40 ? 'Careful' : scanSpeed < 70 ? 'Balanced' : 'Fast'}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={scanSpeed}
              onChange={(e) => setScanSpeed(Number(e.target.value))}
              className="w-full h-2 bg-blue-950/60 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-gradient-to-br [&::-webkit-slider-thumb]:from-cyan-400 [&::-webkit-slider-thumb]:to-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
            />
            <div className="mt-3 flex items-center justify-between text-blue-200/50 text-xs">
              <span>More accurate</span>
              <span>Faster results</span>
            </div>
          </div>
        </motion.div>

        {/* Feedback Settings */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide opacity-60">
            Feedback
          </h2>
          <div className="space-y-2">
            <button
              onClick={() => setHaptics(!haptics)}
              className="w-full bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 flex items-center justify-between hover:border-blue-400/40 transition-all active:scale-98 shadow-lg shadow-blue-500/5"
            >
              <div className="flex items-center space-x-3">
                <Vibrate className="w-5 h-5 text-blue-400" />
                <div className="text-left">
                  <div className="text-white font-medium">Haptic Vibration</div>
                  <div className="text-blue-200/50 text-sm">Feel when matches are found</div>
                </div>
              </div>
              <div
                className={`w-12 h-6 rounded-full transition-all ${haptics ? 'bg-cyan-500' : 'bg-blue-900/50'} relative`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-lg ${haptics ? 'left-7' : 'left-1'}`}
                />
              </div>
            </button>

            <button
              onClick={() => setSound(!sound)}
              className="w-full bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 flex items-center justify-between hover:border-blue-400/40 transition-all active:scale-98 shadow-lg shadow-blue-500/5"
            >
              <div className="flex items-center space-x-3">
                <Volume2 className="w-5 h-5 text-blue-400" />
                <div className="text-left">
                  <div className="text-white font-medium">Sound Effects</div>
                  <div className="text-blue-200/50 text-sm">Audio confirmation on scan</div>
                </div>
              </div>
              <div
                className={`w-12 h-6 rounded-full transition-all ${sound ? 'bg-cyan-500' : 'bg-blue-900/50'} relative`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-lg ${sound ? 'left-7' : 'left-1'}`}
                />
              </div>
            </button>
          </div>
        </motion.div>

        {/* Scan Behavior */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide opacity-60">
            Scan Behavior
          </h2>
          <div className="space-y-2">
            <button
              onClick={() => setAutoScan(!autoScan)}
              className="w-full bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 flex items-center justify-between hover:border-blue-400/40 transition-all active:scale-98 shadow-lg shadow-blue-500/5"
            >
              <div className="flex items-center space-x-3">
                <Gauge className="w-5 h-5 text-blue-400" />
                <div className="text-left">
                  <div className="text-white font-medium">Auto-Scan</div>
                  <div className="text-blue-200/50 text-sm">Start scanning automatically</div>
                </div>
              </div>
              <div
                className={`w-12 h-6 rounded-full transition-all ${autoScan ? 'bg-cyan-500' : 'bg-blue-900/50'} relative`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-lg ${autoScan ? 'left-7' : 'left-1'}`}
                />
              </div>
            </button>

            <button
              onClick={() => setHighContrast(!highContrast)}
              className="w-full bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 flex items-center justify-between hover:border-blue-400/40 transition-all active:scale-98 shadow-lg shadow-blue-500/5"
            >
              <div className="flex items-center space-x-3">
                <Eye className="w-5 h-5 text-blue-400" />
                <div className="text-left">
                  <div className="text-white font-medium">High Contrast</div>
                  <div className="text-blue-200/50 text-sm">Stronger frame guides</div>
                </div>
              </div>
              <div
                className={`w-12 h-6 rounded-full transition-all ${highContrast ? 'bg-cyan-500' : 'bg-blue-900/50'} relative`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-lg ${highContrast ? 'left-7' : 'left-1'}`}
                />
              </div>
            </button>
          </div>
        </motion.div>

        {/* Tips Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-4 shadow-lg shadow-cyan-500/5"
        >
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-lg">💡</span>
            </div>
            <div>
              <div className="text-white font-medium mb-1">Pro Tip</div>
              <div className="text-cyan-200/60 text-sm leading-relaxed">
                For best results in dim galleries, enable flash and use balanced scan speed.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
