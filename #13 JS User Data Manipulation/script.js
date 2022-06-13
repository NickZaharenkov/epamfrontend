let category = document.getElementById('select');

async function getCategories() {

    let categoriesUrl = 'https://api.publicapis.org/category';

    let response = await fetch(categoriesUrl).catch(err => alert(err));
    let result = await response.json();

    for (let category of result.category) {
        let categoryOption = document.createElement('option');
        categoryOption.value = category;
        categoryOption.innerHTML = category
        category.appendChild(categoryOption)
    }
    category.addEventListener('click', async () => {

        let categoryUrl = `https://api.publicapis.org/entries?category=${category.value}`;
        let title = document.getElementById('title');

        title.innerHTML = '';

        let titleResponse = await fetch(categoryUrl).catch(error => alert(error));
        let titleResult = await titleResponse.json();

        for (let title of titleResult.entries) {
            let titleOption = document.createElement('option');
            titleOption.value = title.API;
            titleOption.innerText = title.API;
            title.appendChild(titleOption);
        }
    });
}

getCategories()