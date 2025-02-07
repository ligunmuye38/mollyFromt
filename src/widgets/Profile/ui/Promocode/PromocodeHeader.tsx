import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import IconPromocode from '@/shared/assets/icons/icon-promocode-profile.svg'

const PromocodeHeader = () => {
	// For translation
	const t = useTranslations()
	const desc2 = t('promocode_profile.description2')

	return (
		<div>
			<div className='mb-[15px] flex items-center justify-between rounded-xl border-[1px] border-[#232B3E] bg-[#111620] p-[14px] 2sm:justify-center'>
				<div className='flex items-center gap-2 2sm:flex-col 2sm:gap-0'>
					<IconPromocode className={clsx('h-7 w-7 fill-[#10AA7C]')} />
					<span>{t('promocode_profile.promocode')}</span>
				</div>
				<div className='text-[10px] font-medium leading-[14px] 2sm:hidden'>
					<p className='mb-[2px] text-right'>{t('promocode_profile.description1')}</p>
					<p className='text-right'>
						{desc2.slice(0, desc2.lastIndexOf(' '))}
						<span className='text-[#19CF99]'>{desc2.slice(desc2.lastIndexOf(' '), desc2.length)}</span>
					</p>
				</div>
			</div>
			<div className='mb-3 hidden text-[10px] font-medium leading-[14px] 2sm:block'>
				<p className='mb-[2px] text-center'>{t('promocode_profile.description1')}</p>
				<p className='text-center'>
					{desc2.slice(0, desc2.lastIndexOf(' '))}
					<span className='text-[#19CF99]'>{desc2.slice(desc2.lastIndexOf(' '), desc2.length)}</span>
				</p>
			</div>
		</div>
	)
}

export default PromocodeHeader
