import { Component } from '../core/component';
import { apiService } from '../services/api.service';
import TransformService from '../services/transform.service';
import renderPost from '../templates/post.templates';

export default class PostComponent extends Component {

  constructor( id, { loader } ) {
    super( id );
    this.loader = loader;
  }

  init() {
    this.$element.addEventListener( 'click', handlerClick.bind( this ) );
  }

  async onShow() {
    this.loader.show();
    const data = await apiService.fetchPosts();
    const posts = TransformService.FBObjectToArray( data );
    this.loader.hide();
    const html = posts.map( post => renderPost( post ) );

    this.$element.insertAdjacentHTML( 'afterbegin', html.join( ' ' ) );
  }

  onHide() {
    this.$element.innerHTML = '';
  }
}

function handlerClick( event ) {
  const $element = event.target;
  const post = {
    id: $element.dataset.id,
    title: $element.dataset.title
  };

  if ( post.id ) {
    let favorites = JSON.parse( localStorage.getItem( 'favorites' ) ) || [];

    if ( favorites.includes( post ) ) {
      $element.textContent = 'Сохранить';
      $element.classList.remove( 'button-danger' );
      $element.classList.add( 'button-primary' );
      favorites = favorites.filter( currentPost => post.id !== currentPost.id )
    } else {
      $element.textContent = 'Удалить';
      $element.classList.remove( 'button-primary' );
      $element.classList.add( 'button-danger' );
      favorites.push( post );
    }

    localStorage.setItem( 'favorites', JSON.stringify( favorites ) );
  }
}
