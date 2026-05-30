import { motion } from 'motion/react';
import { Volume2, VolumeX, Moon, Sun, Globe, Accessibility, Info, LogOut, ChevronRight, Glasses, Camera, Trophy, Sparkles, Calendar } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SettingsScreen() {
  const navigate = useNavigate();
  const [soundOn, setSoundOn] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('English');

  return (
    <div className="flex-1 overflow-y-auto px-5 py-6 pb-24 bg-gradient-to-b from-[#0a1628] to-[#0f1e35]">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h1 className="text-3xl font-bold text-white mb-1">Settings</h1>
        <p className="text-blue-300/60 text-sm">Customize your experience</p>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mb-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl overflow-hidden shadow-xl shadow-blue-500/10"
      >
        <div className="p-5">
          <div className="flex items-start space-x-4 mb-4">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400/60">
                <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-3xl">
                  🎨
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center border-2 border-[#0a1628]">
                <Trophy className="w-3 h-3 text-white" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-white font-bold text-xl mb-1">Art Explorer</div>
              <div className="text-blue-300/70 text-sm mb-2">Member since May 2026</div>
              <div className="flex items-center space-x-2">
                <div className="inline-flex items-center space-x-1 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-2 py-0.5">
                  <Sparkles className="w-3 h-3 text-yellow-400" />
                  <span className="text-yellow-300 text-xs font-semibold">Level 8</span>
                </div>
                <div className="text-blue-300/50 text-xs">1,240 pts</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-blue-950/40 backdrop-blur-sm border border-blue-500/20 rounded-xl p-2 text-center">
              <div className="text-white font-bold text-lg">47</div>
              <div className="text-blue-300/60 text-[10px]">Total Scans</div>
            </div>
            <div className="bg-blue-950/40 backdrop-blur-sm border border-blue-500/20 rounded-xl p-2 text-center">
              <div className="text-white font-bold text-lg">3</div>
              <div className="text-blue-300/60 text-[10px]">Museums</div>
            </div>
            <div className="bg-blue-950/40 backdrop-blur-sm border border-blue-500/20 rounded-xl p-2 text-center">
              <div className="text-white font-bold text-lg">8</div>
              <div className="text-blue-300/60 text-[10px]">Games Won</div>
            </div>
          </div>

          {/* Badge Collection Preview */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-400/60 flex-shrink-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                alt="Badge"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400/60 flex-shrink-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1524664399170-77e7118fdb6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                alt="Badge"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-400/60 flex-shrink-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1703593693037-3f816218baa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                alt="Badge"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-400/60 flex-shrink-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1580687774275-4e14b364f6e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                alt="Badge"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-pink-400/60 flex-shrink-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                alt="Badge"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="w-10 h-10 rounded-full bg-blue-950/60 backdrop-blur-sm border-2 border-blue-500/30 flex items-center justify-center flex-shrink-0 text-blue-400 text-xs font-bold">
              +7
            </button>
          </div>
        </div>
      </motion.div>

      <div className="space-y-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h2 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide opacity-60">
            Preferences
          </h2>
          <div className="space-y-2">
            <button
              onClick={() => setSoundOn(!soundOn)}
              className="w-full bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 flex items-center justify-between hover:border-blue-400/40 transition-all active:scale-98 shadow-lg shadow-blue-500/5"
            >
              <div className="flex items-center space-x-3">
                {soundOn ? (
                  <Volume2 className="w-5 h-5 text-blue-400" />
                ) : (
                  <VolumeX className="w-5 h-5 text-blue-400" />
                )}
                <span className="text-white font-medium">Sound Effects</span>
              </div>
              <div className={`w-12 h-6 rounded-full transition-all ${soundOn ? 'bg-blue-500' : 'bg-blue-950'} relative`}>
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${soundOn ? 'left-7' : 'left-1'}`} />
              </div>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 flex items-center justify-between hover:border-blue-400/40 transition-all active:scale-98 shadow-lg shadow-blue-500/5"
            >
              <div className="flex items-center space-x-3">
                {darkMode ? (
                  <Moon className="w-5 h-5 text-blue-400" />
                ) : (
                  <Sun className="w-5 h-5 text-blue-400" />
                )}
                <span className="text-white font-medium">Dark Mode</span>
              </div>
              <div className={`w-12 h-6 rounded-full transition-all ${darkMode ? 'bg-blue-500' : 'bg-blue-950'} relative`}>
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${darkMode ? 'left-7' : 'left-1'}`} />
              </div>
            </button>

            <button className="w-full bg-blue-950/40 border border-blue-500/30 rounded-xl p-4 flex items-center justify-between hover:border-blue-400/50 transition-all active:scale-98">
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">Language</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-300/60 text-sm">{language}</span>
                <ChevronRight className="w-4 h-4 text-blue-400/50" />
              </div>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <h2 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide opacity-60">
            Camera & Scanning
          </h2>
          <div className="space-y-2">
            <button
              onClick={() => navigate('/camera-settings')}
              className="w-full bg-blue-500/15 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 flex items-center justify-between hover:border-blue-400/40 transition-all active:scale-98 shadow-lg shadow-blue-500/10"
            >
              <div className="flex items-center space-x-3">
                <Camera className="w-5 h-5 text-blue-400" />
                <div className="text-left">
                  <div className="text-white font-medium">Camera Settings</div>
                  <div className="text-blue-200/60 text-sm">Scan speed, feedback, and behavior</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-blue-400/40" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.17, duration: 0.5 }}
        >
          <h2 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide opacity-60">
            VR & Immersive
          </h2>
          <div className="space-y-2">
            <button
              onClick={() => navigate('/vr-settings')}
              className="w-full bg-cyan-500/15 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-4 flex items-center justify-between hover:border-cyan-400/40 transition-all active:scale-98 shadow-lg shadow-cyan-500/10"
            >
              <div className="flex items-center space-x-3">
                <Glasses className="w-5 h-5 text-cyan-400" />
                <div className="text-left">
                  <div className="text-white font-medium">VR Comfort Settings</div>
                  <div className="text-cyan-200/60 text-sm">Motion, haptics, and eye strain</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-cyan-400/40" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide opacity-60">
            Accessibility
          </h2>
          <div className="space-y-2">
            <button className="w-full bg-blue-950/40 border border-blue-500/30 rounded-xl p-4 flex items-center justify-between hover:border-blue-400/50 transition-all active:scale-98">
              <div className="flex items-center space-x-3">
                <Accessibility className="w-5 h-5 text-blue-400" />
                <div className="text-left">
                  <div className="text-white font-medium">Large Text</div>
                  <div className="text-blue-300/60 text-sm">Easier to read labels</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-blue-400/50" />
            </button>

            <button className="w-full bg-blue-950/40 border border-blue-500/30 rounded-xl p-4 flex items-center justify-between hover:border-blue-400/50 transition-all active:scale-98">
              <div className="flex items-center space-x-3">
                <Accessibility className="w-5 h-5 text-blue-400" />
                <div className="text-left">
                  <div className="text-white font-medium">Voice Guidance</div>
                  <div className="text-blue-300/60 text-sm">Audio hints and navigation</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-blue-400/50" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide opacity-60">
            About
          </h2>
          <div className="space-y-2">
            <button className="w-full bg-blue-950/40 border border-blue-500/30 rounded-xl p-4 flex items-center justify-between hover:border-blue-400/50 transition-all active:scale-98">
              <div className="flex items-center space-x-3">
                <Info className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">App Info</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-300/60 text-sm">v1.0.0</span>
                <ChevronRight className="w-4 h-4 text-blue-400/50" />
              </div>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="pt-4"
        >
          <button className="w-full bg-red-950/30 backdrop-blur-sm border border-red-500/20 rounded-2xl p-4 flex items-center justify-center space-x-2 hover:border-red-400/40 transition-all active:scale-98 shadow-lg shadow-red-500/5">
            <LogOut className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-medium">Sign Out</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
