import { useTranslations } from 'next-intl'

const HelpModal = () => {
	const t = useTranslations()

	return (
		<div className='w-[1020px] pt-5 lg:w-[calc(100vw_-_80px)]'>
			<p className='mb-10 text-[24px] font-medium leading-[36px] text-white 3sm:mb-5'>
				{t('upgrade_how_does_it_work.header1')}
			</p>
			<div className='mb-10 flex flex-col gap-3 text-[18px] font-medium leading-[27px] text-[#9692B8] 3sm:mb-5'>
				<p className='3sm:mb-5'>{t('upgrade_how_does_it_work.description1')}</p>
				<p className='3sm:mb-5'>{t('upgrade_how_does_it_work.description2')}</p>
				<p className='3sm:mb-5'>{t('upgrade_how_does_it_work.description3')}</p>
			</div>
			<p className='mb-4 text-[20px] font-medium leading-[26px] text-white'>{t('upgrade_how_does_it_work.header2')}</p>
			<div className='mb-5 gap-2 text-[18px] text-white'>
				<div className='flex items-center'>
					<div className='mr-[13px] h-[4px] w-[4px] rotate-45 bg-[#FF6F33]'></div>
					<p>
						<span className='mr-3 text-[#FF6F33]'>{t('upgrade_how_does_it_work.awesome')}</span>
						<span className='text-white'>0-500 {t('upgrade_how_does_it_work.points')}</span>
					</p>
				</div>
				<div className='flex items-center'>
					<div className='mr-[13px] h-[4px] w-[4px] rotate-45 bg-[#FF6F33]'></div>
					<p>
						<span className='mr-3 text-[#FF6F33]'>{t('upgrade_how_does_it_work.dominating')}</span>
						<span className='text-white'>500-2,000 {t('upgrade_how_does_it_work.points')}</span>
					</p>
				</div>
				<div className='flex items-center'>
					<div className='mr-[13px] h-[4px] w-[4px] rotate-45 bg-[#3385FF]'></div>
					<p>
						<span className='mr-3 text-[#3385FF]'>{t('upgrade_how_does_it_work.legendary')}</span>
						<span className='text-white'>2,000-5,000 {t('upgrade_how_does_it_work.points')}</span>
					</p>
				</div>
				<div className='flex items-center'>
					<div className='mr-[13px] h-[4px] w-[4px] rotate-45 bg-[#3385FF]'></div>
					<p>
						<span className='mr-3 text-[#3385FF]'>{t('upgrade_how_does_it_work.godlike')}</span>
						<span className='text-white'>5,000-12,000 {t('upgrade_how_does_it_work.points')}</span>
					</p>
				</div>
				<div className='flex items-center'>
					<div className='mr-[13px] h-[4px] w-[4px] rotate-45 bg-[#FF33C6]'></div>
					<p>
						<span className='mr-3 text-[#FF33C6]'>{t('upgrade_how_does_it_work.hacker')}</span>
						<span className='text-white'>12,000+</span>
					</p>
				</div>
			</div>
			<p className='mb-4 text-[20px] font-medium leading-[26px] text-white'>{t('upgrade_how_does_it_work.header2')}</p>
			<div className='flex flex-col gap-3 text-[18px] font-medium leading-[27px] text-[#9692B8]'>
				<p className='3sm:mb-5'>{t('upgrade_how_does_it_work.description4')}</p>
				<p className='3sm:mb-5'>{t('upgrade_how_does_it_work.description5')}</p>
				<p className='3sm:mb-5'>{t('upgrade_how_does_it_work.description6')}</p>
			</div>
		</div>
	)
}

export default HelpModal
