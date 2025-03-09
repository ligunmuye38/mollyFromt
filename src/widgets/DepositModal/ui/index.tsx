'use client'

import { countries, cryptosCurrencies as cryptos, paymentMethods as payments } from '../model/items'
import { ICryptoCurrency, IPaymentMethod, PaymentMethodType } from '../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import QRCode from 'react-qr-code'

import IconUAH from '@/shared/assets/icons/currencies/icon-uah.svg'
import IconUSD from '@/shared/assets/icons/currencies/icon-usd.svg'
import IconArrowDown from '@/shared/assets/icons/icon-arrow-down.svg'
import IconArrowRightCircular from '@/shared/assets/icons/icon-arrow-right-circular.svg'
import IconBagTick from '@/shared/assets/icons/icon-bag-tick.svg'
import IconCheckBox from '@/shared/assets/icons/icon-check-box.svg'
import IconCopy from '@/shared/assets/icons/icon-copy-2.svg'
import IconCSGo from '@/shared/assets/icons/icon-cs-go.svg'
import IconCS from '@/shared/assets/icons/icon-cs.svg'
import IconDota2 from '@/shared/assets/icons/icon-dota-2.svg'
import IconGiftCard from '@/shared/assets/icons/icon-gift-card.svg'
import IconGift from '@/shared/assets/icons/icon-gift.svg'
import IconInfo from '@/shared/assets/icons/icon-info-3.svg'
import IconInfo2 from '@/shared/assets/icons/icon-info.svg'
import Close from '@/shared/assets/icons/icon-modal-close.svg'
import IconSearch from '@/shared/assets/icons/icon-search.svg'
import IconShoppingCart from '@/shared/assets/icons/icon-shopping-cart.svg'
import IconSteam from '@/shared/assets/icons/icon-steam-logo.svg'
import IconTimer from '@/shared/assets/icons/icon-timer-4.svg'
import { useModal } from '@/shared/context/ModalContext'
import Button from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { Select } from '@/shared/ui/Select/Select'

import { CaseItem } from './CaseItem'

interface IPaymentMethodCardProps {
	data: IPaymentMethod
	selected: boolean
	onClick: () => void
}

const PaymentMethodCard = ({ data, selected, onClick }: IPaymentMethodCardProps) => {
	return (
		<div
			onClick={onClick}
			className={clsx(
				'relative flex h-[100px] w-full min-w-[180px] items-center justify-center rounded-2xl bg-[#0F131C] duration-150 md:min-w-[140px]',
				selected ? 'border-2 border-[#24FDBC]' : 'cursor-pointer border-1 border-[#1F2636]'
			)}
		>
			<img
				src={data.icon}
				alt='payment method'
			/>
			<div
				className={clsx('absolute left-0 top-0 h-full w-full', selected ? 'opacity-60' : 'opacity-10')}
				style={{
					background: selected
						? `radial-gradient(50% 50% at 50% 100%, ${data.color} 0%, rgba(15, 19, 28, 0) 100%)`
						: `radial-gradient(40% 40% at 50% 100%, ${data.color} 0%, rgba(15, 19, 28, 0) 100%)`
				}}
			></div>
		</div>
	)
}

const DepositModal = () => {
	const t = useTranslations()

	const { closeModal } = useModal()

	const [value, setValue] = useState<string>(countries[0].title)
	const [selectedMethod, setSelectedMethod] = useState<IPaymentMethod>(payments[0])
	const [usdValue, setUsdValue] = useState<string>('0')
	const [uahValue, setUahValue] = useState<string>('0')
	const [promoCode, setPromoCode] = useState<string>('')
	const [selectedCrypto, setSelectedCrypto] = useState<ICryptoCurrency>(cryptos[3])
	const [selectedSkins, setSelectedSkins] = useState<number[]>([])
	const [inventoryType, setInventoryType] = useState<number>(0)
	const [search, setSearch] = useState<string>('')
	const [dir, toggleDir] = useState<boolean>(false)
	const [tradeUrl, setTradeUrl] = useState<string>('')

	const items = countries.map(item => ({
		value: item.title,
		label: item.name,
		startContent: (
			<Image
				src={item.flag}
				width={32}
				height={32}
				className='rounded-[6px]'
				alt='flag'
			/>
		)
	}))

	const cryptosData = cryptos.map(item => ({
		value: item.title,
		label: item.name,
		startContent: (
			<Image
				src={item.icon}
				width={32}
				height={32}
				className='rounded-[6px]'
				alt='flag'
			/>
		)
	}))

	const banks = payments
		.filter(item => item.methodType === PaymentMethodType.BANK)
		.map(item => ({
			value: item.title,
			label: item.name ?? '',
			startContent: (
				<div className='relative flex h-8 w-8 items-center justify-center rounded-md border-[0.3px] border-[#232B3E] bg-[#0F131C]'>
					<Image
						src={item.icon}
						width={24}
						height={32}
						className='rounded-[6px]'
						alt='flag'
					/>
					<div
						className={clsx('absolute left-0 top-0 h-full w-full opacity-50')}
						style={{
							background: `radial-gradient(60% 60% at 50% 100%, ${item.color} 0%, rgba(15, 19, 28, 0) 100%)`
						}}
					></div>
				</div>
			)
		}))

	return (
		<div className='relative rounded-2xl bg-[#181E2C]'>
			<div className='flex max-h-[calc(100vh_-_80px)] w-[1400px] overflow-hidden xl:w-[1200px] lg:w-[calc(100vw_-_80px)] md:max-h-none md:w-[calc(100vw_-_40px)] md:flex-col'>
				<div className='flex h-full flex-shrink-0 flex-col rounded-2xl bg-[#141925] p-[30px] md:p-[16px]'>
					<div className='mb-[18px]'>
						<p className='mb-2 text-[20px] font-bold leading-4 text-white'>{t('deposits.select_method')}</p>
						<p className='text-[14px] font-medium leading-4 text-[#7785B3]'>{t('deposits.method_description')}</p>
					</div>
					<Button
						classNames={{
							base: `h-[95px] mb-5 rounded-[16px] bg-[url('/images/payment/pay-by-skin-btn.png')]`,
							content: `bg-[linear-gradient(0deg,_rgba(70,_52,_39,_0.8)_0%,_rgba(244,_188,_66,_0.8)_100%)] w-full h-full px-5`
						}}
						onPress={() => {
							const method = payments.find(i => i.title === 'paybyskins')
							if (method) {
								setSelectedMethod(method)
							}
						}}
					>
						<div className='flex w-full items-center gap-6'>
							<div className='flex h-[60px] w-[60px] items-center justify-center rounded-[12px] border-t-2 border-[#FCCB70] bg-[linear-gradient(180deg,_rgba(254,_149,_93,_0.0275)_0%,_rgba(244,_152,_59,_0.1825)_100%)] shadow-xl'>
								<Image
									src='/images/payment/icon-pay-by-skins.svg'
									width={27}
									height={36}
									alt='pay by skins icon'
								/>
							</div>
							<p className='flex-grow text-left text-[24px] font-bold text-white'>
								{t('deposits.pay_by_skins').toUpperCase()}
							</p>
							<div style={{ filter: 'drop-shadow(0 4px 4px #00000024)' }}>
								<IconArrowRightCircular />
							</div>
						</div>
					</Button>
					<div className='mb-[38px]'>
						<p className='mb-2 text-[12px] font-bold leading-4 text-[#49526D]'>
							{t('deposits.choose_country').toUpperCase()}
						</p>
						<Select
							value={new Set([value])}
							onChangeValue={v => setValue(String(new Set(v).values().next().value ?? ''))}
							theme='theme-1'
							items={items}
							classNames={{
								itemLabel: 'text-white',
								trigger: '!rounded-md !h-[48px]',
								selectorIcon: 'fill-[#404B65]',
								itemInner: 'hover:!text-black'
							}}
						/>
					</div>
					<div className='app-popover-scrollbar flex-[0_0_calc(100vh_-_423px)] overflow-y-auto pr-1 md:flex-auto'>
						<div className='grid grid-cols-2 gap-5 md:gap-2'>
							{payments.map(paymentMethod => (
								<PaymentMethodCard
									key={paymentMethod.title}
									data={paymentMethod}
									onClick={() => setSelectedMethod(paymentMethod)}
									selected={paymentMethod.title === selectedMethod.title}
								/>
							))}
						</div>
					</div>
				</div>
				<div className='m-[30px] w-full md:m-0 md:p-[16px]'>
					<div className='mb-[30px]'>
						<p className='mb-2 text-[20px] font-bold leading-4 text-white'>{t('deposits.payment')}</p>
						<p className='text-[14px] font-medium leading-4 text-[#7785B3]'>{t('deposits.payment_description')}</p>
					</div>
					<div className='app-popover-scrollbar max-h-[calc(100vh_-_210px)] overflow-y-auto pr-1 md:max-h-none'>
						{selectedMethod.methodType === PaymentMethodType.BANK && (
							<div className='w-full rounded-[20px] border-1 border-[#232839] bg-[#141925] p-[25px]'>
								<div>
									<div className='mb-[10px] grid grid-cols-2 gap-5 lg:grid-cols-1 lg:gap-4'>
										<Select
											value={new Set([selectedMethod.title])}
											onChangeValue={v =>
												setSelectedMethod(
													payments.find(item => item.title === new Set(v).values().next().value) ?? payments[0]
												)
											}
											theme='theme-1'
											items={banks}
											classNames={{
												itemLabel: 'text-white',
												trigger: '!rounded-xl !h-[48px]',
												selectorIcon: 'fill-[#404B65]',
												itemInner: 'hover:!text-black'
											}}
										/>
										<div className='relative grid h-12 grid-cols-2 rounded-xl border-1 border-[#232B3E] px-3'>
											<div className='flex items-center gap-2 border-r-1 border-r-[#232B3E]'>
												<div className='flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(0deg,_#222B3F_0%,_#353D51_100%)]'>
													<IconUSD />
												</div>
												<p className='text-[14px] font-bold leading-4 text-white'>1.00</p>
											</div>
											<div className='flex flex-row-reverse items-center gap-2'>
												<div className='flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(0deg,_#222B3F_0%,_#353D51_100%)]'>
													<IconUAH />
												</div>
												<p className='text-[14px] font-bold leading-4 text-white'>41,34</p>
											</div>
											<div className='absolute left-1/2 top-1/2 flex h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-1 border-[#232B3E] bg-[#181E2C]'>
												=
											</div>
										</div>
									</div>
									<div className='mb-[15px] grid grid-cols-2 gap-5 lg:grid-cols-1'>
										<div>
											<p className='mb-[6px] text-[10px] font-bold leading-4 text-[#49526D]'>
												{t('deposits.you_are_getting').toUpperCase()}
											</p>
											<Input
												onChange={value => {
													setUsdValue(value)
													setUahValue((Number(value) * 41.34).toFixed(3))
												}}
												value={usdValue}
												startContent={
													<div className='flex h-6 !w-6 flex-[0_0_24px] items-center justify-center rounded-full bg-[linear-gradient(0deg,_#222B3F_0%,_#353D51_100%)]'>
														<IconUSD />
													</div>
												}
												type='number'
												classNames={{
													base: 'rounded-[12px]',
													mainWrapper: 'w-full'
												}}
											/>
										</div>
										<div>
											<p className='mb-[6px] text-[10px] font-bold leading-4 text-[#49526D]'>
												{t('deposits.you_are_giving_it_away').toUpperCase()}
											</p>
											<Input
												onChange={value => {
													setUahValue(value)
													setUsdValue((Number(value) / 41.34).toFixed(3))
												}}
												value={uahValue}
												startContent={
													<div className='flex h-6 !w-6 flex-[0_0_24px] items-center justify-center rounded-full bg-[linear-gradient(0deg,_#222B3F_0%,_#353D51_100%)]'>
														<IconUAH />
													</div>
												}
												type='number'
												classNames={{
													base: 'rounded-[12px]',
													mainWrapper: 'w-full'
												}}
											/>
										</div>
									</div>
									<div className='mb-[15px]'>
										<p className='mb-[6px] text-[10px] font-bold leading-4 text-[#49526D]'>
											{t('deposits.promo_code').toUpperCase()}
										</p>
										<Input
											onChange={value => setPromoCode(value)}
											value={promoCode}
											placeholder={t('deposits.enter_code')}
											startContent={<IconGift className='h-6 w-6' />}
											classNames={{
												base: 'rounded-[12px] w-full',
												inputWrapper: 'w-full',
												mainWrapper: 'w-full'
											}}
										/>
									</div>
									<Button
										classNames={{
											base: 'mb-5 rounded-[12px] p-[1px] h-12 w-full bg-[linear-gradient(90deg,_rgba(36,_253,_188,_0)_77.44%,_#24FDBC_89.52%),_linear-gradient(270deg,_rgba(36,_253,_188,_0.445)_40.76%,_#24FDBC_57.96%)]',
											content:
												'h-full rounded-[12px] bg-[linear-gradient(0deg,_#10AA7C,_#10AA7C),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188)_100%)]'
										}}
									>
										<p className='text-[14px] font-bold leading-4 text-[#141925]'>
											{t('deposits.go_to_payment')} ${usdValue}
										</p>
									</Button>
									<div className='mb-8 flex flex-col gap-[10px]'>
										<div className='flex w-full items-center gap-[10px] rounded-[12px] bg-[#E2B617] p-[15px] text-[14px] font-bold leading-[15px] text-[#141925]'>
											<IconTimer className='h-5 w-5 fill-[#141529]' />
											{t('deposits.awaiting_crediting')}
										</div>
										<div className='flex w-full items-center gap-[10px] rounded-[12px] bg-[#17E2A5] p-[15px] text-[14px] font-bold leading-[15px] text-[#141925]'>
											<IconCheckBox className='h-5 w-5 fill-[#141529]' />
											{t('deposits.funds_credited')}
										</div>
									</div>
									<div className='flex items-center gap-[10px] rounded-[10px] border-1 border-[#282D40] p-[15px]'>
										<IconInfo className='flex-shrink-0' />
										<div className='text-[12px] leading-4 text-[#7785B3]'>
											<p>
												{t('deposits.commission')}: <span className='font-bold'>3.00%</span>
											</p>
											<p>
												{t('deposits.limit_of_replenishment')}:{' '}
												<span className='font-bold'>100.00 $ - 300000.00 $</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						)}
						{selectedMethod.methodType === PaymentMethodType.CRYPTO && (
							<div className='w-full rounded-[20px] border-1 border-[#232839] bg-[#141925] p-[25px] lg:border-transparent lg:bg-transparent lg:p-0'>
								<div>
									<div className='mb-[10px] grid grid-cols-2 gap-5 lg:grid-cols-1'>
										<Select
											value={new Set([selectedCrypto.title])}
											onChangeValue={v =>
												setSelectedCrypto(cryptos.find(i => i.title === new Set(v).values().next().value) ?? cryptos[0])
											}
											theme='theme-1'
											items={cryptosData}
											classNames={{
												itemLabel: 'text-white',
												trigger: '!rounded-xl !h-[48px]',
												selectorIcon: 'fill-[#404B65]',
												itemInner: 'hover:!text-black'
											}}
										/>
										<div className='relative grid h-12 grid-cols-2 rounded-xl border-1 border-[#232B3E] px-3'>
											<div className='flex items-center gap-2 border-r-1 border-r-[#232B3E]'>
												<div className='flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(0deg,_#222B3F_0%,_#353D51_100%)]'>
													<IconUSD />
												</div>
												<p className='text-[14px] font-bold leading-4 text-white'>{selectedCrypto.price}</p>
											</div>
											<div className='flex flex-row-reverse items-center gap-2'>
												<div className='flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(0deg,_#222B3F_0%,_#353D51_100%)]'>
													<Image
														src={selectedCrypto.icon}
														width={16}
														height={16}
														alt='crypto currency'
													/>
												</div>
												<p className='text-[14px] font-bold leading-4 text-white'>1,00</p>
											</div>
											<div className='absolute left-1/2 top-1/2 flex h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-1 border-[#232B3E] bg-[#181E2C]'>
												=
											</div>
										</div>
									</div>
									<div className='mb-[15px] grid grid-cols-2 gap-5 lg:grid-cols-1'>
										<div>
											<p className='mb-[6px] text-[10px] font-bold leading-4 text-[#49526D]'>
												{t('deposits.you_are_getting').toUpperCase()}
											</p>
											<Input
												onChange={value => {
													setUsdValue(value)
													setUahValue((Number(value) / selectedCrypto.price).toFixed(3))
												}}
												value={usdValue}
												startContent={
													<div className='flex h-6 !w-6 flex-[0_0_24px] items-center justify-center rounded-full bg-[linear-gradient(0deg,_#222B3F_0%,_#353D51_100%)]'>
														<IconUSD />
													</div>
												}
												type='number'
												classNames={{
													base: 'rounded-[12px]',
													mainWrapper: 'w-full'
												}}
											/>
										</div>
										<div>
											<p className='mb-[6px] text-[10px] font-bold leading-4 text-[#49526D]'>
												{t('deposits.you_are_giving_it_away').toUpperCase()}
											</p>
											<Input
												onChange={value => {
													setUahValue(value)
													setUsdValue((Number(value) * selectedCrypto.price).toFixed(3))
												}}
												value={uahValue}
												startContent={
													<div className='flex h-6 !w-6 flex-[0_0_24px] items-center justify-center rounded-full bg-[linear-gradient(0deg,_#222B3F_0%,_#353D51_100%)]'>
														<Image
															src={selectedCrypto.icon}
															width={16}
															height={16}
															alt='crypto currency'
														/>
													</div>
												}
												type='number'
												classNames={{
													base: 'rounded-[12px]',
													mainWrapper: 'w-full'
												}}
											/>
										</div>
									</div>
									<div className='mb-[15px]'>
										<p className='mb-[6px] text-[10px] font-bold leading-4 text-[#49526D]'>
											{t('deposits.your_payment_address').toUpperCase()}
										</p>
										<div
											onClick={() => {
												navigator.clipboard.writeText('3GHHYktUzUjppdUmz6yqrJ2vqiW6o5PG2D')
											}}
											className='flex cursor-pointer items-center justify-between gap-2 rounded-xl border-1 border-[#232B3E] bg-[#181E2C] p-3 pl-4'
										>
											<div className='overflow-hidden'>
												<p className='text-[14px] leading-4 text-white'>3GHHYktUzUjppdUmz6yqrJ2vqiW6o5PG2D</p>
											</div>
											<IconCopy className='h-5 w-5 flex-shrink-0 fill-[#5F6C87]' />
										</div>
									</div>
									<div className='mb-5 flex flex-col items-center'>
										<div className='mb-4 flex flex-wrap items-center justify-center gap-1 text-[14px] font-medium text-white'>
											{t('deposits.send_to_address').slice(0, t('deposits.send_to_address').indexOf('###'))}
											<div
												className='flex cursor-pointer items-center gap-1 text-[#12B081]'
												onClick={() => {
													navigator.clipboard.writeText(uahValue)
												}}
											>
												<p>
													{uahValue} {selectedCrypto.name}
												</p>
												<IconCopy className='h-4 w-4 fill-[#49516D]' />
											</div>
											<span>
												{t('deposits.send_to_address').slice(
													t('deposits.send_to_address').indexOf('###') + 3,
													t('deposits.send_to_address').indexOf(',') + 1
												)}
											</span>
											<span>{t('deposits.send_to_address').slice(t('deposits.send_to_address').indexOf(',') + 1)}</span>
										</div>
										<div className='h-[180px] w-[180px] rounded-xl border-1 border-[#282D40] bg-[#181E2C] p-3'>
											<QRCode
												value='key'
												bgColor='white'
												fgColor='#181E2C'
												style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
											/>
										</div>
									</div>
									<div className='mb-4 flex items-center gap-2 rounded-xl border-1 border-[#F4AD5C59] bg-[#F4AD5C26] p-[10px]'>
										<IconInfo2 className='h-5 w-5 fill-[#F4AD5C] lg:!h-6 lg:!w-6 lg:flex-shrink-0' />
										<p className='text-[14px] font-medium leading-4 text-[#F4AD5C] lg:text-[10px]'>
											{t('deposits.check_warning')}
										</p>
									</div>
									<div className='mb-[15px]'>
										<p className='mb-[6px] text-[10px] font-bold leading-4 text-[#49526D]'>
											{t('deposits.promo_code').toUpperCase()}
										</p>
										<Input
											onChange={value => setPromoCode(value)}
											value={promoCode}
											placeholder={t('deposits.enter_code')}
											startContent={<IconGift className='h-6 w-6' />}
											classNames={{
												base: 'rounded-[12px] w-full',
												inputWrapper: 'w-full',
												mainWrapper: 'w-full'
											}}
										/>
									</div>
									<Button
										classNames={{
											base: 'mb-5 rounded-[12px] p-[1px] h-12 w-full bg-[linear-gradient(90deg,_rgba(36,_253,_188,_0)_77.44%,_#24FDBC_89.52%),_linear-gradient(270deg,_rgba(36,_253,_188,_0.445)_40.76%,_#24FDBC_57.96%)]',
											content:
												'h-full rounded-[12px] bg-[linear-gradient(0deg,_#10AA7C,_#10AA7C),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188)_100%)]'
										}}
									>
										<p className='text-[14px] font-bold leading-4 text-[#141925]'>{t('deposits.go_to_payment')}</p>
									</Button>
									<div className='flex items-center gap-[10px] rounded-[10px] border-1 border-[#282D40] p-[15px] lg:p-2'>
										<IconInfo className='lg:flex-shrink-0' />
										<div className='text-[12px] leading-4 text-[#7785B3] lg:text-[10px]'>
											<p>
												{t('deposits.commission')}: <span className='font-bold'>3.00%</span>
											</p>
											<p>
												{t('deposits.limit_of_replenishment')}:{' '}
												<span className='font-bold'>100.00 $ - 300000.00 $</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						)}
						{selectedMethod.methodType === PaymentMethodType.GIFT && (
							<div className='rounded-[20px] border-1 border-[#232839] bg-[#141925] p-[25px] md:border-0 md:bg-transparent md:p-0'>
								<div>
									<div className='mb-[14px]'>
										<p className='mb-[6px] text-[10px] font-bold leading-4 text-[#49526D]'>
											{t('deposits.choose_amount').toUpperCase()}
										</p>
										<Select
											value={new Set(['5000'])}
											onChangeValue={() => {
												return
											}}
											theme='theme-1'
											items={[{ label: '5000', value: '5000' }]}
											classNames={{
												itemLabel: 'text-white',
												trigger: '!rounded-xl !h-[48px]',
												selectorIcon: 'fill-[#404B65]',
												itemInner: 'hover:!text-black'
											}}
										/>
									</div>
									<div className='mb-[15px] grid grid-cols-5 gap-[10px]'>
										{Array.from(new Array(10)).map((_, index) => (
											<div
												key={index}
												className='h-[50px] rounded-[10px] bg-[#2E3850] p-[1px]'
											>
												<div className='flex h-full w-full items-center justify-center rounded-[10px] bg-[linear-gradient(180deg,_#25304B_0%,_#181E2C_100%)]'>
													<p className='text-[18px] font-bold leading-4 text-[#687EB0]'>${index * 10 + 10}</p>
												</div>
											</div>
										))}
									</div>
									<div className='mb-4'>
										<p className='mb-[15px] text-center text-[16px] font-bold leading-4 text-white lg:mb-5'>
											{t('deposits.how_to_use')} ?
										</p>
										<div className='grid grid-cols-3 gap-2'>
											<div className='relative flex w-full items-center gap-4 rounded-2xl border-1 border-[#232B3E] bg-[#181E2C] p-4 lg:flex-col'>
												<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[64px] font-bold text-[#202738] lg:relative lg:left-auto lg:top-auto lg:mt-4 lg:translate-x-0 lg:translate-y-0 lg:text-[32px] lg:leading-4'>
													01
												</div>
												<div className='z-[1] h-12 w-12 flex-shrink-0 rounded-[12px] bg-[linear-gradient(0deg,_#10AA7C,_#10AA7C),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.65)_100%)] p-[1px] lg:absolute lg:left-1/2 lg:top-0 lg:h-[30px] lg:w-[30px] lg:-translate-x-1/2 lg:-translate-y-1/2'>
													<div className='flex h-full w-full items-center justify-center rounded-[12px] bg-[linear-gradient(0deg,_rgba(16,_170,_124,_0.15),_rgba(16,_170,_124,_0.15)),_linear-gradient(180deg,_#17353A_0%,_#184545_100%)]'>
														<IconShoppingCart className='h-6 w-6 fill-[#1AD19A] lg:h-4 lg:w-4' />
													</div>
												</div>
												<p className='z-[1] text-[14px] font-medium leading-4 text-white lg:text-center lg:text-[8px]'>
													{t('deposits.buy_gift_card')}
												</p>
											</div>
											<div className='relative flex w-full items-center gap-4 rounded-2xl border-1 border-[#232B3E] bg-[#181E2C] p-4 lg:flex-col'>
												<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[64px] font-bold text-[#202738] lg:relative lg:left-auto lg:top-auto lg:mt-4 lg:translate-x-0 lg:translate-y-0 lg:text-[32px] lg:leading-4'>
													02
												</div>
												<div className='z-[1] h-12 w-12 flex-shrink-0 rounded-[12px] bg-[linear-gradient(0deg,_#10AA7C,_#10AA7C),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.65)_100%)] p-[1px] lg:absolute lg:left-1/2 lg:top-0 lg:h-[30px] lg:w-[30px] lg:-translate-x-1/2 lg:-translate-y-1/2'>
													<div className='flex h-full w-full items-center justify-center rounded-[12px] bg-[linear-gradient(0deg,_rgba(16,_170,_124,_0.15),_rgba(16,_170,_124,_0.15)),_linear-gradient(180deg,_#17353A_0%,_#184545_100%)]'>
														<IconGiftCard className='h-6 w-6 fill-[#1AD19A] lg:h-4 lg:w-4' />
													</div>
												</div>
												<p className='z-[1] text-[14px] font-medium leading-4 text-white lg:text-center lg:text-[8px]'>
													{t('deposits.claim_gift_code')}
												</p>
											</div>
											<div className='relative flex w-full items-center gap-4 rounded-2xl border-1 border-[#232B3E] bg-[#181E2C] p-4 lg:flex-col'>
												<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[64px] font-bold text-[#202738] lg:relative lg:left-auto lg:top-auto lg:mt-4 lg:translate-x-0 lg:translate-y-0 lg:text-[32px] lg:leading-4'>
													03
												</div>
												<div className='z-[1] h-12 w-12 flex-shrink-0 rounded-[12px] bg-[linear-gradient(0deg,_#10AA7C,_#10AA7C),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.65)_100%)] p-[1px] lg:absolute lg:left-1/2 lg:top-0 lg:h-[30px] lg:w-[30px] lg:-translate-x-1/2 lg:-translate-y-1/2'>
													<div className='flex h-full w-full items-center justify-center rounded-[12px] bg-[linear-gradient(0deg,_rgba(16,_170,_124,_0.15),_rgba(16,_170,_124,_0.15)),_linear-gradient(180deg,_#17353A_0%,_#184545_100%)]'>
														<IconGift className='h-6 w-6 fill-[#1AD19A] lg:h-4 lg:w-4' />
													</div>
												</div>
												<p className='z-[1] text-[12px] font-medium leading-4 text-white lg:text-center lg:text-[8px]'>
													{t('deposits.enter_gift_code')}
												</p>
											</div>
										</div>
									</div>
									<div className='mb-[15px]'>
										<p className='mb-[6px] text-[10px] font-bold leading-4 text-[#49526D]'>
											{t('deposits.use_gift_card').toUpperCase()}
										</p>
										<Input
											onChange={value => setPromoCode(value)}
											value={promoCode}
											placeholder={t('deposits.enter_code')}
											startContent={<IconGiftCard className='h-[22px] w-[22px] flex-[0_0_24px] fill-[#F4AD5C]' />}
											classNames={{
												base: 'rounded-[12px] w-full',
												inputWrapper: 'w-full',
												mainWrapper: 'w-full'
											}}
										/>
									</div>
									<div className='mb-[15px]'>
										<p className='mb-[6px] text-[10px] font-bold leading-4 text-[#49526D]'>
											{t('deposits.promo_code').toUpperCase()}
										</p>
										<Input
											onChange={value => setPromoCode(value)}
											value={promoCode}
											placeholder={t('deposits.enter_code')}
											startContent={<IconGift className='h-6 w-6' />}
											classNames={{
												base: 'rounded-[12px] w-full',
												inputWrapper: 'w-full',
												mainWrapper: 'w-full'
											}}
										/>
									</div>
									<div className='mb-4 flex items-center gap-2 rounded-xl border-1 border-[#F4AD5C59] bg-[#F4AD5C26] p-[10px]'>
										<IconInfo2 className='h-5 w-5 fill-[#F4AD5C]' />
										<p className='text-[14px] font-medium leading-4 text-[#F4AD5C]'>
											{t('deposits.you_can_enter_code')}
										</p>
									</div>
									<Button
										classNames={{
											base: 'rounded-[12px] p-[1px] h-12 w-full bg-[linear-gradient(90deg,_rgba(36,_253,_188,_0)_77.44%,_#24FDBC_89.52%),_linear-gradient(270deg,_rgba(36,_253,_188,_0.445)_40.76%,_#24FDBC_57.96%)]',
											content:
												'h-full rounded-[12px] bg-[linear-gradient(0deg,_#10AA7C,_#10AA7C),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188)_100%)]'
										}}
									>
										<p className='text-[14px] font-bold leading-4 text-[#141925]'>{t('deposits.go_to_payment')}</p>
									</Button>
								</div>
							</div>
						)}
						{selectedMethod.methodType === PaymentMethodType.SKINS && (
							<div className='rounded-[20px] border-1 border-[#232839] bg-[#141925] p-[25px] lg:border-0 lg:bg-transparent lg:p-0'>
								<div className='mb-5'>
									<Input
										value={tradeUrl}
										theme='theme-1'
										onChange={value => setTradeUrl(value)}
										placeholder={t('profile_page.trade_url_placeholder')}
										startContent={<IconSteam className='h-6 w-6 flex-[0_0_24px] fill-[#60719A]' />}
										endContent={
											<div className='flex flex-[0_0_140px] -translate-y-[2px] flex-col items-end'>
												<Link
													href='https://google.com'
													target='_blank'
												>
													<span className='border-b-[1px] border-[#F4AD5C] text-[10px] font-[700] text-[#F4AD5C] hover:cursor-pointer md:text-[8px] 2sm:hidden'>
														{t('profile_page.trade_link')}
													</span>
												</Link>
												<Button
													classNames={{
														content: 'uppercase text-[#10AA7C] text-[12px] font-bold px-1'
													}}
												>
													{t('save')}
												</Button>
											</div>
										}
										classNames={{
											mainWrapper: 'w-full !h-12'
										}}
									/>
									<div className='mx-3 mb-4 flex items-center gap-2 rounded-b-xl border-1 border-t-0 border-[#F4AD5C59] bg-[#F4AD5C26] p-[8px]'>
										<IconInfo2 className='h-5 w-5 fill-[#F4AD5C]' />
										<p className='text-[12px] font-medium leading-4 text-[#F4AD5C]'>
											{t('deposits.paste_inventory_url')}
										</p>
									</div>
								</div>
								<div className='mb-5 flex gap-2 lg:flex-col'>
									<div className='flex h-[42px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border-1 border-[#232B3E] bg-[#181E2C]'>
										<div
											onClick={() => setInventoryType(0)}
											className={clsx(
												'flex w-full items-center gap-2 border-r-1 border-[#232B3E] px-3',
												inventoryType === 0 ? 'bg-[#121721]' : ''
											)}
										>
											<IconCS />
											<p className='text-[14px] text-white'>CS:GO</p>
										</div>
										<div
											onClick={() => setInventoryType(1)}
											className={clsx(
												'flex w-full items-center gap-2 border-r-1 border-[#232B3E] px-3',
												inventoryType === 1 ? 'bg-[#121721]' : ''
											)}
										>
											<IconDota2 className='flex-shrink-0' />
											<p className='flex-shrink-0 text-[14px] text-[#7785B3]'>DOTA 2</p>
										</div>
										<div
											onClick={() => setInventoryType(2)}
											className={clsx('flex w-full items-center gap-2 px-3', inventoryType === 2 ? 'bg-[#121721]' : '')}
										>
											<IconCSGo />
											<p className='text-[14px] text-[#7785B3]'>CS:GO</p>
										</div>
									</div>
									<div className='flex flex-grow gap-2'>
										<Input
											onChange={value => setSearch(value)}
											value={search}
											placeholder={t('search')}
											startContent={<IconSearch className='h-5 w-5 fill-[#60719A]' />}
											classNames={{
												base: 'w-full',
												mainWrapper: 'w-full'
											}}
										/>
										<Button
											onPress={() => toggleDir(v => !v)}
											classNames={{
												base: 'shrink-0 flex items-center gap-2 rounded-[10px] border-1 border-[#232B3E] px-[10px] py-[9px] text-[14px] text-[#60719A]'
											}}
										>
											Price
											<div className='flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-[#252C3F]'>
												<IconArrowDown
													className={clsx('w-[14px] fill-[#60719A] duration-150', dir ? 'rotate-180' : 'rotate-0')}
												/>
											</div>
										</Button>
									</div>
								</div>
								<div className='app-scrollbar mb-5 grid max-h-[200px] auto-rows-auto grid-cols-5 justify-between gap-2 overflow-y-auto lg:grid-cols-3'>
									{Array.from(new Array(12)).map((_, index) => (
										<CaseItem
											selected={selectedSkins.includes(index)}
											onSelect={value => {
												setSelectedSkins(prev => (value ? [...prev, index] : prev.filter(v => v !== index)))
											}}
											key={index}
										/>
									))}
								</div>
								<div className='flex w-full items-center justify-between gap-4 rounded-[16px] border-1 border-[#1A202E] p-5 lg:flex-col'>
									<div className='flex items-center gap-4 lg:w-full 3sm:gap-2'>
										<div className='flex w-max items-center rounded-[8px] border-1 border-[#1E2536] bg-[#1A202E] px-3 py-[9px] lg:w-full 3sm:w-full'>
											<IconBagTick className='mr-2 w-6 fill-[#15C18D]' />
											<span className='text-[12px] font-medium leading-4 text-[#60719A] 3sm:text-[10px]'>
												{t('lotto.total_cost')}:{' '}
												<span className='font-medium text-white'>
													<span className='text-[#17E2A5]'>$</span>15.50
												</span>
											</span>
										</div>
										<div className='flex w-max flex-shrink-0 items-center gap-2 rounded-lg border-1 border-[#1E2536] bg-[#1A202E] px-[13px] py-[11px]'>
											<IconCheckBox className='h-[18px] w-[18px] fill-[#60719A]' />
											<p className='text-[12px] text-[#60719A] 3sm:text-[10px]'>
												{t('lotto.selected')}: <span>{selectedSkins.length}</span>
											</p>
										</div>
									</div>
									<div className='flex w-full justify-end gap-4'>
										<div
											onClick={() =>
												setSelectedSkins(prev => (prev.length < 12 ? Array.from({ length: 12 }, (_, i) => i) : []))
											}
											className='flex w-max flex-shrink-0 items-center gap-2 rounded-lg border-1 border-[#1E2536] px-[13px] py-[11px]'
										>
											<IconCheckBox
												className={clsx(
													`h-[18px] w-[18px]`,
													selectedSkins.length < 12 ? 'fill-[#24FDBC]' : 'fill-[#60719A]'
												)}
											/>
											<p className='text-[12px] text-[#60719A] 3sm:text-[10px]'>
												{selectedSkins.length < 12 ? t('deposits.select_all') : t('deposits.unselect_all')}
											</p>
										</div>
										<Button
											classNames={{
												base: 'rounded-[12px] lg:w-full p-[1px] h-[40px] w-max bg-[linear-gradient(90deg,_rgba(36,_253,_188,_0)_77.44%,_#24FDBC_89.52%),_linear-gradient(270deg,_rgba(36,_253,_188,_0.445)_40.76%,_#24FDBC_57.96%)]',
												content:
													'h-full rounded-[12px] px-4 bg-[linear-gradient(0deg,_#10AA7C,_#10AA7C),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188)_100%)]'
											}}
										>
											<p className='text-[14px] font-bold leading-4 text-[#141925]'>{t('deposits.pay_with_skins')}</p>
										</Button>
									</div>
								</div>
							</div>
						)}
						<Button className='h-max w-full'>
							<Image
								src='/images/payment/welcome_bonus.png'
								className='!relative'
								layout='cover'
								fill
								alt='welcome bonus'
							/>
						</Button>
					</div>
				</div>
			</div>
			<Button
				startContent={<Close />}
				className={clsx('flex min-h-[30px] min-w-[30px] items-center justify-center')}
				classNames={{
					base: '!absolute right-[15px] top-[15px]'
				}}
				onPress={closeModal}
			/>
		</div>
	)
}

export default DepositModal
