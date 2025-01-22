'use client'

import { bestDrop } from '../../model/items'
import clsx from 'clsx'

import cls from './User.module.sass'
import UserBestDrop from './UserBestDrop'
import UserHeader from './UserHeader'
import UserInvestory from './UserInventory'

const User = () => {
	return (
		<div className='flex w-full flex-col gap-4 px-2'>
			<div className={clsx('w-full flex-wrap lg:!bg-none lg:!p-0', cls.user_main)}>
				<div className={clsx('flex w-full flex-col p-5 lg:!bg-none lg:p-2 3sm:!p-1.5', cls.user_main_inner)}>
					<UserHeader />
					<UserBestDrop
						title={bestDrop.title}
						type={bestDrop.type}
						name={bestDrop.name}
						imgUrl={bestDrop.imgUrl}
					/>
				</div>
			</div>
			<UserInvestory />
		</div>
	)
}

export default User
