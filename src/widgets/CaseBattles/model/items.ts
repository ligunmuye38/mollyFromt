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
