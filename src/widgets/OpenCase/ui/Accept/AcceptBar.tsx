import CaseBar from '../CaseBar'
import { useTranslations } from 'next-intl'

const MysteryBar = () => {
	// For translation
	const t = useTranslations()

	return <CaseBar title={t('case_accept.title')} />
}

export default MysteryBar
