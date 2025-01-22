import Icon from '@/shared/assets/icons/crown.svg'

interface ViewPointsProps {
	points: string
	size?: number
	style?: React.CSSProperties
	classNames?: string
}

export const ViewPoints: React.FC<ViewPointsProps> = ({ style, classNames, points, size }) => {
	return (
		<div
			className={`${classNames} flex items-center`}
			style={style}
		>
			<div className='rounded-lg border border-solid border-[#21293A] bg-[#181E2B] p-[7px] md:p-[3px]'>
				<Icon className='h-[24px] w-[24px] md:h-[18px] md:w-[18px]' />
			</div>
			<span
				className={`pl-2 text-[14px] text-white text-[${size}px] whitespace-nowrap font-bold uppercase leading-4 md:text-[10px]`}
			>
				{points}
			</span>
		</div>
	)
}
