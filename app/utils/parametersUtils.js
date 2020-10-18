import iso from 'iso-3166-1';
import countries from './countries.json';
import categories from './categories.json';

export const getCountries = () => {
  const cntList = [];
  let i = 0;
  countries.forEach(cnt => {
    cntList.push({
      name: resolveCountryName(cnt),
      code: cnt,
      key: i,
    });
    i += 1;
  });
  return cntList;
};

export const getCategories = () => {
  const catList = [];
  let i = 0;
  categories.forEach(cat => {
    catList.push({
      name: resolveCategoryName(cat),
      code: cat,
      key: i,
    });
    i += 1;
  });
  return catList;
};

const resolveCategoryName = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const resolveCountryName = alpha2 => iso.whereAlpha2(alpha2).country;

// export default { getCountries, getCategories };
