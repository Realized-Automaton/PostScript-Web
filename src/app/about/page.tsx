import About from '@/components/about';
import Footer from '@/components/landing/footer';
import Header from '@/components/landing/header';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <About />
      </main>
      <Footer />
    </div>
  );
}
