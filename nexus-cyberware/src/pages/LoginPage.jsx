import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthShowcase from '../components/auth/AuthShowcase';
import AuthPanel from '../components/auth/AuthPanel';

export default function LoginPage() {
  const navigate = useNavigate();
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  // Tras autenticar, deja ver el mensaje de éxito un instante y entra al catálogo.
  const handleAuthSuccess = () => {
    timer.current = setTimeout(() => navigate('/'), 1200);
  };

  return (
    <main className="w-full bg-background min-h-screen flex items-center justify-center">
      <div className="relative w-full min-h-[92vh] flex items-center justify-center p-4 lg:p-10 overflow-hidden">
        {/* Resplandores ambientales */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-container/10 blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-36 -right-36 w-[480px] h-[480px] rounded-full bg-secondary-container/25 blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-64 h-64 rounded-full bg-surface-tint/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 rounded-xl bg-surface-container-lowest/80 backdrop-blur-2xl shadow-2xl overflow-hidden">
          <AuthShowcase />
          <AuthPanel onAuthSuccess={handleAuthSuccess} />
        </div>
      </div>
    </main>
  );
}
