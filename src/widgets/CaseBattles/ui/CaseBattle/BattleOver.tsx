import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import IconFireBottle from '@/shared/assets/icons/icon-fire-bottle.svg'
import IconClose from '@/shared/assets/icons/icon-modal-close.svg'
import { useModal } from '@/shared/context/ModalContext'
import Button from '@/shared/ui/Button/Button'

import cls from './CaseBattle.module.sass'
import DrawAvatar from './components/DrawAvatar'
import LossAvatar from './components/LossAvatar'
import LossBand from './components/LossBand'
import SmallAvatar from './components/SmallAvatar'
import WinnerAvatar from './components/WinnerAvatar'
import WinnerBand from './components/WinnerBand'

const drawColors = ['#C424FD', '#FDCD24', '#FD2458', '#24FDBC']

interface IBattleOverProps {
	isDraw?: boolean
}

const BattleOver = ({ isDraw }: IBattleOverProps) => {
	const t = useTranslations()
	const router = useRouter()
	const { closeModal } = useModal()
	const [rotation, setRotation] = useState<number>(35)
	const [canSelectTeam, toggleCanSelectTeam] = useState<boolean>(false)

	useEffect(() => {
		if (isDraw) {
			const interval = setInterval(() => setRotation(v => v + 1), 100)

			return () => clearInterval(interval)
		}
	}, [isDraw])

	return (
		<div className='flex w-[1137px] flex-col items-center justify-center lg:w-[calc(100vw_-_80px)]'>
			{isDraw ? (
				<>
					<Button
						onPress={() => closeModal()}
						className='!absolute right-0 top-4 h-4 w-4'
					>
						<IconClose className='h-4 w-4 fill-[#FFFFFF33]' />
					</Button>
					<p
						className='mb-[18px] text-center text-[32px] font-[900] leading-8'
						style={{
							backgroundImage:
								'linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #D1D9EB, #D1D9EB), linear-gradient(0deg, rgba(28, 34, 48, 0) -0.71%, rgba(28, 34, 48, 0.35) 100.71%)',
							backgroundClip: 'text'
						}}
					>
						{t('case_battles.battle_over').toUpperCase()}
					</p>
					<p className='mb-24 text-center text-[18px] font-medium leading-4 text-[#60719A] 3sm:text-[14px]'>
						{t('case_battles.draw_is_preferable_to_defeat')}.
					</p>
					<div
						className={`relative rounded-full border-2 border-b-[#FD2458] border-l-[#24FDBC] border-r-[#FDCD24] border-t-[#C424FD]`}
						style={{ rotate: `${rotation}deg` }}
					>
						<div className='flex h-[484px] w-[484px] items-center justify-center rounded-[242px] bg-[#1C2332] 3sm:h-[306px] 3sm:w-[306px]'>
							<div className='flex h-[258px] w-[258px] items-center justify-center rounded-[129px] bg-[#222B3D] 3sm:h-[180px] 3sm:w-[180px]'>
								<div className='flex h-[224px] w-[224px] items-center justify-center rounded-[112px] border border-[#2E3950] 3sm:h-[155px] 3sm:w-[155px]'>
									<div className='flex h-40 w-40 items-center justify-center rounded-[80px] bg-[#293143] 3sm:h-[110px] 3sm:w-[110px]'>
										<IconFireBottle
											className='h-[99px] w-[52px] 3sm:h-[39px] 3sm:w-[36px]'
											style={{ rotate: `-${rotation}deg` }}
										/>
									</div>
								</div>
							</div>
						</div>
						{drawColors.map((value, index) => (
							<DrawAvatar
								left={index % 2 === 0 ? '50%' : index % 3 === 0 ? '0%' : '100%'}
								top={index % 2 ? '50%' : index === 0 ? '0%' : '100%'}
								color={value}
								rotation={`-${rotation}deg`}
								key={index}
							/>
						))}
					</div>
				</>
			) : (
				<>
					{canSelectTeam ? (
						<>
							<Button
								onPress={() => closeModal()}
								className='!absolute right-0 top-4 h-4 w-4'
							>
								<IconClose className='h-4 w-4 fill-[#FFFFFF33]' />
							</Button>
							<p
								className='mb-[18px] text-center text-[32px] font-[900] leading-8'
								style={{
									backgroundImage:
										'linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #D1D9EB, #D1D9EB), linear-gradient(0deg, rgba(28, 34, 48, 0) -0.71%, rgba(28, 34, 48, 0.35) 100.71%)',
									backgroundClip: 'text'
								}}
							>
								{t('case_battles.choose_team').toUpperCase()}
							</p>
							<p className='mb-[40px] text-center text-[18px] font-medium leading-4 text-[#60719A] 3sm:text-[14px]'>
								{t('case_battles.join_green_or_red')}.
							</p>
							<div className='flex gap-10 3sm:gap-4'>
								<div style={{ filter: 'drop-shadow(0px 0px 24px #10AA7C40)' }}>
									<Button onPress={closeModal}>
										<div className={clsx(cls.select_team, cls.green_team)}>
											<div className={clsx(cls.select_team_inner, cls.green_team, 'relative')}>
												<p className='absolute bottom-[40%] left-1/2 w-[90px] -translate-x-1/2 text-center'>
													{t('case_battles.green_team').toUpperCase()}
												</p>
											</div>
										</div>
									</Button>
								</div>
								<div style={{ filter: 'drop-shadow(0px 0px 24px #FF606059)' }}>
									<Button onPress={closeModal}>
										<div className={clsx(cls.select_team, cls.red_team)}>
											<div className={clsx(cls.select_team_inner, cls.red_team, 'relative')}>
												<p className='absolute bottom-[40%] left-1/2 w-[90px] -translate-x-1/2 text-center'>
													{t('case_battles.red_team').toUpperCase()}
												</p>
											</div>
										</div>
									</Button>
								</div>
							</div>
						</>
					) : (
						<>
							<Button
								onPress={() => closeModal()}
								className='!absolute right-0 top-4 h-4 w-4'
							>
								<IconClose className='h-4 w-4 fill-[#FFFFFF33]' />
							</Button>
							<p
								className='mb-[18px] text-center text-[32px] font-[900] leading-[32px]'
								style={{
									backgroundImage:
										'linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #D1D9EB, #D1D9EB), linear-gradient(0deg, rgba(28, 34, 48, 0) -0.71%, rgba(28, 34, 48, 0.35) 100.71%)',
									backgroundClip: 'text'
								}}
							>
								{t('case_battles.battle_over').toUpperCase()}
							</p>
							<p className='mb-[48px] text-[18px] font-medium leading-4 text-[#60719A]'>
								{t('case_battles.each_user_received')} +$0.1
							</p>
							<div className='mb-9 flex w-full justify-between gap-[19px] 2md:hidden'>
								<div className={clsx(cls.result_card, cls.result_loss)}>
									<div className={clsx(cls.result_loss_inner)}>
										<div className='absolute -top-6 left-1/2 -translate-x-1/2'>
											<LossBand />
										</div>
										<p className='absolute left-1/2 top-[14px] -translate-x-1/2 text-[16px] font-bold leading-4 text-[#480202]'>
											{t('case_battles.loss').toUpperCase()}
										</p>
										<div className='mb-[18px] mt-[60px]'>
											<LossAvatar />
										</div>
										<p className='text-[24px] font-bold leading-4 text-white'>Djorgick</p>
									</div>
								</div>
								<div className={clsx(cls.result_card, cls.result_winner)}>
									<div className={clsx(cls.result_winner_inner)}>
										<div className='absolute -top-6 left-1/2 -translate-x-1/2'>
											<WinnerBand />
										</div>
										<p className='absolute left-1/2 top-[14px] -translate-x-1/2 text-[16px] font-bold leading-4 text-[#022F22]'>
											{t('case_battles.winner').toUpperCase()}
										</p>
										<div className='mb-[18px] mt-[60px]'>
											<WinnerAvatar />
										</div>
										<p className='mb-4 text-[24px] font-bold leading-4 text-white'>Djorgick</p>
										<div className={clsx(cls.result_winner_price, 'mb-2')}>
											<div className={cls.result_winner_price_inner}>
												<p className='text-[16px] font-bold leading-4 text-[#24FDBC]'>$ 1050.00</p>
											</div>
										</div>
										<p className='text-[12px] font-bold leading-4 text-[#57C7B0]'>
											{t('case_battles.total_winnings').toUpperCase()}
										</p>
									</div>
								</div>
								<div className={clsx(cls.result_card, cls.result_loss)}>
									<div className={clsx(cls.result_loss_inner)}>
										<div className='absolute -top-6 left-1/2 -translate-x-1/2'>
											<LossBand />
										</div>
										<p className='absolute left-1/2 top-[14px] -translate-x-1/2 text-[16px] font-bold leading-4 text-[#480202]'>
											{t('case_battles.loss').toUpperCase()}
										</p>
										<div className='mb-[18px] mt-[60px]'>
											<LossAvatar />
										</div>
										<p className='text-[24px] font-bold leading-4 text-white'>Djorgick</p>
									</div>
								</div>
								<div className={clsx(cls.result_card, cls.result_loss)}>
									<div className={clsx(cls.result_loss_inner)}>
										<div className='absolute -top-6 left-1/2 -translate-x-1/2'>
											<LossBand />
										</div>
										<p className='absolute left-1/2 top-[14px] -translate-x-1/2 text-[16px] font-bold leading-4 text-[#480202]'>
											{t('case_battles.loss').toUpperCase()}
										</p>
										<div className='mb-[18px] mt-[60px]'>
											<LossAvatar />
										</div>
										<p className='text-[24px] font-bold leading-4 text-white'>Djorgick</p>
									</div>
								</div>
							</div>
							<div className='mb-5 hidden w-full flex-col gap-5 2md:flex'>
								{/* Winner */}
								<div className={clsx(cls.player_card_bg, 'overflow-hidden 2md:!h-[106px] 2md:!w-full')}>
									<div className={clsx(cls.player_card_bg_inner, 'relative')}>
										<div className='!absolute -left-4 -top-[24px] z-10 flex translate-x-0 items-center gap-[6px]'>
											<WinnerBand />
											<span className='absolute left-1/2 -translate-x-1/2 text-[16px] font-bold leading-4 text-[#022F22]'>
												{t('case_battles.winner').toUpperCase()}
											</span>
										</div>
										<div className={clsx(cls.lossed, '!absolute bottom-2 left-4 !bg-[#10AA7C] !bg-none')}>
											<div className={clsx(cls.lossed_inner, '!text-[#24FDBC]')}>$ 1050.00</div>
										</div>
										<div className='absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2'>
											<SmallAvatar icon='/images/avatars/2.jpg' />
											<span className='text-[14px] font-bold leading-4 text-white'>Djorgick</span>
										</div>
									</div>
								</div>
								{/* Losser */}
								<div className={clsx(cls.player_card_bg, 'overflow-hidden 2md:!h-[70px] 2md:!w-full')}>
									<div className={clsx(cls.player_card_bg_inner, 'relative')}>
										<div className='!absolute -left-4 -top-[24px] z-10 flex translate-x-0 items-center gap-[6px]'>
											<LossBand />
											<span className='absolute left-1/2 -translate-x-1/2 text-[16px] font-bold leading-4 text-[#480202]'>
												{t('case_battles.loss').toUpperCase()}
											</span>
										</div>
										<div className='absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2'>
											<SmallAvatar icon='/images/avatars/2.jpg' />
											<span className='text-[14px] font-bold leading-4 text-white'>Djorgick</span>
										</div>
									</div>
								</div>
							</div>
							<div className='flex items-center gap-2 3sm:flex-col'>
								<Button
									onPress={() => toggleCanSelectTeam(true)}
									classNames={{ base: cls.rematch_btn, content: cls.rematch_btn_inner }}
								>
									{t('case_battles.rematch').toUpperCase()}
								</Button>
								<div className={cls.create_btn_wrapper}>
									<Button
										onPress={() => {
											closeModal()
											router.push('/case-battles/create')
										}}
										classNames={{ base: cls.create_btn, content: cls.create_btn_inner }}
									>
										{t('case_battles.create_new_battle').toUpperCase()}
									</Button>
								</div>
								<Button
									onPress={() => {
										closeModal()
										router.push('/case-battles')
									}}
									classNames={{ base: cls.browse_btn, content: cls.browse_btn_inner }}
								>
									{t('case_battles.browse_battles').toUpperCase()}
								</Button>
							</div>
						</>
					)}
				</>
			)}
		</div>
	)
}

export default BattleOver
