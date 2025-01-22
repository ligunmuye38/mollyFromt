import Image from 'next/image'
import Link from 'next/link'

export const WikiMiniCard = () => {
	return (
		<Link
			href='#'
			className='flex flex-col justify-center rounded-xl border border-solid border-[#161C28] bg-[#141925] px-[22px] pb-4 pt-[29px] shadow-[0px_4px_69px_0px_rgba(0,0,0,0.25)_inset]'
		>
			<Image
				src='/images/skinsWiki/karambit.png'
				alt=''
				className='mx-auto mb-[11px] mt-0 max-w-[88px]'
			/>
			<h4 className='pb-2 text-center text-xs font-medium leading-4 text-white'>★ Kerambit</h4>
			<span className='text-center text-[10px] font-medium leading-4 text-[#60719A]'>35 скинов</span>
		</Link>
	)
}
