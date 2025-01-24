'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import IconBonusActivation from '@/shared/assets/icons/icon-bonus-activation.svg'
import Button from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'

import cls from './Promocode.module.sass'
import PromocodeHeader from './PromocodeHeader'

const PromocodeMain = () => {
	const t = useTranslations()

	const [promocode, setPromocode] = useState<string>('')
	const [isActivated, toggleIsActivated] = useState<boolean>(false)

	return (
		<div className={cls.user_main}>
			<div className={clsx(cls.user_main_inner, 'p-5')}>
				<PromocodeHeader />
				<div className='flex flex-row gap-[18px] md:flex-col-reverse'>
					<div className='w-full'>
						<Input
							onChange={setPromocode}
							value={promocode}
							label={t('promocode_profile.enter_promocode').toLocaleUpperCase()}
							theme='theme-1'
							classNames={{
								inputWrapper: '!bg-[#151A26] rounded-[10px]',
								input: ['w-full text-[13x] bg-[#151A26]'],
								label: ['text-[10px]'],
								mainWrapper: 'w-full'
							}}
						/>
						<div className={clsx(cls.activate_btn, 'mt-[11px] h-auto w-full')}>
							<div className={clsx(cls.activate_btn_inner, 'flex h-auto w-full items-center justify-center')}>
								<Button
									onPress={() => toggleIsActivated(true)}
									classNames={{
										base: 'w-full h-full py-[11px] hover:!bg-[#1d9c76] rounded-[18px]'
									}}
									disabled={isActivated}
								>
									<span className={clsx('text-[17px] text-[#121722]', cls.activate_btn_inner_font)}>
										{t('promocode_profile.activate')}
									</span>
								</Button>
							</div>
						</div>
					</div>
					<div className='w-full'>
						<p className='mb-[6px] text-[10px] font-bold leading-[16px] text-[#49516D]'>
							{t('promocode_profile.bonus_activation')}:
						</p>
						<div className='rounded-[10px] bg-[#111620] p-3'>
							<div
								className={clsx(
									`flex items-center gap-[13px] rounded-[10px] border-1 border-dashed px-3 py-[10px]`,
									isActivated ? 'border-[#F79948] bg-[#F99B4819]' : 'border-[#282D40]'
								)}
							>
								<div style={{ filter: 'drop-shadow(0 0 21.3px #FF880080' }}>
									<IconBonusActivation className='h-8 w-8' />
								</div>
								<div>
									<p className='text-[10px] font-bold leading-[16px] text-[#F79948]'>
										100% bonus to top up your balance
									</p>
									<p className='text-[8px] font-normal leading-[10px] text-[#F79948]'>
										The promo code is valid for a deposit of $50 or more
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PromocodeMain
