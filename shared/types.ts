export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
export interface User {
  id: string;
  name: string;
}
export interface Chat {
  id: string;
  title: string;
}
export interface ChatMessage {
  id: string;
  chatId: string;
  userId: string;
  text: string;
  ts: number;
}
export type ProductListing = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  status: 'Active' | 'Sold' | 'Unsold';
  views: number;
  sales: number;
  category: 'Electronics' | 'Fashion' | 'Home & Garden' | 'Collectibles';
  brand: 'Apple' | 'Sony' | 'Nike' | 'Unbranded';
};
export type SalesDataPoint = {
  date: string;
  sales: number;
};
export type TopProductData = {
  name: string;
  sales: number;
};