export interface NavItem {
  label: string;
  href: string;
  submenu?: NavItem[];
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id?: string;
  name: string;
  price: number;
  duration?: string;
  shortDescription?: string;
  details?: string;
  image?: string;
  badges?: string[];
  cta?: CtaLink;
}

export interface Testimonial {
  name: string;
  service?: string;
  rating: number;
  quote: string;
}

export interface ContactRequest {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface ApiResponse {
  ok: boolean;
  message: string;
}
