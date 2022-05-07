import { IProduct, IFormatManufacturerData, IManufacturer } from './interfaces';
import { getProductsFromLocalStorage, setProductsInLocalStorage } from './utils';
import { manufacturerData } from './data';

export class FakeApi {

  // get all products
  static getProducts(): IProduct[] | [] {
    const products = getProductsFromLocalStorage();

    if (products !== null) {
      return products;
    }
    else {
      return [];
    }
  }

  // get single product
  static getProductById(productId: string): IProduct {
    const products = getProductsFromLocalStorage();
    const product = products.filter((item) => item.id === productId);
    return product[0];
  }

  // create product
  static createProduct(product: IProduct): void {
    const products = getProductsFromLocalStorage();
    const prodId = Math.floor(Math.random() * 100).toString();
    if (products !== null) {
      const updatedProducts = [...products, { ...product, id: prodId.toString() }];
      setProductsInLocalStorage(updatedProducts)
    }
    else {
      setProductsInLocalStorage([{ ...product, id: prodId }])

    }
  }

  // edit (update) product
  static editProduct(newProduct: IProduct): void {
    const products = getProductsFromLocalStorage();
    const productIndex = products.findIndex(item => item.id === newProduct.id);
    products[productIndex] = newProduct;
    setProductsInLocalStorage(products)
  }

  // delete product
  static deleteProduct(productId: string) {
    const products = getProductsFromLocalStorage();
    const updatedProducts = products.filter((item: IProduct) => item.id !== productId);
    setProductsInLocalStorage(updatedProducts)
  }

  // Get chart data
  static getDataForChart_1(): IProduct[] {
    const data = getProductsFromLocalStorage();

    const formatedData = data.sort((n1: IProduct, n2: IProduct) => {
      if (n1.price > n2.price) {
        return 1;
      }
      if (n1.price < n2.price) {
        return -1;
      }
      return 0;
    }).filter((item, index): any => index < 5 || index > data.length - 5)

    return formatedData;
  }

  static getDataForChart_2(): IFormatManufacturerData[] {
    const products = getProductsFromLocalStorage();
    const manufaturers = manufacturerData;

    const formatedData: IFormatManufacturerData[] = manufaturers.map((manufacturer) => {
      let count = 0;
      products.map((product) => {
        if (manufacturer.id === product?.manufacturer?.id) {
          count = count + 1;
        }
        return count;
      })
      return { ...manufacturer, totalProducts: count }
    })
    return formatedData;
  }
}
