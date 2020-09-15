export default class TransformService {

  static FBObjectToArray( data ) {
    return Object.keys( data ).map( key => {
      return {
        id: key,
        ...data[ key ],
      }
    } )
  }
}
