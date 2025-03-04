import clsx from 'clsx'
import Image from 'next/image'

export const CaseItem = ({ selected, onSelect }: { selected?: boolean; onSelect: (_: boolean) => void }) => {
	return (
		<div
			onClick={() => onSelect(!selected)}
			className={clsx(
				'h-[140px] w-[125px] rounded-[12px] p-[2px] 3sm:w-full',
				selected
					? 'bg-[linear-gradient(0deg,_#10AA7C,_#10AA7C),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.65)_100%)]'
					: 'bg-[#161C28]'
			)}
		>
			<div className='flex h-full w-full flex-col items-center justify-between rounded-[12px] bg-[#111620] p-[13px]'>
				<div className='flex w-full justify-between'>
					<p className='text-[10px] font-medium leading-[10px] text-[#2F374A]'>FT</p>
					<div className='h-2 w-2 rounded-sm bg-[#FF00F5] shadow-[0_0_4px_#FF00F54D]'></div>
				</div>
				<div className='h-[60px] w-[81px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,_0,_245,_0.45)_0%,_rgba(18,_23,_34,_0)_100%)] backdrop-blur-md'>
					<Image
						src='/images/case/skin-2.png'
						width={81}
						height={60}
						alt='gun'
					/>
				</div>
				<div>
					<p className='w-full text-left text-[10px] font-medium text-[#2F374A]'>AK-47 | Fire Serpent</p>
					<p className='w-full text-left text-[12px] font-bold text-[#D1D9EB]'>$ 456,05</p>
				</div>
			</div>
		</div>
	)
}
