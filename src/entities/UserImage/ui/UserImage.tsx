import clsx from 'clsx'
import Image from 'next/image'
import React, { FC, SVGProps } from 'react'

import cls from './UserImage.module.sass'

interface UserImageProps {
	Icon: FC<SVGProps<SVGSVGElement>>
	imageSize: number
	blockSize: number
	userImage: string
	imageClipPath?: string
}

export const UserImage: React.FC<UserImageProps> = ({ Icon, imageSize, userImage, blockSize }) => {
	return (
		<div
			style={{ width: blockSize, height: blockSize, maxWidth: '100%' }}
			className={clsx(cls.avatar_wrapper, `relative z-[1] shrink-0 flex items-center justify-center cursor-pointer`)}
		>
			<Icon
				className={clsx(
					cls.avatar_frame,
					'absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full'
				)}
			/>

			<div className={clsx(cls.avatar_pic, `relative z-[1]`)}>
				<Image
					width={imageSize}
					height={imageSize}
					src={userImage}
					alt='user avatar'
					className={cls.img}
				/>
			</div>
		</div>
	)
}
