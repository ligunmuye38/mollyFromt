import { investoryItems } from '../../model/items'
import ProfileInventory from '../ProfileInventory'
import { useTranslations } from 'next-intl'

const UserInvestory = () => {
	// For translation
	const t = useTranslations()

	return (
		<div className='flex w-full flex-col justify-center'>
			<span className='my-1 text-center text-[18px] text-[#D1D9EB]'>{t('user_profile.investory')}</span>
			<div className='flex w-full flex-wrap justify-center gap-0.5'>
				<ProfileInventory items={investoryItems} />
			</div>
		</div>
	)
}

export default UserInvestory
