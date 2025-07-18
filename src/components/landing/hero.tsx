"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Bot, BookMarked, MessageSquare, Mic, Video } from 'lucide-react';

export default function Hero() {

  const openWaitlistPopup = () => {
    const url = 'http://eepurl.com/jjvBx6';
    const windowName = 'mailchimpPopup';
    const windowFeatures = 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=800';
    window.open(url, windowName, windowFeatures);
  }

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <Image
          src="https://i.ibb.co/9H81sTJv/Adobe-Express-file-2.png"
          alt="Available on the App Store"
          width={360}
          height={120}
          className="object-contain absolute top-12 left-8 hidden md:block"
          data-ai-hint="app store"
          priority
        />
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Where memory meets <span className="text-primary">meaningful connection</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-xl mx-auto md:mx-0">
              It’s not about replacing someone. It’s about holding onto what made them special. We offer a bridge between memory and presence through:
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span className="text-foreground/80">Familiar text conversations</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mic className="w-5 h-5 text-primary" />
                <span className="text-foreground/80">Their unique voice</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Video className="w-5 h-5 text-primary" />
                <span className="text-foreground/80">Interactive video memories</span>
              </div>
            </div>
            
            <div className="mt-8 max-w-md mx-auto md:mx-0">
              <Button 
                onClick={openWaitlistPopup}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-all hover:shadow-lg hover:shadow-primary/30">
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center md:justify-start gap-4 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-primary" />
                <span>Preserve their legacy</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-primary" />
                <span>Built with AI</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Secured by Firebase</span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <Image
              src="https://i.ibb.co/SwprpxG4/postscrpt-mobile.png"
              alt="PostScript AI mobile app chat interface"
              width={400}
              height={800}
              className="shadow-2xl shadow-primary/10 rotate-3 transition-transform duration-500 hover:rotate-1 hover:scale-105"
              data-ai-hint="app chat"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
