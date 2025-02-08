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
	}[]
}
