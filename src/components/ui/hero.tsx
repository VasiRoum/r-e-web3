import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';
import { ArrowRight, Wallet } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-[90vh] w-full">
      {/* Background Image with Modern Gradient */}
      <div className="absolute inset-0">
        <Image
          src="/hero-property.jpg"
          alt="Luxury Property"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Animated Overlay Pattern */}
      <div className="absolute inset-0 opacity-30"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           }}
      />

      {/* Main Content Section */}
      <section className="relative h-full flex items-center">
        <div className="container pt-24">
          {/* Decorative Element */}
          <div className="w-20 h-1 bg-primary mb-8 animate-pulse" />
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-[800px] text-white [text-shadow:_0_1px_20px_rgb(0_0_0_/_20%)] animate-in slide-in-from-left duration-700">
            Discover Your Dream Property with Ethereum
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-[600px] text-gray-200 animate-in slide-in-from-left duration-700 delay-200">
            Experience immersive property tours and secure your investment through blockchain technology. Buy and sell properties with ETH, ensuring transparent and secure transactions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-in slide-in-from-left duration-700 delay-300">
            <Button size="lg" asChild className="group bg-white hover:bg-white/90 text-lg px-8 w-full sm:w-auto text-black">
              <Link href="/properties" className="flex items-center justify-center gap-2">
                <Wallet className="h-5 w-5" />
                Buy Properties w/ ETH
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 bg-black/20 backdrop-blur-sm text-white hover:bg-white hover:text-black w-full sm:w-auto">
              <Link href="/virtual-tours" className="flex items-center justify-center">
                Take a Virtual Tour
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent">
        <div className="container py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/20 pt-8 text-white animate-in slide-in-from-bottom duration-700 delay-500">
            <div>
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm text-gray-300">Properties in ETH</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-gray-300">Blockchain Secured</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm text-gray-300">Smart Contracts</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 