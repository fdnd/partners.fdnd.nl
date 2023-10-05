export function getFullName({ firstName, surname, prefix }) {
	return `${firstName}${prefix ? ` ${prefix} ` : ''} ${surname}`;
}
