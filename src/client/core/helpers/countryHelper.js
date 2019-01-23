import countriesJSON from './countries';

class CountryHelper {
  static getCountryCode(countryName) {
    // eslint-disable-next-line no-prototype-builtins
    if (countriesJSON.hasOwnProperty(countryName)) {
      return countriesJSON[countryName];
    }
    return countryName;
  }
}
export default CountryHelper;
