import FaqHeader from '@/entities/Faq/ui/FaqHeader'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale } }: IMetadata) {
    // const t = await getTranslations({ locale, namespace: 'Main' })

    return {
        title: {
            default: 'Cases'
        },
        description: ''
    }
}


const Faq = () => {
    return (
        <div>
            <FaqHeader />
        </div>
    )
}

export default Faq;