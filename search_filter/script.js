const resultId = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = []

getData();

filter.addEventListener("input", (e) => {
    filterData(e.target.value);
})

async function getData() {
    const response = await fetch("https://randomuser.me/api?results=50");
    const { results } = await response.json(); //destructuring results property which is in API data.
    // Clear result
    resultId.innerHTML = '';
    results.forEach(user => {
        const li = document.createElement("li");
        listItems.push(li);
        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name, user.name.first}">
                <div class="user-info">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city},${user.location.country}</p>
                </div>
        `
        resultId.appendChild(li);
    })
}

function filterData(searchTerm) {
    //listItems is an array of li.
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove("hide");
        }
        else {
            item.classList.add("hide");
        }
    })
}