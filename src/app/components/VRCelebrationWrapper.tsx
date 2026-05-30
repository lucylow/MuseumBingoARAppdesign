import { useNavigate } from 'react-router';
import { VRCelebration } from './VRCelebration';

export function VRCelebrationWrapper() {
  const navigate = useNavigate();

  return (
    <VRCelebration
      badgeName="Art Explorer"
      points={150}
      onContinue={() => navigate('/home')}
      onShare={() => alert('Share feature coming soon!')}
    />
  );
}
