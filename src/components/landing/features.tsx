import { Bot, BrainCircuit, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: 'AI-Powered Legacy',
    description: 'Craft a digital version of someone you love. With enough stories, context, and input, our AI generates an uncannily familiar persona — able to text, speak, and resonate in ways that feel real.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'Memory-Driven Realism',
    description: 'The more you share — texts, traits, tone, phrases — the more vivid and accurate the AI becomes. It’s not magic. It’s memory, encoded.',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: 'Moments that Linger',
    description: 'PostScript creates more than memories — it creates experiences. Whether it’s a late-night message, a word of advice, or just a familiar “goodnight,” we help you keep the little things alive.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-background/80">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">A new way to remember and be remembered</h2>
          <p className="mt-4 text-lg text-foreground/70">
            PostScript AI lets you preserve and interact with the voice and personality of a loved one through AI-powered chat, creating a deeply personal way to remember and reconnect.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-primary/10 mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}