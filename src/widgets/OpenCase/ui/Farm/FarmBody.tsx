"use client"
import Image from 'next/image'

import Backshape from '@/shared/assets/open-case-backshape.svg'
import openCaseBg from '@/shared/assets/open-case-bg.png'


import clsx from 'clsx'
import cls from '../OpenCase.module.sass'
import { useCommonStore } from '@/entities/Common/model/store'
import { useTranslations } from 'next-intl'

import IconHint from '@/shared/assets/icons/icon-hint.svg'
import IconBorder from '@/shared/assets/icons/icon-dotted-border.svg'
import OpenFarm from './OpenFarm'

export const FarmBody = () => {

    // For translation
    const t = useTranslations();




    // Open farm state
    const openFarm = useCommonStore(state => state.openFarm)

    return (
        <div className={clsx(cls.base)}>
            <div className={clsx(cls.container, '!pt-0')}>
                <div className={clsx(cls.type, openFarm == false ? "hidden" : "flex justify-center")}>{t('open_case.selected_top')}</div>
                {
                    openFarm == true && 
                    <div
                        className={cls.inner}
                        style={{ backgroundImage: `url(${openCaseBg.src})` }}
                    >
                        <Backshape className={cls.backshape} />
                        <div className={clsx(cls.backshape, '3sm:!left-0 3sm:!transform-none 3sm:!top-0 flex')}>
                            <Image
                                src={'/images/case/case-full-2.png'}
                                alt='case'
                                width={320}
                                height={320}
                            />
                        </div>
                        <div className={clsx(cls.grid, 'justify-end w-full flex-row flex')}>
                            <div className={clsx(cls.farm_hint, ' max-w-[374px] mr-5 sm:mr-0 sm:mx-1 sm:mt-[140px]')}>
                                <div className={clsx(cls.farm_hint_inner, 'p-4 flex gap-2')}>
                                    <IconHint className='w-7 h-7 fill-[#FFA3A3]' />
                                    <div className='flex flex-col gap-2'>
                                        <span className='text-[#FFA3A3] text-[14px] font-[500] uppercase'>{t('case_farm.hint_title')}</span>
                                        <span className='text-[#FFA3A3] text-[12px] flex flex-col'>
                                            <span>{t('case_farm.hint_content1')}</span>
                                            <span>{t('case_farm.hint_content2')}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    openFarm == false && 
                    <div
                        className={cls.inner}
                        style={{ backgroundImage: `url(${openCaseBg.src})` }}
                    >
                        <OpenFarm />
                    </div>
                }
                
            </div>
            <div className={clsx('relative w-full justify-center overflow-hidden', openFarm == false ? "hidden" : "flex")}>
                <IconBorder />
            </div>
        </div>
    )
}
