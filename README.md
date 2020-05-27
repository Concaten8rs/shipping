# ETV-shipping
Shipping component

-Clicking SHIP IT will trigger a pop-up
-Image Carousel with suggested products
-Randomized for each product

## Server API

### Get product shipping info
  * GET `/api/products/:id`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "productId": "Number",
      "recommended": [
        {
          "name": "String",
          "price": "Number",
          "image": "String"
        },
        {
          "name": "String",
          "price": "Number",
          "image": "String"
        }
      ],
      "price": "Number",
      "zip": ["Numbers"],
      "image": "String"
    }
```


### Add product shipping info
  * POST `/products`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "productId": "Number",
      "productName": "String",
      "recommended": ["Numbers"],
      "price": "Number",
      "zip": ["Numbers"],
      "image": "String"
    }
```


### Update product shipping info
  * PATCH `/products/:id`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "productId": "Number",
      "productName": "String",
      "recommended": ["Numbers"],
      "price": "Number",
      "zip": ["Numbers"],
      "image": "String"
    }
```


### Delete product
  * DELETE `/products/:id`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `204`
