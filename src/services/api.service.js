class ApiService {

  constructor( baseUrl ) {
    this.url = baseUrl;
  }

  async createPost( post ) {
    const request = new Request( `${this.url}/posts.json`, {
      method: 'post',
      body: JSON.stringify( post )
    } );

    try {
      return useRequest( request );
    } catch ( error ) {
      console.log( error );
    }
  }

  async fetchPosts() {
    try {
      const request = new Request( `${this.url}/posts.json`, {
        method: 'get'
      } );

      return useRequest( request );
    } catch ( error ) {

    }
  }

  async fetchPostsById( id ) {
    try {
      const request = new Request( `${this.url}/posts/${id}.json`, {
        method: 'get'
      } );

      return useRequest( request );
    } catch ( error ) {

    }
  }
}

async function useRequest( request ) {
  const response = await fetch( request );
  return await response.json();
}

export const apiService = new ApiService( 'https://jscore-blog.firebaseio.com/' );
