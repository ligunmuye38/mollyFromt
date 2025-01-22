import React, { ReactNode } from 'react'

import cls from './PublicDate.module.sass'

interface PublicDateProps {
	children: ReactNode
}

export const PublicDate: React.FC<PublicDateProps> = ({ children }) => {
	return <div className={cls.btn}>{children}</div>
}
