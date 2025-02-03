import { players } from '../../model/items'
import { BattleVariants } from '../../model/types'
import clsx from 'clsx'
import Image from 'next/image'

import { useCommonStore } from '@/entities/Common/model/store'

import IconArrowLeft from '@/shared/assets/icons/icon-arrow-left.svg'
import IconBattle from '@/shared/assets/icons/icon-battle.svg'

import cls from './CaseBattle.module.sass'
import SmallAvatar from './components/SmallAvatar'

const themeColors = {
	'theme-1': '#7627FA',
	'theme-2': '#D1AB25'
}

const cursorColors = {
	default: {
		fill: '#E2B617',
		stroke: '#FDCD24',
		shadow: '#FD3E2460'
	},
	green: {
		fill: '#17E2A5',
		stroke: '#17E2A5',
		shadow: '#17E2A559'
	},
	red: {
		fill: '#FF6868',
		stroke: '#FF6868',
		shadow: '#FF686859'
	}
}

interface IPlayerItem {
	theme?: 'theme-1' | 'theme-2'
	team?: 'default' | 'green' | 'red'
	noLeftCursor?: boolean
	noRightCursor?: boolean
}

const PlayerItem = ({ theme = 'theme-1', team = 'default', noLeftCursor, noRightCursor }: IPlayerItem) => {
	return (
		<div className='w-full'>
			<div className={clsx('relative mb-5 h-[240px] rounded-[12px]', cls.player_item)}>
				{!noLeftCursor && (
					<div
						className='absolute left-0 top-1/2 -translate-y-1/2'
						style={{ filter: `drop-shadow(0 0 12px ${cursorColors[team].shadow})` }}
					>
						<IconArrowLeft
							className='h-8 w-6'
							style={{ fill: cursorColors[team].fill, stroke: cursorColors[team].stroke }}
						/>
					</div>
				)}
				{!noRightCursor && (
					<div
						className='absolute right-0 top-1/2 -translate-y-1/2'
						style={{ filter: `drop-shadow(0 0 12px ${cursorColors[team].shadow})` }}
					>
						<IconArrowLeft
							className='absolute right-0 top-1/2 -translate-y-1/2 rotate-180'
							style={{ fill: cursorColors[team].fill, stroke: cursorColors[team].stroke }}
						/>
					</div>
				)}
				<div
					className={`absolute left-[5%] top-0 h-[3px] w-[90%] rounded-bl-[55px] rounded-br-[55px]`}
					style={{ background: themeColors[theme], boxShadow: `0px 15px 45px 0px ${themeColors[theme]}` }}
				></div>
				<div className={clsx(cls.player_item_inner, 'flex items-center justify-center')}>
					<Image
						src='/images/case/skin-3.png'
						width={190}
						height={180}
						alt='icon'
					/>
				</div>
			</div>
			<div
				className={clsx(
					cls.player_title,
					'mt-5 h-[66px] w-full',
					{ [cls.ready]: team === 'green' },
					{ [cls.warning]: team === 'red' }
				)}
			>
				<div className={clsx(cls.player_title_inner, 'relative flex items-center overflow-hidden px-3 py-[9px]')}>
					<SmallAvatar icon='/images/avatars/2.jpg' />
					<span className='ml-4 text-[14px] font-bold leading-4 text-white'>{players[0].name}</span>
				</div>
			</div>
		</div>
	)
}

const DropItem = () => {
	return (
		<div className='flex h-[160px] w-full flex-col justify-between rounded-[12px] border-2 border-[#161C28] bg-[#141925] p-[15px]'>
			<div className='flex justify-between'>
				<p className='text-[10px] font-medium leading-4 text-[#2F374A]'>FT</p>
				<div className='h-2 w-2 rounded-sm bg-[#FDCD24] shadow-[0_4px_17px_0_#FDCD244D]'></div>
			</div>
			<div className='relative flex justify-center'>
				<div
					className='absolute left-1/2 top-2 h-[50px] w-[80%] -translate-x-1/2 opacity-50'
					style={{
						background: 'radial-gradient(50% 50% at 50% 50%, rgba(253, 205, 36, 0.35) 0%, rgba(18, 23, 34, 0) 100%)'
					}}
				></div>
				<Image
					className='z-10'
					src='/images/case/skin-1.png'
					width={80}
					height={60}
					alt='icon'
				/>
			</div>
			<div>
				<p className='mb-2 text-[10px] font-medium leading-4 text-[#2F374A]'>AK-47 | Fire Serpent</p>
				<p className='text-[12px] font-medium leading-4 text-[#D1D9EB]'>$ 456,05</p>
			</div>
		</div>
	)
}

const BattleDetails = () => {
	const { currentBattleVariant } = useCommonStore()

	return (
		<div>
			<div>
				{currentBattleVariant === BattleVariants.ONE_VS_ONE && (
					<div className='flex gap-5'>
						<div className='w-full'>
							<PlayerItem />
							<div className='mt-5 grid grid-cols-4 gap-2'>
								{Array.from(new Array(8)).map((_, index) => (
									<DropItem key={index} />
								))}
							</div>
						</div>
						<div className='w-full'>
							<PlayerItem theme='theme-2' />
							<div className='mt-5 grid grid-cols-4 gap-2'>
								{Array.from(new Array(8)).map((_, index) => (
									<DropItem key={index} />
								))}
							</div>
						</div>
					</div>
				)}
				{currentBattleVariant === BattleVariants.TWO_VS_TWO && (
					<div className='relative flex gap-5'>
						<div className='w-full'>
							<div className='flex w-full gap-5'>
								<PlayerItem team='green' />
								<PlayerItem
									team='green'
									noRightCursor
								/>
							</div>
							<div className={clsx(cls.team_drop_items, cls.green, 'mt-5')}>
								<div className={clsx(cls.team_drop_items_inner, 'flex w-full gap-5')}>
									<div className='grid w-full grid-cols-2 gap-2'>
										{Array.from(new Array(4)).map((_, index) => (
											<DropItem key={index} />
										))}
									</div>
									<div className='grid w-full grid-cols-2 gap-2'>
										{Array.from(new Array(4)).map((_, index) => (
											<DropItem key={index} />
										))}
									</div>
								</div>
							</div>
						</div>
						<div className='absolute left-[50%] top-[88px] z-10 -translate-x-[50%]'>
							<IconBattle className='h-[64px] w-[56.8px]' />
						</div>
						<div className='w-full'>
							<div className='flex w-full gap-5'>
								<PlayerItem
									team='red'
									noLeftCursor
								/>
								<PlayerItem team='red' />
							</div>
							<div className={clsx(cls.team_drop_items, cls.red, 'mt-5')}>
								<div className={clsx(cls.team_drop_items_inner, 'flex w-full gap-5')}>
									<div className='grid w-full grid-cols-2 gap-2'>
										{Array.from(new Array(4)).map((_, index) => (
											<DropItem key={index} />
										))}
									</div>
									<div className='grid w-full grid-cols-2 gap-2'>
										{Array.from(new Array(4)).map((_, index) => (
											<DropItem key={index} />
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
				{currentBattleVariant === BattleVariants.ONE_VS_ONE_VS_ONE_VS_ONE && (
					<div className='relative flex gap-5'>
						<div className='w-full'>
							<PlayerItem />
							<div className='mt-5 grid grid-cols-2 gap-2'>
								{Array.from(new Array(4)).map((_, index) => (
									<DropItem key={index} />
								))}
							</div>
						</div>
						<div className='absolute left-[25%] top-[40px] z-10 -translate-x-[65%]'>
							<IconBattle className='h-[40px] w-[35.5px]' />
						</div>
						<div className='w-full'>
							<PlayerItem />
							<div className='mt-5 grid grid-cols-2 gap-2'>
								{Array.from(new Array(4)).map((_, index) => (
									<DropItem key={index} />
								))}
							</div>
						</div>
						<div className='absolute left-[50%] top-[40px] z-10 -translate-x-[50%]'>
							<IconBattle className='h-[40px] w-[35.5px]' />
						</div>
						<div className='w-full'>
							<PlayerItem />
							<div className='mt-5 grid grid-cols-2 gap-2'>
								{Array.from(new Array(4)).map((_, index) => (
									<DropItem key={index} />
								))}
							</div>
						</div>
						<div className='absolute left-[75%] top-[40px] z-10 -translate-x-[35%]'>
							<IconBattle className='h-[40px] w-[35.5px]' />
						</div>
						<div className='w-full'>
							<PlayerItem />
							<div className='mt-5 grid grid-cols-2 gap-2'>
								{Array.from(new Array(4)).map((_, index) => (
									<DropItem key={index} />
								))}
							</div>
						</div>
					</div>
				)}
				{currentBattleVariant === BattleVariants.ONE_VS_ONE_VS_ONE && (
					<div className='relative flex gap-5'>
						<div className='w-full'>
							<PlayerItem />
							<div className='mt-5 grid grid-cols-2 gap-2'>
								{Array.from(new Array(4)).map((_, index) => (
									<DropItem key={index} />
								))}
							</div>
						</div>
						<div className='absolute left-[33%] top-[40px] z-10 -translate-x-[50%]'>
							<IconBattle className='h-[40px] w-[35.5px]' />
						</div>
						<div className='w-full'>
							<PlayerItem />
							<div className='mt-5 grid grid-cols-2 gap-2'>
								{Array.from(new Array(4)).map((_, index) => (
									<DropItem key={index} />
								))}
							</div>
						</div>
						<div className='absolute left-[66%] top-[40px] z-10 -translate-x-[20%]'>
							<IconBattle className='h-[40px] w-[35.5px]' />
						</div>
						<div className='w-full'>
							<PlayerItem />
							<div className='mt-5 grid grid-cols-2 gap-2'>
								{Array.from(new Array(4)).map((_, index) => (
									<DropItem key={index} />
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default BattleDetails
