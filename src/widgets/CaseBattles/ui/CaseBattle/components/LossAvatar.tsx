import clsx from 'clsx'
import Image from 'next/image'

import cls from '../CaseBattle.module.sass'

const LossAvatar = () => {
	return (
		<div className='relative'>
			<div className={clsx(cls.result_avatar)}>
				<div className={cls.result_avatar_inner}>
					<Image
						src='/images/avatars/2-lg.jpg'
						width={231}
						height={463}
						alt='avatar'
					/>
				</div>
			</div>
			<svg
				width='174'
				height='200'
				viewBox='0 0 174 200'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M85.5 2.02073C86.4282 1.48483 87.5718 1.48483 88.5 2.02073L171.103 49.7113C172.031 50.2472 172.603 51.2376 172.603 52.3094V147.691C172.603 148.762 172.031 149.753 171.103 150.289L88.5 197.979C87.5718 198.515 86.4282 198.515 85.5 197.979L2.89746 150.289C1.96926 149.753 1.39746 148.762 1.39746 147.691V52.3094C1.39746 51.2376 1.96926 50.2472 2.89746 49.7113L85.5 2.02073Z'
					stroke='white'
					stroke-opacity='0.05'
					stroke-width='2'
				/>
			</svg>
		</div>
	)
}

export default LossAvatar
