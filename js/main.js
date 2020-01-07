const row = document.querySelector('#row');
// const column = document.querySelector('#column');


const getAllArticles = () => {
    fetch('http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article?page=1&limit=15')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.map((dd) => {
            const column = document.createElement('div');
            column.className = 'col'
            column.innerHTML = `
            <div class="article-card">
                <img class="article-avatar" alt="Thumbnail [100%x225]" 
                src="${dd.avatar}">
                <div class="article-body">
                    <p class="article-title">${dd.title}</p>
                    <div class="article-date">
                        <button type="button" class="btn">View</button>
                        <small class="">9 mins</small>
                    </div>
                </div>
            </div>
        `
        row.appendChild(column);
        })
        
    });
    
};

getAllArticles();