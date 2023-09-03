

function searchProducts() {
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.toLowerCase();

    // Perform filtering logic here based on your product data
    // Update the displayed products accordingly
    // You may also use an AJAX request to fetch products from a server
}

// Add an event listener to trigger search on input change
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', searchProducts);

// Function to toggle dropdown menus
function toggleDropdown(dropdown) {
    dropdown.classList.toggle('active');
}

// Add event listeners to toggle dropdowns
const accountDropdown = document.querySelector('.nav-singin');
const ordersDropdown = document.querySelector('.nav-return');

accountDropdown.addEventListener('click', () => {
    const accountList = document.querySelector('.account-list');
    toggleDropdown(accountList);
});

ordersDropdown.addEventListener('click', () => {
    const ordersList = document.querySelector('.orders-list');
    toggleDropdown(ordersList);
});
// Example shopping cart implementation
const cart = [];

function addToCart(product) {
    cart.push(product);
    // Update the cart UI and total price here
}

// Example usage:
const addToCartButton = document.querySelector('.add-to-cart-button');
addToCartButton.addEventListener('click', () => {
    const product = {
        name: 'Product Name',
        price: 10.99,
        quantity: 1,
    };
    addToCart(product);
});
// Function to show product details in a modal
function showModal(product) {
    // Create and display a modal with product details
}

// Example usage:
const productListing = document.querySelector('.product-listing');
productListing.addEventListener('click', () => {
    const product = {
        name: 'Product Name',
        description: 'Product Description',
        image: 'product_image.jpg',
    };
    showModal(product);
});

