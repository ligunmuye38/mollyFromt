'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { useCommonStore } from '@/entities/Common/model/store'

import IconCase from '@/shared/assets/icons/icon-case-open.svg'
import Button from '@/shared/ui/Button/Button'

import OpenAcceptCase from './OpenAcceptCase'

import cls from '../OpenCase.module.sass'

const MysteryBody = () => {
	// For translation
	const t = useTranslations()

	// Open accept state
	const openAcceptCase = useCommonStore(state => state.openAcceptCase)
	const setOpenAcceptCase = useCommonStore(state => state.setOpenAcceptCase)

	return (
		<div className={clsx(cls.base)}>
			<div className={clsx(cls.container, 'md:!pt-9')}>
				{openAcceptCase && (
					<div className={clsx(cls.inner, 'flex items-center justify-center')}>
						<div
							className={clsx(
								cls.accept_group,
								'flex w-[376px] flex-col items-center justify-center gap-[15px] md:w-full'
							)}
						>
							<div className={'flex flex-col items-center justify-center gap-[15px] pb-5'}>
								<Image
									src={'/images/case/case-full-3.png'}
									alt='case'
									width={198}
									height={182}
								/>
								<div className='flex w-full flex-col items-center justify-center gap-4 3md:w-auto'>
									<span className='text-[13px] font-[500] text-[#5F6C87]'>{t('case_accept.cases_magic')}</span>
									<div className={clsx('h-[48px] w-[243px]', cls.btn_hexagon_yellow)}>
										<div className={clsx('h-full w-full', cls.btn_hexagon_yellow_inner)}>
											<Button
												fullWidth={true}
												hexagon={true}
												classNames={{
													base: 'w-full h-full'
												}}
												startContent={<IconCase className='h-[20px] w-[22px]' />}
												onPress={() => setOpenAcceptCase(false)}
											>
												<span className='text-[15px] font-[900] text-[#000000]'>
													{t('open_case.open_case') + '• $15.50'}
												</span>
											</Button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
				{openAcceptCase == false && (
					<div className={cls.inner}>
						<OpenAcceptCase />
					</div>
				)}
			</div>
		</div>
	)
}

export default MysteryBody
