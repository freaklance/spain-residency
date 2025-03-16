export interface ContactFormData {
  name: string;
  country: string;
  phone: string;
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  image: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  outcome: string;
  image: string;
}

export interface Statistic {
  value: string;
  label: string;
}

export interface Requirement {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface WorkStage {
  id: number;
  title: string;
  description: string;
}