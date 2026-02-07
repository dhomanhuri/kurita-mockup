
export interface NavItem {
  label: string;
  id: string;
  children?: NavItem[];
}

export interface Solution {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface ChartData {
  name: string;
  value: number;
}x3

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
}
