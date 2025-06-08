import { StaticImageData } from 'next/image';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
 image: string | StaticImageData;
  isNew?: boolean;
  
  colors?: ('red' | 'orange' | 'black' | 'white' | 'yellow')[];
}

export interface Category {
  id: number;
  name: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

 export interface ArrivalItem {
  id: number;
  title: string;
  description: string;
  image: string;
  size: 'large' | 'medium' | 'small';
}