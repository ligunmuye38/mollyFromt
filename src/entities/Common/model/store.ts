'use client'

import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export interface IState {
	chatHidden: boolean
	chatViewHidden: boolean
	headerBarWidth: number
	caseToolbarInView: boolean
	fixedCaseToolbarInView: boolean
	headerBarInView: boolean
	signinState: boolean
	headerState: number
	mobileRightBarState: boolean
	itemPosition: string
	caseCount: number
	gameHistoryType: string
	transactionHistoryType: string
	openFarm: boolean
	openAcceptCase: boolean
	currentCaseNumber: number
	selectedCaseItems: any[]
	isScrollTop: boolean
	onScroll: () => void
	currentBattleVariant: string
}
export interface IActions {
	setChatHidden: (value: boolean) => void
	setViewChatHidden: (value: boolean) => void
	setHeaderBarWidth: (value: number) => void
	setCaseToolbarInView: (value: boolean) => void
	setFixedCaseToolbarInView: (value: boolean) => void
	setHeaderBarInView: (value: boolean) => void
	setSigninState: (value: boolean) => void
	setHeaderState: (value: number) => void
	setMobileRightBarState: (value: boolean) => void
	setItemPosition: (value: string) => void
	setCaseCount: (value: number) => void
	setGameHistoryType: (value: string) => void
	setTransactionHistoryType: (value: string) => void
	setOpenFarm: (value: boolean) => void
	setOpenAcceptCase: (value: boolean) => void
	setCurrentCaseNumber: (value: number) => void
	setSelectedCaseItems: (value: any[]) => void
	setIsScrollTop: (value: boolean) => void
	setOnScroll: (value: () => void) => void
	setCurrentBattleVariant: (value: string) => void
}

export const initialState: IState = {
	chatHidden: false,
	chatViewHidden: false,
	headerBarWidth: 0,
	caseToolbarInView: false,
	fixedCaseToolbarInView: false,
	headerBarInView: false,
	signinState: false,
	headerState: 0,
	mobileRightBarState: false,
	itemPosition: 'center',
	caseCount: 0,
	gameHistoryType: 'Case Battle',
	transactionHistoryType: 'deposit',
	openFarm: true,
	openAcceptCase: true,
	currentCaseNumber: 0,
	selectedCaseItems: [],
	isScrollTop: false,
	onScroll: () => {},
	currentBattleVariant: 'one-vs-one'
}

export const useCommonStore = create<IState & IActions>()(
	devtools(
		immer(
			persist(
				set => ({
					...initialState,
					setChatHidden: value =>
						set(
							state => {
								state.chatHidden = value
							},
							undefined,
							'SET_CHAT_HIDDEN'
						),
					setViewChatHidden: value =>
						set(
							state => {
								state.chatViewHidden = value
							},
							undefined,
							'SET_VIEW_CHAT_HIDDEN'
						),
					setHeaderBarWidth: value =>
						set(
							state => {
								state.headerBarWidth = value
							},
							undefined,
							'SET_HEADER_BAR_WIDTH'
						),
					setCaseToolbarInView: value =>
						set(
							state => {
								state.caseToolbarInView = value
							},
							undefined,
							'SET_CASE_TOOLBAR_IN_VIEW'
						),
					setFixedCaseToolbarInView: value =>
						set(
							state => {
								state.fixedCaseToolbarInView = value
							},
							undefined,
							'SET_CASE_TOOLBAR_IN_VIEW_COMPLETE'
						),
					setHeaderBarInView: value =>
						set(
							state => {
								state.headerBarInView = value
							},
							undefined,
							'SET_HEADER_BAR_IN_VIEW'
						),
					setSigninState: value =>
						set(
							state => {
								state.signinState = value
							},
							undefined,
							'SET_SIGN_IN_STATE'
						),
					setHeaderState: value =>
						set(
							state => {
								state.headerState = value
							},
							undefined,
							'SET_HEADER_STATE'
						),
					setMobileRightBarState: value =>
						set(
							state => {
								state.mobileRightBarState = value
							},
							undefined,
							'SET_MOBILE_RIGHT_BAR_STATE'
						),
					setItemPosition: value =>
						set(
							state => {
								state.itemPosition = value
							},
							undefined,
							'SET_ITEM_POSITION_STATE'
						),
					setCaseCount: value =>
						set(
							state => {
								state.caseCount = value
							},
							undefined,
							'SET_CASE_COUNT'
						),
					setGameHistoryType: value =>
						set(
							state => {
								state.gameHistoryType = value
							},
							undefined,
							'SET_GAME_HISTORY_TYPE'
						),
					setTransactionHistoryType: value =>
						set(
							state => {
								state.transactionHistoryType = value
							},
							undefined,
							'SET_TRANSACTION_HISTORY_TYPE'
						),
					setOpenFarm: value =>
						set(
							state => {
								state.openFarm = value
							},
							undefined,
							'SET_OPEN_FARM'
						),
					setOpenAcceptCase: value =>
						set(
							state => {
								state.openAcceptCase = value
							},
							undefined,
							'SET_OPEN_ACCEPT_CASE'
						),
					setCurrentCaseNumber: value =>
						set(
							state => {
								state.currentCaseNumber = value
							},
							undefined,
							'SET_CURRENT_CASE_NUMBER'
						),
					setSelectedCaseItems: value =>
						set(
							state => {
								state.selectedCaseItems = value
							},
							undefined,
							'SET_SELETED_CASE_ITEMS'
						),
					setIsScrollTop: value =>
						set(
							state => {
								state.isScrollTop = value
							},
							undefined,
							'SET_SET_SCROLLTOP_STATE'
						),
					setOnScroll: value =>
						set(
							state => {
								state.onScroll = value
							},
							undefined,
							'SET_SET_SCROLL_FUNCTION_STATE'
						),
					setCurrentBattleVariant: value =>
						set(
							state => {
								state.currentBattleVariant = value
							},
							undefined,
							'SET_CURRENT_BATTLE_VARIANT'
						)
				}),
				{
					name: 'common'
				}
			)
		),
		{
			name: 'COMMON'
		}
	)
)
