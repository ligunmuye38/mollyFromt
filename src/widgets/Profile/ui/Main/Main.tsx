import { bestDrop } from '../../model/items'
import clsx from 'clsx'

import cls from './Main.module.sass'
import MainBestDrop from './MainBestDrop'
import MainHeader from './MainHeader'
import MainInventory from './MainInventory'
import MainTrader from './MainTrader'

const Main = () => {
	return (
		<div className='flex w-full flex-col gap-4 px-2'>
			<div className={clsx('w-full flex-wrap lg:!bg-none lg:!p-0', cls.user_main)}>
				<div className={clsx('flex w-full flex-col p-5 lg:!bg-none lg:p-2 3sm:!p-1.5', cls.user_main_inner)}>
					<MainHeader />
					<MainTrader />
					<MainBestDrop
						title={bestDrop.title}
						imgUrl={bestDrop.imgUrl}
						name={bestDrop.name}
						type={bestDrop.type}
					/>
				</div>
			</div>
			<MainInventory />
		</div>
	)
}

export default Main
