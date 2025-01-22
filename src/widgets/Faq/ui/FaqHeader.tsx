'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

import IconFaq from '@/shared/assets/icons/icon-faq-white.svg'
import IconQuestion from '@/shared/assets/icons/icon-question.svg'
import Button from '@/shared/ui/Button/Button'
import IntroBar from '@/shared/ui/IntroBar/IntroBar'

import cls from './Faq.module.sass'

const FaqHeader = () => {
	const t = useTranslations()

	// For router
	const router = useRouter()

	// Go support function

	const goSupport = () => {
		router.push('/support')
	}

	return (
		<IntroBar
			title={'sidebar.faq'}
			content={'faq_bar.title'}
			icon={<IconFaq />}
			buttons={
				<Button
					theme='grey-4'
					strokeSize='reg'
					backdrop
					hexagon
					hexagonAxis='x'
					classNames={{
						base: clsx('h-10', cls.fnav_item),
						content: 'px-6 text-xs'
					}}
					startContent={
						<div className={clsx('h-[30px] w-full', cls.fnav_item_icon)}>
							<IconQuestion />
						</div>
					}
					onClick={goSupport}
				>
					{t('pages.support')}
				</Button>
			}
		/>
	)
}

export default FaqHeader
