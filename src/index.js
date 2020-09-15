import CreateComponent from './components/create.component';
import FavoriteComponent from './components/favorite.component';
import HeaderComponent from './components/header.component';
import LoaderComponent from './components/loader.component';
import NavigationComponent from './components/navigation.component';
import PostComponent from './components/post.component';

const header = new HeaderComponent( 'header' );
const navigation = new NavigationComponent( 'navigation' );
const loader = new LoaderComponent( 'loader' );

const create = new CreateComponent( 'create' );
const posts = new PostComponent( 'posts', { loader } );
const favorite = new FavoriteComponent( 'favorite', { loader } );

navigation.registerTabs( [
  { name: 'create', component: create },
  { name: 'posts', component: posts },
  { name: 'favorite', component: favorite },
] )
