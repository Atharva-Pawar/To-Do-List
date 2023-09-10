const inputValue = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ulList = document.querySelector("ul");
const itemList = []; // Initialize the array to store items

// Load items from local storage when the page loads
window.addEventListener('load', () => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    itemList.push(...storedItems);
    renderItems(); // Call the render function
});

// Function to render the list items
function renderItems() {
    ulList.innerHTML = "";

    itemList.forEach((itemText, index) => {
        const createLI = document.createElement("li");
        createLI.innerHTML = `${itemText}<button class="btn-remove" data-index="${index}">Remove</button>`;
        ulList.appendChild(createLI);

        const removeBtn = createLI.querySelector(".btn-remove");
        removeBtn.addEventListener('click', (event) => {
            const indexToRemove = event.target.getAttribute("data-index");
            itemList.splice(indexToRemove, 1);
            renderItems(); // Re-render the list
            updateLocalStorage(); // Update local storage
        });
    });
}

// Update local storage with the current list of items
function updateLocalStorage() {
    localStorage.setItem("items", JSON.stringify(itemList));
}

addBtn.addEventListener('click', () => {
    const inputText = inputValue.value.trim();

    if (inputText !== "") {
        itemList.push(inputText); // Add item to the array
        renderItems(); // Re-render the list
        updateLocalStorage(); // Update local storage
        inputValue.value = ""; // Clear input field
    }
});