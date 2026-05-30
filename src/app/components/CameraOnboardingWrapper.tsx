import { useNavigate } from 'react-router';
import { CameraOnboarding } from './CameraOnboarding';

export function CameraOnboardingWrapper() {
  const navigate = useNavigate();

  return <CameraOnboarding onComplete={() => navigate('/camera')} />;
}
