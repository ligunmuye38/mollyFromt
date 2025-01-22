import { PageName } from '@/widgets/PageName/ui/PageName'
import { WikiWeaponItems } from '@/widgets/WikiWeaponItems/ui/WikiWeaponItems'

const Page = () => {
	return (
		<>
			<PageName title='Wiki CS2 (CS:GO)' />
			<main className='px-5'>
				<WikiWeaponItems />
			</main>
		</>
	)
}

export default Page
