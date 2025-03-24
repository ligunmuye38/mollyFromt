import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import FairnessModal from '@/widgets/CaseBattles/ui/Main/FairnessModal'

import IconPg18 from '@/shared/assets/icons/icon-pg18.svg'
import IconVerification from '@/shared/assets/icons/icon-verification-profile.svg'
import { Link } from '@/shared/config/i18n/navigation'
import { AppRoute } from '@/shared/const/pages'
import { useModal } from '@/shared/context/ModalContext'
import Button from '@/shared/ui/Button/Button'

import cls from './Footer.module.sass'

interface FooterProps {
	className?: string
}

export const Footer: FC<FooterProps> = ({ className }) => {
	const t = useTranslations()
	const pathname = usePathname()

	const fairnessPages = ['/profile', '/case/open', '/upgrade', /^\/case-battles\/[^\/]+$/, '/lotto/create']

	console.log('rabi', pathname)

	const { openModal } = useModal()

	const onClickProvablyFair = () => {
		openModal(
			<FairnessModal />,
			{},
			<IconVerification className='h-[19px] w-[19px] fill-[#19D099]' />,
			t('case_battles.fairness'),
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
			},
			true
		)
	}

	return (
		<footer className={clsx(className)}>
			{fairnessPages.find((value: string | RegExp) => {
				if (typeof value === 'string') return value === pathname.slice(3)
				else return value.test(pathname.slice(3))
			}) ? (
				<div className='my-5 flex justify-center'>
					<Button
						onPress={onClickProvablyFair}
						classNames={{
							base: 'w-[101px] mx-auto h-[29px] border-[#1C223040] border-[2px] rounded-lg bg-[#181E2B40] text-[#272F42] text-[12px] leading-[14px] font-medium'
						}}
					>
						{t('pages.provablyFair')}
					</Button>
				</div>
			) : (
				<></>
			)}
			<div className={cls.base}>
				<div className={clsx(cls.inner, 'p-5')}>
					<div className='flex items-start justify-between gap-4'>
						<div className='text-xs'>© 2024 – Molly csgo open cases</div>
						<Link
							href='/'
							className='block h-[52px] w-[57px] shrink-0'
							style={{
								backgroundImage: 'url(/images/logo-footer.svg)',
								backgroundSize: 'contain',
								backgroundRepeat: 'no-repeat'
							}}
						/>
					</div>
					<div className='mt-1 flex flex-wrap items-center justify-between gap-4'>
						<div className='flex items-start gap-2'>
							<IconPg18 className='h-8 w-8 shrink-0' />
							<p className='max-w-[450px] text-[10px] text-[#566488]'>
								MOLLY LTD: Company number 13246765, 16 John Nicholas Crescent, Ellesmere Port, Cheshire, United Kingdom,
								CH65 2DL
							</p>
						</div>
						<nav className='flex flex-wrap items-center justify-end gap-x-5 gap-y-3 lg:justify-center'>
							<Link
								href={AppRoute.USER_AGREEMENT}
								className='text-xs'
							>
								{t('pages.userAgreement')}
							</Link>
							<Link
								href={AppRoute.PROVABLY_FAIR}
								className='text-xs'
							>
								{t('pages.provablyFair')}
							</Link>
							<Link
								href={AppRoute.CONTACTS}
								className='text-xs'
							>
								{t('pages.contacts')}
							</Link>
							<Link
								href={AppRoute.PRIVACY_POLICY}
								className='text-xs'
							>
								{t('pages.privacyPolicy')}
							</Link>
							<Link
								href={AppRoute.TERM_OF_SERVICES}
								className='text-xs'
							>
								{t('pages.tos')}
							</Link>
						</nav>
					</div>
				</div>
			</div>
		</footer>
	)
}
