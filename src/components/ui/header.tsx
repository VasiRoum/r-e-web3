'use client'

import Link from 'next/link';
import { Search, Menu, Wallet } from 'lucide-react';
import { Button } from './button';
import { ThemeToggle } from './theme-toggle';
import { useState } from 'react';

export function Header() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        setIsWalletConnected(true);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('Please install MetaMask to connect your wallet!');
    }
  };

  const formatWalletAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link 
            href="/" 
            className="font-bold text-2xl bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
          >
            PropGoldenStar
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link 
              href="/properties" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Properties
            </Link>
            <Link 
              href="/virtual-tours" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Virtual Tours
            </Link>
            <Link 
              href="/dashboard" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Dashboard
            </Link>
            <Link 
              href="/support" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Support
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              type="search"
              placeholder="Search properties..."
              className="h-9 w-[250px] rounded-full border border-input bg-background/60 pl-10 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 focus:w-[300px]"
            />
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            {isWalletConnected ? (
              <Button variant="outline" className="gap-2">
                <Wallet className="h-4 w-4" />
                <span className="font-medium">{formatWalletAddress(walletAddress)}</span>
              </Button>
            ) : (
              <Button onClick={connectWallet} variant="outline" className="gap-2">
                <Wallet className="h-4 w-4" />
                Connect Wallet
              </Button>
            )}
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
} 