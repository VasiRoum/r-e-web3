import { Header } from '@/components/ui/header';
import { PropertyBackground } from '@/components/properties/property-background';

export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow relative">
        {/* Three.js Background */}
        <div className="fixed inset-0 -z-10">
          <PropertyBackground />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Gradient fade to background */}
        <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </main>
    </div>
  );
} 