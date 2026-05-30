import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { useState } from 'react';
import { ImmersiveWelcome } from './components/ImmersiveWelcome';
import { MuseumSelection } from './components/MuseumSelection';
import { HomeScreen } from './components/HomeScreen';
import { EnhancedCameraScreen } from './components/EnhancedCameraScreen';
import { CameraOnboardingWrapper } from './components/CameraOnboardingWrapper';
import { CameraSettings } from './components/CameraSettings';
import { HintScreen } from './components/HintScreen';
import { RewardScreen } from './components/RewardScreen';
import { LeaderboardScreen } from './components/LeaderboardScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { BottomNav } from './components/BottomNav';
import { VRGalleryView } from './components/VRGalleryView';
import { VRModeToggle } from './components/VRModeToggle';
import { VRComfortSettings } from './components/VRComfortSettings';
import { VRMultiplayerRoom } from './components/VRMultiplayerRoom';
import { VRCelebrationWrapper } from './components/VRCelebrationWrapper';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedMuseum, setSelectedMuseum] = useState<string | null>(null);
  const [isVRMode, setIsVRMode] = useState(false);
  const [foundItems, setFoundItems] = useState<number[]>([]);
  const [showCameraOnboarding, setShowCameraOnboarding] = useState(false);

  const handleArtworkFound = (id: number) => {
    if (!foundItems.includes(id)) {
      setFoundItems([...foundItems, id]);
    }
  };

  if (showWelcome) {
    return (
      <ImmersiveWelcome
        onStartExploring={() => setShowWelcome(false)}
        onEnterVR={() => {
          setShowWelcome(false);
          setIsVRMode(true);
        }}
      />
    );
  }

  if (!selectedMuseum && !isVRMode) {
    return <MuseumSelection onSelect={setSelectedMuseum} />;
  }

  if (isVRMode) {
    return (
      <>
        <VRGalleryView onArtworkFound={handleArtworkFound} />
        <VRModeToggle isVRMode={isVRMode} onToggle={() => setIsVRMode(false)} />
      </>
    );
  }

  return (
    <BrowserRouter>
      <div className="h-screen w-full max-w-md mx-auto bg-[#0a1628] flex flex-col overflow-hidden relative">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/camera" element={<EnhancedCameraScreen />} />
          <Route path="/camera-onboarding" element={<CameraOnboardingWrapper />} />
          <Route path="/camera-settings" element={<CameraSettings />} />
          <Route path="/hints" element={<HintScreen />} />
          <Route path="/multiplayer" element={<VRMultiplayerRoom />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="/vr-settings" element={<VRComfortSettings />} />
          <Route path="/reward" element={<RewardScreen />} />
          <Route path="/celebration" element={<VRCelebrationWrapper />} />
        </Routes>
        <BottomNav />
        <VRModeToggle isVRMode={isVRMode} onToggle={() => setIsVRMode(true)} />
      </div>
    </BrowserRouter>
  );
}
