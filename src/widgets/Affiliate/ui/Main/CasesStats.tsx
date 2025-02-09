import { useTranslations } from 'next-intl'
import Image from 'next/image'

import IconCaseOpen from '@/shared/assets/icons/icon-case-open.svg'
import IconDollarCircle from '@/shared/assets/icons/icon-dollar.svg'
import Button from '@/shared/ui/Button/Button'

const CasesStats = () => {
	const t = useTranslations()

	return (
		<div className='grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-1'>
			{Array.from(new Array(12)).map((_, index) => (
				<Button
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
								<p className='mb-[2px] text-left text-[14px] font-bold leading-4 text-white'>$3 892.33</p>
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
