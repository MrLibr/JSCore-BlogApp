import { Component } from '../core/component';

export default class HeaderComponent extends Component {

  constructor( id ) {
    super( id );
  }

  init() {
    if ( localStorage.getItem( 'isVisited' ) ) {
      this.hide();
    }

    const btn = this.$element.querySelector( '.js-header-start' );
    btn.addEventListener( 'click', buttonHandler.bind( this ) );
  }
}

function buttonHandler() {
  localStorage.setItem( 'isVisited', JSON.stringify( true ) );
  this.hide();
}
