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
			<div className='border rounded-lg border-solid border-[#21293A] bg-[#181E2B] p-[7px] md:p-[3px]'>
				<Icon className='w-[24px] h-[24px] md:w-[18px] md:h-[18px]' />
			</div>
			<span
				className={`pl-2 text-white text-[14px] text-[${size}px] font-bold leading-4 uppercase whitespace-nowrap md:text-[10px]`}
			>
				{points}
			</span>
		</div>
	)
}
