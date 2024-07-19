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
  AddonDetails: AddonDetail;
  selectedAddons: string[];
  orderLogisticsDetails: OrderLogisticsDetails;
  styleDetails: StyleDetail;
  orderDetails: OrderDetail;
  footageUpload: string;
}

export interface StyleDetail {
  pace: string;
  tone: string[];
}
export interface AddonDetail {
  tone: string[];
  includeLogo: string;
  followThumbnail: string;
  thumbnailDescription: string;
  verticalReformatGoals: string;
  verticalReformatExampleVideos: string;
  squareReformatGoals: string;
  squareReformatExamples: string;
  horizontalReformatGoals: string;
  horizontalReformatExampleVideos: string;
  captionStyle: string;
  editingSoftware: string;
}

export interface OrderDetail {
  richTextData: string;
  slug: string;
  scriptLink: string;
}
