import { useTranslations } from 'next-intl'

const TermsBody = () => {
	const t = useTranslations()

	return (
		<div className='flex w-full flex-col gap-7 p-7 2sm:text-center'>
			<span className='text-[14px] font-[500] text-[#545778]'>{t('terms_content.title')}</span>
			<span className='text-[18px] font-[400] text-[#D1D9EB]'>{t('terms_content.license')}</span>
			<span className='flex flex-col gap-7 text-[14px] font-[500] text-[#545778] 2sm:text-center'>
				<span>{t('terms_content.content1')}</span>
				<span>{t('terms_content.content2')}</span>
				<span>{t('terms_content.content3')}</span>
				<span className='flex flex-col 2sm:text-center'>
					<span>{t('terms_content.result1')}</span>
					<span>{t('terms_content.result2')}</span>
					<span>{t('terms_content.result3')}</span>
					<span>{t('terms_content.result4')}</span>
					<span>{t('terms_content.result5')}</span>
					<span>{t('terms_content.result6')}</span>
					<span>{t('terms_content.result7')}</span>
					<span>{t('terms_content.result8')}</span>
					<span>{t('terms_content.result9')}</span>
				</span>
			</span>
		</div>
	)
}

export default TermsBody
