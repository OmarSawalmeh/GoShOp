# **GoShOp**
Full Stack Application with MongoDB, Express, React and NodeJS (MERN Stack)

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
## **Backend:**
   - **Model (Schema):**
      - user
      - products
      - orders

         > Add ''user._id'' to each product to Connect between products and user 
       ---
   - **Routes :**
      - Get All Products 
         -  @desc     Fetch all products
         -  @route    GET `/api/products`
         -  @access   Public
      - Get Single Products    
         -  @desc     Fetch single product
         -  @route    GET `/api/products/:id`
         -  @access   Public
       ---
   - **Middleware :**
      - Not Found `404`
      - Error Handler
---




