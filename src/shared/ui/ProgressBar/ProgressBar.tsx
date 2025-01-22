'use client'

import clsx from 'clsx'
import { useCallback, useEffect, useRef, useState } from 'react'

import cls from './ProgressBar.module.sass'

interface ProgressBarProps {
	items?: any[]
}

const ProgressBar = ({ items }: ProgressBarProps) => {
	const [progress, setProgress] = useState(0)
	const [isDragging, setIsDragging] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	const updateProgress = (clientX: any) => {
		if (ref.current) {
			const { left, width } = ref.current.getBoundingClientRect()
			const newProgress = Math.min(Math.max(((clientX - left) / width) * 100, 0), 100)
			setProgress(newProgress)
		}
	}

	const handleMouseMove = useCallback(
		(e: any) => {
			if (isDragging) {
				updateProgress(e.clientX)
			}
		},
		[isDragging]
	)

	const handleTouchMove = useCallback(
		(e: any) => {
			if (isDragging) {
				updateProgress(e.touches[0].clientX)
			}
		},
		[isDragging]
	)

	const handleMouseDown = () => {
		setIsDragging(true)
	}

	// const handleMouseUp = () => {
	// 	setIsDragging(false)
	// }

	const handleTouchStart = () => {
		setIsDragging(true)
	}

	const handleTouchEnd = () => {
		setIsDragging(false)
	}

	// Add event listeners for mouseup and touchend to handle dragging outside the component
	useEffect(() => {
		const handleMouseUpAndTouchEnd = () => {
			setIsDragging(false)
		}

		if (isDragging) {
			window.addEventListener('mouseup', handleMouseUpAndTouchEnd)
			window.addEventListener('mousemove', handleMouseMove)
			window.addEventListener('touchend', handleTouchEnd)
			window.addEventListener('touchmove', handleTouchMove)
		} else {
			window.removeEventListener('mouseup', handleMouseUpAndTouchEnd)
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('touchend', handleTouchEnd)
			window.removeEventListener('touchmove', handleTouchMove)
		}

		// Cleanup
		return () => {
			window.removeEventListener('mouseup', handleMouseUpAndTouchEnd)
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('touchend', handleTouchEnd)
			window.removeEventListener('touchmove', handleTouchMove)
		}
	}, [handleMouseMove, handleTouchMove, isDragging])

	return (
		<div className='flex w-full flex-col gap-1'>
			<div
				className='relative h-2.5 w-full rounded-full bg-[#2A3246]'
				ref={ref}
			>
				<div
					className={clsx('h-2.5 rounded-full', cls.progress_color)}
					style={{ width: `${progress}%` }}
				></div>
				<div
					className={clsx('absolute h-5 w-5 rounded-large p-[5px]', cls.pointer)}
					style={{ left: `calc(${progress}%)` }} // Center the pointer
					onMouseDown={handleMouseDown}
					onTouchStart={handleTouchStart}
				>
					<div className='h-full w-full rounded-large bg-[#0A7455]'></div>
				</div>
			</div>
			{items && (
				<div className='flex justify-between'>
					{items.map((item, index) => (
						<span
							key={index}
							className={clsx(
								'text-[10px] text-[#5A6487] md:text-[7px]',
								item.min <= progress && item.max > progress && '!text-white'
							)}
						>
							{item.title}
						</span>
					))}
				</div>
			)}
		</div>
	)
}

export default ProgressBar
