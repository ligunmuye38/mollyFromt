'use client'

import CaseLiveFeed from '../CaseLiveFeed'

import { useCommonStore } from '@/entities/Common/model/store'

const FarmLiveFeed = () => {
	const openFarm = useCommonStore(state => state.openFarm)

	return (
		openFarm == true && (
			<div className={'flex w-full justify-start overflow-hidden'}>
				<CaseLiveFeed />
			</div>
		)
	)
}

export default FarmLiveFeed
