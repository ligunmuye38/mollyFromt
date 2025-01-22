// import arch2 from '/images/achievement/achievement.png'
// import arch1 from '/images/achievement/archi-archs1.png'
// import arch from '/images/achievement/archi-archs.png'
import Image from 'next/image'
import Link from 'next/link'

import { UserImage } from '@/entities/UserImage/ui/UserImage'

import image from '@/shared/assets/archi-author-image.png'
import Icon from '@/shared/assets/icons/archi-author-svg.svg'
import Button from '@/shared/ui/Button/Button'
import { ViewPoints } from '@/shared/ui/ViewPoints/ViewPoints'

import cls from './AchievementsContent.module.sass'

export const AchievementsContent = () => {
	const icons = [
		'/images/achievement/archi-archs1.png',
		'/images/achievement/archi-archs.png',
		'/images/achievement/archi-archs1.png',
		'/images/achievement/archi-archs.png',
		'/images/achievement/archi-archs1.png',
		'/images/achievement/archi-archs.png',
		'/images/achievement/archi-archs1.png',
		'/images/achievement/archi-archs.png',
		'/images/achievement/archi-archs1.png',
		'/images/achievement/archi-archs.png',
		'/images/achievement/archi-archs1.png',
		'/images/achievement/archi-archs.png',
		'/images/achievement/archi-archs1.png',
		'/images/achievement/archi-archs.png',
		'/images/achievement/archi-archs1.png',
		'/images/achievement/archi-archs.png'
	]

	console.log(icons.length)

	return (
		<>
			<div className='flex justify-between rounded-[8px] bg-[#171D29] py-[13px] pl-[16px] pr-[22px] mb-3  sm:px-[10px] sm:py-[5px]'>
				<div className='flex justify-between'>
					<div className='pr-[30px] 2sm:hidden'>
						<span className='text-[#5A6786] text-xs font-bold leading-4 md:text-[10px] sm:text-[8px]'>PLACE</span>
					</div>
					<div className='pr-[110px] 3md:pr-[75px] 3sm:pr-[40px]'>
						<span className='text-[#5A6786] text-xs font-bold leading-4 md:text-[10px] sm:text-[8px]'>PLAYER</span>
					</div>
					<div className=''>
						<span className='text-[#5A6786] text-xs font-bold leading-4 md:text-[10px] sm:text-[8px]'>
							ACHIEVEMENTS
						</span>
					</div>
				</div>
				<div className=''>
					<span className='text-[#5A6786] text-xs font-bold leading-4 pr-[90px] 3md:pr-[35px] md:text-[10px] 3sm:pr-[15px] sm:text-[8px]'>
						ACHIEVE POINTS
					</span>
					<span className='text-[#5A6786] text-xs font-bold leading-4 md:text-[10px] sm:text-[8px]'>IN PROGRESS</span>
				</div>
			</div>
			<div className=''>
				<div className={cls.item}>
					{/* <div className={cls.item__content}> */}
					<div className={cls.place}>
						<span>1</span>
					</div>
					<div className={cls.author}>
						<Link
							href='#'
							className='flex items-center'
						>
							<UserImage
								Icon={Icon}
								imageSize={33.947}
								blockSize={43}
								userImage={image.src}
								imageClipPath='M13.751 1.1142C14.8339 0.488987 16.1681 0.488988 17.251 1.1142L27.9507 7.29164C29.0336 7.91686 29.7007 9.0723 29.7007 10.3227V22.6776C29.7007 23.928 29.0336 25.0835 27.9507 25.7087L17.251 31.8861C16.1681 32.5114 14.8339 32.5114 13.751 31.8861L3.05138 25.7087C1.96848 25.0835 1.30139 23.928 1.30139 22.6776V10.3227C1.30139 9.0723 1.96848 7.91686 3.05139 7.29164L13.751 1.1142Z'
							/>
							<span>cineincwne</span>
						</Link>
					</div>
					{/* </div> */}
					<div className={cls.icons}>
						{icons.map(img => (
							<Image
								key={Math.random()}
								src={img}
								alt=''
							/>
						))}
					</div>
					<ViewPoints
						classNames='2md:ml-auto'
						points='663'
						size={14}
					/>
					<Link
						href='#'
						className={cls.all__prog}
					>
						<Button
							hexagonAngleOffset={12}
							classNames={{
								base: cls.btn_inner
							}}
						>
							SEE ALL PROGRESS
						</Button>
					</Link>
				</div>
			</div>
		</>
	)
}
