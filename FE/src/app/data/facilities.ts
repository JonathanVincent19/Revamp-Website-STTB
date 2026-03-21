import { LucideIcon } from "lucide-react";

export interface Facility {
  slug: string;
  name: string;
  description: string;
  longDescription: string[];
  icon: LucideIcon;
  image: string;
  photos: string[];
}

export const facilities: Facility[] = [];

export function getFacilityBySlug(slug: string): Facility | undefined {
  return facilities.find((f) => f.slug === slug);
}
