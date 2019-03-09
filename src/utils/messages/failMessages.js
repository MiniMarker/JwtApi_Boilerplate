/**
 * @author Christian Marker
 * @date 2019-03-09
 */

const missingRequiredField = field => `Missing required field: ${field}`
const resourceNotFound = (resource, field, value) =>
	`Can't find ${resource} with ${field}: ${value}`
const unauthorizedAction = username =>
	`${username} is not authorized to access this content`

module.exports = {
	missingRequiredField,
	resourceNotFound,
	unauthorizedAction
}
