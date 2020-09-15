export default class Validators {

  static required( value = '' ) {
    return value && value.trim();
  }

  static minLength( minLength ) {
    return value => {
      return value.length >= minLength;
    }
  }
}
