const row = document.querySelector('#row');
const addArticleBtn = document.querySelector('#addArticleBtn');
const addArticleForm = document.querySelector('.add-article-form');
const articles = document.querySelector('.articles');
const discardArticle = document.querySelector('#discardArticle');


addArticleBtn.addEventListener('click', () => {
    addArticleForm.style.display = 'block';
    articles.style.display = 'none';
})

discardArticle.addEventListener('click', () => {
    addArticleForm.style.display = 'none';
    articles.style.display = 'block';
})


let currentPage = 1;

const url = 'http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article'



// Get article from API
const getAllArticles = async () => {
    try {
        const response = await fetch( url + '?page=1&limit=12');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data = displayArticles(data);
    } catch (error) {
        console.log('Error with message', error.statusText)
    }
};

const displayArticles = (articles) =>{
    articles.map((article) => {
        const column = document.createElement('div');
        column.className = 'col'
        column.innerHTML = `
        <div class="article-card">
            <img class="article-avatar" alt="Thumbnail [100%x225]" 
            src="${article.avatar}">
            <div class="article-body">
                <p class="article-title">${article.title}</p>
                <div class="article-date">
                    <button type="button" class="btn">View</button>
                    <small class="">9 mins</small>
                </div>
            </div>
        </div>
    `
    row.appendChild(column);
    })
}

getAllArticles();


const addArticle = document.querySelector('#addArticle');

addArticle.addEventListener('submit', (e) => {
    e.preventDefault();
   

    let author = document.querySelector('#author');
    let title = document.querySelector('#title');
    let urlInput = document.querySelector('#url');

    const data = {
        author: author.value,
        title: title.value,
        url: urlInput.value,
    };

    createNewArticle(data);
    addArticleForm.style.display = 'none';
    articles.style.display = 'block';
})

//Create new article
const createNewArticle = async (data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        window.alert('Article Successfully Created')
    } catch (error) {
        console.log('Error with message', error.statusText)
    }
};