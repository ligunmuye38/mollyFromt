import { WikiWeaponItem } from '@/shared/ui/WikiWeaponItem/ui/WikiWeaponItem'

export const WikiWeaponItems = () => {
	return (
		<div className='mt-[37px] grid grid-cols-[repeat(4,2fr)] items-start gap-5 3md:grid-cols-[repeat(3,2fr)] md:grid-cols-[repeat(2,2fr)] md:gap-3 3sm:grid-cols-1'>
			{[0, 1, 2, 3, 4, 5, 6, 7, 8].map(e => (
				<WikiWeaponItem
					num={e}
					key={e}
				/>
			))}
		</div>
	)
}
