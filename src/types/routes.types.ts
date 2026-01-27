export interface TUser {
	role: string
}

export interface TRoute {
	title: string
	items: {
		title: string
		url: string
	}[]
}
