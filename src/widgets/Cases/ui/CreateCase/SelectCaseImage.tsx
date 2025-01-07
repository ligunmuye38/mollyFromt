"use client"

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'


import CaseImageItem from "./CaseImageItem";

import { selectImages } from '../../model/items';
import { useTranslations } from 'next-intl';


const SelectCaseImage = () => {

    // For Translation
    const t = useTranslations()

    // The values are to reference swiper and swiper index.
    const [swiperIndex, setSwiperIndex] = useState<number>(0)
    const swiperRef = useRef<SwiperRef>(null)

    // For slider(Select Images)
    const slides = selectImages.map((item) => (
        <SwiperSlide
            key={item.id}
        >
            <CaseImageItem picUrl={item.picUrl} />
        </SwiperSlide>
    ))

    return (
        <div className='flex flex-col gap-1 w-full overflow-hidden'>
            <span className='text-[10px] text-[#49526D] uppercase'>{t('create_case.select_case_image')}</span>
            <div className='flex relative w-full'>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={7}
                    loop={false}
                    tabIndex={swiperIndex}
                    ref={swiperRef}
                    wrapperClass='flex w-full'
                    className='relative w-full'
                >
                    {slides}
                </Swiper>
            </div>

        </div>
    )
}

export default SelectCaseImage;