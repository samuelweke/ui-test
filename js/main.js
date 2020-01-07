const row = document.querySelector('#row');
// const column = document.querySelector('#column');

const url = 'http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article'

const getAllArticles = () => {
    fetch( url + '?page=1&limit=15')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        return response.json();
    })
    .then(data => displayArticles(data))
    .catch(error => console.log('Error with message', error.statusText))
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