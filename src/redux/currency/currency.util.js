export const applyFxRate = (price, langCode) => {

  // todo - fetch fx rate from an API.

  if (langCode !== 'default') {
    if (langCode === 'de') {
      price = Math.ceil(price * 0.89);
    }
    else if (langCode === 'en-gb') {
      price = Math.ceil(price * 0.80);
    }
  }

  return price;
}