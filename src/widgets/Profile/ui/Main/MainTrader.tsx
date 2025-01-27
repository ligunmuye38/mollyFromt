'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import IconSteam from '@/shared/assets/icons/icon-steam-logo.svg'
import IconTrader from '@/shared/assets/icons/icon-trader.svg'
import { Input } from '@/shared/ui/Input/Input'

import cls from './Main.module.sass'

const MainTrader = () => {
	// For translation
	const t = useTranslations()

	return (
		<div className='mt-[35px] w-full rounded-xl bg-[#111620] p-[15px] lg:mt-[15px]'>
			<div className='flex w-full items-center justify-between'>
				<div className='flex items-center gap-2 2sm:w-full'>
					<IconTrader className='h-7 w-7 fill-green-700' />
					<div className='flex w-full flex-col'>
						<span className='flex 2sm:w-full 2sm:justify-between'>
							<span className='text-[16px] font-[500] text-white md:text-[12px]'>{t('profile_page.trade_url')}</span>
							<span className='mb-1 hidden border-b-[1px] border-[#F4AD5C] text-[8px] font-[700] text-[#F4AD5C] hover:cursor-pointer 2sm:flex'>
								{t('profile_page.trade_link')}
							</span>
						</span>
						<span className='text-[12px] text-[#5A6786] md:text-[10px]'>{t('profile_page.trade_url_content')}</span>
					</div>
				</div>
				<Link
					href='https://google.com'
					target='_blank'
				>
					<span className='border-b-[1px] border-[#F4AD5C] text-[10px] font-[700] text-[#F4AD5C] hover:cursor-pointer md:text-[8px] 2sm:hidden'>
						{t('profile_page.trade_link')}
					</span>
				</Link>
			</div>
			<Input
				value=''
				theme='theme-1'
				onChange={() => {
					return
				}}
				placeholder={t('profile_page.trade_url_placeholder')}
				startContent={<IconSteam className={clsx(cls.box_icon, cls.input_icon, 'h-6 w-6')} />}
				classNames={{
					inputWrapper: [cls.box, '!px-3 !py-4'],
					input: [cls.box_value, 'w-full text-[14px]'],
					label: ['text-[10px]'],
					mainWrapper: 'w-full'
				}}
			/>
		</div>
	)
}

export default MainTrader
