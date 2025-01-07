import clsx from "clsx";
import cls from "../Cases.module.sass";
import { useTranslations } from "next-intl";
import { Input } from "@/shared/ui/Input/Input";
import { useState } from "react";
import SelectType from "./SelectType";
import SelectCaseImage from "./SelectCaseImage";
import SetDropChances from "./SetDropChances";
import CreateCaseFooter from "./CreateCaseFooter";
import ModalBar from "./ModalBar";

const CreateCaseModal = () => {

    // For translation
    const t = useTranslations();

    // Values for case information
    const [caseName, setCaseName] = useState<string>('');

    return (
        <div className={clsx(cls.create_modal, "w-[1183px] flex flex-col")}>
            <div className="w-full flex">
                <div className="w-1/3 p-5 flex flex-col gap-[15px]">
                    <Input
                        value={caseName}
                        onChange={v => {
                            setCaseName(v)
                        }}
                        label={t('create_case.case_name').toUpperCase()}
                        theme='theme-1'
                        placeholder={t('create_case.case_name_placeholder')}
                        classNames={{
                            inputWrapper: [' !rounded-md'],
                            input: ['w-full text-[14px]'],
                            label: ['text-[10px]'],
                            mainWrapper: "w-full"
                        }}
                    />
                    <SelectType />
                    <SelectCaseImage />
                    <SetDropChances />
                </div>
                <div className="w-2/3 py-5">
                    <div className={clsx(cls.modal_body, "w-full h-full")}>
                        <div className={clsx(cls.modal_body_inner, "w-full h-full p-5")}>
                            <ModalBar />
                        </div>
                    </div>
                </div>
            </div>
            <CreateCaseFooter />
        </div>
    )
}

export default CreateCaseModal;