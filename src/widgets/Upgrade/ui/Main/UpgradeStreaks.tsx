import { upgradeItems } from '../../model/items'
import { IUpgradeItem } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Fragment, useEffect, useRef, useState } from 'react'

import IconArrowRight from '@/shared/assets/icons/icon-arrow-right-hexagon.svg'
import IconEye from '@/shared/assets/icons/icon-eye.svg'
import IconInfo from '@/shared/assets/icons/icon-info-2.svg'
import IconWalletAdd from '@/shared/assets/icons/icon-wallet-add.svg'
import { useModal } from '@/shared/context/ModalContext'
import Button from '@/shared/ui/Button/Button'
import PaginationBar from '@/shared/ui/PaginationBar/PaginationBar'

import cls from './Main.module.sass'

interface IListItemProps {
	item: IUpgradeItem
}

const RankBg = ({ rank }: { rank: number }) => {
	if (rank === 1) {
		return (
			<svg
				width='42'
				height='48'
				viewBox='0 0 42 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M19.5 2.02073C20.4282 1.48483 21.5718 1.48483 22.5 2.02073L39.2846 11.7113C40.2128 12.2472 40.7846 13.2376 40.7846 14.3094V33.6906C40.7846 34.7624 40.2128 35.7528 39.2846 36.2887L22.5 45.9793C21.5718 46.5152 20.4282 46.5152 19.5 45.9793L2.71539 36.2887C1.78719 35.7528 1.21539 34.7624 1.21539 33.6906V14.3094C1.21539 13.2376 1.78719 12.2472 2.71539 11.7113L19.5 2.02073Z'
					fill='url(#paint0_linear_4304_24910)'
					stroke='url(#paint1_linear_4304_24910)'
					stroke-width='2'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_4304_24910'
						x1='21'
						y1='0'
						x2='21'
						y2='48'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#FEF0AE' />
						<stop
							offset='1'
							stop-color='#E79C5F'
						/>
					</linearGradient>
					<linearGradient
						id='paint1_linear_4304_24910'
						x1='21'
						y1='0'
						x2='21'
						y2='48'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#E0CA86' />
						<stop
							offset='1'
							stop-color='#BE7B3C'
						/>
					</linearGradient>
				</defs>
			</svg>
		)
	}
	if (rank === 2) {
		return (
			<svg
				width='42'
				height='48'
				viewBox='0 0 42 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M19.5 2.02073C20.4282 1.48483 21.5718 1.48483 22.5 2.02073L39.2846 11.7113C40.2128 12.2472 40.7846 13.2376 40.7846 14.3094V33.6906C40.7846 34.7624 40.2128 35.7528 39.2846 36.2887L22.5 45.9793C21.5718 46.5152 20.4282 46.5152 19.5 45.9793L2.71539 36.2887C1.78719 35.7528 1.21539 34.7624 1.21539 33.6906V14.3094C1.21539 13.2376 1.78719 12.2472 2.71539 11.7113L19.5 2.02073Z'
					fill='url(#paint0_linear_4303_24284)'
					stroke='url(#paint1_linear_4303_24284)'
					stroke-width='2'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_4303_24284'
						x1='21'
						y1='0'
						x2='21'
						y2='48'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#E5E5E5' />
						<stop
							offset='1'
							stop-color='#555454'
						/>
					</linearGradient>
					<linearGradient
						id='paint1_linear_4303_24284'
						x1='21'
						y1='0'
						x2='21'
						y2='48'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#B4AFAF' />
						<stop
							offset='1'
							stop-color='#3C3C3C'
						/>
					</linearGradient>
				</defs>
			</svg>
		)
	}
	if (rank === 3) {
		return (
			<svg
				width='42'
				height='48'
				viewBox='0 0 42 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M19.5 2.02073C20.4282 1.48483 21.5718 1.48483 22.5 2.02073L39.2846 11.7113C40.2128 12.2472 40.7846 13.2376 40.7846 14.3094V33.6906C40.7846 34.7624 40.2128 35.7528 39.2846 36.2887L22.5 45.9793C21.5718 46.5152 20.4282 46.5152 19.5 45.9793L2.71539 36.2887C1.78719 35.7528 1.21539 34.7624 1.21539 33.6906V14.3094C1.21539 13.2376 1.78719 12.2472 2.71539 11.7113L19.5 2.02073Z'
					fill='url(#paint0_linear_4304_24911)'
					stroke='url(#paint1_linear_4304_24911)'
					stroke-width='2'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_4304_24911'
						x1='21'
						y1='0'
						x2='21'
						y2='48'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#FAC36D' />
						<stop
							offset='1'
							stop-color='#A1513B'
						/>
					</linearGradient>
					<linearGradient
						id='paint1_linear_4304_24911'
						x1='21'
						y1='0'
						x2='21'
						y2='48'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#C58C50' />
						<stop
							offset='1'
							stop-color='#7F412A'
						/>
					</linearGradient>
				</defs>
			</svg>
		)
	}
	return (
		<svg
			width='42'
			height='48'
			viewBox='0 0 42 48'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M19.5 2.02073C20.4282 1.48483 21.5718 1.48483 22.5 2.02073L39.2846 11.7113C40.2128 12.2472 40.7846 13.2376 40.7846 14.3094V33.6906C40.7846 34.7624 40.2128 35.7528 39.2846 36.2887L22.5 45.9793C21.5718 46.5152 20.4282 46.5152 19.5 45.9793L2.71539 36.2887C1.78719 35.7528 1.21539 34.7624 1.21539 33.6906V14.3094C1.21539 13.2376 1.78719 12.2472 2.71539 11.7113L19.5 2.02073Z'
				fill='url(#paint0_linear_4303_24431)'
				stroke='url(#paint1_linear_4303_24431)'
				stroke-width='2'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_4303_24431'
					x1='-3'
					y1='24'
					x2='45'
					y2='24'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#232B3E' />
					<stop
						offset='0.5'
						stop-color='#232B3E'
						stop-opacity='0.25'
					/>
					<stop
						offset='1'
						stop-color='#232B3E'
					/>
				</linearGradient>
				<linearGradient
					id='paint1_linear_4303_24431'
					x1='-3'
					y1='24'
					x2='45'
					y2='24'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#2D374F' />
					<stop
						offset='0.5'
						stop-color='#2D374F'
						stop-opacity='0.45'
					/>
					<stop
						offset='1'
						stop-color='#2D374F'
					/>
				</linearGradient>
			</defs>
		</svg>
	)
}

const HexagonBg = () => {
	return (
		<svg
			width='28'
			height='32'
			viewBox='0 0 28 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g filter='url(#filter0_b_4320_7304)'>
				<path
					d='M13.969 0L27.7985 7.9845V23.9535L13.969 31.938L0.13944 23.9535V7.9845L13.969 0Z'
					fill='#10AA7C'
					fill-opacity='0.15'
				/>
				<path
					d='M13.969 0L27.7985 7.9845V23.9535L13.969 31.938L0.13944 23.9535V7.9845L13.969 0Z'
					fill='url(#paint0_linear_4320_7304)'
					fill-opacity='0.15'
				/>
				<path
					d='M0.83944 8.38864L13.969 0.808291L27.0985 8.38864V23.5493L13.969 31.1297L0.83944 23.5493V8.38864Z'
					stroke='#10AA7C'
					stroke-opacity='0.45'
					stroke-width='1.4'
				/>
				<path
					d='M0.83944 8.38864L13.969 0.808291L27.0985 8.38864V23.5493L13.969 31.1297L0.83944 23.5493V8.38864Z'
					stroke='url(#paint1_linear_4320_7304)'
					stroke-opacity='0.45'
					stroke-width='1.4'
				/>
			</g>
			<defs>
				<filter
					id='filter0_b_4320_7304'
					x='-14.8594'
					y='-15'
					width='57.6562'
					height='61.938'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood
						flood-opacity='0'
						result='BackgroundImageFix'
					/>
					<feGaussianBlur
						in='BackgroundImageFix'
						stdDeviation='7.5'
					/>
					<feComposite
						in2='SourceAlpha'
						operator='in'
						result='effect1_backgroundBlur_4320_7304'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_backgroundBlur_4320_7304'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_4320_7304'
					x1='19.8423'
					y1='0'
					x2='19.8423'
					y2='31.938'
					gradientUnits='userSpaceOnUse'
				>
					<stop
						stop-color='#24FDBC'
						stop-opacity='0'
					/>
					<stop
						offset='1'
						stop-color='#24FDBC'
						stop-opacity='0.65'
					/>
				</linearGradient>
				<linearGradient
					id='paint1_linear_4320_7304'
					x1='19.8423'
					y1='0'
					x2='19.8423'
					y2='31.938'
					gradientUnits='userSpaceOnUse'
				>
					<stop
						stop-color='#24FDBC'
						stop-opacity='0'
					/>
					<stop
						offset='1'
						stop-color='#24FDBC'
						stop-opacity='0.65'
					/>
				</linearGradient>
			</defs>
		</svg>
	)
}

const HexagonBg2 = () => {
	return (
		<svg
			width='42'
			height='48'
			viewBox='0 0 42 48'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M18.25 2.16506C19.9517 1.18258 22.0483 1.18258 23.75 2.16506L38.5346 10.701C40.2363 11.6834 41.2846 13.4991 41.2846 15.4641V32.5359C41.2846 34.5009 40.2363 36.3166 38.5346 37.299L23.75 45.8349C22.0483 46.8174 19.9517 46.8174 18.25 45.8349L3.46539 37.299C1.76369 36.3166 0.715391 34.5009 0.715391 32.5359V15.4641C0.715391 13.4991 1.76369 11.6834 3.46539 10.701L18.25 2.16506Z'
				fill='#10AA7C'
			/>
			<path
				d='M18.25 2.16506C19.9517 1.18258 22.0483 1.18258 23.75 2.16506L38.5346 10.701C40.2363 11.6834 41.2846 13.4991 41.2846 15.4641V32.5359C41.2846 34.5009 40.2363 36.3166 38.5346 37.299L23.75 45.8349C22.0483 46.8174 19.9517 46.8174 18.25 45.8349L3.46539 37.299C1.76369 36.3166 0.715391 34.5009 0.715391 32.5359V15.4641C0.715391 13.4991 1.76369 11.6834 3.46539 10.701L18.25 2.16506Z'
				fill='url(#paint0_linear_4425_17280)'
			/>
			<path
				d='M18.25 2.16506C19.9517 1.18258 22.0483 1.18258 23.75 2.16506L38.5346 10.701C40.2363 11.6834 41.2846 13.4991 41.2846 15.4641V32.5359C41.2846 34.5009 40.2363 36.3166 38.5346 37.299L23.75 45.8349C22.0483 46.8174 19.9517 46.8174 18.25 45.8349L3.46539 37.299C1.76369 36.3166 0.715391 34.5009 0.715391 32.5359V15.4641C0.715391 13.4991 1.76369 11.6834 3.46539 10.701L18.25 2.16506Z'
				stroke='url(#paint1_linear_4425_17280)'
			/>
			<path
				d='M18.25 2.16506C19.9517 1.18258 22.0483 1.18258 23.75 2.16506L38.5346 10.701C40.2363 11.6834 41.2846 13.4991 41.2846 15.4641V32.5359C41.2846 34.5009 40.2363 36.3166 38.5346 37.299L23.75 45.8349C22.0483 46.8174 19.9517 46.8174 18.25 45.8349L3.46539 37.299C1.76369 36.3166 0.715391 34.5009 0.715391 32.5359V15.4641C0.715391 13.4991 1.76369 11.6834 3.46539 10.701L18.25 2.16506Z'
				stroke='url(#paint2_linear_4425_17280)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_4425_17280'
					x1='29.8271'
					y1='0'
					x2='29.8271'
					y2='48'
					gradientUnits='userSpaceOnUse'
				>
					<stop
						stop-color='#24FDBC'
						stop-opacity='0'
					/>
					<stop
						offset='1'
						stop-color='#24FDBC'
						stop-opacity='0.65'
					/>
				</linearGradient>
				<linearGradient
					id='paint1_linear_4425_17280'
					x1='31.0816'
					y1='24'
					x2='39.968'
					y2='24'
					gradientUnits='userSpaceOnUse'
				>
					<stop
						offset='0.347781'
						stop-color='#24FDBC'
						stop-opacity='0'
					/>
					<stop
						offset='1'
						stop-color='#24FDBC'
					/>
				</linearGradient>
				<linearGradient
					id='paint2_linear_4425_17280'
					x1='25.4362'
					y1='24'
					x2='17.1772'
					y2='24'
					gradientUnits='userSpaceOnUse'
				>
					<stop
						stop-color='#24FDBC'
						stop-opacity='0'
					/>
					<stop
						offset='1'
						stop-color='#24FDBC'
					/>
				</linearGradient>
			</defs>
		</svg>
	)
}

const StreakModal = ({ item: { stepsList } }: IListItemProps) => {
	const t = useTranslations()

	return (
		<div className='flex w-[730px] flex-grow flex-wrap gap-4 md:w-[calc(100vw_-_80px)] md:items-center'>
			{stepsList.map((step, index) => (
				<Fragment key={index}>
					<div className='flex h-12 flex-grow-0 items-center rounded-lg border-1 border-[#212838] pr-[18px] md:h-auto md:flex-col md:border-0 md:pr-0'>
						{step.items && (
							<div className='relative flex h-full items-center gap-[10px] rounded-lg md:flex-col'>
								<div className='absolute -left-[1px] top-[9px] z-10 h-[30px] w-[2px] rounded-r-[12px] bg-[#C12BC9] md:hidden'></div>
								<div className='flex h-[calc(100%_+_2px)] w-[80px] -translate-x-[1px] items-center justify-center rounded-lg bg-[#121722] md:h-12'>
									<Image
										src='/images/case/skin-2.png'
										width={51}
										height={38}
										alt='icon'
										className='bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,_0,_245,_0.45)_0%,_rgba(18,_23,_34,_0)_100%)]'
									/>
								</div>
								<div className='md:hidden'>
									<p className='mb-1 text-[12px] leading-3 text-[#60719A]'>
										{step.items?.count} {t('items')}
									</p>
									<p className='text-[14px] leading-[14px] text-[#24FDBC]'>${step.items?.totalPrice}</p>
								</div>
								<div className='hidden md:block'>
									<p className='text-center text-[10px] text-[#60719A]'>AWP</p>
									<p className='text-center text-[10px] text-white'>Dragon Iore</p>
									<p className='text-center text-[14px] leading-[14px] text-[#24FDBC]'>${step.items?.totalPrice}</p>
								</div>
							</div>
						)}
						{step.balance && (
							<div className='ml-2 flex items-center gap-[10px] md:ml-0 md:mt-2 md:flex-col'>
								<div className='relative w-max'>
									<HexagonBg />
									<IconWalletAdd className='absolute left-1/2 top-1/2 h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2' />
								</div>
								<div>
									<p className='mb-1 text-[12px] leading-3 text-[#60719A] md:text-center'>{t('balance')}</p>
									<p className='text-[14px] leading-[14px] text-[#24FDBC] md:text-center'>${step.balance}</p>
								</div>
							</div>
						)}
					</div>
					{step.nextProbability && (
						<div className='flex flex-col'>
							<div className='flex flex-col items-center'>
								<p className='hidden text-center text-[8px] text-white md:block'>{index + 1}</p>
								<p className='hidden text-center text-[8px] text-[#60719A] md:block'>{t('step').toUpperCase()}</p>
								<IconArrowRight />
								<p className='text-center text-[10px] text-[#60719A] md:hidden'>{step.nextProbability} %</p>
								<p className='text-center text-[10px] text-[#60719A] md:hidden'>{t('probability').toUpperCase()}</p>
							</div>
							<div className='mt-10 hidden md:block'>
								<p className='mt-auto h-max flex-grow text-center text-[8px] font-bold text-[#60719A]'>(x1.5)</p>
							</div>
						</div>
					)}
				</Fragment>
			))}
			<div className='my-2 h-[2px] w-full flex-grow-[1000] bg-[linear-gradient(270deg,_#141925_0%,_#242C42_50%,_#141925_100%)]'></div>
		</div>
	)
}

const Avatar = () => {
	return (
		<div className='relative'>
			<Image
				className='absolute left-[4px] top-[5px]'
				style={{
					clipPath:
						"path('M15.2521 1.64045C16.335 1.01523 17.6691 1.01523 18.7521 1.64045L31.161 8.80473C32.2439 9.42995 32.911 10.5854 32.911 11.8358V26.1644C32.911 27.4148 32.2439 28.5703 31.161 29.1955L18.7521 36.3598C17.6691 36.985 16.335 36.985 15.2521 36.3598L2.84315 29.1955C1.76025 28.5703 1.09315 27.4148 1.09315 26.1644V11.8358C1.09315 10.5854 1.76025 9.42994 2.84315 8.80473L15.2521 1.64045Z')"
				}}
				src={'/images/avatars/6.jpg'}
				width={35}
				height={35}
				alt='icon'
			/>
			<svg
				width='42'
				height='48'
				viewBox='0 0 42 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M19.5 2.02073C20.4282 1.48483 21.5718 1.48483 22.5 2.02073L39.2846 11.7113C40.2128 12.2472 40.7846 13.2376 40.7846 14.3094V33.6906C40.7846 34.7624 40.2128 35.7528 39.2846 36.2887L22.5 45.9793C21.5718 46.5152 20.4282 46.5152 19.5 45.9793L2.71539 36.2887C1.78719 35.7528 1.21539 34.7624 1.21539 33.6906V14.3094C1.21539 13.2376 1.78719 12.2472 2.71539 11.7113L19.5 2.02073Z'
					stroke='url(#paint0_linear_4303_24209)'
					stroke-width='2'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_4303_24209'
						x1='21'
						y1='5.80645'
						x2='21'
						y2='48'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							stop-color='#FDCD24'
							stop-opacity='0.19'
						/>
						<stop
							offset='1'
							stop-color='#FDCD24'
						/>
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}

const ListItem = ({ item: { rank, stepsList } }: IListItemProps) => {
	const t = useTranslations()

	const itemRef = useRef<HTMLDivElement>(null)

	const [renderingSteps, setRenderingSteps] = useState<any[]>([])

	const { openModal } = useModal()

	const onClick = () => {
		openModal(
			<StreakModal item={{ rank, stepsList }} />,
			{},
			<IconInfo />,
			t('streak_detail').toUpperCase(),
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
			},
			true
		)
	}

	useEffect(() => {
		if (itemRef.current) {
			const resizeObserver = new ResizeObserver(() => {
				const calcWidth = (step: any) => {
					if (step.balance && step.items) return 268.22
					if (step.balance) return 122.11
					return 166.11
				}

				const width = itemRef.current?.clientWidth ?? 0

				let innerWidth = calcWidth(stepsList[0])
				for (let index = 0; index < (itemRef.current?.children.length ?? 0); index++) {
					innerWidth += index === 2 ? 0 : (itemRef.current?.children.item(index)?.clientWidth ?? 0)
				}

				const realWidth = width - innerWidth

				let tempWidth = 72 + calcWidth(stepsList[0]) + calcWidth(stepsList[stepsList.length - 1])
				const steps = [stepsList[0]]
				let index = 1
				while (index < stepsList.length - 1) {
					tempWidth += calcWidth(stepsList[index]) + 102.84
					if (tempWidth > realWidth) break

					steps.push(stepsList[index])
					index++
				}
				if (index !== stepsList.length - 1) steps.push({ isTruncate: true })
				steps.push(stepsList[stepsList.length - 1])
				setRenderingSteps(steps)
			})
			resizeObserver.observe(itemRef.current)

			return () => {
				resizeObserver.disconnect()
			}
		}
	}, [stepsList])

	return (
		<div
			onClick={onClick}
			ref={itemRef}
			className={clsx(
				cls.top_list,
				{ [cls.rank_first]: rank === 1 },
				{ [cls.rank_second]: rank === 2 },
				{ [cls.rank_third]: rank === 3 }
			)}
		>
			<div className='relative mr-4 gap-4'>
				<RankBg rank={rank} />
				<p
					className={clsx(
						{ 'text-[#724719]': rank === 1 },
						{ 'text-[#383333]': rank === 2 },
						{ 'text-[#121722]': rank === 3 },
						{ 'text-[#60719A]': rank > 3 },
						'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
					)}
				>
					{rank}
				</p>
			</div>
			<div className='mr-4 [filter:drop-shadow(0_2px_11px_#FD3E2459)]'>
				<Avatar />
			</div>
			<div className='flex flex-grow'>
				{renderingSteps.map((step, index) => (
					<Fragment key={index}>
						{!step.isTruncate ? (
							<div className='flex h-12 items-center rounded-lg border-1 border-[#212838] pr-[18px]'>
								{step.items && (
									<div className='relative flex h-full items-center gap-[10px] rounded-lg'>
										<div className='absolute -left-[1px] top-[9px] z-10 h-[30px] w-[2px] rounded-r-[12px] bg-[#C12BC9]'></div>
										<div className='flex h-[calc(100%_+_2px)] w-[80px] -translate-x-[1px] items-center justify-center rounded-lg bg-[#121722]'>
											<Image
												src='/images/case/skin-2.png'
												width={51}
												height={38}
												alt='icon'
												className='bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,_0,_245,_0.45)_0%,_rgba(18,_23,_34,_0)_100%)]'
											/>
										</div>
										<div>
											<p className='mb-1 text-[12px] leading-3 text-[#60719A]'>
												{step.items?.count} {t('items')}
											</p>
											<p className='text-[14px] leading-[14px] text-[#24FDBC]'>${step.items?.totalPrice}</p>
										</div>
									</div>
								)}
								{step.balance && (
									<div className='ml-2 flex items-center gap-[10px]'>
										<div className='relative w-max'>
											<HexagonBg />
											<IconWalletAdd className='absolute left-1/2 top-1/2 h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2' />
										</div>
										<div>
											<p className='mb-1 text-[12px] leading-3 text-[#60719A]'>{t('balance')}</p>
											<p className='text-[14px] leading-[14px] text-[#24FDBC]'>${step.balance}</p>
										</div>
									</div>
								)}
							</div>
						) : (
							<div className='mx-4 flex flex-col items-center'>
								<IconArrowRight />
								<p className='text-center text-[10px] text-[#60719A]'>
									{stepsList.length - renderingSteps.length + 1} {t('more').toUpperCase()}
								</p>
								<p className='text-center text-[10px] text-[#60719A]'>...</p>
							</div>
						)}
						{step.nextProbability && !renderingSteps[index + 1].isTruncate && (
							<div className='mx-4 flex flex-col items-center'>
								<IconArrowRight />
								<p className='text-center text-[10px] text-[#60719A]'>{step.nextProbability} %</p>
								<p className='text-center text-[10px] text-[#60719A]'>{t('probability').toUpperCase()}</p>
							</div>
						)}
					</Fragment>
				))}
			</div>
			<div className='mx-5'>
				<p className='text-center text-[10px] font-medium text-[#60719A]'>{t('steps').toUpperCase()}</p>
				<p className='text-center text-[12px]'>{stepsList.length}</p>
			</div>
			<div className='mr-3 h-12 w-[135px] flex-[0_0_165px] bg-[linear-gradient(90deg,_#2D374F_0%,_rgba(45,_55,_79,_0.45)_50%,_#2D374F_100%)] p-[2px] [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_10px_100%,_0px_50%)]'>
				<div className='flex h-full w-full items-center justify-center gap-1 bg-[linear-gradient(90deg,_#232B3E_0%,_rgba(35,_43,_62,_0.25)_50%,_#232B3E_100%)] [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_calc(100%_-_1px)_50%,_calc(100%_-_10px)_100%,_10px_100%,_1px_50%)]'>
					<p className='text-[20px] font-bold leading-5 text-white'>61 329</p>
					<p className='mb-4 text-[10px] font-medium leading-3 text-[#475471]'>v2.7</p>
				</div>
			</div>
			<Button className='flex-[0_0_48px]'>
				<div className='relative'>
					<HexagonBg2 />
					<IconEye className='absolute left-1/2 top-1/2 h-[22px] w-[22px] -translate-x-1/2 -translate-y-1/2 fill-[#121722]' />
				</div>
			</Button>
		</div>
	)
}

const UpgradeStreaks = () => {
	const [page, setPage] = useState<number>(1)

	return (
		<div>
			<div className='flex flex-col gap-2'>
				{upgradeItems.map((item, index) => (
					<ListItem
						item={item}
						key={index}
					/>
				))}
			</div>
			<div className='mt-2 flex justify-center'>
				<PaginationBar
					page={page}
					setPage={setPage}
					total={5}
				/>
			</div>
		</div>
	)
}

export default UpgradeStreaks
