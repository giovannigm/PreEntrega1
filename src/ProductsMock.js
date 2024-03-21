export const products = [
  {
    title: "ventana 60 X 40",
    price: 1500,
    description: "ventana de baño en aluminio ",
    img: "https://http2.mlstatic.com/D_NQ_NP_962908-MLU74102523288_012024-O.webp",
    stock: 12,
    category: "ventanas",
  },
  {
    title: "ventana 120 X 100",
    price: 1900,
    description: "ventana de comedor en aluminio",
    img: "https://http2.mlstatic.com/D_NQ_NP_962908-MLU74102523288_012024-O.webp",
    stock: 10,
    category: "ventanas",
  },
  {
    title: "puerta de baño",
    price: 2800,
    description: "puerta de baño, en aluminio",
    img: "https://www.conely.es/wp-content/uploads/2022/07/puerta-entrada-grande.jpg",
    stock: 10,
    category: "puertas",
  },
  {
    title: "puerta exterior",
    price: 300,
    description: "puerta de exterior de madera ",
    img: "https://www.conely.es/wp-content/uploads/2022/07/puerta-entrada-grande.jpg",
    stock: 5,
    category: "puertas",
  },
  {
    title: "puerta exterior mas linda",
    price: 500,
    description: "puerta de exterior de madera mas linda",
    img: "https://www.conely.es/wp-content/uploads/2022/07/puerta-entrada-grande.jpg",
    stock: 4,
    category: "puertas",
  },
  {
    title: "ventana 200 X 120",
    price: 5500,
    description: "ventana de comedor pero mas grande",
    img: "https://http2.mlstatic.com/D_NQ_NP_962908-MLU74102523288_012024-O.webp",
    stock: 11,
    category: "ventanas",
  },
];

export const GetProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      resolve(products);
    } else {
      reject("No hay Productos");
    }
  });
};

export const GetProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);
      if (item) {
        resolve(item);
      } else {
        reject(`No se encuentra el producto con id: ${id}`);
      }
    } else {
      reject("No hay Productos");
    }
  });
};
