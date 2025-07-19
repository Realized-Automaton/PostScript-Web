import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl mx-auto">
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Logo width={240} height={64} />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold text-white">
              About PostScript AI
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-foreground/80 space-y-6">
            <p>
              PostScript AI was born from a simple truth: Sometimes, we miss the little things — the way someone gave advice, a late-night text, their voice on the other end of the line. After losing someone, it’s not always the big milestones we yearn for… it’s the everyday moments.
            </p>
            <p>
              We created PostScript AI to preserve those moments in a meaningful, modern way.
            </p>
            <p>
              Using advanced AI, we help you build a digital presence of someone you’ve lost — through interactive chat, voice, and (soon) video. Not to replace them, but to honor them. To keep their personality, humor, and wisdom alive in the moments when you need them most.
            </p>
            <p>
              PostScript AI isn’t just a tool. It’s a bridge between memory and connection — a new kind of legacy, designed for a digital world. Whether you're preserving messages, shared stories, or just the sound of their voice, we’re here to help you hold onto what matters.
            </p>
            <p className="text-primary font-semibold">
              Because goodbye doesn’t have to be the end.
            </p>
          </CardContent>
        </Card>
        <div className="text-center mt-8">
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
