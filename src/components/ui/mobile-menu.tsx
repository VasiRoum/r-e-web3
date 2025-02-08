'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './button';
import { X, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeSelect } from './theme-select';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isWalletConnected: boolean;
  walletAddress: string;
  onConnectWallet: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  isWalletConnected,
  walletAddress,
  onConnectWallet,
}: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-background/80 backdrop-blur-sm z-50 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={cn(
          'fixed right-0 top-0 h-full w-[300px] bg-background border-l z-50 transition-transform duration-300 ease-in-out transform',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close menu">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation Links */}
        <nav className="px-6 py-4" role="navigation">
          <ul className="space-y-4">
            <li>
              <Link
                href="/properties"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={onClose}
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                href="/virtual-tours"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={onClose}
              >
                Virtual Tours
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={onClose}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={onClose}
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Theme</span>
              <ThemeSelect />
            </div>
            {isWalletConnected ? (
              <Button variant="outline" className="w-full gap-2">
                <Wallet className="h-4 w-4" />
                <span className="font-medium">{`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}</span>
              </Button>
            ) : (
              <Button onClick={onConnectWallet} variant="outline" className="w-full gap-2">
                <Wallet className="h-4 w-4" />
                Connect Wallet
              </Button>
            )}
            <Button variant="ghost" asChild className="w-full">
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild className="w-full">
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
} 