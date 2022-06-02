let categories = document.getElementById('category');

async function getCategories() {
    let urlCategories = 'https://api.publicapis.org/categories';
    let response = await fetch(urlCategories).catch(err => alert(err));
    let result = await response.json();

    for (let category of result.categories) {
        let optionCategory = document.createElement('option');
        optionCategory.value = category;
        optionCategory.innerHTML = category
        categories.appendChild(optionCategory)
    }

    categories.addEventListener('click', async () => {
        let categoryUrl = `https://api.publicapis.org/entries?category=${categories.value}`;
        let titleCategory = document.getElementById('title');
        titleCategory.innerHTML = '';
        let titleResponse = await fetch(categoryUrl).catch(error => alert(error));
        let titleResult = await titleResponse.json();

        for (let title of titleResult.entries) {
            let titleOption = document.createElement('option');
            titleOption.value = title.API;
            titleOption.innerText = title.API;
            titleCategory.appendChild(titleOption);
        }
    });
}

getCategories()