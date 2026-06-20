import {
  Github,
  Linkedin,
  MessageCircle,
  Globe,
  CalendarDays,
  FileUser,
  Link as LinkIcon,
  type LucideIcon,
} from "lucide-react";

import type { SocialPlatform } from "@/types/portfolio";

const icons: Record<SocialPlatform, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
  website: Globe,
  calendly: CalendarDays,
  cv: FileUser,
  other: LinkIcon,
};

/** Returns the icon component for a social platform (generic link as fallback). */
export function socialIcon(platform: SocialPlatform): LucideIcon {
  return icons[platform] ?? LinkIcon;
}
