import { useState } from 'react';
import { Button, Dialog, DialogContent, DialogTrigger, Switch } from '@windsurf/ui';
import { AuthModal } from './components/AuthModal';
import { CircleUser, MapPin, CreditCard, Store } from 'lucide-react';
import './App.css';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* TopNav - Minimal and right-aligned */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <span className="text-sm font-medium">EN</span>
        <Switch
          checked={isDarkMode}
          onCheckedChange={setIsDarkMode}
          aria-label="Toggle dark mode"
          className="data-[state=checked]:bg-[#FF7B7B]"
        />
      </div>

      {/* Main Content - Centered */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Logo */}
        <div className="mb-8">
          <svg width="120" height="48" viewBox="0 0 120 48" className="fill-[#FF7B7B]">
            <text x="0" y="36" fontSize="40" fontWeight="bold" fontFamily="Inter">
              NICO
            </text>
            {/* Wing/Arrow effect on N */}
            <path d="M20 8 L35 8 L30 13" strokeWidth="3" stroke="currentColor" fill="none"/>
          </svg>
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-xs space-y-3">
          <Dialog open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen}>
            <DialogTrigger asChild>
              <Button
                className="w-full bg-[#FF7B7B] hover:bg-[#FF7B7B]/90 text-white"
                size="lg"
              >
                Log In / Sign Up
              </Button>
            </DialogTrigger>
            <DialogContent>
              <AuthModal />
            </DialogContent>
          </Dialog>

          <Button
            variant="outline"
            size="lg"
            className="w-full border-[#FF7B7B] text-[#FF7B7B] hover:bg-[#FF7B7B]/10"
          >
            Continue as Guest
          </Button>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 w-full max-w-xs">
          <h2 className="text-lg font-semibold mb-4">Why create an account?</h2>
          <div className="space-y-4">
            <BenefitItem
              icon={<MapPin className="w-5 h-5" />}
              text="Save and manage your delivery addresses"
            />
            <BenefitItem
              icon={<CircleUser className="w-5 h-5" />}
              text="Track your orders in real-time"
            />
            <BenefitItem
              icon={<CreditCard className="w-5 h-5" />}
              text="Manage your wallet and payments"
            />
            <BenefitItem
              icon={<Store className="w-5 h-5" />}
              text="Save your favorite stores and items"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Benefit Item Component
function BenefitItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      <div className="text-[#FF7B7B]">{icon}</div>
      <span>{text}</span>
    </div>
  );
}

export default App;
