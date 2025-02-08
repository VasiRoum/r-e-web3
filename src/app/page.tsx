import { Header } from '@/components/ui/header';
import { Hero } from '@/components/ui/hero';
import { FeaturedProperties } from '@/components/ui/featured-properties';
import { Footer } from '@/components/ui/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProperties />
      </main>
      <Footer />
    </div>
  );
}
