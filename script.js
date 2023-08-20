const inputValue = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ulList = document.querySelector("ul");

addBtn.addEventListener('click', () => {
    const inputText = inputValue.value.trim();

    if (inputText !== "") {
        const createLI = document.createElement("li");
        createLI.innerHTML = `${inputText}<button class="btn-remove">Remove</button>`
        ulList.appendChild(createLI);

        inputValue.value = "";

        const removeBtn = createLI.querySelector(".btn-remove")

        removeBtn.addEventListener('click', () => {
            ulList.removeChild(createLI);
        });
    }
});        