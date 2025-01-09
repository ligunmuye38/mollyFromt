import { Input } from "@/shared/ui/Input/Input";
import { useTranslations } from "next-intl";
import { useState } from "react";

import IconSearch from '@/shared/assets/icons/icon-search.svg'
import IconRefresh from "@/shared/assets/icons/icon-refresh.svg"

import clsx from "clsx";
import cls from "../Cases.module.sass"
import SelectCaseType from "./SelectCaseType";

const ModalBar = () => {

    // For translation
    const t = useTranslations();

    // Get search keyword
    const [viewSearch, setViewSearch] = useState<string>('')

    return (
        <div className="w-full flex gap-[15px] flex-col">
            <span className="text-white text-[14px] font-[500] w-full">{t('create_case.select_up')}</span>
            <div className="w-full flex justify-between gap-2">
                <div className="flex gap-2 flex-1 lg:flex-col flex-row">
                    <Input
                        value={viewSearch}
                        onChange={v => {
                            setViewSearch(v)
                        }}
                        theme='theme-1'
                        placeholder={t('create_case.search')}
                        strokeSize='reg'
                        startContent={<IconSearch className={clsx(cls.box_icon, cls.input_search_icon)} />}
                        classNames={{
                            inputWrapper: [cls.box, "!border-[1px] w-full"],
                            input: [cls.box_value, cls.input_search],
                            base: "w-auto",
                            mainWrapper: [" w-[278px] lg:w-full"]
                        }}
                    />
                    <div className="flex flex-1">
                        <SelectCaseType className="w-full h-full" />
                    </div>
                </div>
                <div className="flex gap-2 h-auto lg:flex-col flex-row">
                    <div className={clsx(cls.modal_body_bar_type, "h-auto")}>
                        <div className={clsx(cls.modal_body_bar_type_inner, "py-[7px] px-3")}>
                            <span className="text-[#60719A] text-[12px] font-[500]">{t('create_case.price_descending')}</span>
                        </div>
                    </div>
                    <div className={clsx(cls.modal_body_bar_type)}>
                        <div className={clsx(cls.modal_body_bar_type_inner, "py-[7px] px-3 flex justify-center")}>
                            <IconRefresh className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalBar;