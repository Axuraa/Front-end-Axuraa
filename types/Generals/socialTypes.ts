// types/Generals/socialTypes.ts

import { FC, SVGProps} from 'react';

export interface SocialMediaPlatform {
  name: string;
  link: string;
  icon: FC<SVGProps<SVGSVGElement>>; // Change from string to React component
}
export interface SocialMediaSectionProps {
  title?: string;
  subtitle?: string;
  platforms: SocialMediaPlatform[];
  // iconMapping: Record<string, ComponentType<{ className?: string }>>; // Added this required prop
  className?: string;
}

export type SocialIconType = 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube' | 'tiktok' | 'github' | 'discord';