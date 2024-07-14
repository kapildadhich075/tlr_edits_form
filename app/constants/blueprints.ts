export interface VideoFootageDetails {
  length: string;
  size: string;
}
export interface OrderLogisticsDetails {
  videoTitle: string;
  videoCategory: string;
  videoDescription: string;
  publishDate: string;
  finalLength: number;
}
export interface FORM_DATA {
  orderType: string;
  videoFootageDetails: VideoFootageDetails;
  Addons: string;
  orderLogisticsDetails: OrderLogisticsDetails;
  styleDetails: string;
  orderDetails: string;
  footageUpload: File | null;
}
