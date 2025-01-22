'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

import IconQuestion from '@/shared/assets/icons/icon-question.svg'
import IconTermOfService from '@/shared/assets/icons/icon-terms-of-services-2.svg'
import Button from '@/shared/ui/Button/Button'
import IntroBar from '@/shared/ui/IntroBar/IntroBar'

import cls from './Terms.module.sass'

const TermsHeader = () => {
	// For translation
	const t = useTranslations()

	// For router
	const router = useRouter()

	// Go support function

	const goSupport = () => {
		router.push('/support')
	}

	return (
		<IntroBar
			title={'terms_data.title'}
			icon={<IconTermOfService />}
			content={'terms_data.description'}
			buttons={
				<div className={cls.button_bar}>
					<div className={cls.button_bar_inner}>
						<Button
							onPress={goSupport}
							classNames={{
								base: clsx('w-[140px] h-[45px] flex items-center relative', cls.fnav_item),
								content: clsx('w-full h-full flex justify-center items-center')
							}}
						>
							<div className='z-[40] flex h-full w-full items-center justify-center gap-3 px-2'>
								<div className={clsx('h-[30px] w-full', cls.fnav_item_icon)}>
									<IconQuestion />
								</div>
								<span className={clsx('font-[Gotham Medium] text-[12px] font-[700] text-[#D1D9EB]')}>
									{t('pages.support')}
								</span>
							</div>
						</Button>
					</div>
				</div>
			}
		/>
	)
}

export default TermsHeader
