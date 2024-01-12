const { fakerDE: faker } = require('@faker-js/faker');
faker.seed(984513174);

function generateDiscount() {
  return faker.number.int({min: 10, max: 50})
}

function generateRating() {
  return faker.number.int({min: 1, max: 5})
}

function generateProductDetailURL(productName) {
  const baseUrl = faker.internet.url({protocol: 'https', appendSlash: true});
  const productSlug = faker.helpers.slugify(productName);
  return baseUrl.concat(productSlug);
}

const generateProducts = () => {
  const products = [];

  for (let i = 1; i <= 16; i++) {
    const productName = faker.commerce.productName();

    const product = {
      id: i,
      brand: faker.company.name(),
      originalProductUrl: generateProductDetailURL(productName),
      name: productName,
      category: faker.helpers.arrayElement(['Furniture', 'Desktops', 'Travel', 'Comics']),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price({min: 10, max: 250, precision:0.01, dec: 2})),
      discount: generateDiscount(),
      imageURL: faker.image.urlPicsumPhotos({width: 512, height: 512}),
      rating: generateRating(),
    };

    products.push(product);
  }

  return {
    meta: {
      total: products.length
    },
    data: products
  };
};

module.exports = generateProducts();