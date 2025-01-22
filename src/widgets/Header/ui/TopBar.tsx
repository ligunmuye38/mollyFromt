import TopBarLeftNav from './TopBarLeftNav'
import TopBarRightNav from './TopBarRightNav'

const TopBar = () => {
	return (
		<div className='h-[48px] w-full bg-[#161C28] pb-[1px]'>
			<div className='flex h-full w-full items-center justify-between bg-[#10151E] px-[40px]'>
				<TopBarLeftNav />
				<TopBarRightNav />
			</div>
		</div>
	)
}

export default TopBar
