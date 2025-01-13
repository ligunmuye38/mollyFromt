const ProgressBar = () => {
    return (
        <div x-data="skillDisplay"
        className="p-6 space-y-6 bg-gray-800 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0">
        <div className="grid grid-cols-2 gap-6">
            <template x-for="skill in skills">
                <button x-text="skill.title"
                    className="px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700"
                    :className="(currentSkill.title == skill.title) && 'font-bold ring-2 ring-gray-100'"
                    @click="currentSkill = skill"></button>
            </template>
        </div>

        <div className="flex items-center justify-center" x-data="{ circumference: 2 * 22 / 7 * 120 }">
            <svg className="transform -rotate-90 w-72 h-72">
                <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent"
                    className="text-gray-700" />

                <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent"
                    :stroke-dasharray="circumference"
                    :stroke-dashoffset="circumference - currentSkill.percent / 100 * circumference"
                    className="text-blue-500 " />
            </svg>
            <span className="absolute text-5xl" x-text="`${currentSkill.percent}%`"></span>
    </div>
    )
}

export default ProgressBar;