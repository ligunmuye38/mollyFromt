import clsx from 'clsx'
import { motion } from 'framer-motion'
import { FC, useState } from 'react'

import { useCommonStore } from '@/entities/Common/model/store'

import cls from './CaseToolbar.module.sass'
import { CaseToolbarContent } from './CaseToolbarContent'

const animationVariants = {
	inactive: { translateY: '-150%' },
	active: { translateY: 0 }
}

interface CaseToolbarFixedProps {
	className?: string
}

export const CaseToolbarFixed: FC<CaseToolbarFixedProps> = ({ className }) => {
	const caseToolbarInView = useCommonStore(state => state.caseToolbarInView)
	const setFixedCaseToolbarInView = useCommonStore(state => state.setFixedCaseToolbarInView)
	const [display, setDisplay] = useState<'flex' | 'hidden'>(caseToolbarInView ? 'hidden' : 'flex')

	return (
		<motion.div
			initial='inactive'
			variants={animationVariants}
			animate={caseToolbarInView ? 'inactive' : 'active'}
			transition={{ type: 'tween' }}
			onAnimationStart={variant => {
				if (variant === 'active') {
					setDisplay('flex')
					setFixedCaseToolbarInView(true)
				}
			}}
			onAnimationComplete={variant => {
				if (variant === 'inactive') {
					setDisplay('hidden')
					setFixedCaseToolbarInView(false)
				}
			}}
			className={clsx(cls.fixed, className, display)}
		>
			<CaseToolbarContent className='scrollbar-hide' />
		</motion.div>
	)
}
