export enum UpgradeTypes {
	UPGRADE = 'upgrade',
	UPGRADE_STREAKS = 'upgrade_streaks'
}

export interface IUpgradeItem {
	rank: number
	stepsList: {
		balance?: number
		items?: {
			count: number
			totalPrice: number
		}
		nextProbability?: number
		isTruncate?: boolean
	}[]
}

export enum Periods {
	TODAY = 'today',
	MONTH = 'month',
	THREE_MONTHS = '3 months',
	HALF_YEAR = 'half year',
	YEAR = 'year'
}
