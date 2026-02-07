
import { NavItem, Solution, ChartData, NewsItem } from './types';

export const LOGO_URL = 'https://www.kurita-water.com/assets/images/common/logo_kurita2_1.svg';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: 'home' },
  { 
    label: 'Solutions', 
    id: 'solutions',
    children: [
      { 
        label: 'Water Treatment', 
        id: 'water-treatment',
        children: [
          { label: 'Boiler Water', id: 'boiler-water' },
          { label: 'Cooling Water', id: 'cooling-water' },
          { label: 'Wastewater', id: 'wastewater' },
        ]
      },
      { 
        label: 'Chemical Solutions', 
        id: 'chemical-solutions',
        children: [
          { label: 'RO Chemicals', id: 'ro-chemicals' },
          { label: 'Process Chemicals', id: 'process-chemicals' },
        ]
      },
      { label: 'Maintenance Services', id: 'maintenance' },
    ]
  },
  { label: 'Sustainability', id: 'sustainability' },
  { label: 'News', id: 'news' },
  { label: 'Impact', id: 'impact' },
  { label: 'AI Expert', id: 'ai-expert' },
];

export const SOLUTIONS: Solution[] = [
  {
    title: 'Ultrapure Water Supply',
    description: 'Specialized solutions for semiconductor and LCD manufacturing requiring the highest water purity standards.',
    icon: 'fa-droplet',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Wastewater Reclamation',
    description: 'Advanced membrane technologies and chemical treatments to turn industrial wastewater into reusable resources.',
    icon: 'fa-recycle',
    image: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Cooling Water Systems',
    description: 'Chemical and mechanical treatments to prevent scaling, corrosion, and biofouling in cooling towers.',
    icon: 'fa-snowflake',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
  },
];

export const SUSTAINABILITY_DATA: ChartData[] = [
  { name: '2020', value: 120 },
  { name: '2021', value: 155 },
  { name: '2022', value: 190 },
  { name: '2023', value: 240 },
  { name: '2024 (Est)', value: 310 },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    date: 'Feb 05, 2026',
    category: 'Corporate',
    title: 'Kurita Expands Water Treatment Facilities in Southeast Asia',
    excerpt: 'Strategic expansion to support growing industrial demand for sustainable water solutions in the region.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    date: 'Jan 28, 2026',
    category: 'Innovation',
    title: 'New AI-Powered Membrane Monitoring System Launched',
    excerpt: 'Revolutionary technology reduces maintenance costs and energy consumption in wastewater reclamation.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    date: 'Jan 15, 2026',
    category: 'Sustainability',
    title: 'Kurita Achieves Platinum ESG Rating for Second Consecutive Year',
    excerpt: 'Commitment to environmental excellence and social responsibility recognized by global rating agency.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
  },
];

export const PARTNERS: string[] = [
  'https://www.kurita-water.com/top/assets/images/footer_related_img72_2x1.jpg',
  'https://www.kurita-water.com/top/assets/images/footer_related_img69_2x1.jpg',
  'https://www.kurita-water.com/top/assets/images/footer_related_img71_2x1.jpg',
  'https://www.kurita-water.com/top/assets/images/footer_related_img70_2x1.jpg',
];
