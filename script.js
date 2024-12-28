let menu = document.querySelector('#menubars');
let navbar = document.querySelector('.nav-bar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');


}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');


}

document.querySelector('#search-icon').onclick= () =>{
    document.querySelector('#search-form').classList.toggle('active');


}

document.querySelector('#close').onclick= () =>{
    document.querySelector('#search-form').classList.remove('active');


}


        function addToOrder(itemName) {
            alert(itemName + ' has been added to your order!');
        }
 
// Initialize cart
let cart = [];
let cartDropdown = document.getElementById('cart-dropdown');
let cartIcon = document.getElementById('cart-icon');
let cartItemsList = document.getElementById('cart-items');
let totalPriceElement = document.getElementById('total-price');
let orderNowButton = document.getElementById('order-now');

// Toggle cart visibility
cartIcon.onclick = function () {
    cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
};

// Function to update the cart display
function updateCart() {
    cartItemsList.innerHTML = ''; // Clear previous cart content
    let totalPrice = 0;

    // Add each item to the cart list
    cart.forEach((item, index) => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₱${item.price.toFixed(2)}`;

        // Add a "Remove" button
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.onclick = function () {
            removeFromCart(index);
        };

        listItem.appendChild(removeButton);
        cartItemsList.appendChild(listItem);

        totalPrice += item.price;
    });

    // Update total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Function to add an item to the cart
function addToOrder(itemName, itemPrice) {
    // Add item to the cart
    cart.push({ name: itemName, price: itemPrice });

    // Notify the user
    alert(`${itemName} has been added to your order!`);

    // Update the cart display
    updateCart();
}

// Function to remove an item from the cart
function removeFromCart(index) {
    // Remove item from the cart
    cart.splice(index, 1);

    // Update the cart display
    updateCart();
}

// Hook "Add to Order" buttons
document.querySelectorAll('.menu-item .overlay button').forEach((button) => {
    let itemName = button.parentElement.previousElementSibling.querySelector('h3').textContent;
    let itemPrice = parseFloat(button.parentElement.previousElementSibling.querySelector('p').textContent.replace('₱', ''));

    button.onclick = function () {
        addToOrder(itemName, itemPrice);
    };
});

// "Order Now" button functionality
orderNowButton.onclick = function () {
    if (cart.length === 0) {
        alert("Your cart is empty! Please add items to your order.");
    } else {
        alert("Thank you for your order! We will process it shortly.");
        cart = []; // Clear the cart
        updateCart(); // Update the cart display
    }
};


const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');

let currentIndex = 0;

const updateCarousel = () => {
    const slideWidth = slides[0].clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
};

const showPrevSlide = () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateCarousel();
};

const showNextSlide = () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
};

// Add event listeners
prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

// Update carousel on window resize
window.addEventListener('resize', updateCarousel);

// Initialize carousel
updateCarousel();

document.getElementById("close-cart").addEventListener("click", function () {
    const cartDropdown = document.getElementById("cart-dropdown");
    cartDropdown.style.display = "none"; // Hides the cart
  });
   