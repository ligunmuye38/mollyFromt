import Link from 'next/link'

import { UserImage } from '@/entities/UserImage/ui/UserImage'

import image from '@/shared/assets/archi-author-image.png'
import Icon from '@/shared/assets/icons/archi-author-svg.svg'
import Check from '@/shared/assets/icons/check-mark.svg'
import { ViewPoints } from '@/shared/ui/ViewPoints/ViewPoints'

import cls from './AchievementsContent.module.sass'

export const AchievementsContent = () => {
	const progress = [100, 30, 40, 100]

	return (
		<>
			<div className='flex justify-between rounded-[8px] bg-[#171D29] py-[13px] pl-[16px] pr-[22px] mb-3 3sm:py-[5px] 3sm:px-[10px]'>
				<div className='flex justify-between'>
					<div className='pr-[30px] md:pr-[20px] 3sm:hidden'>
						<span className='text-[#5A6786] text-xs font-bold leading-4 3sm:text-[10px]'>PLACE</span>
					</div>
					<div className='pr-[110px] md:pr-[90px] 3sm:pr-[40px] '>
						<span className='text-[#5A6786] text-xs font-bold leading-4 3sm:text-[10px]'>PLAYER</span>
					</div>
					<div className=''>
						<span className='text-[#5A6786] text-xs font-bold leading-4 3sm:text-[10px]'>ACHIEVEMENTS</span>
					</div>
				</div>
				<div className=''>
					<span className='text-[#5A6786] text-xs font-bold leading-4 3sm:text-[10px]'>ACHIEVE POINTS</span>
				</div>
			</div>
			<div className=''>
				{[0, 1, 2].map(e => (
					<div
						className={cls.item}
						key={e}
					>
						<div className={cls.item__content}>
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
							<div className='flex ml-[60px] items-center w-full max-w-[325px] md:max-w-[235px] md:ml-[30px] 3sm:max-w-[155px] 3sm:ml-[10px]'>
								{progress[e] == 100 ? (
									<div className='flex items-center'>
										<div
											className='w-[24px] h-[24px] rounded-[6px] flex items-center justify-center'
											style={{ background: 'rgba(16, 170, 124, 0.15)' }}
										>
											<Check />
										</div>
										<span className='text-white text-xs font-bold leading-4 pl-[8px]'>Completed</span>
									</div>
								) : (
									<>
										<div className={cls.progress__btn}>3</div>
										<progress
											max='100'
											value='36'
											className={cls.progress}
										></progress>
										<div className={cls.progress__btn + ' ' + cls.progress__to}>5</div>
									</>
								)}
							</div>
						</div>
						<ViewPoints
							points='663'
							size={14}
						/>
					</div>
				))}
			</div>
		</>
	)
}
