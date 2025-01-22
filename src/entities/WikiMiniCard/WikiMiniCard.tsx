import Image from 'next/image'
import Link from 'next/link'

export const WikiMiniCard = () => {
	return (
		<Link
			href='#'
			className='border shadow-[0px_4px_69px_0px_rgba(0,0,0,0.25)_inset] rounded-xl border-solid border-[#161C28] bg-[#141925] pt-[29px] px-[22px] pb-4 flex flex-col justify-center'
		>
			<Image
				src='/images/skinsWiki/karambit.png'
				alt=''
				className='max-w-[88px] mt-0 mb-[11px] mx-auto'
			/>
			<h4 className='text-white text-center text-xs font-medium leading-4 pb-2'>★ Kerambit</h4>
			<span className='text-[#60719A] text-center text-[10px] font-medium leading-4'>35 скинов</span>
		</Link>
	)
}
