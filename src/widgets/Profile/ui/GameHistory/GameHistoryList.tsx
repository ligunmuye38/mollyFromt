'use client'

import { useCommonStore } from '@/entities/Common/model/store'

import CaseBattleHistoryList from './CaseBattleHistoryList'
import LottoHistoryList from './LottoHistoryList'
import OpeningCaseHistoryList from './OpeningCaseHistoryList'
import UpgradeHistoryList from './UpgradHistoryList'

const GameHistoryList = () => {
	const gameHistoryType = useCommonStore(state => state.gameHistoryType)

	return (
		<div className='flex flex-col gap-2'>
			{gameHistoryType === 'Opening Case' && <OpeningCaseHistoryList />}
			{gameHistoryType === 'Upgrade' && <UpgradeHistoryList />}
			{gameHistoryType === 'Lotto' && <LottoHistoryList />}
			{gameHistoryType === 'Case Battle' && <CaseBattleHistoryList />}
		</div>
	)
}

export default GameHistoryList
