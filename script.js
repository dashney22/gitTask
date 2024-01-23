let savedItemsCount = 0;

// Function to handle "Save for Later" functionality
function saveAchievement(identifier, title) {
    // Get the saved items from localStorage
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

    // Check if the item is already saved
    const existingItem = savedItems.find(item => item.identifier === identifier);

    if (!existingItem) {
        // If the item is not already saved, add it to the list
        savedItems.push({ identifier, title });

        // Update the localStorage
        localStorage.setItem('savedItems', JSON.stringify(savedItems));

        // Increment the count and display an alert
        savedItemsCount++;
        alert(`Item saved for later! Total items: ${savedItemsCount}`);

    } else {
        // If the item is already saved, show an alert
        alert('Item is already saved for later.');
    }
    updateSavedItemsCountInNavbar();
}

// Function to display saved items on the saveForLater.html page
function displaySavedItems() {
    // Get the saved items from localStorage
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

    // Get the container where saved items will be displayed
    const savedItemsContainer = document.getElementById('savedItemsContainer');

    // Clear the container before displaying items
    savedItemsContainer.innerHTML = '';

    // Display each saved item
    savedItems.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = item.title;
        savedItemsContainer.appendChild(itemElement);
    });
}

// Display saved items when the saveForLater.html page is loaded
document.addEventListener('DOMContentLoaded', displaySavedItems);
// Function to submit a comment
function submitComment() {
    // Get the comment from the textarea
    const commentText = document.getElementById('comment').value;

    // Check if the comment is not empty
    if (commentText.trim() !== '') {
        // Get the table body where comments will be displayed
        const commentTableBody = document.getElementById('commentTableBody');

        // Create a new row
        const newRow = commentTableBody.insertRow();

        // Create two cells for user and comment
        const userCell = newRow.insertCell(0);
        const commentCell = newRow.insertCell(1);
        const actionCell = newRow.insertCell(2)

        // For simplicity, let's assume the user is 'Anonymous'
        userCell.innerHTML = 'Anonymous';
        commentCell.innerHTML = commentText;
        actionCell.innerHTML = `<button class="btn btn-danger"> Delete </button>`

        // Clear the textarea after submitting the comment
        document.getElementById('comment').value = '';
    } else {
        // Show an alert if the comment is empty
        alert('Please enter a comment before submitting.');
    }
}


// Function to handle "Like" button click
function likeAchievement(achievement) {
    // Find the button that was clicked
    const likeButton = event.target;

    // Check if the button contains 'liked' class
    const isLiked = likeButton.classList.contains('liked');

    if (isLiked) {
        // If already liked, change text to 'Like' and remove 'liked' class
        likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i> Like';
        likeButton.classList.remove('liked');
    } else {
        // If not liked, change text to 'Liked' and add 'liked' class
        likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked';
        likeButton.classList.add('liked');
    }

    // You can implement further like functionality here, e.g., update a counter or send a request to a server
}

// Function to handle contact form submission
function submitContactForm() {
    // You can implement contact form submission logic here
    // For now, let's just show an alert
    alert('Contact form submitted!');
}


// Nav bar updates
function updateSavedItemsCountInNavbar() {
    const navbarCountElement = document.getElementById('savedItemsCountInNavbar');
    if (navbarCountElement) {
        navbarCountElement.innerText = savedItemsCount;
    }
}
updateSavedItemsCountInNavbar();