'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

import IconProvableFair from '@/shared/assets/icons/icon-provably-header.svg'
import IconQuestion from '@/shared/assets/icons/icon-question.svg'
import Button from '@/shared/ui/Button/Button'
import IntroBar from '@/shared/ui/IntroBar/IntroBar'

import cls from './ProvavlyFair.module.sass'

const ProvablyFairHeader = () => {
	const t = useTranslations()

	// For router
	const router = useRouter()

	// Go support function

	const goSupport = () => {
		router.push('/support')
	}

	return (
		<IntroBar
			title={'provably_fair_header.title'}
			content={'provably_fair_header.description'}
			icon={
				<IconProvableFair className='fill-[linear-gradient(0deg, #12131A, #D1D9EB, rgba(28, 34, 48, 0) -0.71%, rgba(28, 34, 48, 0.35) 100.71%)]' />
			}
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

export default ProvablyFairHeader
