import IconArchievement from '@/shared/assets/icons/icon-archievements.svg'
import IconBucket from '@/shared/assets/icons/icon-bucket.svg'
import IconCase from '@/shared/assets/icons/icon-case-battle.svg'
import IconBattle from '@/shared/assets/icons/icon-case-battle.svg'
import IconOpenCase from '@/shared/assets/icons/icon-case-open.svg'
import IconGames from '@/shared/assets/icons/icon-game-history.svg'
import IconLotto2 from '@/shared/assets/icons/icon-lotto-2.svg'
import IconLotto from '@/shared/assets/icons/icon-lotto.svg'
import IconPromoCode from '@/shared/assets/icons/icon-promocode.svg'
import IconSetting from '@/shared/assets/icons/icon-setting.svg'
import IconTransaction from '@/shared/assets/icons/icon-transaction-history.svg'
import IconUpgrade from '@/shared/assets/icons/icon-upgrade.svg'
import IconUser from '@/shared/assets/icons/icon-user-avatar.svg'
import IconVerification from '@/shared/assets/icons/icon-verification.svg'

import {
	IBestDropData,
	ICaseBattleItem,
	IGameType,
	IInvestoryItemType,
	ILottoItem,
	IOpeningCaseItem,
	IProfileItem,
	ITransactionItem,
	IUpgradeItem,
	ImageBgType,
	TransactionStatus
} from './types'

export const profileList: IProfileItem[] = [
	{
		id: 1,
		icon: IconUser,
		title: 'profile_main.profile',
		link: '/profile/user'
	},
	{
		id: 2,
		icon: IconGames,
		title: 'profile_main.history_games',
		link: '/profile/history-game'
	},
	{
		id: 3,
		icon: IconTransaction,
		title: 'profile_main.transaction_history',
		link: '/profile/history-transaction'
	},
	{
		id: 4,
		icon: IconArchievement,
		title: 'profile_main.achievements',
		link: '/profile/achievements'
	},
	{
		id: 5,
		icon: IconVerification,
		title: 'profile_main.verification',
		link: '/profile/verification'
	},
	{
		id: 6,
		icon: IconSetting,
		title: 'profile_main.settings',
		link: '/profile/settings'
	}
]

export const mobileProfileList: IProfileItem[] = [
	{
		id: 1,
		icon: IconUser,
		title: 'profile_main.profile',
		link: '/profile/user'
	},
	{
		id: 2,
		icon: IconGames,
		title: 'profile_main.history_games',
		link: '/profile/history-game'
	},
	{
		id: 3,
		icon: IconTransaction,
		title: 'profile_main.transaction_history',
		link: '/profile/history-transaction'
	},
	{
		id: 4,
		icon: IconArchievement,
		title: 'profile_main.attain',
		link: '/profile/achievements'
	},
	{
		id: 5,
		icon: IconPromoCode,
		title: 'profile_main.promocode',
		link: '/profile/verification'
	}
]

// Best drop
export const bestDrop = {
	type: 'pink' as ImageBgType,
	imgUrl: '/images/case/skin-2.png',
	price: '242,02',
	title: 'ft',
	name: 'AK-47 | Fire Serpent'
}

// Profile page
export const bestDropData: IBestDropData[] = [
	{
		id: 1,
		icon: IconCase,
		title: '48 592',
		content: 'profile_page.case_opened'
	},
	{
		id: 2,
		titleType: 'level',
		content: 'profile_page.refferal_level',
		title: '6'
	},
	{
		id: 3,
		titleType: 'bg',
		title: '48 954',
		content: 'profile_page.refferal_number'
	},
	{
		id: 4,
		icon: IconUpgrade,
		title: '$2 934.33',
		content: 'profile_page.upgrades'
	},
	{
		id: 5,
		titleType: 'bg',
		title: '$58 324',
		content: 'profile_page.all_earned'
	},
	{
		id: 6,
		titleType: 'bg',
		title: '$92 328',
		content: 'profile_page.earned_from_cases'
	},
	{
		id: 7,
		icon: IconLotto,
		title: '$934.33',
		content: 'profile_page.lotto'
	},
	{
		id: 8,
		titleType: 'bg',
		titleIcon: IconBucket,
		title: '8ijd12h',
		content: 'profile_page.promocode'
	},
	{
		id: 9,
		titleType: 'bg',
		title: '650982',
		content: 'profile_page.cases_created'
	}
]

export const investoryItems: IInvestoryItemType[] = [
	{
		id: 'case-1',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-1.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'yellow'
	},
	{
		id: 'case-2',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-2.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'pink'
	},
	{
		id: 'case-3',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-3.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'purple'
	},
	{
		id: 'case-4',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-4.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'blue'
	},
	{
		id: 'case-5',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-5.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'limit_blue'
	},
	{
		id: 'case-6',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-1.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'yellow'
	},
	{
		id: 'case-7',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-2.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'pink'
	},
	{
		id: 'case-8',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-3.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'purple'
	},
	{
		id: 'case-9',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-4.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'blue'
	},
	{
		id: 'case-10',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-5.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'limit_blue'
	},
	{
		id: 'case-11',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-1.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'yellow'
	},
	{
		id: 'case-12',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-2.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'pink'
	},
	{
		id: 'case-13',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-3.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'purple'
	},
	{
		id: 'case-14',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-4.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'blue'
	},
	{
		id: 'case-15',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-5.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'limit_blue'
	},
	{
		id: 'case-16',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-1.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'yellow'
	},
	{
		id: 'case-17',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-2.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'pink'
	},
	{
		id: 'case-18',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-3.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'purple'
	},
	{
		id: 'case-19',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-4.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'blue'
	},
	{
		id: 'case-20',
		title: 'FT',
		content: 'CHANCE',
		percent: 0.064,
		picUrl: '/images/case/skin-5.png',
		name: 'AK-47 | Fire Serpent',
		price: '456,05',
		type: 'limit_blue'
	}
]

// Profile(user)
export const userBestDropData: IBestDropData[] = [
	{
		id: 1,
		icon: IconGames,
		title: '48 592',
		content: 'user_profile.games_played'
	},
	{
		id: 1,
		icon: IconTransaction,
		title: '$2 934.33',
		content: 'user_profile.winnings'
	},
	{
		id: 1,
		icon: IconArchievement,
		title: '$934.33',
		content: 'user_profile.top_winnings'
	}
]

// Game history profile
export const gameHistoryTypes: IGameType[] = [
	{
		value: 'Case Battle',
		icon: IconBattle,
		label: 'Case Battle'
	},
	{
		value: 'Opening Case',
		icon: IconOpenCase,
		label: 'Opening Case'
	},
	{
		value: 'Upgrade',
		icon: IconUpgrade,
		label: 'Upgrade'
	},
	{
		value: 'Lotto',
		icon: IconLotto2,
		label: 'Lotto'
	}
]

export const openingCaseHistory: IOpeningCaseItem[] = [
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		name: 'Magic Cases',
		price: '500.34',
		prizes: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		]
	}
]

export const upgradeHistory: IUpgradeItem[] = [
	{
		dateOfOpening: '20/06/2024 2:42',
		items: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		price: '500.34',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		status: true
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		items: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		price: '500.34',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		status: true
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		items: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		price: '500.34',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		status: true
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		items: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		price: '500.34',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		status: true
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		items: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		price: '500.34',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		status: true
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		items: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		price: '500.34',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		status: true
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		items: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		price: '500.34',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		status: true
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		items: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		price: '500.34',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		status: true
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		items: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		price: '500.34',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		status: true
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		items: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		price: '500.34',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		status: true
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		items: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		price: '500.34',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		status: true
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		items: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		price: '500.34',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		status: true
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		items: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		price: '500.34',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		status: true
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		items: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		price: '500.34',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		status: true
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		items: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		price: '500.34',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		status: true
	},
	{
		dateOfOpening: '20/06/2024 2:42',
		price: '500.34',
		status: false
	}
]

export const lottoHistory: ILottoItem[] = [
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	},
	{
		date: '20/06/2024 2:42',
		result: [
			{
				icon: '/images/livefeed/skin-5.png',
				name: 'AK-47 | Fire Serpent',
				price: '456,05'
			}
		],
		bet: '500.34',
		status: true
	},
	{
		date: '20/06/2024 2:42',
		bet: '500.34',
		status: false
	}
]

export const caseBattleHistory: ICaseBattleItem[] = [
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	},
	{
		allies: [
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/2.jpg',
				id: ''
			}
		],
		bet: '100.99',
		enemies: [
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			},
			{
				icon: '/images/avatars/3.jpg',
				id: ''
			}
		],
		round: 1
	}
]

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

// Transaction History Profile
export const depositHistory: ITransactionItem[] = [
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.SUCCESS,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.ON_PROGRESS,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.FAILED,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.RETURN,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.SUCCESS,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.ON_PROGRESS,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.FAILED,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.RETURN,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.SUCCESS,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.ON_PROGRESS,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.FAILED,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.RETURN,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.SUCCESS,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.ON_PROGRESS,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.FAILED,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.RETURN,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.SUCCESS,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.ON_PROGRESS,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.FAILED,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.RETURN,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.SUCCESS,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.ON_PROGRESS,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.FAILED,
		bonus: '$50.00'
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.RETURN,
		bonus: '$50.00'
	}
]

export const withdrawHistory: ITransactionItem[] = [
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.SUCCESS
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.ON_PROGRESS
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.FAILED
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'AK-47 | Fire Serpent'
		},
		status: TransactionStatus.RETURN
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'AK-47 | Fire Serpent'
		},
		status: TransactionStatus.SUCCESS
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'AK-47 | Fire Serpent'
		},
		status: TransactionStatus.ON_PROGRESS
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'AK-47 | Fire Serpent'
		},
		status: TransactionStatus.FAILED
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.RETURN
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.SUCCESS
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.ON_PROGRESS
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.FAILED
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.RETURN
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.SUCCESS
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.ON_PROGRESS
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.FAILED
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.RETURN
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.SUCCESS
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.ON_PROGRESS
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.FAILED
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.RETURN
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.SUCCESS
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.ON_PROGRESS
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.FAILED
	},
	{
		amount: '$500.00',
		date: '06/06 01:07',
		id: '28968951',
		method: {
			title: 'VISA / MC',
			icon: '/images/payment/visa.png'
		},
		status: TransactionStatus.RETURN
	}
]
