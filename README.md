#  ProductsCart README

## Project Title: ProductsCart

### Description:
ProductsCart is an eCommerce website developed using React, Tailwind CSS, and Parcel Bundler. It fetches all product data from DummyJSON APIs. The website features protected routes for the Home and Cart pages, ensuring that users who are not logged in won't have access. Authentication is implemented using the DummyJSON auth API.

### External Libraries Used:
1. **react-router-dom** - For providing routing functionality.
2. **js-cookie** - Used to store the authentication token in cookies for secure user sessions.
3. **axios** - Employed for making HTTP requests.

### Setup and Usage:
1. Clone the repository to your local machine using the git clone link.
2. Install npm by running the command `npm install`.
3. For additional safety, install the required libraries - axios, react-router-dom, and js-cookie - by executing the command `npm install axios react-router-dom js-cookie`.
4. Install Tailwind CSS (refer to their official documentation for installing Tailwind CSS with Parcel).
5. To start the project, use the command `npm start`.

### User Access:
After logging in, users gain access to the Home and Cart Pages.

### Features:
1. **Search Filter Feature:** On the Home page, a search filter is available. It filters product results based on the provided text.
2. **Filter Based on Price:** Products can be filtered based on their price by making a selection.
3. **Add to Cart and Remove from Cart:** Each product card contains "Add to Cart" and "Remove from Cart" buttons. Clicking "Add to Cart" immediately populates the product in the Cart page. Similarly, clicking "Remove" removes the product from the cart.

### Troubleshooting:
If you encounter any errors, such as "module not found," please follow these steps:
1. Delete the `node_modules`, `dist`, and `.parcel-cache` directories.
2. Reinstall npm using the command `npm install`.
3. Restart the project using `npm start`.

### **Thank You!**