import {
  AtSign,
  Dribbble,
  Github,
  Globe,
  Instagram,
  Link as LinkIcon,
  Linkedin,
  Rss,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import type { SocialPlatform } from "@/types/portfolio";

const icons: Record<SocialPlatform, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mastodon: AtSign,
  dribbble: Dribbble,
  youtube: Youtube,
  instagram: Instagram,
  website: Globe,
  rss: Rss,
  other: LinkIcon,
};

/** Returns the icon component for a social platform (generic link as fallback). */
export function socialIcon(platform: SocialPlatform): LucideIcon {
  return icons[platform] ?? LinkIcon;
}
