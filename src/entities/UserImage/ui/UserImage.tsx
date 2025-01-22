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
			className={clsx(cls.avatar_wrapper, `relative z-[1] flex shrink-0 cursor-pointer items-center justify-center`)}
		>
			<Icon
				className={clsx(
					cls.avatar_frame,
					'absolute left-1/2 top-1/2 z-[2] h-full w-full -translate-x-1/2 -translate-y-1/2'
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
