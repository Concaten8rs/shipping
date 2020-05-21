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
      "productId": 253,
      "recommended": [
        {
          "name": "Revlon Hairbrush",
          "price": 3.99,
          "image": "URL"
        },
        {
          "name": "Ibuprofen 200mg",
          "price": 4.89,
          "image": "URL"
        }
      ],
      "price": 7.50,
      "zip": [95122, 31244, 51255, 51512, 12311],
      "image": "URL"
    }
```


### Add product shipping info
  * POST `/products`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "productId": "number",
      "productName": "string",
      "recommended": ["array", "of", "ids"],
      "price": "number",
      "zip": ["array", "of", "zips"],
      "image": "url"
    }
```


### Update product shipping info
  * PATCH `/products/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "productId": "number",
      "productName": "string",
      "recommended": ["array", "of", "ids"],
      "price": "number",
      "zip": ["array", "of", "zips"],
      "image": "url"
    }
```


### Delete product
  * DELETE `/products/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `204`
