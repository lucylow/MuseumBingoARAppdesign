import { Home, Camera, Lightbulb, Trophy, Settings, Users } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';
import { motion } from 'motion/react';

const navItems = [
  { path: '/home', icon: Home, label: 'Home' },
  { path: '/camera', icon: Camera, label: 'Scan' },
  { path: '/hints', icon: Lightbulb, label: 'Hints' },
  { path: '/multiplayer', icon: Users, label: 'Room' },
  { path: '/settings', icon: Settings, label: 'Settings' },
];

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="absolute bottom-0 left-0 right-0">
      {/* Gradient fade above nav */}
      <div className="h-20 bg-gradient-to-t from-[#0a1628] to-transparent pointer-events-none" />

      <div className="bg-gradient-to-b from-[#0a1628]/80 to-[#050a14]/95 backdrop-blur-2xl border-t-2 border-blue-500/20 shadow-2xl">
        <div className="flex items-center justify-around px-3 py-3 safe-area-inset-bottom">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <motion.button
                key={item.path}
                onClick={() => navigate(item.path)}
                whileTap={{ scale: 0.9 }}
                className="relative flex flex-col items-center space-y-1.5 px-3 py-2.5 min-w-[68px] rounded-2xl transition-all"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-600/20 rounded-2xl border-2 border-cyan-400/40 shadow-xl shadow-cyan-500/30"
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
                  />
                )}
                <motion.div
                  animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <Icon
                    className={`w-6 h-6 relative z-10 transition-all ${
                      isActive ? 'text-cyan-300' : 'text-blue-300/50'
                    }`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                </motion.div>
                <span
                  className={`text-[10px] relative z-10 transition-all uppercase tracking-wider ${
                    isActive ? 'text-cyan-200 font-bold' : 'text-blue-300/50 font-semibold'
                  }`}
                >
                  {item.label}
                </span>

                {/* Active indicator dot */}
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -top-1 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-500/50"
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.4 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
