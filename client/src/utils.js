/**
 * A utils functions file for shared functions that
 * are not components.
 *
 */

/**
 * A function to bring static asset into the app.
 *
 * @param imageUrl
 * @constructor
 */
export const AssetLocation = (imageUrl) => {
  return require(`./assets/${imageUrl}`);
};