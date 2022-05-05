export interface IProduct {
  id?: string;
  name: string;
  manufacturer?: IManufacturer;
  price: number | null;
  expiryDate: Date | null;
}

export interface IManufacturer {
  id: string;
  name: string;
}