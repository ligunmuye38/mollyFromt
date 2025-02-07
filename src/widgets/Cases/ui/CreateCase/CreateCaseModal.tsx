import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { Input } from '@/shared/ui/Input/Input'

import CaseItems from './CaseItems'
import CreateCaseFooter from './CreateCaseFooter'
import ModalBar from './ModalBar'
import SelectCaseImage from './SelectCaseImage'
import SelectType from './SelectType'
import SetDropChances from './SetDropChances'

import cls from '../Cases.module.sass'

const CreateCaseModal = () => {
	// For translation
	const t = useTranslations()

	// Values for case information
	const [caseName, setCaseName] = useState<string>('')

	return (
		<div
			className={clsx(
				cls.create_modal,
				'app-scrollbar flex max-h-[calc(100vh-130px)] min-h-[calc(100vh-130px)] w-[1183px] flex-col overflow-auto lg:w-full'
			)}
		>
			<div className='relative flex w-full md:flex-col'>
				<div
					className={clsx(
						'relative flex min-w-[300px] max-w-[410px] flex-col gap-[15px] p-5 md:w-full md:max-w-[700px] 3sm:max-w-[500px] 2sm:max-w-[350px] sm:max-w-[300px]'
					)}
				>
					<Input
						value={caseName}
						onChange={v => {
							setCaseName(v)
						}}
						label={t('create_case.case_name').toUpperCase()}
						theme='theme-1'
						placeholder={t('create_case.case_name_placeholder')}
						classNames={{
							inputWrapper: ['!rounded-md'],
							input: ['w-full text-[14px]'],
							label: ['text-[10px]'],
							mainWrapper: 'w-full'
						}}
					/>
					<SelectType />
					<SelectCaseImage />
					<SetDropChances />
				</div>
				<div className='relative flex h-[700px] flex-1 py-5'>
					<div className={clsx(cls.modal_body, 'h-full w-full')}>
						<div className={clsx(cls.modal_body_inner, 'flex h-full w-full flex-col p-5 2sm:px-[13px]')}>
							<ModalBar />
							<div className='app-scrollbar relative my-3 flex-1 overflow-auto'>
								<CaseItems />
							</div>
						</div>
					</div>
					<div className={clsx(cls.chance_body, 'absolute bottom-0 left-0 z-[35] h-[98px] w-full')}></div>
				</div>
			</div>
			<CreateCaseFooter />
		</div>
	)
}

export default CreateCaseModal
