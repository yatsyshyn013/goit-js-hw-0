const findCategory = document.querySelectorAll('.item');
console.log("Number of categories:", findCategory.length);

const items = [...findCategory];
items.map(element => {
    console.log("Category:", element.firstElementChild.textContent);
    console.log("Elements:", element.lastElementChild.childElementCount);
})