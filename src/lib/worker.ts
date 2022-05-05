import { IProduct } from './interfaces';

export class C_Products {

  // get all products
  static getProducts(): IProduct[] | [] {
    const products = gerProductsFromLocalStorage();

    if (products !== null) {
      return products;
    }
    else {
      return [];
    }
  }

  // create product
  static createProduct(product: IProduct): void {
    const products = gerProductsFromLocalStorage();
    const prodId = products.length + 1;
    if (products !== null) {
      const updatedProducts = [...products, { ...product, id: prodId.toString() }];
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    }
    else {
      localStorage.setItem('products', JSON.stringify([{ ...product, id: '1' }]));
    }
  }

  // edit (update) product
  static editProduct(product: IProduct): void {
    const products = gerProductsFromLocalStorage();

    const findProduct = (element: IProduct) => element.id === product.id;
    console.log(findProduct)
    //nastavice se
  }

  // delete product
  static deleteProduct(productId: string) {
    const products = gerProductsFromLocalStorage();

    const updatedProducts = products.filter((item: IProduct) => item.id !== productId);

    localStorage.setItem('products', JSON.stringify(updatedProducts));
  }

}

const gerProductsFromLocalStorage = (): IProduct[] | [] => {
  const products = localStorage.getItem('products');

  if (products !== null) {
    return JSON.parse(products);
  }
  else {
    return [];
  }
}