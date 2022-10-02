# **GoShOp**
Full Stack Application with MongoDB, Express, React and NodeJS (MERN Stack)

![screenshot](./asset/ScreenShot.png)
---
## **Connect between `Backend` and `Frontend`**
   - Add This 👇 inside scripts object inside package json: 
   ```js
   "server": "nodemon backend/server",
   "client": "npm start --prefix frontend",
   "dev": "concurrently \"npm run server\" \"npm run client\"",
   // npm i concurrently
   ```
   - `npm run server` to run server.
   - `npm run client` to run frontend.
   - `npm run dev` to run server on port `5000` && run frontend on port `3000`.

---
---
## **Backend:**
   - **Model (Schema):**
      - user
      - products
      - orders

         > Add ''user._id'' to each product to Connect between products and user 
       ---
   - **Routes :**
      - Product Route :
         - Get All Products 
            -  @desc     Fetch all products
            -  @route    GET `/api/products`
            -  @access   Public
         - Get Single Products    
            -  @desc     Fetch single product
            -  @route    GET `/api/products/:id`
            -  @access   Public
         - Delete a product   
            -  @desc     Delete a product
            -  @route    DELETE `/api/products/:id`
            -  @access   Private/Admin
         - Create a product   
            -  @desc     Create a product
            -  @route    POST `/api/products`
            -  @access   Private/Admin
         - Update a product  
            -  @desc     Update a product
            -  @route    PUT `/api/products/:id`
            -  @access   Private/Admin
         - Create new review  
            -  @desc     Create new review
            -  @route    POST `/api/products/:id/reviews`
            -  @access   Private
         - Get top rated products  
            -  @desc     Get top rated products
            -  @route    GET `/api/products/top`
            -  @access   Public

      - User Route :
         - Login ( Auth user & get token ) 
            -  @desc     Auth user & get token
            -  @route    POST `/api/users/login`
            -  @access   Public
         - Register a new user    
            -  @desc     Fetch single product
            -  @route    POST `/api/users`
            -  @access   Public
         - Get user profile    
            -  @desc     GET user profile
            -  @route    GET `/api/users/profile`
            -  @access   Private
         - Update user profile 
            -  @desc     Update user profile
            -  @route    PUT `/api/users/profile`
            -  @access   Private
         - GET all users
            -  @desc     GET all users
            -  @route    GET `/api/users/`
            -  @access   Private/Admin
         - Delete user
            -  @desc     Delete user
            -  @route    DELETE `/api/users/:id`
            -  @access   Private/Admin
         - GET user by ID
            -  @desc     GET user by ID
            -  @route    GET `/api/users/:id`
            -  @access   Private/Admin
         - Update user
            -  @desc     Update user
            -  @route    PUT `/api/users/:id`
            -  @access   Private/Admin
      - Order Route :
         -  Create new order 
            -  @desc     Create new order
            -  @route    POST `/api/orders`
            -  @access   Private
         -  Get order by id
            -  @desc     Get order by id
            -  @route    GET `/api/orders/:id`
            -  @access   Private
         -  Update order to paid
            -  @desc     Update order to paid
            -  @route    PUT `/api/orders/:id/pay`
            -  @access   Private
         -  Get logged in user orders
            -  @desc     Get logged in user orders
            -  @route    PUT `/api/orders/myorders`
            -  @access   Private

      ---
   - **Middleware :**
      - Not Found `404`
      - Error Handler
      - Auth Middleware
      - Admin Middleware
---
---
## **Features**
-  Full featured shopping cart
-  Product reviews and ratings
-  Top products carousel
-  Product pagination
-  Product search feature
-  User profile with orders
-  Admin product management
-  Admin user management
-  Admin Order details page
-  Mark orders as delivered option
-  Checkout process (shipping, payment method, etc)
-  PayPal / credit card integration
-  Database seeder (products & users)

---
---

## **Usage**

### **Env Variables**
Create a .env file in then root and add the following

```js
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### **Install Dependencies (frontend & backend)**

```js
npm install
cd frontend
npm install
```

### **Run**

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```






