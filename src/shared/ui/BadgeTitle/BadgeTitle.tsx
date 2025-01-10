import IconBadgeTitle from '@/shared/assets/icons/icon-badge-title-hexagon.svg'
import clsx from 'clsx';
import cls from "./BadgeTitle.module.sass"
import React from 'react';

interface BadgeTitleProps {
    icon: React.ReactNode
    title: string
    content: string
}

const BadgeTitle = ({icon: Icon, title, content}: BadgeTitleProps) => {
    return (
        <div className={clsx('relative w-[210px] h-[98px]', cls.badge_box)}>
            <div className={clsx(cls.badge_inner, 'relative')}>
                <div className={clsx('w-auto h-full absolute', cls.badge_center)}>
                    <div className=' relative w-[98px] flex justify-center items-center h-full'>
                        <IconBadgeTitle className='absolute top-0 left-0 -z-[1]'/>
                        {Icon}
                    </div>
                </div>
                <div className='flex flex-col gap-2  justify-center items-center h-full w-full'>
                    <span className='text-white text-[18px]'>{title}</span>
                    <span className='text-[#55698F] text-[14px] uppercase'>{content}</span>
                </div>
            </div>

        </div>
    )
}

export default  BadgeTitle;