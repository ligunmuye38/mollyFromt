'use client'

import { countries, cryptosCurrencies as cryptos, paymentMethods as payments } from '../model/items'
import { ICryptoCurrency, IPaymentMethod, PaymentMethodType } from '../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

import IconUAH from '@/shared/assets/icons/currencies/icon-uah.svg'
import IconUSD from '@/shared/assets/icons/currencies/icon-usd.svg'
// import IconArrowRightCircular from '@/shared/assets/icons/icon-arrow-right-circular.svg'
import IconCheck from '@/shared/assets/icons/icon-check.svg'
import IconInfo from '@/shared/assets/icons/icon-info-3.svg'
import IconInfo2 from '@/shared/assets/icons/icon-info.svg'
import Close from '@/shared/assets/icons/icon-modal-close.svg'
import { useModal } from '@/shared/context/ModalContext'
import Button from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { Select } from '@/shared/ui/Select/Select'

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
				'relative flex h-[100px] w-full min-w-[180px] items-center justify-center rounded-2xl bg-[#0F131C] duration-150 md:min-w-[120px]',
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

const WithdrawalModal = () => {
	const t = useTranslations()

	const { closeModal } = useModal()

	const [value, setValue] = useState<string>(countries[0].title)
	const [selectedMethod, setSelectedMethod] = useState<IPaymentMethod>(payments[0])
	const [usdValue, setUsdValue] = useState<string>('0')
	const [uahValue, setUahValue] = useState<string>('0')
	const [promoCode, setPromoCode] = useState<string>('')
	const [selectedCrypto, setSelectedCrypto] = useState<ICryptoCurrency>(cryptos[3])
	const [confirmed, toggleConfirmed] = useState<boolean>(false)
	const [paymentAddress, setPaymentAddress] = useState<string>('')

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

	return (
		<div className='relative rounded-2xl bg-[#181E2C]'>
			<div className='flex h-max max-h-[calc(100vh_-_80px)] max-w-[1320px] overflow-hidden md:max-h-none md:flex-col md:gap-5'>
				<div className='flex flex-shrink-0 flex-col rounded-2xl bg-[#141925] p-[30px] lg:px-3'>
					<div className='mb-[18px]'>
						<p className='mb-2 text-[20px] font-bold leading-4 text-white'>{t('deposits.select_method')}</p>
						{/* <p className='text-[14px] font-medium leading-4 text-[#7785B3]'>{t('deposits.method_description')}</p> */}
					</div>
					{/* <Button
						classNames={{
							base: `h-[95px] mb-5 rounded-[16px] bg-[url('/images/payment/pay-by-skin-btn.png')]`,
							content: `bg-[linear-gradient(0deg,_rgba(70,_52,_39,_0.8)_0%,_rgba(244,_188,_66,_0.8)_100%)] w-full h-full px-5`
						}}
						onPress={() => {
							const method = paymentMethods.find(i => i.title === 'paybyskins')
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
					</Button> */}
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
					<div className='app-popover-scrollbar overflow-y-auto pr-1'>
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
				<div className='m-[30px] w-full lg:mx-3 md:m-0 md:p-3'>
					<div className='mb-[30px]'>
						<p className='mb-2 text-[20px] font-bold leading-4 text-white'>{t('deposits.withdrawal')}</p>
						<p className='text-[14px] font-medium leading-4 text-[#7785B3]'>{t('deposits.withdrawal_description')}</p>
					</div>
					<div className='app-popover-scrollbar max-h-[calc(100vh_-_210px)] overflow-y-auto pr-1 md:max-h-none'>
						{selectedMethod.methodType === PaymentMethodType.CARD && (
							<div className='rounded-[20px] border-1 border-[#232839] bg-[#141925] p-[25px] md:border-transparent md:bg-transparent md:p-0'>
								<div>
									<div className='mb-[15px] grid grid-cols-2 gap-5 lg:grid-cols-1'>
										<div>
											<p className='mb-[6px] text-[10px] font-bold leading-4 text-[#49526D]'>
												{t('deposits.you_are_getting').toUpperCase()}
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
													base: 'rounded-[12px] h-12',
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
													base: 'rounded-[12px] h-12',
													mainWrapper: 'w-full'
												}}
											/>
										</div>
									</div>
									<div className='mb-[15px]'>
										<p className='mb-[6px] text-[10px] font-bold leading-4 text-[#49526D]'>
											{t('deposits.card_number').toUpperCase()}
										</p>
										<Input
											onChange={value => setPromoCode(value)}
											value={promoCode}
											placeholder={t('deposits.enter_code')}
											startContent={
												<div className='relative flex h-8 w-8 items-center justify-center rounded-md border-[0.3px] border-[#232B3E] bg-[#0F131C]'>
													<Image
														src={selectedMethod.icon}
														width={24}
														height={32}
														className='rounded-[6px]'
														alt='flag'
													/>
													<div
														className={clsx('absolute left-0 top-0 h-full w-full opacity-50')}
														style={{
															background: `radial-gradient(60% 60% at 50% 100%, ${selectedMethod.color} 0%, rgba(15, 19, 28, 0) 100%)`
														}}
													></div>
												</div>
											}
											classNames={{
												base: 'rounded-[12px] w-full h-12',
												inputWrapper: 'w-full',
												mainWrapper: 'w-full'
											}}
										/>
									</div>
									<div
										className='mb-[15px] flex cursor-pointer items-center gap-2 duration-200'
										onClick={() => toggleConfirmed(v => !v)}
									>
										<div
											className={clsx(
												'flex h-6 w-6 items-center justify-center rounded-md border-2',
												confirmed ? 'border-transparent bg-[#10AA7C26]' : 'border-[#282D40] bg-transparent'
											)}
										>
											{confirmed && <IconCheck className={clsx('h-[12px] w-[16px] fill-[#24FDBC]')} />}
										</div>
										<p className='text-[12px] font-medium text-white'>{t('deposits.confirm_data')}</p>
									</div>
									<Button
										classNames={{
											base: 'mb-5 rounded-[12px] p-[1px] h-12 w-full bg-[linear-gradient(90deg,_rgba(36,_253,_188,_0)_77.44%,_#24FDBC_89.52%),linear-gradient(270deg,_rgba(36,_253,_188,_0.445)_40.76%,_#24FDBC_57.96%)]',
											content:
												'h-full rounded-[12px] bg-[linear-gradient(0deg,_#24FDBC,_#10AA7C),linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.65)_100%)]'
										}}
									>
										<p className='text-[14px] font-bold leading-4 text-[#141925]'>{t('deposits.go_to_withdrawal')}</p>
									</Button>
									<div className='mb-4 flex items-center gap-2 rounded-xl border-1 border-[#F0404059] bg-[#F0404026] p-[10px]'>
										<IconInfo2 className='h-4 w-4 fill-[#F04040]' />
										<p className='text-[10px] font-medium leading-4 text-[#F04040]'>{t('deposits.withdrawal_error')}</p>
									</div>
									<div className='flex items-center gap-[10px] rounded-[10px] border-1 border-[#282D40] p-[15px] md:p-2'>
										<IconInfo />
										<div className='text-[12px] leading-4 text-[#7785B3] md:text-[10px]'>
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
							<div className='rounded-[20px] border-1 border-[#232839] bg-[#141925] p-[25px] md:border-transparent md:bg-transparent md:p-0'>
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
										<div className='relative grid grid-cols-2 rounded-xl border-1 border-[#232B3E] px-3'>
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
									</div>
									<div className='mb-[15px]'>
										<p className='mb-[6px] text-[10px] font-bold leading-4 text-[#49526D]'>
											{t('deposits.withdraw_to').toUpperCase()}
										</p>
										<Input
											onChange={value => setPaymentAddress(value)}
											value={paymentAddress}
											classNames={{
												base: 'rounded-[12px] h-12',
												mainWrapper: 'w-full'
											}}
										/>
									</div>
									<div
										className='mb-[15px] flex cursor-pointer items-center gap-2 duration-200'
										onClick={() => toggleConfirmed(v => !v)}
									>
										<div
											className={clsx(
												'flex h-6 w-6 items-center justify-center rounded-md border-2',
												confirmed ? 'border-transparent bg-[#10AA7C26]' : 'border-[#282D40] bg-transparent'
											)}
										>
											{confirmed && <IconCheck className={clsx('h-[12px] w-[16px] fill-[#24FDBC]')} />}
										</div>
										<p className='text-[12px] font-medium text-white'>{t('deposits.confirm_data')}</p>
									</div>
									<Button
										classNames={{
											base: 'mb-5 rounded-[12px] p-[1px] h-12 w-full bg-[linear-gradient(90deg,_rgba(36,_253,_188,_0)_77.44%,_#24FDBC_89.52%),linear-gradient(270deg,_rgba(36,_253,_188,_0.445)_40.76%,_#24FDBC_57.96%)]',
											content:
												'h-full rounded-[12px] bg-[linear-gradient(0deg,_#24FDBC,_#10AA7C),linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.65)_100%)]'
										}}
									>
										<p className='text-[14px] font-bold leading-4 text-[#141925]'>{t('deposits.go_to_withdrawal')}</p>
									</Button>
									<div className='flex items-center gap-[10px] rounded-[10px] border-1 border-[#282D40] p-[15px] md:p-2'>
										<IconInfo />
										<div className='text-[12px] leading-4 text-[#7785B3] md:text-[10px]'>
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
						{selectedMethod.methodType === PaymentMethodType.SKRILL && (
							<div className='rounded-[20px] border-1 border-[#232839] bg-[#141925] p-[25px] md:border-transparent md:bg-transparent md:p-0'>
								<div>
									<div className='mb-[15px] grid grid-cols-2 gap-5'>
										<div>
											<p className='mb-[6px] text-[10px] font-bold leading-4 text-[#49526D]'>
												{t('deposits.you_are_getting').toUpperCase()}
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
													base: 'rounded-[12px] h-12',
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
													base: 'rounded-[12px] h-12',
													mainWrapper: 'w-full'
												}}
											/>
										</div>
									</div>
									<div className='mb-[15px]'>
										<p className='mb-[6px] text-[10px] font-bold leading-4 text-[#49526D]'>
											{t('deposits.email_address').toUpperCase()}
										</p>
										<Input
											onChange={value => setPromoCode(value)}
											value={promoCode}
											placeholder={t('deposits.email_address')}
											classNames={{
												base: 'rounded-[12px] w-full h-12',
												inputWrapper: 'w-full',
												mainWrapper: 'w-full'
											}}
										/>
									</div>
									<div
										className='mb-[15px] flex cursor-pointer items-center gap-2 duration-200'
										onClick={() => toggleConfirmed(v => !v)}
									>
										<div
											className={clsx(
												'flex h-6 w-6 items-center justify-center rounded-md border-2',
												confirmed ? 'border-transparent bg-[#10AA7C26]' : 'border-[#282D40] bg-transparent'
											)}
										>
											{confirmed && <IconCheck className={clsx('h-[12px] w-[16px] fill-[#24FDBC]')} />}
										</div>
										<p className='text-[12px] font-medium text-white'>{t('deposits.confirm_data')}</p>
									</div>
									<Button
										classNames={{
											base: 'mb-5 rounded-[12px] p-[1px] h-12 w-full bg-[linear-gradient(90deg,_rgba(36,_253,_188,_0)_77.44%,_#24FDBC_89.52%),linear-gradient(270deg,_rgba(36,_253,_188,_0.445)_40.76%,_#24FDBC_57.96%)]',
											content:
												'h-full rounded-[12px] bg-[linear-gradient(0deg,_#24FDBC,_#10AA7C),linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.65)_100%)]'
										}}
									>
										<p className='text-[14px] font-bold leading-4 text-[#141925]'>{t('deposits.go_to_withdrawal')}</p>
									</Button>
									<div className='flex items-center gap-[10px] rounded-[10px] border-1 border-[#282D40] p-[15px] md:p-2'>
										<IconInfo />
										<div className='text-[12px] leading-4 text-[#7785B3] md:text-[10px]'>
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
					</div>
				</div>
			</div>
			<Button
				onPress={closeModal}
				startContent={<Close />}
				className={clsx('flex min-h-[30px] min-w-[30px] items-center justify-center')}
				classNames={{
					base: '!absolute right-[15px] top-[15px]'
				}}
			/>
		</div>
	)
}

export default WithdrawalModal
