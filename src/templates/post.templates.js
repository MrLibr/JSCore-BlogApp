export default function renderPost( post, isPost = true ) {
  const isFavorite = ( JSON.parse( localStorage.getItem( 'favorites' ) ) || [] ).includes( post.id )
  const type = `<li class="tag ${post.type === 'news' && 'tag-blue'} tag-rounded">${post.type === 'news' ? 'Новость' : 'Заметка'}</li>`;

  const btn =
    `<button class="button-round button-small ${isFavorite ? 'button-danger' : 'button-primary'}" data-id=${post.id} data-title=${post.title}>${isFavorite ? 'Удалить' : 'Сохранить'}</button>`;

  return `<div class="panel">
          <div class="panel-head">
            <p class="panel-title">${post.title}</p>
            <ul class="tags">
              ${type}
            </ul>
          </div>
          <div class="panel-body">
            <p class="multi-line">${post.fulltext}</p>
          </div>
          <div class="panel-footer w-panel-footer">
            <small>${post.date}</small>
            ${isPost ? btn : ''}
          </div>
        </div>`
}
