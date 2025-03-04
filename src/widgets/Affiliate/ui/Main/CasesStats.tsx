import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import IconCaseOpen from '@/shared/assets/icons/icon-case-open.svg'
import IconDollarCircle from '@/shared/assets/icons/icon-dollar.svg'
import IconPeople from '@/shared/assets/icons/icon-profile-2user.svg'
import Button from '@/shared/ui/Button/Button'
import PaginationBar from '@/shared/ui/PaginationBar/PaginationBar'

import Avatar from './Avatar'

const CasesStats = () => {
	const t = useTranslations()
	const router = useRouter()
	const pathname = usePathname()
	const params = useSearchParams()
	const [caseId, setCaseId] = useState<string>()

	useEffect(() => {
		if (params.has('case-id')) {
			setCaseId(params.get('case-id') ?? '')
		} else {
			setCaseId('')
		}
	}, [params])

	const handleClickCase = () => {
		router.push(`${pathname}?case-id=123`)
	}

	const handleClickBack = () => {
		router.push(pathname)
	}

	if (caseId) {
		return (
			<div className='flex w-full flex-col items-center'>
				<Button
					onPress={handleClickBack}
					classNames={{
						base: 'mb-5 mx-auto rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px] h-[165px]',
						content:
							'relative h-full w-full items-center rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#141925_100%)] p-[10px]'
					}}
				>
					<Image
						src='/images/skinsWiki/skins-wki-exmaple-item.png'
						width={145}
						height={145}
						alt='skins'
					/>
					<div className='flex h-full flex-grow flex-col justify-between rounded-lg bg-[#121722] p-[15px]'>
						<p className='text-left text-[14px] font-bold text-white'>Red Cases</p>
						<div className='flex h-[40px] items-center gap-2 rounded-lg border-1 border-dashed border-[#283247] bg-[#1E2636] p-[9px]'>
							<IconCaseOpen className='h-5 w-5 fill-[#3B455C]' />
							<div>
								<p className='mb-[2px] text-left text-[14px] font-bold leading-4 text-white'>3 892</p>
								<p className='text-left text-[12px] font-medium leading-3 text-[#60719A]'>{t('case_open')}</p>
							</div>
						</div>
						<div className='flex h-[40px] items-center gap-2 rounded-lg border-1 border-dashed border-[#283247] bg-[#1E2636] p-[9px]'>
							<IconDollarCircle className='h-5 w-5 fill-[#3B455C]' />
							<div>
								<p className='mb-[2px] text-left text-[14px] font-bold leading-4 text-white'>
									<span className='text-[#24FDBC]'>$</span> 3 892.33
								</p>
								<p className='text-left text-[12px] font-medium leading-3 text-[#60719A]'>{t('case_income')}</p>
							</div>
						</div>
					</div>
				</Button>
				<div className='mb-5 w-full rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px]'>
					<div className='relative h-full w-full items-center rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#141925_100%)] px-5 py-[15px]'>
						<div className='mb-4 flex items-center gap-[5px]'>
							<IconPeople className='h-6 w-6 fill-white' />
							<p>{t('all_referrals').toUpperCase()}</p>
						</div>
						<div className='mb-[10px] grid grid-cols-2 gap-2 rounded-[10px] bg-[#202737] px-5 py-[14px] text-[12px] leading-3 text-[#60719A] 3sm:grid-cols-2'>
							<p>{t('player')}</p>
							<p className='text-right'>{t('date_of_opening')}</p>
						</div>
						<div className='flex flex-col gap-2'>
							{Array.from(new Array(6)).map((_, index) => (
								<div
									className='grid cursor-pointer grid-cols-2 items-center gap-2 rounded-[14px] bg-[#11151F] px-5 py-2 3sm:grid-cols-2'
									key={index}
								>
									<div className='flex items-center gap-2'>
										<Avatar />
										<p className='text-[14px] font-bold text-white'>Alexander</p>
									</div>
									<p className='text-right text-[14px] font-bold text-white'>13.06.2024 11:39</p>
								</div>
							))}
						</div>
						<div className='mt-2 flex justify-center'>
							<PaginationBar
								page={1}
								setPage={() => {
									return
								}}
								total={5}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className='grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-1'>
			{Array.from(new Array(12)).map((_, index) => (
				<Button
					onPress={handleClickCase}
					key={index}
					classNames={{
						base: 'rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px] h-[165px]',
						content:
							'relative h-full w-full items-center rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#141925_100%)] p-[10px]'
					}}
				>
					<Image
						src='/images/skinsWiki/skins-wki-exmaple-item.png'
						width={145}
						height={145}
						alt='skins'
					/>
					<div className='flex h-full flex-grow flex-col justify-between rounded-lg bg-[#121722] p-[15px]'>
						<p className='text-left text-[14px] font-bold text-white'>Red Cases</p>
						<div className='flex h-[40px] items-center gap-2 rounded-lg border-1 border-dashed border-[#283247] bg-[#1E2636] p-[9px]'>
							<IconCaseOpen className='h-5 w-5 fill-[#3B455C]' />
							<div>
								<p className='mb-[2px] text-left text-[14px] font-bold leading-4 text-white'>3 892</p>
								<p className='text-left text-[12px] font-medium leading-3 text-[#60719A]'>{t('case_open')}</p>
							</div>
						</div>
						<div className='flex h-[40px] items-center gap-2 rounded-lg border-1 border-dashed border-[#283247] bg-[#1E2636] p-[9px]'>
							<IconDollarCircle className='h-5 w-5 fill-[#3B455C]' />
							<div>
								<p className='mb-[2px] text-left text-[14px] font-bold leading-4 text-white'>
									<span className='text-[#24FDBC]'>$</span> 3 892.33
								</p>
								<p className='text-left text-[12px] font-medium leading-3 text-[#60719A]'>{t('case_income')}</p>
							</div>
						</div>
					</div>
				</Button>
			))}
		</div>
	)
}

export default CasesStats
