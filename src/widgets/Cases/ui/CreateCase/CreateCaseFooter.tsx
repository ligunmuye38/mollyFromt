import { progressData } from '../../model/items'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import IconBagTick from '@/shared/assets/icons/icon-bag-tick.svg'
import IconPlus from '@/shared/assets/icons/icon-black-plus.svg'
import Button from '@/shared/ui/Button/Button'
import ProgressBar from '@/shared/ui/ProgressBar/ProgressBar'

import cls from '../Cases.module.sass'

const CreateCaseFooter = () => {
	// For translation
	const t = useTranslations()

	return (
		<div className={clsx(cls.footer_body, 'w-full')}>
			<div className={clsx(cls.footer_body_inner, 'h-full w-full px-4 py-3')}>
				<div className='flex flex-row items-center justify-between gap-6 md:flex-col md:items-center md:justify-center md:gap-4'>
					<div className='flex h-full flex-1 flex-col items-center justify-center gap-[5px] px-4 md:order-1 md:w-full'>
						<span className='text-[9px] font-[700] uppercase text-[#60719A]'>
							{t('cases_header.percent_of_income')}
						</span>
						<ProgressBar items={progressData} />
					</div>
					<div className={clsx(cls.footer_body_btn, 'md:order-2')}>
						<div className={clsx(cls.footer_body_btn_inner, 'flex items-center gap-2 px-3 py-[10px]')}>
							<IconBagTick className='h-6 w-6' />
							<div className='flex gap-1'>
								<span className='text-[14px] font-[700] text-[#60719A]'>{t('create_case.total_cost')}:</span>
								<span className='flex items-center'>
									<span className='text-[14px] font-[500] text-[#17E2A5]'>$</span>
									<span className='text-[14px] font-[500] text-white'>15.50</span>
								</span>
							</div>
						</div>
					</div>
					<div className={clsx(cls.shadow, 'relative !z-10 px-[1px] py-[1px] md:order-3')}>
						<Button
							theme='grey-4'
							strokeSize='reg'
							backdrop
							hexagon
							hexagonAxis='x'
							classNames={{
								base: clsx('h-10 !z-[1]', cls.header_btn),
								content: clsx('px-6 text-xs', cls.header_btn_inner)
							}}
							startContent={<IconPlus className='h-[20px] w-[20px]' />}
						>
							<span className={clsx('text-[14px] font-[900] uppercase text-[#121722]', cls.header_btn_font)}>
								{t('cases_header.create_case')}
							</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateCaseFooter
