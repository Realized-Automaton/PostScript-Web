import Image from 'next/image';
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

const Logo = ({ className, width = 180, height = 48 }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="https://i.ibb.co/1fRyNg6R/enhanced-image-2025-07-18-T094530-416-1.png"
        alt="PostScript AI Logo"
        width={width}
        height={height}
        priority
        data-ai-hint="logo"
      />
    </div>
  );
};

export default Logo;
