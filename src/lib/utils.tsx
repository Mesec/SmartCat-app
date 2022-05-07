import { IProduct } from './interfaces';

export const getProductsFromLocalStorage = (): IProduct[] | [] => {
  const products = localStorage.getItem('products');

  if (products !== null) {
    return JSON.parse(products);
  }
  else {
    return [];
  }
}

export const setProductsInLocalStorage =(products: IProduct[] ): void => {
  localStorage.setItem('products', JSON.stringify(products))
}