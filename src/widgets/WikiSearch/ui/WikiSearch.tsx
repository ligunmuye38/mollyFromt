import Icon from '@/shared/assets/icons/search-icon.svg'

import cls from './WikiSearch.module.sass'

const WikiSearch = () => {
	return (
		<div className={cls.search}>
			<div className={cls.search__inner}>
				<Icon />
				<input
					type='text'
					placeholder='Search'
					className={cls.input}
				/>
			</div>
		</div>
	)
}

export default WikiSearch
