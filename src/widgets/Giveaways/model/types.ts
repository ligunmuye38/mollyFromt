export enum GiveawaysFilters {
	ACTIVE_GIVEAWAYS = 'active_giveaways',
	GIVEAWAYS_HISTORY = 'giveaways_history',
	MY_PARTICIPATION = 'my_participation',
	MY_GIVEAWAYS = 'my_giveaways'
}

export enum GiveawayStatus {
	COMPLETED = 'completed',
	ON_PROGRESS = 'on_progress'
}

export interface IGiveaway {
	prizes: number
	total: string
	items: {
		title: string
		name: string
		icon: string
		price: string
	}[]
	creator: {
		icon: string
		name: string
	}
	participants: number
	status: GiveawayStatus
	endBy?: string
	players: {
		total: number
		participants: number
	}
}
