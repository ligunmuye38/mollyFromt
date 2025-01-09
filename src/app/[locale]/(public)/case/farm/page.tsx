import { IMetadata } from '@/shared/types/metadata'
import CaseLiveFeed from '@/widgets/OpenCase/ui/CaseLiveFeed'
import FarmBar from '@/widgets/OpenCase/ui/Farm/FarmBar'
import { FarmBody } from '@/widgets/OpenCase/ui/Farm/FarmBody'
import FarmContents from '@/widgets/OpenCase/ui/Farm/FarmContent'
import FarmToolBar from '@/widgets/OpenCase/ui/Farm/FarmToolBar'

export async function generateMetadata({ params: { locale } }: IMetadata) {
    // const t = await getTranslations({ locale, namespace: 'Main' })

    return {
        title: {
            default: 'Case(Farm)'
        },
        description: ''
    }
}

export default function Page({ params: { id } }: { params: { id: string } }) {
    return (
        <>
            <div className='mt-4'>
                <FarmBar />
                <FarmBody />
                <FarmToolBar />
                <FarmContents />
                <CaseLiveFeed />
            </div>
        </>
    )
}
