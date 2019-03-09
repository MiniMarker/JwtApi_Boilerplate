/**
 * @author Christian Marker
 * @date 2019-03-09
 */

export const missingRequiredField = field => `Missing required field: ${field}`;
export const resourceNotFound = (resource, field, value) =>
	`Can't find ${resource} with ${field}: ${value}`;
export const unauthorizedAction = username =>
	`${username} is not authorized to access this content`;
