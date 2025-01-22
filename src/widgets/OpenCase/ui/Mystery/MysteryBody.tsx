import CaseLiveFeed from '../CaseLiveFeed'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import IconCase from '@/shared/assets/icons/icon-case-open.svg'
import IconHint from '@/shared/assets/icons/icon-hint.svg'
import IconLuck from '@/shared/assets/icons/icon-luck.svg'
import IconPrizes from '@/shared/assets/icons/icon-prize.svg'
import IconRefesh from '@/shared/assets/icons/icon-refresh.svg'
import { BackDropTheme } from '@/shared/const/rarity'
import BackDropButton from '@/shared/ui/BackDropButton/BackDropButton'
import Button from '@/shared/ui/Button/Button'

import cls from '../OpenCase.module.sass'

const MysteryBody = () => {
	// For translation
	const t = useTranslations()

	return (
		<div className='flex w-full flex-col'>
			<div className={clsx('flex w-full flex-col items-center gap-4', cls.mystery_bg)}>
				<div className={cls.mystery_bg_over1}>
					<div className={cls.mystery_bg_over2}>
						<div className={cls.mystery_bg_over3}>
							<div className={clsx(cls.mystery_bg_over4, 'flex justify-center')}>
								<div
									className={clsx(
										'flex w-full justify-center gap-5 md:w-[500px] md:flex-col md:items-center md:gap-3 2sm:w-[400px] sm:w-[310px]'
									)}
								>
									<div className='flex w-[259px] justify-end md:w-auto md:justify-center'>
										<div className='flex flex-col gap-3 md:flex-row 2sm:flex-wrap 2sm:gap-0'>
											<BackDropButton
												classNames={{ body: '!w-[177px] !h-[140px] sm:!w-1/2 md:!w-1/3', inner: '!gap-2' }}
												theme={BackDropTheme.GREEN}
												icon={IconLuck}
												content={t('case_mystery.luck_text')}
											/>
											<BackDropButton
												classNames={{ body: '!w-[177px] !h-[140px] sm:!w-1/2 md:!w-1/3', inner: '!gap-2' }}
												theme={BackDropTheme.PURPLE}
												icon={IconPrizes}
												content={t('case_mystery.luck_text')}
											/>
											<BackDropButton
												classNames={{ body: '!w-[177px] !h-[140px] sm:!w-full sm:!mt-1 md:!w-1/3', inner: '!gap-2' }}
												theme={BackDropTheme.YELLOW}
												icon={IconRefesh}
												content={t('case_mystery.luck_text')}
											/>
										</div>
									</div>

									<div
										className={clsx(
											cls.mystery_group,
											'flex w-[376px] flex-col items-center justify-center gap-[15px] md:w-full'
										)}
									>
										<div
											className={clsx(
												cls.mystery_group_inner,
												'flex flex-col items-center justify-center gap-[15px] pb-5'
											)}
										>
											<Image
												src={'/images/case/case-full-3.png'}
												alt='case'
												width={198}
												height={182}
											/>
											<div className='flex w-full flex-col items-center justify-center gap-4 3md:w-auto'>
												<span className='text-[13px] font-[500] text-[#5F6C87]'>{t('open_case.click_open')}</span>
												<div className={clsx('h-[48px] w-[243px]', cls.btn_hexagon_yellow)}>
													<div className={clsx('h-full w-full', cls.btn_hexagon_yellow_inner)}>
														<Button
															fullWidth={true}
															hexagon={true}
															classNames={{
																base: 'w-full h-full'
															}}
															startContent={<IconCase className='h-[20px] w-[22px]' />}
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

									<div>
										<div
											className={clsx(
												cls.mystery_content_bg,
												'relative flex w-[259px] flex-col items-center justify-center gap-4 p-4 md:w-full md:flex-row md:items-start md:justify-start'
											)}
										>
											<IconHint className='h-[34px] w-[34px] fill-[#404B67] md:absolute' />
											<div className='flex flex-col gap-5 text-center text-[12px] font-[500] text-[#7683A4] md:ml-14 md:gap-0 md:text-start'>
												<span>{t('case_mystery.content1')}</span>
												<span>{t('case_mystery.content2')}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<CaseLiveFeed />
		</div>
	)
}

export default MysteryBody
