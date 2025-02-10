import { INewBattleCase, IPlayer } from './types'

export const casesIcons: string[] = [
	'/images/case/case-full-1.png',
	'/images/case/case-full-2.png',
	'/images/case/case-full-3.png',
	'/images/case/case-full-4.png',
	'/images/case/case-full-5.png',
	'/images/case/case-full-1.png',
	'/images/case/case-full-2.png',
	'/images/case/case-full-3.png',
	'/images/case/case-full-4.png',
	'/images/case/case-full-5.png'
]

export const newBattleItems: INewBattleCase[] = [
	{
		image: '/images/case/case-full-1.png',
		price: '15.50',
		title: 'Cases Magic'
	},
	{
		image: '/images/case/case-full-1.png',
		price: '15.50',
		title: 'Cases Magic'
	},
	{
		image: '/images/case/case-full-1.png',
		price: '15.50',
		title: 'Cases Magic'
	},
	{
		image: '/images/case/case-full-1.png',
		price: '15.50',
		title: 'Cases Magic'
	},
	{
		image: '/images/case/case-full-1.png',
		price: '15.50',
		title: 'Cases Magic'
	},
	{
		image: '/images/case/case-full-1.png',
		price: '15.50',
		title: 'Cases Magic'
	},
	{
		image: '/images/case/case-full-1.png',
		price: '15.50',
		title: 'Cases Magic'
	},
	{
		image: '/images/case/case-full-1.png',
		price: '15.50',
		title: 'Cases Magic'
	},
	{
		image: '/images/case/case-full-1.png',
		price: '15.50',
		title: 'Cases Magic'
	},
	{
		image: '/images/case/case-full-1.png',
		price: '15.50',
		title: 'Cases Magic'
	},
	{
		image: '/images/case/case-full-1.png',
		price: '15.50',
		title: 'Cases Magic'
	},
	{
		image: '/images/case/case-full-1.png',
		price: '15.50',
		title: 'Cases Magic'
	}
]

export const players: IPlayer[] = [
	{
		name: 'Djorgick',
		isCreator: true,
		botOffer: true,
		isReady: true
	},
	{
		name: 'Knopchik',
		isCreator: false,
		botOffer: true,
		isReady: false
	},
	{
		name: 'Djorgick',
		isCreator: false,
		botOffer: false,
		isReady: true
	}
]

export const caseBattles = [
	{
		round: 3,
		value: '100 000.99',
		joined: true,
		joinedPlayers: 4,
		isLive: true,
		mode: {
			crazy: true
		}
	},
	{ round: 1, value: '100.99', joined: false, joinedPlayers: 4, isLive: false },
	{ round: 1, value: '100.99', joined: false, joinedPlayers: 2, isLive: false },
	{ round: 1, value: '100.99', joined: false, joinedPlayers: 2, isLive: false },
	{ round: 1, value: '100.99', joined: false, joinedPlayers: 2, isLive: false },
	{ round: 1, value: '100.99', joined: false, joinedPlayers: 2, isLive: false },
	{ round: 1, value: '100.99', joined: false, joinedPlayers: 2, isLive: false }
]

export const topBattleItems = [
	{ price: '100 000.99', rank: 1, value: { times: '6.11x', usd: '100 000.99' } },
	{ price: '100 000.99', rank: 2, value: { times: '6.11x', usd: '100 000.99' } },
	{ price: '100 000.99', rank: 3, value: { times: '6.11x', usd: '100 000.99' } },
	{ price: '100 000.99', rank: 4, value: { times: '6.11x', usd: '100 000.99' } },
	{ price: '100 000.99', rank: 5, value: { times: '6.11x', usd: '100 000.99' } },
	{ price: '100 000.99', rank: 6, value: { times: '6.11x', usd: '100 000.99' } },
	{ price: '100 000.99', rank: 7, value: { times: '6.11x', usd: '100 000.99' } },
	{ price: '100 000.99', rank: 8, value: { times: '6.11x', usd: '100 000.99' } }
]
