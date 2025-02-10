'use client'

import { LottoTypes } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import React, { FC, useState } from 'react'

import IconPlusRounded from '@/shared/assets/icons/icon-black-plus.svg'
import IconLotto from '@/shared/assets/icons/icon-lottery-ticket.svg'
import HeaderBg from '@/shared/assets/section-header-bg.svg'
import { useModal } from '@/shared/context/ModalContext'
import Button from '@/shared/ui/Button/Button'

import CreateLottoModal from './CreateLottoModal'
import BattlesTypeSwitcher from './LottoTypeSwitcher'
import cls from './Main.module.sass'
import MainList from './MainList'

interface MainProps {
	className?: string
}

export const Main: FC<MainProps> = ({ className }) => {
	const t = useTranslations()
	const [type, setType] = useState<LottoTypes>(LottoTypes.ACTIVE_LOTTO)

	const { openModal } = useModal()

	const onCreate = () => {
		openModal(
			<CreateLottoModal />,
			{},
			<IconPlusRounded className='h-[19px] w-[19px] fill-[#19D099]' />,
			t('lotto.create_lotto').toUpperCase(),
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
			},
			true
		)
	}

	return (
		<div className={clsx(cls.container, className)}>
			<div className={clsx(cls.h, 'relative mb-2')}>
				<div className={cls.bg}>
					<HeaderBg className={cls.bg_pic} />
					<div className={cls.bg_icon}>
						<IconLotto />
					</div>
				</div>
				<div className={clsx(cls.h_inner, 'mb-[20px]')}>
					<div className={cls.title}>{t('lotto.lotto').toUpperCase()}</div>
				</div>
				<div className='relative z-20 mx-auto mb-[40px] w-full'>
					<BattlesTypeSwitcher
						type={type}
						setType={setType}
						className='mx-auto'
					/>
					<div
						className='absolute right-5 top-0 md:hidden'
						style={{ filter: 'drop-shadow(0px 0px 12px #10AA7C59)' }}
					>
						<Button
							onPress={onCreate}
							classNames={{
								base: clsx(cls.hexagon_btn, 'h-[42px] w-[200px]'),
								content: clsx(cls.hexagon_btn_inner, '!gap-0')
							}}
						>
							<IconPlusRounded className={cls.hexagon_btn_inner_icon} />
							{t('lotto.create_lotto')}
						</Button>
					</div>
				</div>
			</div>
			<div className='px-[20px]'>
				<MainList type={type} />
			</div>
			<div className='sticky bottom-[69px] z-20 hidden h-[76px] w-full items-center justify-center bg-[linear-gradient(180deg,_#12172200_0%,_#121722_60%)] md:flex'>
				<Button
					onPress={onCreate}
					classNames={{
						base: clsx(cls.hexagon_btn, 'h-[42px] w-[200px]'),
						content: clsx(cls.hexagon_btn_inner, '!gap-0')
					}}
				>
					<IconPlusRounded className={cls.hexagon_btn_inner_icon} />
					{t('lotto.create_lotto')}
				</Button>
			</div>
		</div>
	)
}
