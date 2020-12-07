##GET /api/product/:id

query param: id of a product

response body:
{
  _id: 0,
  images: [
    "image-1.jpeg"
  ],
  productName: "A Product Name"
}

##POST /api/product/

query param: id of a product

request body:
{
  _id: 0,
  images: [
    "image-1.jpeg"
  ],
  productName: "A Product Name"
}

response body:
{
  _id: 0,
  images: [
    "image-1.jpeg"
  ],
  productName: "A Product Name"
}

##PUT /api/product/:id

query param: id of a product

request body:
{
  _id: 0,
  images: [
    "updated-image-1.jpeg"
  ],
  productName: "An Updated Product Name"
}

response body:
{
  _id: 0,
  images: [
    "updated-image-1.jpeg"
  ],
  productName: "An Updated Product Name"
}

##DELETE /api/product/:id

query param: id of a produc