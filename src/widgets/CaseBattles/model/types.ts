export enum CaseBattleTypes {
	ACTIVE_BATTLES = 'active_battles',
	TOP_BATTLES = 'top_battles'
}

export enum BattleVariants {
	ONE_VS_ONE = 'one-vs-one',
	TWO_VS_TWO = 'two-vs-two'
}

export interface INewBattleCase {
	image: string
	title: string
	price: string
}
