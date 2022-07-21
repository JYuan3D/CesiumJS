import Uri from "../ThirdParty/Uri.js";
import defined from "./defined.js";
import DeveloperError from "./DeveloperError.js";

/**
 * Given a URI, returns the last segment of the URI, removing any path or query information.
 * @function getFilenameFromUri
 *
 * @param {String} uri The Uri.
 * @returns {String} The last segment of the Uri.
 *
 * @example
 * //fileName will be"simple.czml";
 * const fileName = Cesium.getFilenameFromUri('/Gallery/simple.czml?value=true&example=false');
 */
function getFilenameFromUri(uri) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(uri)) {
    throw new DeveloperError("uri is required.");
  }
  //>>includeEnd('debug');

  const uriObject = new Uri(uri);
  uriObject.normalize();
  let path = uriObject.path();
  const index = path.lastIndexOf("/");
  if (index !== -1) {
    path = path.substr(index + 1);
  }
  return path;
}
export default getFilenameFromUri;