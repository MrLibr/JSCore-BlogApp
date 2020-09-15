import { Component } from '../core/component';
import { apiService } from '../services/api.service';
import renderPost from '../templates/post.templates';

export default class FavoriteComponent extends Component {

  constructor( id, { loader } ) {
    super( id );
    this.loader = loader;
  }

  init() {
    this.$element.addEventListener( 'click', handlerLink.bind( this ) );
  }

  onShow() {
    const favorites = JSON.parse( localStorage.getItem( 'favorites' ) );
    const html = renderList( favorites );
    this.$element.insertAdjacentHTML( 'afterbegin', html );
  }

  onHide() {
    this.$element.innerHTML = '';
  }
}

function renderList( list = [] ) {
  if ( list && list.length ) {
    return `<ul>
      ${(list.map(post => `<li><a href="#" class="js-link" data-id="${post.id}">${post.title}</a></li>`)).join('')}
    </ul>`
  }

  return `<p class="center">Здесь пока ни чего нет</p>`
}

async function handlerLink( event ) {
  event.preventDefault();

  if ( event.target.classList.contains( 'js-link' ) ) {
    this.loader.show();
    const id = event.target.dataset.id;
    this.$element.innerHTML = '';
    const post = await apiService.fetchPostsById( id );

    this.loader.hide();

    this.$element.insertAdjacentHTML( 'afterbegin', renderPost( post, false ) );
  }
}
