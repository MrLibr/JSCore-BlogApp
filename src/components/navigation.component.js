import { Component } from '../core/component';

export default class NavigationComponent extends Component {

  constructor( id ) {
    super( id );
    this.tabs = []
  }

  init() {
    this.$element.addEventListener( 'click', handlerTabClick.bind( this ) );
  }

  registerTabs( tabs ) {
    this.tabs = tabs;
  }
}

function handlerTabClick( event ) {
  event.preventDefault();

  if ( event.target.classList.contains( 'tab' ) ) {
    Array.from( this.$element.querySelectorAll( '.tab' ) )
      .forEach( element => element.classList.remove( 'active' ) );
    event.target.classList.add( 'active' )

    const activeTab = this.tabs.find( tab => tab.name === event.target.dataset.name );
    this.tabs.forEach( tab => tab.component.hide() );
    activeTab.component.show();
  }
}
