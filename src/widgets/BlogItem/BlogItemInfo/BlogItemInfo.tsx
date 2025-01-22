import Image from 'next/image'
import Link from 'next/link'

import { UserImage } from '@/entities/UserImage/ui/UserImage'

import IconEye from '@/shared/assets/icons/eye.svg'
import IconAvatarFrame from '@/shared/assets/icons/icon-blog-user-avatar-frame.svg'
import youtube from '@/shared/assets/icons/youtube.png'
import avatar from '@/shared/assets/user-avatar-example.png'
import { PublicDate } from '@/shared/ui/PublicDate/PublicDate'

import cls from './BlogItemInfo.module.sass'

export const BlogItemInfo = () => {
	return (
		<>
			<h2 className={cls.title}>How to win solo? Tips for solo in MM CS2</h2>
			<div className={cls.blog__info}>
				<div className={cls.info}>
					<PublicDate>
						<IconEye /> 4 839
					</PublicDate>
					<PublicDate>6 Jun. 2024</PublicDate>
					<Link
						href='#'
						className={cls.author}
					>
						<UserImage
							blockSize={40}
							imageSize={31.5}
							userImage={avatar.src}
							imageClipPath='M12.2504 1.79816C13.3333 1.17295 14.6675 1.17295 15.7504 1.79816L25.4245 7.3835C26.5074 8.00871 27.1745 9.16416 27.1745 10.4146V21.5853C27.1745 22.8357 26.5074 23.9911 25.4245 24.6163L15.7504 30.2017C14.6675 30.8269 13.3333 30.8269 12.2504 30.2017L2.57633 24.6163C1.49342 23.9911 0.826325 22.8357 0.826325 21.5853V10.4146C0.826325 9.16416 1.49342 8.00871 2.57633 7.3835L12.2504 1.79816Z'
							Icon={IconAvatarFrame}
						/>
						<span>Djorgick</span>
					</Link>
				</div>
				<div className={cls.social}>
					{[0, 1, 2, 3, 4, 5].map(i => (
						<Link
							href='#'
							className={cls.soc__item}
							key={i}
						>
							<Image
								src={youtube.src}
								alt=''
							/>
						</Link>
					))}
				</div>
			</div>
		</>
	)
}
