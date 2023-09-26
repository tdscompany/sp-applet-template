const key = 'terms'

export const persistTerms = {
	set: (isAccepted: boolean) => {
		if (isAccepted) {
			localStorage.setItem(key, 'accepted')
		}
	},

	isAccepted: () => {
		return !!localStorage.getItem(key)
	},

	clear: () => {
		localStorage.removeItem(key)
	},
}
