export let products = [
  {
    title: "puerta exterior",
    price: 1500,
    stock: 10,
    description: "puerta de exterior de madera",
    category: "puertas",
    img: "https://www.conely.es/wp-content/uploads/2022/07/puerta-entrada-grande.jpg",
  },
  {
    title: "puerta exterior mas linda",
    price: 2500,
    stock: 10,
    description: "puerta de exterior de madera mas linda",
    category: "puertas",
    img: "https://www.conely.es/wp-content/uploads/2022/07/puerta-entrada-grande.jpg",
  },
  {
    title: "ventana 60 x 40",
    price: 5500,
    stock: 10,
    description: "ventana de banio",
    category: "ventanas",
    img: "https://http2.mlstatic.com/D_NQ_NP_962908-MLU74102523288_012024-O.webp",
  },
  {
    title: "ventana 200 x 120",
    price: 300,
    stock: 10,
    description: "ventana de comedor pero mas grande",
    category: "ventanas",
    img: "https://http2.mlstatic.com/D_NQ_NP_962908-MLU74102523288_012024-O.webp",
  },
  {
    title: "ventana 230 x 300",
    price: 2000,
    stock: 10,
    description: "ventana de comedor",
    category: "ventanas",
    img: "https://http2.mlstatic.com/D_NQ_NP_962908-MLU74102523288_012024-O.webp",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 500);
    } else {
      reject("No hay productos");
    }
  });
};
