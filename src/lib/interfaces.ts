export interface IProduct {
  id?: string;
  name: string;
  manufacturer?: IManufacturer;
  price: number;
  expiryDate: Date | null;
}

export interface IManufacturer {
  id: string;
  name: string;
}

export interface IFormatManufacturerData {
  id: string;
  name: string;
  totalProducts?: number;
}