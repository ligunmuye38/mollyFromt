import { ISelectItem } from '@/shared/ui/Select/Select'

export interface IProfileItem {
	id: number
	icon: React.FC<React.SVGProps<SVGSVGElement>>
	title: string
	link: string
}

// Profie Page

export type TitleType = 'bg' | 'level'

export type ImageBgType = 'yellow' | 'pink' | 'purple' | 'blue' | 'limit_blue'

export interface IBestDropData {
	id: number
	icon?: React.FC<React.SVGProps<SVGSVGElement>>
	title: string
	content: string
	titleIcon?: React.FC<React.SVGProps<SVGSVGElement>>
	titleType?: TitleType
}

export interface IInvestoryItemType {
	id: string
	title: string
	content: string
	percent: number
	picUrl: string
	name: string
	price: string
	type: ImageBgType
}

// Game history profile page

export interface IGameType extends ISelectItem {
	value: string
	icon: React.FC<React.SVGProps<SVGSVGElement>>
}

interface Item {
	name: string
	price: string
	icon: string
}

interface User {
	icon: string
	id: string
}

export interface IOpeningCaseItem {
	name: string
	price: string
	dateOfOpening: string
	prizes: Item[]
}

export interface IUpgradeItem {
	items?: Item[]
	price: string
	dateOfOpening: string
	result?: Item[]
	status: boolean // true for Success, false for Fail
}

export interface ILottoItem {
	bet: string
	date: string
	result?: Item[]
	status: boolean
}

export interface ICaseBattleItem {
	round: number
	allies: User[]
	enemies: User[]
	bet: string
}

export enum TransactionHistoryType {
	DEPOSIT = 'deposit',
	WITHDRAW = 'withdraw'
}

export enum TransactionStatus {
	SUCCESS = 'success',
	ON_PROGRESS = 'on_progress',
	FAILED = 'failed',
	RETURN = 'return'
}

export interface ITransactionItem {
	id: string
	method: {
		title: string
		icon?: string
	}
	amount: string
	bonus?: string
	date: string
	status: TransactionStatus
}

export interface IAchievementItem {
	title: string
	icon: string
	description: Record<string, string>
	stars: number
	level: number
	upgradePercentage: number
}
