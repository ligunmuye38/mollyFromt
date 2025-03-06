import { PartnershipTypes } from '../../model/types'
import { CircularProgress } from '@nextui-org/react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import CreateCaseModal from '@/widgets/Cases/ui/CreateCase/CreateCaseModal'
import LevelInfoModal from '@/widgets/LevelInfoModal'
import TransferMethodSelectionModal from '@/widgets/TransferMethodSelectionModal'

import IconArrowRight from '@/shared/assets/icons/icon-arrow-right-hexagon-2.svg'
import IconPlus from '@/shared/assets/icons/icon-black-plus.svg'
import IconCaseOpen from '@/shared/assets/icons/icon-case-open.svg'
import IconCoin from '@/shared/assets/icons/icon-coin.svg'
import IconCopy from '@/shared/assets/icons/icon-copy-2.svg'
import IconDollarCircle from '@/shared/assets/icons/icon-dollar.svg'
import IconGift from '@/shared/assets/icons/icon-gift-black.svg'
import IconCreateModalLogo from '@/shared/assets/icons/icon-green-plus.svg'
import IconRadio from '@/shared/assets/icons/icon-radio.svg'
import IconUser from '@/shared/assets/icons/icon-user-avatar.svg'
import { useModal } from '@/shared/context/ModalContext'
import Button from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'

interface IStepWrapper {
	icon: React.FC<React.SVGProps<SVGSVGElement>>
	leading: string
	description: string
	step: number
}

const StepWrapper = ({ icon: Icon, description, leading, step }: IStepWrapper) => {
	return (
		<div className='rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px]'>
			<div className='relative flex h-full w-full items-center gap-2 rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#141925_100%)] p-[15px]'>
				<div className='h-[60px] w-[60px] flex-[0_0_60px] rounded-[10px] border-1 border-[#283245] bg-[#1F2737] p-[13px]'>
					<Icon className='h-[34px] w-[34px] fill-white' />
				</div>
				<div>
					<p className='mb-1 text-[14px] font-medium leading-4 text-white'>{leading}</p>
					<p className='text-[12px] font-medium leading-[14px] text-[#60719A]'>{description}</p>
				</div>
				<div className='absolute right-[14px] top-1/2 -translate-y-1/2 text-[88px] font-bold leading-[16px] text-[#1E2434] opacity-35'>
					{step.toString().padStart(2, '0')}
				</div>
			</div>
		</div>
	)
}

interface IMainHeader {
	type?: PartnershipTypes
}

const MainHeader = ({ type = PartnershipTypes.PARTNERSHIP }: IMainHeader) => {
	const t = useTranslations()
	const [isOpen, toggleIsOpen] = useState<boolean>(false)
	const [isOpenLevelInfo, toggleIsOpenLevelInfo] = useState<boolean>(false)
	const [code, setCode] = useState<string>('')
	const { openModal } = useModal()
	const params = useSearchParams()
	const [caseId, setCaseId] = useState<string>()

	useEffect(() => {
		if (params.has('case-id')) {
			setCaseId(params.get('case-id') ?? '')
		} else {
			setCaseId('')
		}
	}, [params])

	const handleCreateNewCase = () => {
		openModal(
			<CreateCaseModal />,
			{},
			<IconCreateModalLogo className='h-[20px] w-[20px]' />,
			t('create_case.title'),
			{
				body: 'lg:w-full',
				modal: 'relative w-full lg:h-full lg:w-screen h-screen flex lg:items-start justify-center items-center'
			},
			true
		)
	}

	return (
		<div className=''>
			<TransferMethodSelectionModal
				onClose={() => toggleIsOpen(false)}
				open={isOpen}
			/>
			<LevelInfoModal
				onClose={() => toggleIsOpenLevelInfo(false)}
				open={isOpenLevelInfo}
			/>
			<div
				className={clsx('relative mb-5 grid grid-cols-3 gap-5 lg:grid-cols-1', {
					hidden: type === PartnershipTypes.PARTNERSHIP_CASES && caseId
				})}
			>
				<StepWrapper
					description={t(`${type}_steps.step1_description`)}
					icon={type === PartnershipTypes.PARTNERSHIP ? IconGift : IconCaseOpen}
					leading={t(`${type}_steps.step1_leading`)}
					step={1}
				/>
				<IconArrowRight className='absolute left-[33%] top-1/2 z-10 -translate-x-[18px] -translate-y-1/2 lg:left-1/2 lg:top-[33%] lg:-translate-x-1/2 lg:rotate-90' />
				<StepWrapper
					description={t(`${type}_steps.step2_description`)}
					icon={IconRadio}
					leading={t(`${type}_steps.step2_leading`)}
					step={2}
				/>
				<IconArrowRight className='absolute left-[66%] top-1/2 z-10 -translate-x-[7px] -translate-y-1/2 lg:left-1/2 lg:top-[66%] lg:-translate-x-1/2 lg:-translate-y-[33%] lg:rotate-90' />
				<StepWrapper
					description={t(`${type}_steps.step3_description`)}
					icon={IconCoin}
					leading={t(`${type}_steps.step3_leading`)}
					step={3}
				/>
			</div>
			<div
				className={clsx('grid grid-cols-3 gap-5 lg:grid-cols-1', {
					hidden: type === PartnershipTypes.PARTNERSHIP_CASES && caseId
				})}
			>
				<div className='h-[170px] w-full rounded-[12px] bg-[linear-gradient(90deg,_#FDCD24_0%,_#E8BB19_100%)] p-[3px]'>
					<div className='flex h-full w-full items-center justify-between rounded-[12px] bg-[linear-gradient(90deg,_#EABC1A_0%,_#E8BB19_100%)] py-5 pl-[25px] pr-5'>
						<div>
							<p className='mb-3 text-[34px] font-bold leading-[30px] text-[#121722]'>$500.34</p>
							<p className='mb-4 text-[12px] font-bold leading-[12px] text-[#7E6B2A]'>
								{type === PartnershipTypes.PARTNERSHIP
									? t('referral_balance').toUpperCase()
									: t('your_earnings').toUpperCase()}
							</p>
							<Button
								onPress={() => toggleIsOpen(true)}
								classNames={{
									base: 'bg-[#151A26] w-[158px] h-[44px] [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_10px_100%,_0px_50%)]',
									content: 'flex items-center justify-center'
								}}
							>
								<p className='text-[14px] font-bold text-[white]'>{t('withdrawal').toUpperCase()}</p>
							</Button>
						</div>
						{type === PartnershipTypes.PARTNERSHIP && (
							<div className='flex flex-col items-center gap-[7px]'>
								<div className='relative h-auto w-auto'>
									<CircularProgress
										color='success'
										size='lg'
										value={60}
										classNames={{
											svg: 'w-[80px] h-[80px] -rotate-[120deg]',
											indicator: 'stroke-[#151A26]',
											track: 'stroke-[#B69316]'
										}}
										strokeWidth={2}
									></CircularProgress>
									<span className='absolute left-0 top-1/2 flex h-full w-full -translate-y-1/2 flex-col items-center justify-center'>
										<span className='text-[28px] font-bold leading-[28px] text-[#151A26]'>2</span>
										<span className='text-[16px] font-bold uppercase leading-4 text-[#151A26]'>lvl</span>
									</span>
								</div>
								<Button
									onPress={() => toggleIsOpenLevelInfo(true)}
									classNames={{
										base: 'bg-[#D4AE27] w-[105px] h-[32px] [clip-path:polygon(9px_0px,_calc(100%_-_9px)_0px,_100%_50%,_calc(100%_-_9px)_100%,_9px_100%,_0px_50%)] p-[1px]',
										content:
											'w-full h-full flex items-center justify-center [clip-path:polygon(9px_0px,_calc(100%_-_9px)_0px,_100%_50%,_calc(100%_-_9px)_100%,_9px_100%,_0px_50%)] bg-[#E9BC1A]'
									}}
								>
									<p className='text-[12px] font-bold text-[#765E06]'>{t('what_is_it').toUpperCase()}</p>
								</Button>
							</div>
						)}
					</div>
				</div>
				{type === PartnershipTypes.PARTNERSHIP ? (
					<div className='col-span-2 grid grid-cols-5 gap-5 lg:col-span-1 lg:grid-cols-1'>
						<div className='col-span-2 rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[3px] lg:col-span-1'>
							<div className='flex h-full w-full items-center gap-5 rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#141925_100%)] py-5 pl-[25px] pr-5'>
								<div className='w-[78px]'>
									<Image
										src='/images/users.png'
										width={50}
										height={50}
										alt='users'
									/>
									<p className='mt-2 bg-[linear-gradient(0deg,_#D1D9EB,_#D1D9EB),_linear-gradient(0deg,_rgba(28,_34,_48,_0)_-0.71%,_rgba(28,_34,_48,_0.35)_100.71%)] bg-clip-text text-[18px] font-bold leading-5'>
										{t('invited_users').toUpperCase()}
									</p>
								</div>
								<div className='flex h-full flex-grow flex-col justify-between gap-2'>
									<div className='flex h-[50px] items-center gap-2 rounded-lg border-1 border-dashed border-[#283247] bg-[#1E2636] p-[9px]'>
										<div className='flex h-8 w-8 items-center justify-center rounded-md bg-[#E1B514]'>
											<IconUser className='h-4 w-4 fill-[#151A26]' />
										</div>
										<div>
											<p className='mb-[2px] text-[14px] font-bold leading-4 text-white'>3 892</p>
											<p className='text-[12px] font-medium leading-3 text-[#60719A]'>{t('all_users')}</p>
										</div>
									</div>
									<div className='flex h-[50px] items-center gap-2 rounded-lg border-1 border-dashed border-[#283247] bg-[#1E2636] p-[9px]'>
										<div className='flex h-8 w-8 items-center justify-center rounded-md bg-[#10AA7C]'>
											<IconDollarCircle className='h-4 w-4 fill-[#151A26]' />
										</div>
										<div>
											<p className='mb-[2px] text-[14px] font-bold leading-4 text-white'>$3 892.33</p>
											<p className='text-[12px] font-medium leading-3 text-[#60719A]'>{t('total_profit')}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-span-3 rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[3px] lg:col-span-1'>
							<div className='flex h-full w-full flex-col justify-between gap-2 rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#141925_100%)] p-[25px]'>
								<Input
									value='https://molly.io/ref=9878ijdkl12d'
									onChange={() => {
										return
									}}
									endContent={
										<Button
											onPress={() => {
												navigator.clipboard.writeText('https://molly.io/ref=9878ijdkl12d')
											}}
										>
											<IconCopy className='h-5 w-5 cursor-pointer fill-[#5F6C87]' />
										</Button>
									}
									label={t('your_link').toUpperCase()}
									labelPlacement='inside'
									classNames={{
										base: 'h-12',
										input: '!text-white',
										inputWrapper: 'rounded-[8px]',
										label: '!text-[#60719A] !text-[8px]'
									}}
								/>
								<div className='flex gap-[10px]'>
									<div className='flex-grow rounded-[8px] bg-[linear-gradient(0deg,_rgba(16,_170,_124,_0.15),_rgba(16,_170,_124,_0.15)),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.0975)_100%)] p-[1px]'>
										<Input
											value={code}
											onChange={v => setCode(v)}
											placeholder={t('enter_your_code')}
											label={t('your_code').toUpperCase()}
											labelPlacement='inside'
											classNames={{
												base: 'h-[46px]',
												input: '!text-white',
												inputWrapper: 'rounded-[8px]',
												label: '!text-[#60719A] !text-[8px]'
											}}
										/>
									</div>
									<Button
										classNames={{
											base: 'w-[124px] h-12 rounded-[8px] bg-[linear-gradient(90deg,_rgba(36,_253,_188,_0)_77.44%,_#24FDBC_89.52%),_linear-gradient(270deg,_#10AA7C_40.76%,_#24FDBC_57.96%)] p-[1px]',
											content:
												'text-[#121722] text-[12px] font-bold bg-[linear-gradient(0deg,_#10AA7C,_#10AA7C),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.65)_100%)] w-full h-full rounded-[8px]'
										}}
									>
										{t('generate_code').toUpperCase()}
									</Button>
								</div>
							</div>
						</div>
					</div>
				) : (
					<>
						<div className='rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[3px]'>
							<div className='flex h-full w-full items-center gap-5 rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#141925_100%)] py-5 pl-[25px] pr-5'>
								<div className='w-[78px]'>
									<Image
										src='/images/case-open.png'
										width={62}
										height={50}
										alt='users'
									/>
									<p className='mt-2 bg-[linear-gradient(0deg,_#D1D9EB,_#D1D9EB),_linear-gradient(0deg,_rgba(28,_34,_48,_0)_-0.71%,_rgba(28,_34,_48,_0.35)_100.71%)] bg-clip-text text-[18px] font-bold leading-5'>
										{t('cases_stats').toUpperCase()}
									</p>
								</div>
								<div className='flex h-full flex-grow flex-col justify-between gap-2'>
									<div className='flex h-[50px] items-center gap-2 rounded-lg border-1 border-dashed border-[#283247] bg-[#1E2636] p-[9px]'>
										<div className='flex h-8 w-8 items-center justify-center rounded-md bg-[#E1B514]'>
											<IconCaseOpen className='h-4 w-4 fill-[#151A26]' />
										</div>
										<div>
											<p className='mb-[2px] text-[14px] font-bold leading-4 text-white'>3 892</p>
											<p className='text-[12px] font-medium leading-3 text-[#60719A]'>{t('all_opened')}</p>
										</div>
									</div>
									<div className='flex h-[50px] items-center gap-2 rounded-lg border-1 border-dashed border-[#283247] bg-[#1E2636] p-[9px]'>
										<div className='flex h-8 w-8 items-center justify-center rounded-md bg-[#10AA7C]'>
											<IconDollarCircle className='h-4 w-4 fill-[#151A26]' />
										</div>
										<div>
											<p className='mb-[2px] text-[14px] font-bold leading-4 text-white'>$3 892</p>
											<p className='text-[12px] font-medium leading-3 text-[#60719A]'>{t('total_earn')}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Button
							onPress={handleCreateNewCase}
							classNames={{
								base: 'rounded-[12px] bg-[linear-gradient(0deg,_rgba(16,_170,_124,_0.25),_rgba(16,_170,_124,_0.25)),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.1625)_100%)] p-[2px]',
								content:
									'flex h-full w-full flex-col items-center justify-center gap-6 rounded-[12px] bg-[linear-gradient(180deg,_#112E30_0%,_#12413D_100%)] py-5 pl-[25px] pr-5'
							}}
						>
							<IconPlus className='h-[34px] w-[34px] fill-[#24FDBC]' />
							<p className='text-[18px] font-bold leading-[18px] text-[#24FDBC]'>{t('create_new_case')}</p>
						</Button>
					</>
				)}
			</div>
		</div>
	)
}

export default MainHeader
