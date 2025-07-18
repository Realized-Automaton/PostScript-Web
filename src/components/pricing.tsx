import Link from 'next/link';
import { Check, Feather, Lock, Star, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

const tiers = [
  {
    name: 'Free Tier',
    price: '$0/month',
    icon: <Feather className="h-8 w-8 text-white" />,
    features: ['5 chats per day', '1 AI persona', 'Text-only interaction'],
    buttonText: 'Current Plan',
    buttonVariant: 'outline' as const,
  },
  {
    name: 'Plus Tier',
    price: '$10/month',
    icon: <Lock className="h-8 w-8 text-primary" />,
    features: [
      '20 chats per day',
      'Up to 3 AI personas',
      'Save & resume conversations',
      'Upload 30-60s voice clip for voice cloning',
      'Text-to-voice playback',
    ],
    buttonText: 'Upgrade to Plus',
    buttonVariant: 'default' as const,
  },
  {
    name: 'Premium Tier',
    price: '$25/month',
    icon: <Star className="h-8 w-8 text-yellow-400" />,
    features: [
      'Unlimited chats',
      'Unlimited personas',
      'More daily voice responses',
      'Priority support',
      'Exclusive access to upcoming avatar video feature',
    ],
    buttonText: 'Upgrade to Premium',
    buttonVariant: 'default' as const,
  },
];

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <div className="flex flex-col items-center justify-center flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <Logo width={360} height={96} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Tiered Plans Designed for Emotional Connection
            </h1>
            <p className="mt-4 text-lg text-primary">
              Start with memory. Upgrade to voice. Bring them to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className="bg-card/50 border-border/50 flex flex-col"
              >
                <CardHeader className="items-center text-center">
                  <div className="mb-4">{tier.icon}</div>
                  <CardTitle className="text-2xl font-semibold text-white">
                    {tier.name}
                  </CardTitle>
                  <p className="text-foreground/70">{tier.price}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button
                    className="w-full"
                    variant={tier.buttonVariant}
                    disabled={tier.buttonText === 'Current Plan'}
                  >
                    {tier.buttonText}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="ghost" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
