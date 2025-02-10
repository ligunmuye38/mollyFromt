'use client'

import { players } from '../../model/items'
import { Switch } from '@nextui-org/react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import BgBubble from '@/shared/assets/bubble-bg-green.svg'
import EmojiHappy from '@/shared/assets/icons/emoji/happy.svg'
import IconCaseBattle from '@/shared/assets/icons/icon-case-battle.svg'
import IconClose from '@/shared/assets/icons/icon-close.svg'
import IconStartWithBots from '@/shared/assets/icons/icon-start-with-bots.svg'
import BgSnakeGreen from '@/shared/assets/snake-bg-green.svg'
import BgSnakeRed from '@/shared/assets/snake-bg-red.svg'
import { useModal } from '@/shared/context/ModalContext'
// import IconSort from '@/shared/assets/icons/icon-sort.svg'
import Button from '@/shared/ui/Button/Button'

import BattleOver from './BattleOver'
// import PaginationBar from '@/shared/ui/PaginationBar/PaginationBar'
import cls from './CaseBattle.module.sass'
import LossBand from './components/LossBand'
import SmallAvatar from './components/SmallAvatar'
import WinnerBand from './components/WinnerBand'

const ReadyIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			width='114'
			height='109'
			viewBox='0 0 114 109'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<g filter='url(#filter0_dd_4135_3875)'>
				<path
					d='M77.47 29.6933L88.5754 48.9282C90.4632 52.198 90.4632 56.2266 88.5754 59.4964L77.47 78.7315C75.5823 82.0013 72.0934 84.0156 68.3177 84.0156H46.107C42.3314 84.0156 38.8426 82.0013 36.9548 78.7315L25.8495 59.4964C23.9616 56.2266 23.9616 52.198 25.8495 48.9282L36.9548 29.6933C38.8426 26.4235 42.3314 24.4092 46.107 24.4092H68.3177C72.0934 24.4092 75.5823 26.4235 77.47 29.6933Z'
					fill='#10AA7C'
				/>
			</g>
			<path
				d='M77.47 29.6933L88.5754 48.9282C90.4632 52.198 90.4632 56.2266 88.5754 59.4964L77.47 78.7315C75.5823 82.0013 72.0934 84.0156 68.3177 84.0156H46.107C42.3314 84.0156 38.8426 82.0013 36.9548 78.7315L25.8495 59.4964C23.9616 56.2266 23.9616 52.198 25.8495 48.9282L36.9548 29.6933C38.8426 26.4235 42.3314 24.4092 46.107 24.4092H68.3177C72.0934 24.4092 75.5823 26.4235 77.47 29.6933Z'
				fill='url(#paint0_linear_4135_3875)'
			/>
			<g clip-path='url(#clip0_4135_3875)'>
				<path
					d='M70.4896 50.569L55.8036 65.2947C54.8096 66.2887 53.4924 66.8335 52.0901 66.8335H52.0796C50.6726 66.83 49.3531 66.2782 48.3614 65.2807L43.5198 60.4939C42.8326 59.8149 42.8256 58.7065 43.5058 58.0194C44.1859 57.331 45.2931 57.3252 45.9814 58.0054L50.8348 62.8027C51.1766 63.1469 51.6164 63.3312 52.0866 63.3324H52.0901C52.5568 63.3324 52.9966 63.1504 53.3279 62.8202L68.0128 48.0969C68.6941 47.4109 69.8036 47.4109 70.4873 48.0934C71.1721 48.7759 71.1733 49.8842 70.4908 50.5679L70.4896 50.569ZM48.8619 53.7284C49.7789 54.6535 51.0016 55.1634 52.3036 55.1669H52.3141C53.6126 55.1669 54.8329 54.6605 55.7581 53.7365L65.2443 44.1477C65.9244 43.4605 65.9186 42.3522 65.2314 41.672C64.5443 40.993 63.4371 41 62.7558 41.6849L53.2754 51.2667C53.0188 51.5245 52.6769 51.6657 52.3129 51.6657H52.3106C51.9454 51.6657 51.6036 51.5222 51.3621 51.2784L47.1749 46.9489C46.5029 46.2535 45.3958 46.236 44.7004 46.908C44.0063 47.58 43.9876 48.6872 44.6596 49.3825L48.8631 53.7272L48.8619 53.7284Z'
					fill='#005138'
				/>
			</g>
			<path
				d='M77.47 29.6933L88.5754 48.9282C90.4633 52.198 90.4633 56.2266 88.5754 59.4964L77.47 78.7315C75.5823 82.0013 72.0934 84.0156 68.3177 84.0156H46.107C42.3314 84.0156 38.8426 82.0013 36.9548 78.7315L25.8495 59.4964C23.9616 56.2266 23.9616 52.198 25.8495 48.9282L36.9548 29.6933C38.8426 26.4235 42.3314 24.4092 46.107 24.4092H68.3177C72.0934 24.4092 75.5823 26.4235 77.47 29.6933Z'
				stroke='url(#paint1_linear_4135_3875)'
			/>
			<path
				d='M77.47 29.6933L88.5754 48.9282C90.4633 52.198 90.4633 56.2266 88.5754 59.4964L77.47 78.7315C75.5823 82.0013 72.0934 84.0156 68.3177 84.0156H46.107C42.3314 84.0156 38.8426 82.0013 36.9548 78.7315L25.8495 59.4964C23.9616 56.2266 23.9616 52.198 25.8495 48.9282L36.9548 29.6933C38.8426 26.4235 42.3314 24.4092 46.107 24.4092H68.3177C72.0934 24.4092 75.5823 26.4235 77.47 29.6933Z'
				stroke='url(#paint2_linear_4135_3875)'
			/>
			<defs>
				<filter
					id='filter0_dd_4135_3875'
					x='0.433594'
					y='0.40918'
					width='113.559'
					height='107.606'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood
						flood-opacity='0'
						result='BackgroundImageFix'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='12' />
					<feComposite
						in2='hardAlpha'
						operator='out'
					/>
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.0627451 0 0 0 0 0.666667 0 0 0 0 0.486275 0 0 0 0.35 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_4135_3875'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='6' />
					<feComposite
						in2='hardAlpha'
						operator='out'
					/>
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.0627451 0 0 0 0 0.666667 0 0 0 0 0.486275 0 0 0 0.25 0'
					/>
					<feBlend
						mode='normal'
						in2='effect1_dropShadow_4135_3875'
						result='effect2_dropShadow_4135_3875'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect2_dropShadow_4135_3875'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_4135_3875'
					x1='86.0466'
					y1='30.1828'
					x2='50.8193'
					y2='91.1983'
					gradientUnits='userSpaceOnUse'
				>
					<stop
						stop-color='#24FDBC'
						stop-opacity='0'
					/>
					<stop
						offset='1'
						stop-color='#24FDBC'
						stop-opacity='0.65'
					/>
				</linearGradient>
				<linearGradient
					id='paint1_linear_4135_3875'
					x1='70.0278'
					y1='61.6113'
					x2='81.3236'
					y2='68.133'
					gradientUnits='userSpaceOnUse'
				>
					<stop
						offset='0.347781'
						stop-color='#24FDBC'
						stop-opacity='0'
					/>
					<stop
						offset='1'
						stop-color='#24FDBC'
					/>
				</linearGradient>
				<linearGradient
					id='paint2_linear_4135_3875'
					x1='62.8516'
					y1='57.4681'
					x2='52.353'
					y2='51.4068'
					gradientUnits='userSpaceOnUse'
				>
					<stop
						stop-color='#24FDBC'
						stop-opacity='0'
					/>
					<stop
						offset='1'
						stop-color='#24FDBC'
					/>
				</linearGradient>
				<clipPath id='clip0_4135_3875'>
					<rect
						width='28'
						height='28'
						fill='white'
						transform='translate(43 40)'
					/>
				</clipPath>
			</defs>
		</svg>
	)
}

const CircularBg = ({ className, red }: { className?: string; red?: boolean }) => {
	if (red) {
		return (
			<svg
				width='359'
				height='359'
				viewBox='0 0 359 359'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className={className}
			>
				<g opacity='0.15'>
					<path
						d='M359 168.771C359 168.771 354.183 165.741 344.95 155.32C330.7 139.463 312.721 126.622 293.203 116.863C249.542 95.2896 189.445 112.754 176.603 162.578C179.171 146.655 186.363 131.759 197.663 120.458C237.728 80.3935 301.934 98.8848 339.922 132.253C350.482 141.155 355.661 143.407 355.661 143.407L350.107 122.679C350.107 122.679 344.668 120.985 333.063 113.305C291.148 85.0171 226.941 73.2032 189.959 116.864C178.658 130.219 172.494 146.656 172.494 164.12C170.44 136.383 180.713 107.618 205.881 92.209C242.351 69.608 285.498 76.2861 322.218 92.2994C334.714 98.1703 340.317 99.0441 340.317 99.0441L329.587 80.4594C329.587 80.4594 323.86 80.1738 310.668 75.7531C265.466 60.3616 207.423 62.9299 178.145 107.618C166.331 125.596 165.303 146.656 168.899 166.175C162.736 150.765 161.708 134.328 166.331 118.405C180.713 63.9575 245.433 48.5484 294.726 58.2565C308.314 60.697 314.013 60.1625 314.013 60.1625L298.839 44.9884C298.839 44.9884 293.147 46.1171 279.258 45.2595C242.351 42.8979 202.799 53.1704 176.089 81.4219C153.488 105.564 151.434 140.492 165.816 168.743C145.783 142.033 145.27 104.023 167.357 77.3129C190.471 48.5484 224.886 36.2206 259.298 32.4884C273.059 31.3298 278.542 29.4147 278.542 29.4147L259.957 18.685C259.957 18.685 254.61 21.1798 240.968 23.9472C204.853 32.1109 168.897 51.1159 150.919 85.5309C135.509 114.809 142.701 149.224 163.761 172.852C129.86 147.17 126.264 98.8856 151.947 64.4713C169.411 41.3565 192.525 26.4612 218.357 16.7959C231.354 12.1103 236.321 8.89492 236.321 8.89492L215.593 3.34096C215.593 3.34096 210.891 7.09924 198.424 13.3118C159.652 33.1385 125.237 70.1218 125.751 115.837C126.265 141.006 142.701 162.58 162.22 176.962C115.991 157.957 104.177 100.428 130.887 58.8217C142.701 39.8166 157.597 25.4343 174.719 12.2864C186.066 4.38314 190.23 0 190.23 0H168.77C168.77 0 164.998 4.86403 154.56 14.1051C115.992 47.5192 87.2276 110.185 124.21 155.387C134.483 167.715 147.324 176.447 162.734 181.069C138.078 176.96 113.423 161.55 104.177 137.409C88.2545 96.3165 104.691 51.1152 131.4 19.2815C140.316 8.69736 143.406 3.33942 143.406 3.33942L122.678 8.89339C122.678 8.89339 120.096 14.6396 112.408 26.2843C86.7138 64.4698 75.4129 118.404 106.233 158.468C120.101 175.933 142.188 184.151 163.762 185.178C124.724 190.829 88.2545 164.632 80.0357 124.567C73.3584 93.7482 79.5219 64.4698 91.3971 37.3049C97.2643 24.7551 99.0415 18.6835 99.0415 18.6835L80.4569 29.4131C80.4569 29.4131 79.2899 35.7459 74.8861 49.0025C63.0852 85.5294 62.0576 127.136 86.1992 161.037C105.204 187.747 137.051 194.938 165.815 189.287C133.969 201.101 97.4993 193.91 76.4398 163.605C55.3803 133.813 52.2981 98.371 57.473 65.0985C59.8813 51.4406 60.1608 44.9869 60.1608 44.9869L44.9868 60.1609C44.9868 60.1609 45.3896 66.7142 44.5802 80.6753C40.998 131.245 64.1121 191.856 119.587 201.102C136.537 203.67 153.488 199.561 168.897 192.37C156.056 201.102 141.674 206.753 126.265 207.78C70.2763 209.835 35.8614 151.278 31.9599 100.727C30.7347 86.8978 29.4131 80.4586 29.4131 80.4586L18.6834 99.0433C18.6834 99.0433 20.7142 105.395 23.5635 119.101C32.78 162.579 60.5169 206.753 108.8 215.485C132.942 220.108 155.543 208.294 173.007 193.912C161.193 207.78 146.297 219.594 127.806 222.676C74.3861 231.922 32.78 186.721 16.5891 141.716C11.8086 128.667 8.89337 122.679 8.89337 122.679L3.33942 143.407C3.33942 143.407 6.93383 149.109 13.252 161.614C34.3215 204.698 80.0365 243.222 131.402 230.381C150.921 225.758 165.817 210.862 177.117 194.939C168.385 212.404 155.03 229.868 136.025 236.546C88.2553 254.01 39.4581 223.704 12.3813 185.235C4.36858 173.865 0 168.771 0 168.771V190.23C0 190.23 4.95667 194.847 14.3118 205.291C42.0257 235.517 81.5772 257.604 124.724 249.386C153.488 244.249 173.007 221.135 181.226 194.938C176.603 222.162 159.653 247.844 131.915 256.577C91.8504 269.418 50.2444 253.495 19.5809 228.299C8.88571 219.395 3.33942 215.594 3.33942 215.594L8.89337 236.322C8.89337 236.322 14.8761 239.485 26.6265 247.147C68.2218 274.554 131.401 285.341 167.357 242.707C179.171 228.839 184.307 211.375 185.335 193.91C186.876 213.943 183.28 236.03 169.925 251.953C136.024 290.477 79.5219 287.395 37.6517 267.981C25.0085 262.154 18.6834 259.957 18.6834 259.957L29.4131 278.542C29.4131 278.542 35.9763 279.992 49.314 284.346C93.9049 298.696 149.893 296.128 180.198 252.467C192.526 233.976 193.553 211.888 188.93 191.856C195.607 210.347 197.662 231.407 189.444 249.899C168.897 296.641 111.369 309.482 65.3258 301.604C51.6036 299.253 44.9868 298.838 44.9868 298.838L60.1608 314.012C60.1608 314.012 66.7899 313.638 80.7984 314.388C130.887 317.701 192.012 294.586 201.258 238.598C203.826 221.648 200.23 204.183 192.012 189.287C207.422 210.861 213.586 239.625 201.772 264.281C183.28 303.319 141.161 323.351 100.7 326.918C86.8402 328.199 80.4577 329.587 80.4577 329.587L99.0423 340.317C99.0423 340.317 105.207 338.171 118.929 335.273C151.434 327.974 181.226 312.564 201.772 283.8C223.86 252.467 220.264 211.375 194.068 185.178C217.182 204.183 230.537 235.516 220.777 265.309C209.477 303.319 176.089 328.488 141.369 342.244C128.318 347.063 122.679 350.107 122.679 350.107L143.407 355.661C143.407 355.661 148.623 351.96 161.121 345.617C190.472 330.543 215.641 306.914 227.455 275.581C241.323 240.652 227.455 199.56 195.094 180.555C212.045 189.8 228.482 202.128 235.673 220.106C255.192 268.39 223.859 318.728 184.587 346.573C173.232 354.594 168.77 359 168.77 359H190.23C190.23 359 194.107 354.093 204.535 344.746C237.728 315.646 260.842 268.904 246.46 223.702C238.755 200.588 218.209 184.151 195.608 176.446C217.182 182.096 239.269 191.856 250.569 212.915C273.17 255.548 255.705 305.373 227.452 339.627C218.561 350.297 215.593 355.661 215.593 355.661L236.321 350.107C236.321 350.107 238.602 344.436 246.257 332.726C274.197 290.991 284.984 227.298 242.35 190.828C228.995 179.014 211.531 172.85 193.553 172.337C223.858 170.282 255.192 182.61 269.574 211.375C287.552 246.303 282.415 287.396 267.087 321.877C261.256 334.466 259.957 340.316 259.957 340.316L278.542 329.586C278.542 329.586 279.116 323.634 283.487 310.361C295.256 273.013 296.284 229.352 270.088 195.451C251.083 170.282 220.264 162.064 191.498 168.741C209.477 163.09 230.022 161.036 248.001 168.227C296.284 188.26 309.125 247.33 300.83 294.502C298.444 308.154 298.838 314.012 298.838 314.012L314.012 298.838C314.012 298.838 312.917 293.075 313.718 279.138C314.776 247.843 309.125 215.997 289.093 189.287C265.465 155.899 222.317 147.167 188.416 165.659C206.395 154.872 227.968 146.654 249.541 151.79C298.338 164.118 321.966 213.429 326.396 259.328C327.609 273.119 329.586 278.541 329.586 278.541L340.316 259.957C340.316 259.957 337.711 254.799 334.894 241.142C325.562 198.018 299.366 154.358 252.11 143.571C227.455 137.92 203.313 147.68 185.335 163.603C202.799 142.03 230.536 129.702 258.788 136.38C300.907 146.139 327.617 181.068 342.04 218.706C346.763 231.705 350.107 236.32 350.107 236.32L355.661 215.592C355.661 215.592 351.796 211.378 345.559 198.919C325.562 158.981 286.011 123.025 238.241 126.106C214.613 127.647 193.553 143.057 180.712 162.576C187.903 148.194 198.177 135.352 212.559 127.134C261.87 98.8833 318.885 133.298 346.668 175.369C354.577 186.701 359 190.229 359 190.229V168.769V168.771Z'
						fill='url(#paint0_radial_4135_3848_red)'
						style={{ mixBlendMode: 'screen' }}
					/>
				</g>
				<defs>
					<radialGradient
						id='paint0_radial_4135_3848_red'
						cx='0'
						cy='0'
						r='1'
						gradientUnits='userSpaceOnUse'
						gradientTransform='translate(179.5 179.5) scale(151.145 151.146)'
					>
						<stop stop-color='#FB4039' />
						<stop
							offset='1'
							stop-color='#27202A'
							stop-opacity='0'
						/>
					</radialGradient>
				</defs>
			</svg>
		)
	}
	return (
		<svg
			width='359'
			height='359'
			viewBox='0 0 359 359'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<g opacity='0.15'>
				<path
					d='M359 168.771C359 168.771 354.183 165.741 344.95 155.32C330.7 139.463 312.721 126.622 293.203 116.863C249.542 95.2896 189.445 112.754 176.603 162.578C179.171 146.655 186.363 131.759 197.663 120.458C237.728 80.3935 301.934 98.8848 339.922 132.253C350.482 141.155 355.661 143.407 355.661 143.407L350.107 122.679C350.107 122.679 344.668 120.985 333.063 113.305C291.148 85.0171 226.941 73.2032 189.959 116.864C178.658 130.219 172.494 146.656 172.494 164.12C170.44 136.383 180.713 107.618 205.881 92.209C242.351 69.608 285.498 76.2861 322.218 92.2994C334.714 98.1703 340.317 99.0441 340.317 99.0441L329.587 80.4594C329.587 80.4594 323.86 80.1738 310.668 75.7531C265.466 60.3616 207.423 62.9299 178.145 107.618C166.331 125.596 165.303 146.656 168.899 166.175C162.736 150.765 161.708 134.328 166.331 118.405C180.713 63.9575 245.433 48.5484 294.726 58.2565C308.314 60.697 314.013 60.1625 314.013 60.1625L298.839 44.9884C298.839 44.9884 293.147 46.1171 279.258 45.2595C242.351 42.8979 202.799 53.1704 176.089 81.4219C153.488 105.564 151.434 140.492 165.816 168.743C145.783 142.033 145.27 104.023 167.357 77.3129C190.471 48.5484 224.886 36.2206 259.298 32.4884C273.059 31.3298 278.542 29.4147 278.542 29.4147L259.957 18.685C259.957 18.685 254.61 21.1798 240.968 23.9472C204.853 32.1109 168.897 51.1159 150.919 85.5309C135.509 114.809 142.701 149.224 163.761 172.852C129.86 147.17 126.264 98.8856 151.947 64.4713C169.411 41.3565 192.525 26.4612 218.357 16.7959C231.354 12.1103 236.321 8.89492 236.321 8.89492L215.593 3.34096C215.593 3.34096 210.891 7.09924 198.424 13.3118C159.652 33.1385 125.237 70.1218 125.751 115.837C126.265 141.006 142.701 162.58 162.22 176.962C115.991 157.957 104.177 100.428 130.887 58.8217C142.701 39.8166 157.597 25.4343 174.719 12.2864C186.066 4.38314 190.23 0 190.23 0H168.77C168.77 0 164.998 4.86403 154.56 14.1051C115.992 47.5192 87.2276 110.185 124.21 155.387C134.483 167.715 147.324 176.447 162.734 181.069C138.078 176.96 113.423 161.55 104.177 137.409C88.2545 96.3165 104.691 51.1152 131.4 19.2815C140.316 8.69736 143.406 3.33942 143.406 3.33942L122.678 8.89339C122.678 8.89339 120.096 14.6396 112.408 26.2843C86.7138 64.4698 75.4129 118.404 106.233 158.468C120.101 175.933 142.188 184.151 163.762 185.178C124.724 190.829 88.2545 164.632 80.0357 124.567C73.3584 93.7482 79.5219 64.4698 91.3971 37.3049C97.2643 24.7551 99.0415 18.6835 99.0415 18.6835L80.4569 29.4131C80.4569 29.4131 79.2899 35.7459 74.8861 49.0025C63.0852 85.5294 62.0576 127.136 86.1992 161.037C105.204 187.747 137.051 194.938 165.815 189.287C133.969 201.101 97.4993 193.91 76.4398 163.605C55.3803 133.813 52.2981 98.371 57.473 65.0985C59.8813 51.4406 60.1608 44.9869 60.1608 44.9869L44.9868 60.1609C44.9868 60.1609 45.3896 66.7142 44.5802 80.6753C40.998 131.245 64.1121 191.856 119.587 201.102C136.537 203.67 153.488 199.561 168.897 192.37C156.056 201.102 141.674 206.753 126.265 207.78C70.2763 209.835 35.8614 151.278 31.9599 100.727C30.7347 86.8978 29.4131 80.4586 29.4131 80.4586L18.6834 99.0433C18.6834 99.0433 20.7142 105.395 23.5635 119.101C32.78 162.579 60.5169 206.753 108.8 215.485C132.942 220.108 155.543 208.294 173.007 193.912C161.193 207.78 146.297 219.594 127.806 222.676C74.3861 231.922 32.78 186.721 16.5891 141.716C11.8086 128.667 8.89337 122.679 8.89337 122.679L3.33942 143.407C3.33942 143.407 6.93383 149.109 13.252 161.614C34.3215 204.698 80.0365 243.222 131.402 230.381C150.921 225.758 165.817 210.862 177.117 194.939C168.385 212.404 155.03 229.868 136.025 236.546C88.2553 254.01 39.4581 223.704 12.3813 185.235C4.36858 173.865 0 168.771 0 168.771V190.23C0 190.23 4.95667 194.847 14.3118 205.291C42.0257 235.517 81.5772 257.604 124.724 249.386C153.488 244.249 173.007 221.135 181.226 194.938C176.603 222.162 159.653 247.844 131.915 256.577C91.8504 269.418 50.2444 253.495 19.5809 228.299C8.88571 219.395 3.33942 215.594 3.33942 215.594L8.89337 236.322C8.89337 236.322 14.8761 239.485 26.6265 247.147C68.2218 274.554 131.401 285.341 167.357 242.707C179.171 228.839 184.307 211.375 185.335 193.91C186.876 213.943 183.28 236.03 169.925 251.953C136.024 290.477 79.5219 287.395 37.6517 267.981C25.0085 262.154 18.6834 259.957 18.6834 259.957L29.4131 278.542C29.4131 278.542 35.9763 279.992 49.314 284.346C93.9049 298.696 149.893 296.128 180.198 252.467C192.526 233.976 193.553 211.888 188.93 191.856C195.607 210.347 197.662 231.407 189.444 249.899C168.897 296.641 111.369 309.482 65.3258 301.604C51.6036 299.253 44.9868 298.838 44.9868 298.838L60.1608 314.012C60.1608 314.012 66.7899 313.638 80.7984 314.388C130.887 317.701 192.012 294.586 201.258 238.598C203.826 221.648 200.23 204.183 192.012 189.287C207.422 210.861 213.586 239.625 201.772 264.281C183.28 303.319 141.161 323.351 100.7 326.918C86.8402 328.199 80.4577 329.587 80.4577 329.587L99.0423 340.317C99.0423 340.317 105.207 338.171 118.929 335.273C151.434 327.974 181.226 312.564 201.772 283.8C223.86 252.467 220.264 211.375 194.068 185.178C217.182 204.183 230.537 235.516 220.777 265.309C209.477 303.319 176.089 328.488 141.369 342.244C128.318 347.063 122.679 350.107 122.679 350.107L143.407 355.661C143.407 355.661 148.623 351.96 161.121 345.617C190.472 330.543 215.641 306.914 227.455 275.581C241.323 240.652 227.455 199.56 195.094 180.555C212.045 189.8 228.482 202.128 235.673 220.106C255.192 268.39 223.859 318.728 184.587 346.573C173.232 354.594 168.77 359 168.77 359H190.23C190.23 359 194.107 354.093 204.535 344.746C237.728 315.646 260.842 268.904 246.46 223.702C238.755 200.588 218.209 184.151 195.608 176.446C217.182 182.096 239.269 191.856 250.569 212.915C273.17 255.548 255.705 305.373 227.452 339.627C218.561 350.297 215.593 355.661 215.593 355.661L236.321 350.107C236.321 350.107 238.602 344.436 246.257 332.726C274.197 290.991 284.984 227.298 242.35 190.828C228.995 179.014 211.531 172.85 193.553 172.337C223.858 170.282 255.192 182.61 269.574 211.375C287.552 246.303 282.415 287.396 267.087 321.877C261.256 334.466 259.957 340.316 259.957 340.316L278.542 329.586C278.542 329.586 279.116 323.634 283.487 310.361C295.256 273.013 296.284 229.352 270.088 195.451C251.083 170.282 220.264 162.064 191.498 168.741C209.477 163.09 230.022 161.036 248.001 168.227C296.284 188.26 309.125 247.33 300.83 294.502C298.444 308.154 298.838 314.012 298.838 314.012L314.012 298.838C314.012 298.838 312.917 293.075 313.718 279.138C314.776 247.843 309.125 215.997 289.093 189.287C265.465 155.899 222.317 147.167 188.416 165.659C206.395 154.872 227.968 146.654 249.541 151.79C298.338 164.118 321.966 213.429 326.396 259.328C327.609 273.119 329.586 278.541 329.586 278.541L340.316 259.957C340.316 259.957 337.711 254.799 334.894 241.142C325.562 198.018 299.366 154.358 252.11 143.571C227.455 137.92 203.313 147.68 185.335 163.603C202.799 142.03 230.536 129.702 258.788 136.38C300.907 146.139 327.617 181.068 342.04 218.706C346.763 231.705 350.107 236.32 350.107 236.32L355.661 215.592C355.661 215.592 351.796 211.378 345.559 198.919C325.562 158.981 286.011 123.025 238.241 126.106C214.613 127.647 193.553 143.057 180.712 162.576C187.903 148.194 198.177 135.352 212.559 127.134C261.87 98.8833 318.885 133.298 346.668 175.369C354.577 186.701 359 190.229 359 190.229V168.769V168.771Z'
					fill='url(#paint0_radial_4135_3848)'
					style={{ mixBlendMode: 'screen' }}
				/>
			</g>
			<defs>
				<radialGradient
					id='paint0_radial_4135_3848'
					cx='0'
					cy='0'
					r='1'
					gradientUnits='userSpaceOnUse'
					gradientTransform='translate(179.5 179.5) scale(151.145 151.146)'
				>
					<stop stop-color='#02E9A4' />
					<stop
						offset='1'
						stop-color='#1BD59D'
						stop-opacity='0'
					/>
				</radialGradient>
			</defs>
		</svg>
	)
}

interface IPlayersListProps {
	onStartBattle: () => void
}

const PlayersList = ({ onStartBattle }: IPlayersListProps) => {
	const t = useTranslations()
	const params = useSearchParams()

	const pathname = usePathname()
	const [emojiStatus, setEmojiStatus] = useState<number>(0)
	const { openModal } = useModal()
	const openModalRef = useRef(openModal)

	useEffect(() => {
		openModalRef.current = openModal
	}, [openModal])

	useEffect(() => {
		if (pathname.includes('/finish'))
			openModalRef.current(
				<BattleOver isDraw={Boolean(params.get('is-draw'))} />,
				undefined,
				undefined,
				undefined,
				{
					body: 'lg:w-full',
					modal: 'relative w-full lg:h-full lg:w-screen h-screen flex lg:items-start justify-center items-center'
				},
				false,
				true
			)
	}, [params, pathname])

	return (
		<div className='grid auto-rows-auto grid-cols-[repeat(auto-fill,272px)] justify-center gap-5 3sm:grid-cols-1'>
			{pathname.includes('/finish') ? (
				<>
					{/* Winner */}
					<div>
						<div className={clsx(cls.player_card_bg, '3sm:!h-[145px] 3sm:!w-full')}>
							<div
								className={clsx(
									cls.player_card_bg_inner,
									'relative flex flex-col items-center justify-end overflow-hidden py-[25px]'
								)}
							>
								<div className='!absolute -top-[24px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-[6px] 3sm:-left-6 3sm:translate-x-0'>
									<WinnerBand />
									<span className='absolute left-1/2 -translate-x-1/2 text-[16px] font-bold leading-4 text-[#022F22]'>
										{t('case_battles.winner').toUpperCase()}
									</span>
								</div>
								<BgSnakeGreen className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 3sm:hidden' />
								<div className='absolute hidden 3sm:-left-[125px] 3sm:-top-[125px] 3sm:block'>
									<CircularBg />
								</div>
								<div
									className='absolute bottom-0 left-0 right-0 top-0'
									style={{
										background: 'linear-gradient(180deg, rgba(25, 31, 45, 0) 50%, rgba(18, 176, 128, 0.1) 100%)'
									}}
								></div>
								<div
									className='absolute bottom-0 left-0 right-0 top-0 rotate-180'
									style={{
										background: 'linear-gradient(180deg, rgba(25, 31, 45, 0) 50%, rgba(18, 176, 128, 0.1) 100%)'
									}}
								></div>
								<div className='mb-6 flex items-center justify-center 3sm:absolute 3sm:right-4 3sm:top-4'>
									<div className={clsx(cls.winning, 'ml-2 h-[38px] w-[27px]')}>
										<div
											className={clsx(
												cls.winning_inner,
												'flex items-center justify-center text-[16px] font-medium leading-4 text-white'
											)}
										>
											+
										</div>
									</div>
									<div className={clsx(cls.winning, 'ml-[5px] h-[50px] w-[35px] text-[24px] font-medium leading-4')}>
										<div className={clsx(cls.winning_inner, 'flex items-center justify-center text-[#24FDBC]')}>$</div>
									</div>
									<div
										className={clsx(
											cls.winning,
											'ml-[3px] h-[50px] w-[35px] text-[24px] font-medium leading-4 text-white'
										)}
									>
										<div className={clsx(cls.winning_inner, 'flex items-center justify-center')}>5</div>
									</div>
									<div
										className={clsx(
											cls.winning,
											'ml-[3px] h-[50px] w-[35px] text-[24px] font-medium leading-4 text-white'
										)}
									>
										<div className={clsx(cls.winning_inner, 'flex items-center justify-center')}>0</div>
									</div>
									<div
										className={clsx(
											cls.winning,
											'ml-[3px] h-[50px] w-[35px] text-[24px] font-medium leading-4 text-white'
										)}
									>
										<div className={clsx(cls.winning_inner, 'flex items-center justify-center')}>0</div>
									</div>
								</div>
								<div className={clsx(cls.winning_price, '3sm:absolute 3sm:bottom-4 3sm:left-4')}>
									<div className={cls.winning_price_inner}>$ 1050.00</div>
								</div>
								<p className='mt-2 text-[12px] font-bold leading-4 text-[#237C67] 3sm:absolute 3sm:left-6 3sm:top-[60px]'>
									{t('case_battles.total_winnings').toUpperCase()}
								</p>
								<div className='hidden items-center gap-2 3sm:absolute 3sm:bottom-4 3sm:right-4 3sm:flex'>
									<SmallAvatar icon='/images/avatars/2.jpg' />
									<span className='text-[14px] font-bold leading-4 text-white'>{players[0].name}</span>
								</div>
							</div>
						</div>
						<div className={clsx(cls.player_title, 'mt-5 h-[66px] w-[272px] 3sm:hidden')}>
							<div className={clsx(cls.player_title_inner, 'relative flex items-center overflow-hidden px-3 py-[9px]')}>
								<div className='absolute left-0 top-0 z-10'>
									<BgBubble />
								</div>
								<SmallAvatar icon='/images/avatars/2.jpg' />
								<span className='ml-4 text-[14px] font-bold leading-4 text-white'>{players[0].name}</span>
							</div>
						</div>
					</div>
					{/* Losser */}
					{Array.from(new Array(3)).map((_, index) => (
						<div key={index}>
							<div className={clsx(cls.player_card_bg, '3sm:!h-[145px] 3sm:!w-full')}>
								<div
									className={clsx(
										cls.player_card_bg_inner,
										'relative flex flex-col items-center justify-center overflow-hidden py-[25px]'
									)}
								>
									<div className='!absolute -top-[24px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-[6px] 3sm:-left-6 3sm:translate-x-0'>
										<LossBand />
										<span className='absolute left-1/2 -translate-x-1/2 text-[16px] font-bold leading-4 text-[#480202]'>
											{t('case_battles.loss').toUpperCase()}
										</span>
									</div>
									<BgSnakeRed className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 3sm:hidden' />
									<div className='absolute hidden 3sm:-left-[125px] 3sm:-top-[125px] 3sm:block'>
										<CircularBg red={true} />
									</div>
									<div
										className='absolute bottom-0 left-0 right-0 top-0'
										style={{
											background: 'linear-gradient(180deg, rgba(25, 31, 45, 0) 50%, rgba(251, 73, 73, 0.1) 100%)'
										}}
									></div>
									<div
										className='absolute bottom-0 left-0 right-0 top-0 rotate-180'
										style={{
											background: 'linear-gradient(180deg, rgba(25, 31, 45, 0) 50%, rgba(251, 73, 73, 0.1) 100%)'
										}}
									></div>
									<div className={clsx(cls.lossed, '3sm:!absolute 3sm:right-4 3sm:top-4')}>
										<div className={cls.lossed_inner}>{t('case_battles.lossed').toUpperCase()}</div>
									</div>
									<div className='hidden items-center gap-2 3sm:absolute 3sm:bottom-4 3sm:right-4 3sm:flex'>
										<SmallAvatar icon='/images/avatars/2.jpg' />
										<span className='text-[14px] font-bold leading-4 text-white'>{players[0].name}</span>
									</div>
								</div>
							</div>
							<div className={clsx(cls.player_title, 'mt-5 h-[66px] w-[272px] opacity-60 3sm:hidden')}>
								<div className={clsx(cls.player_title_inner, 'flex items-center px-3 py-[9px]')}>
									<SmallAvatar icon='/images/avatars/2.jpg' />
									<span className='ml-4 text-[14px] font-bold leading-4 text-white'>{players[1].name}</span>
								</div>
							</div>
						</div>
					))}
				</>
			) : pathname.includes('/round') ? (
				<>
					{/* Winner */}
					<div>
						<div className={clsx(cls.player_card_bg, '!h-[370px] 3sm:!h-[129px] 3sm:!w-full')}>
							<div
								className={clsx(
									cls.player_card_bg_inner,
									'relative flex flex-col items-center justify-start overflow-hidden py-[25px]'
								)}
							>
								<div className='!absolute -top-[24px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-[6px] 3sm:-left-6 3sm:translate-x-0'>
									<WinnerBand />
									<span className='absolute left-1/2 -translate-x-1/2 text-[16px] font-bold leading-4 text-[#022F22]'>
										{t('case_battles.winner').toUpperCase()}
									</span>
								</div>
								<div
									className='absolute bottom-0 left-0 right-0 top-0 3sm:hidden'
									style={{
										background: 'linear-gradient(180deg, rgba(25, 31, 45, 0) 50%, rgba(18, 176, 128, 0.1) 100%)'
									}}
								></div>
								<div
									className='absolute bottom-0 left-0 right-0 top-0 rotate-180 3sm:hidden'
									style={{
										background: 'linear-gradient(180deg, rgba(25, 31, 45, 0) 50%, rgba(18, 176, 128, 0.1) 100%)'
									}}
								></div>
								<div className='relative mb-2 mt-10 3sm:absolute 3sm:bottom-1 3sm:left-8'>
									<svg
										width='78'
										height='90'
										viewBox='0 0 78 90'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className='3sm:h-[54px] 3sm:w-[54px]'
									>
										<path
											d='M0.528858 22.7887L39 0.57735L77.4711 22.7887V67.2113L39 89.4226L0.528858 67.2113V22.7887Z'
											fill='url(#paint0_linear_4157_12272)'
											stroke='url(#paint1_linear_4157_12272)'
										/>
										<defs>
											<linearGradient
												id='paint0_linear_4157_12272'
												x1='39'
												y1='0'
												x2='39'
												y2='90'
												gradientUnits='userSpaceOnUse'
											>
												<stop stop-color='#293247' />
												<stop
													offset='1'
													stop-color='#191F2D'
													stop-opacity='0.25'
												/>
											</linearGradient>
											<linearGradient
												id='paint1_linear_4157_12272'
												x1='39'
												y1='0'
												x2='39'
												y2='90'
												gradientUnits='userSpaceOnUse'
											>
												<stop stop-color='#1F2534' />
												<stop
													offset='1'
													stop-color='#1F2534'
													stop-opacity='0.25'
												/>
											</linearGradient>
										</defs>
									</svg>
									<div
										className='absolute left-2 top-2 h-[90px] w-[90px] 3sm:top-1 3sm:h-[60px] 3sm:w-[60px]'
										style={{
											background:
												'radial-gradient(50% 50% at 50% 50%, rgba(173, 0, 255, 0.45) 0%, rgba(18, 23, 34, 0) 100%)'
										}}
									></div>
									<Image
										className='absolute -left-3 top-0 h-[81px] w-[110px] max-w-none 3sm:left-0 3sm:top-1 3sm:h-[40px] 3sm:w-[54px]'
										src='/images/case/skin-3.png'
										width={110}
										height={81}
										alt='icon'
									/>
								</div>
								<p className='mb-[10px] text-[14px] font-medium leading-4 text-white 3sm:absolute 3sm:left-[90px] 3sm:top-[70px] 3sm:w-[80px] 3sm:text-[12px]'>
									AK-47 | Fire Serpent
								</p>
								<div
									className='mb-[18px] h-[32px] w-[84px] 3sm:hidden'
									style={{
										padding: '1px',
										background:
											'linear-gradient(270deg, rgba(39, 49, 69, 0.65) 0%, rgba(39, 49, 69, 0.15) 50%, rgba(39, 49, 69, 0.65) 100%)',
										clipPath:
											'polygon(8px 0px, calc(100% - 8px) 0px, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0px 50%)'
									}}
								>
									<div
										className='flex h-full w-full items-center justify-center text-[12px] font-bold leading-4 text-[#60719A]'
										style={{
											background: 'linear-gradient(270deg, #1A222F 0%, #161C28 48.5%, #1A222F 100%)',
											clipPath:
												'polygon(8px 0px, calc(100% - 8px) 0px, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0px 50%)'
										}}
									>
										{t('case_battles.round').toUpperCase()} 1
									</div>
								</div>
								<div className='mb-[14px] flex items-center justify-center gap-[3px] 3sm:absolute 3sm:right-4 3sm:top-4'>
									<div
										className={clsx(
											cls.winning,
											'h-[38px] w-[27px] text-[24px] font-medium leading-4 3sm:h-[27px] 3sm:w-[19px]'
										)}
									>
										<div className={clsx(cls.winning_inner, 'flex items-center justify-center 3sm:text-[14px]')}>$</div>
									</div>
									<div
										className={clsx(
											cls.winning,
											'h-[38px] w-[27px] text-[24px] font-medium leading-4 3sm:h-[27px] 3sm:w-[19px]'
										)}
									>
										<div
											className={clsx(
												cls.winning_inner,
												'flex items-center justify-center text-[#24FDBC] 3sm:text-[14px]'
											)}
										>
											5
										</div>
									</div>
									<div
										className={clsx(
											cls.winning,
											'h-[38px] w-[27px] text-[24px] font-medium leading-4 3sm:h-[27px] 3sm:w-[19px]'
										)}
									>
										<div
											className={clsx(
												cls.winning_inner,
												'flex items-center justify-center text-[#24FDBC] 3sm:text-[14px]'
											)}
										>
											5
										</div>
									</div>
									<div
										className={clsx(
											cls.winning,
											'h-[38px] w-[27px] text-[24px] font-medium leading-4 3sm:h-[27px] 3sm:w-[19px]'
										)}
									>
										<div
											className={clsx(
												cls.winning_inner,
												'flex items-center justify-center text-[#24FDBC] 3sm:text-[14px]'
											)}
										>
											5
										</div>
									</div>
									<p className='translate-y-[10px] text-[#24FDBC]'>.</p>
									<div
										className={clsx(
											cls.winning,
											'h-[38px] w-[27px] text-[24px] font-medium leading-4 3sm:h-[27px] 3sm:w-[19px]'
										)}
									>
										<div
											className={clsx(
												cls.winning_inner,
												'flex items-center justify-center text-[#24FDBC] 3sm:text-[14px]'
											)}
										>
											5
										</div>
									</div>
									<div
										className={clsx(
											cls.winning,
											'h-[38px] w-[27px] text-[24px] font-medium leading-4 3sm:h-[27px] 3sm:w-[19px]'
										)}
									>
										<div
											className={clsx(
												cls.winning_inner,
												'flex items-center justify-center text-[#24FDBC] 3sm:text-[14px]'
											)}
										>
											5
										</div>
									</div>
									<div
										className={clsx(
											cls.winning,
											'h-[38px] w-[27px] text-[24px] font-medium leading-4 3sm:h-[27px] 3sm:w-[19px]'
										)}
									>
										<div
											className={clsx(
												cls.winning_inner,
												'flex items-center justify-center text-[#24FDBC] 3sm:text-[14px]'
											)}
										>
											5
										</div>
									</div>
									<div
										className={clsx(
											cls.winning,
											'h-[38px] w-[27px] text-[24px] font-medium leading-4 3sm:h-[27px] 3sm:w-[19px]'
										)}
									>
										<div
											className={clsx(
												cls.winning_inner,
												'flex items-center justify-center text-[#24FDBC] 3sm:text-[14px]'
											)}
										>
											5
										</div>
									</div>
								</div>
								<p className='mt-2 text-[12px] font-bold leading-4 text-[#237C67] 3sm:hidden'>
									{t('case_battles.total_winnings').toUpperCase()}
								</p>
								<div className='absolute bottom-4 right-4 hidden items-center gap-2 3sm:flex'>
									<SmallAvatar icon='/images/avatars/2.jpg' />
									<span className='text-[14px] font-bold leading-4 text-white'>Djorgick</span>
								</div>
							</div>
						</div>
						<div className={clsx(cls.player_title, 'mt-5 h-[66px] w-[272px] 3sm:hidden')}>
							<div className={clsx(cls.player_title_inner, 'relative flex items-center overflow-hidden px-3 py-[9px]')}>
								<SmallAvatar icon='/images/avatars/2.jpg' />
								<span className='ml-4 text-[14px] font-bold leading-4 text-white'>{players[0].name}</span>
							</div>
						</div>
					</div>
					{/* Losser */}
					<div className='3sm:hidden'>
						<div className={clsx(cls.player_card_bg, '!h-[370px]')}>
							<div
								className={clsx(
									cls.player_card_bg_inner,
									'relative flex flex-col items-center justify-start overflow-hidden py-[25px]'
								)}
							>
								<div className='relative mb-2 mt-12'>
									<svg
										width='78'
										height='90'
										viewBox='0 0 78 90'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M0.528858 22.7887L39 0.57735L77.4711 22.7887V67.2113L39 89.4226L0.528858 67.2113V22.7887Z'
											fill='url(#paint0_linear_4157_12272)'
											stroke='url(#paint1_linear_4157_12272)'
										/>
										<defs>
											<linearGradient
												id='paint0_linear_4157_12272'
												x1='39'
												y1='0'
												x2='39'
												y2='90'
												gradientUnits='userSpaceOnUse'
											>
												<stop stop-color='#293247' />
												<stop
													offset='1'
													stop-color='#191F2D'
													stop-opacity='0.25'
												/>
											</linearGradient>
											<linearGradient
												id='paint1_linear_4157_12272'
												x1='39'
												y1='0'
												x2='39'
												y2='90'
												gradientUnits='userSpaceOnUse'
											>
												<stop stop-color='#1F2534' />
												<stop
													offset='1'
													stop-color='#1F2534'
													stop-opacity='0.25'
												/>
											</linearGradient>
										</defs>
									</svg>
									<div
										className='absolute left-2 top-2 h-[90px] w-[90px]'
										style={{
											background:
												'radial-gradient(50% 50% at 50% 50%, rgba(173, 0, 255, 0.45) 0%, rgba(18, 23, 34, 0) 100%)'
										}}
									></div>
									<Image
										className='absolute -left-3 top-0 h-[81px] w-[110px] max-w-none'
										src='/images/case/skin-3.png'
										width={110}
										height={81}
										alt='icon'
									/>
								</div>
								<p className='mb-[10px] text-[14px] font-medium leading-4 text-white'>AK-47 | Fire Serpent</p>
								<div
									className='mb-[18px] h-[32px] w-[84px]'
									style={{
										padding: '1px',
										background:
											'linear-gradient(270deg, rgba(39, 49, 69, 0.65) 0%, rgba(39, 49, 69, 0.15) 50%, rgba(39, 49, 69, 0.65) 100%)',
										clipPath:
											'polygon(8px 0px, calc(100% - 8px) 0px, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0px 50%)'
									}}
								>
									<div
										className='flex h-full w-full items-center justify-center text-[12px] font-bold leading-4 text-[#60719A]'
										style={{
											background: 'linear-gradient(270deg, #1A222F 0%, #161C28 48.5%, #1A222F 100%)',
											clipPath:
												'polygon(8px 0px, calc(100% - 8px) 0px, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0px 50%)'
										}}
									>
										{t('case_battles.round').toUpperCase()} 1
									</div>
								</div>
								<div className='mb-6 flex items-center justify-center'>
									<div className={clsx(cls.winning, 'ml-2 h-[38px] w-[27px]')}>
										<div
											className={clsx(
												cls.winning_inner,
												'flex items-center justify-center text-[16px] font-medium leading-4 text-white'
											)}
										>
											+
										</div>
									</div>
									<div className={clsx(cls.winning, 'ml-[5px] h-[50px] w-[35px] text-[24px] font-medium leading-4')}>
										<div className={clsx(cls.winning_inner, 'flex items-center justify-center text-[#24FDBC]')}>$</div>
									</div>
									<div
										className={clsx(
											cls.winning,
											'ml-[3px] h-[50px] w-[35px] text-[24px] font-medium leading-4 text-white'
										)}
									>
										<div className={clsx(cls.winning_inner, 'flex items-center justify-center')}>5</div>
									</div>
									<div
										className={clsx(
											cls.winning,
											'ml-[3px] h-[50px] w-[35px] text-[24px] font-medium leading-4 text-white'
										)}
									>
										<div className={clsx(cls.winning_inner, 'flex items-center justify-center')}>0</div>
									</div>
									<div
										className={clsx(
											cls.winning,
											'ml-[3px] h-[50px] w-[35px] text-[24px] font-medium leading-4 text-white'
										)}
									>
										<div className={clsx(cls.winning_inner, 'flex items-center justify-center')}>0</div>
									</div>
								</div>
							</div>
						</div>
						<div className={clsx(cls.player_title, 'mt-5 h-[66px] w-[272px]')}>
							<div className={clsx(cls.player_title_inner, 'relative flex items-center overflow-hidden px-3 py-[9px]')}>
								<SmallAvatar icon='/images/avatars/2.jpg' />
								<span className='ml-4 text-[14px] font-bold leading-4 text-white'>{players[0].name}</span>
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					{/* Creator */}
					<div>
						<div className={clsx(cls.player_card_bg, '3sm:!h-[145px] 3sm:!w-full')}>
							<div
								className={clsx(
									cls.player_card_bg_inner,
									'relative flex flex-col items-center justify-end gap-4 overflow-hidden py-[20px] 3sm:items-end 3sm:pr-5'
								)}
							>
								<div className='absolute left-[12px] top-1/2 z-10 flex h-[210px] w-[30px] -translate-y-1/2 flex-col overflow-hidden rounded-[100px] bg-[#0B0E15] 3sm:bottom-5 3sm:left-5 3sm:top-auto 3sm:h-[30px] 3sm:w-[120px] 3sm:translate-y-0 3sm:flex-row'>
									{Array.from(new Array(7)).map((_, index) => (
										<Button
											key={index}
											onPress={() => setEmojiStatus(index)}
											classNames={{
												base: `w-[30px] h-[30px] rounded-3xl flex-shrink-0 ${emojiStatus === index ? 'bg-[#0F141E]' : ''}`
											}}
										>
											<EmojiHappy
												className={clsx('h-4 w-4', emojiStatus === index ? 'fill-[#60719A]' : 'fill-[#262E42]')}
											/>
										</Button>
									))}
								</div>
								<Button
									classNames={{
										base: '!absolute 3sm:hidden left-1/2 -top-[2px] z-10 flex -translate-x-1/2 items-center gap-[6px] w-[106px] h-[33px]'
									}}
								>
									<svg
										width='106'
										height='32'
										viewBox='0 0 106 32'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<g filter='url(#filter0_b_4135_3850)'>
											<path
												d='M10 -1H96H106L96.8606 29.16C96.3495 30.8466 94.7948 32 93.0325 32H12.9675C11.2052 32 9.65049 30.8466 9.1394 29.16L0 -1H10Z'
												fill='#31252E'
												fill-opacity='1'
											/>
											<path
												d='M10 -0.5H96H105.326L96.3821 29.015C95.9349 30.4908 94.5745 31.5 93.0325 31.5H12.9675C11.4255 31.5 10.0651 30.4908 9.61792 29.015L0.673968 -0.5H10Z'
												stroke='#FD5454'
												stroke-opacity='0.25'
											/>
										</g>
										<defs>
											<filter
												id='filter0_b_4135_3850'
												x='-45'
												y='-46'
												width='196'
												height='123'
												filterUnits='userSpaceOnUse'
												color-interpolation-filters='sRGB'
											>
												<feFlood
													flood-opacity='1'
													result='BackgroundImageFix'
												/>
												<feGaussianBlur
													in='BackgroundImageFix'
													stdDeviation='22.5'
												/>
												<feComposite
													in2='SourceAlpha'
													operator='in'
													result='effect1_backgroundBlur_4135_3850'
												/>
												<feBlend
													mode='normal'
													in='SourceGraphic'
													in2='effect1_backgroundBlur_4135_3850'
													result='shape'
												/>
											</filter>
											<linearGradient
												id='paint0_linear_4135_3850'
												x1='136'
												y1='-30'
												x2='0'
												y2='-30'
												gradientUnits='userSpaceOnUse'
											>
												<stop stop-color='#F75151' />
												<stop
													offset='1'
													stop-color='#B21313'
												/>
											</linearGradient>
										</defs>
									</svg>
									<div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-[6px]'>
										<svg
											width='14'
											height='14'
											viewBox='0 0 14 14'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<g clip-path='url(#clip0_4135_3853)'>
												<path
													d='M14 8.75067C14 9.11059 13.86 9.44892 13.6045 9.70384L12.3958 10.9131C12.2821 11.0268 12.1327 11.084 11.9834 11.084C11.8341 11.084 11.6847 11.0268 11.571 10.9131C11.3429 10.685 11.3429 10.3163 11.571 10.0883L12.3247 9.334H8.75C8.42742 9.334 8.16667 9.07325 8.16667 8.75067C8.16667 8.42809 8.42742 8.16734 8.75 8.16734H12.3247L11.571 7.41309C11.3429 7.185 11.3429 6.81634 11.571 6.58825C11.7991 6.36017 12.1677 6.36017 12.3958 6.58825L13.6051 7.79809C13.86 8.05242 14 8.39075 14 8.75067ZM8.16667 6.41734V3.50067C8.16667 2.85725 7.64342 2.334 7 2.334V12.8334H7.58333C7.90533 12.8334 8.16667 12.5721 8.16667 12.2501V11.0834C8.16667 10.7608 8.42742 10.5001 8.75 10.5001C9.07258 10.5001 9.33333 10.7608 9.33333 11.0834V12.2501C9.33333 13.2149 8.54817 14.0001 7.58333 14.0001H1.75C0.785167 14.0001 0 13.2149 0 12.2501V3.27959C0 1.89417 0.985833 0.691337 2.34442 0.419504L4.20933 0.0467538C4.89825 -0.0909128 5.60408 0.0852538 6.14658 0.530337C6.36533 0.70942 6.5345 0.92992 6.67275 1.16734H7C8.28683 1.16734 9.33333 2.21384 9.33333 3.50067V6.41734C9.33333 6.73992 9.07258 7.00067 8.75 7.00067C8.42742 7.00067 8.16667 6.73992 8.16667 6.41734ZM5.25 7.29234C5.25 6.80934 4.858 6.41734 4.375 6.41734C3.892 6.41734 3.5 6.80934 3.5 7.29234C3.5 7.77534 3.892 8.16734 4.375 8.16734C4.858 8.16734 5.25 7.77534 5.25 7.29234Z'
													fill='#FF4343'
												/>
											</g>
											<defs>
												<clipPath id='clip0_4135_3853'>
													<rect
														width='14'
														height='14'
														fill='white'
													/>
												</clipPath>
											</defs>
										</svg>
										<span className='text-[12px] font-bold leading-4 text-[#FF4343]'>
											{t('case_battles.exit').toUpperCase()}
										</span>
									</div>
								</Button>
								<Button className='hidden 3sm:block'>
									<svg
										width='14'
										height='14'
										viewBox='0 0 14 14'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<g clip-path='url(#clip0_4135_3853)'>
											<path
												d='M14 8.75067C14 9.11059 13.86 9.44892 13.6045 9.70384L12.3958 10.9131C12.2821 11.0268 12.1327 11.084 11.9834 11.084C11.8341 11.084 11.6847 11.0268 11.571 10.9131C11.3429 10.685 11.3429 10.3163 11.571 10.0883L12.3247 9.334H8.75C8.42742 9.334 8.16667 9.07325 8.16667 8.75067C8.16667 8.42809 8.42742 8.16734 8.75 8.16734H12.3247L11.571 7.41309C11.3429 7.185 11.3429 6.81634 11.571 6.58825C11.7991 6.36017 12.1677 6.36017 12.3958 6.58825L13.6051 7.79809C13.86 8.05242 14 8.39075 14 8.75067ZM8.16667 6.41734V3.50067C8.16667 2.85725 7.64342 2.334 7 2.334V12.8334H7.58333C7.90533 12.8334 8.16667 12.5721 8.16667 12.2501V11.0834C8.16667 10.7608 8.42742 10.5001 8.75 10.5001C9.07258 10.5001 9.33333 10.7608 9.33333 11.0834V12.2501C9.33333 13.2149 8.54817 14.0001 7.58333 14.0001H1.75C0.785167 14.0001 0 13.2149 0 12.2501V3.27959C0 1.89417 0.985833 0.691337 2.34442 0.419504L4.20933 0.0467538C4.89825 -0.0909128 5.60408 0.0852538 6.14658 0.530337C6.36533 0.70942 6.5345 0.92992 6.67275 1.16734H7C8.28683 1.16734 9.33333 2.21384 9.33333 3.50067V6.41734C9.33333 6.73992 9.07258 7.00067 8.75 7.00067C8.42742 7.00067 8.16667 6.73992 8.16667 6.41734ZM5.25 7.29234C5.25 6.80934 4.858 6.41734 4.375 6.41734C3.892 6.41734 3.5 6.80934 3.5 7.29234C3.5 7.77534 3.892 8.16734 4.375 8.16734C4.858 8.16734 5.25 7.77534 5.25 7.29234Z'
												fill='#FF4343'
											/>
										</g>
										<defs>
											<clipPath id='clip0_4135_3853'>
												<rect
													width='14'
													height='14'
													fill='white'
												/>
											</clipPath>
										</defs>
									</svg>
								</Button>
								<Button
									onPress={onStartBattle}
									classNames={{
										base: clsx(cls.hexagon_btn, cls.sm, 'h-[36px] w-[120px] z-10 3sm:order-1'),
										content: clsx(cls.hexagon_btn_inner, cls.sm, '!gap-[6px]')
									}}
								>
									<span
										className='text-[12px] font-[900] leading-4 text-[#121722]'
										style={{
											textShadow: '0px 1px 0px #25FEBD73'
										}}
									>
										{t('case_battles.start_now').toUpperCase()}
									</span>
								</Button>
								<div className='flex items-center gap-[6px]'>
									<IconStartWithBots />
									<span className='text-[12px] font-medium leading-4 text-[#60719A]'>
										{t('case_battles.start_with_bots')}
									</span>
									<Switch
										color='default'
										classNames={{
											base: 'rounded-sm w-[30px]',
											wrapper: 'rounded-[6px] h-4 bg-[#252C3F] w-[30px] group-data-[selected=true]:bg-[#252C3F]',
											thumb:
												"w-[10px] h-[10px] bg-[#17E2A5] after:contet-[''] after:w-1 after:h-1 after:bg-[#12AB7D] after:rounded-sm group-data-[selected=true]:ms-3"
										}}
									/>
								</div>
								<div className='absolute -top-[90px] 3sm:-left-[125px] 3sm:-top-[125px]'>
									<ReadyIcon className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
									<CircularBg />
								</div>
							</div>
						</div>
						<div className={clsx(cls.player_title, 'mt-5 h-[66px] w-[272px] 3sm:!hidden')}>
							<div className={clsx(cls.player_title_inner, 'flex items-center px-3 py-[9px]')}>
								<SmallAvatar icon='/images/avatars/2.jpg' />
								<span className='ml-4 text-[14px] font-bold leading-4 text-white'>{players[0].name}</span>
							</div>
						</div>
					</div>
					{/* Player with offer */}
					<div>
						<div className={clsx(cls.player_card_bg, '3sm:!h-[145px] 3sm:!w-full')}>
							<div
								className={clsx(
									cls.player_card_bg_inner,
									cls.has_offer,
									'relative flex flex-col items-center justify-center gap-3 overflow-hidden py-[20px] 3sm:justify-between 3sm:py-0'
								)}
							>
								<div className='absolute right-4 top-4 3sm:hidden'>
									<Button>
										<div className='h-6 w-6 rounded-[7px] bg-[#242C3E] p-2'>
											<IconClose className='h-8 w-8 fill-[#505C7A]' />
										</div>
									</Button>
								</div>
								<div className='relative flex items-center gap-3 rounded-b-2xl border-[#141D28] 3sm:grid 3sm:w-full 3sm:grid-cols-2 3sm:gap-0 3sm:border-b-2 3sm:bg-[linear-gradient(0deg,_#191F2D_0%,_rgba(25,_31,_45,_0.25)_100%)]'>
									<div className='flex flex-col items-center 3sm:border-r-2 3sm:border-[#141D28] 3sm:py-1'>
										<SmallAvatar icon='/images/avatars/2.jpg' />
										<p className='hidden text-[10px] text-white 3sm:block'>Djorgick</p>
									</div>
									<IconCaseBattle className='h-6 w-6 fill-[#262E42] 3sm:absolute 3sm:left-1/2 3sm:-translate-x-1/2 3sm:fill-[#02E9A4]' />
									<div className='flex flex-col items-center 3sm:py-1'>
										<svg
											width='48'
											height='48'
											viewBox='0 0 48 48'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M20.25 2.74241C22.5705 1.40267 25.4295 1.40267 27.75 2.74241L40.5346 10.1236C42.8551 11.4634 44.2846 13.9393 44.2846 16.6188V31.3812C44.2846 34.0607 42.8551 36.5366 40.5346 37.8764L27.75 45.2576C25.4295 46.5973 22.5705 46.5973 20.25 45.2576L7.46539 37.8764C5.14488 36.5366 3.71539 34.0607 3.71539 31.3812L3.71539 16.6188C3.71539 13.9393 5.14488 11.4634 7.46539 10.1236L20.25 2.74241Z'
												fill='url(#paint0_linear_4146_1739)'
												stroke='url(#paint1_linear_4146_1739)'
											/>
											<g clip-path='url(#clip0_4146_1739)'>
												<path
													d='M32.75 21.5H32.3333V20.6667C32.3333 18.3692 30.4642 16.5 28.1667 16.5H24.8333V14.8333C24.8333 14.3733 24.4608 14 24 14C23.5392 14 23.1667 14.3733 23.1667 14.8333V16.5H19.8333C17.5358 16.5 15.6667 18.3692 15.6667 20.6667V21.5H15.25C14.5608 21.5 14 22.0608 14 22.75V25.25C14 25.9392 14.5608 26.5 15.25 26.5H15.6667V27.3333C15.6667 29.6308 17.5358 31.5 19.8333 31.5H26.2475L29.55 33.7017C29.85 33.9017 30.1958 34.0025 30.5425 34.0025C30.8325 34.0025 31.1225 33.9325 31.3883 33.79C31.9708 33.4775 32.3333 32.8733 32.3333 32.2117V26.4992H32.75C33.4392 26.4992 34 25.9383 34 25.2492V22.7492C34 22.06 33.4392 21.4992 32.75 21.4992V21.5ZM21.0833 20.6667C21.7733 20.6667 22.3333 21.2267 22.3333 21.9167C22.3333 22.6067 21.7733 23.1667 21.0833 23.1667C20.3933 23.1667 19.8333 22.6067 19.8333 21.9167C19.8333 21.2267 20.3933 20.6667 21.0833 20.6667ZM27.7758 26.9775C26.9117 27.52 25.5542 28.1667 24 28.1667C22.4458 28.1667 21.0883 27.52 20.2242 26.9775C19.8342 26.7333 19.7167 26.2183 19.9617 25.8292C20.2067 25.44 20.7208 25.3217 21.11 25.5658C21.7892 25.9925 22.8425 26.5 24.0008 26.5C25.1592 26.5 26.2117 25.9925 26.8917 25.5658C27.28 25.3208 27.7958 25.4392 28.04 25.8292C28.285 26.2192 28.1667 26.7333 27.7775 26.9775H27.7758ZM26.9167 23.1667C26.2267 23.1667 25.6667 22.6067 25.6667 21.9167C25.6667 21.2267 26.2267 20.6667 26.9167 20.6667C27.6067 20.6667 28.1667 21.2267 28.1667 21.9167C28.1667 22.6067 27.6067 23.1667 26.9167 23.1667Z'
													fill='#60719A'
												/>
											</g>
											<defs>
												<linearGradient
													id='paint0_linear_4146_1739'
													x1='24'
													y1='0'
													x2='24'
													y2='48'
													gradientUnits='userSpaceOnUse'
												>
													<stop stop-color='#191F2D' />
													<stop
														offset='1'
														stop-color='#435170'
														stop-opacity='0.25'
													/>
												</linearGradient>
												<linearGradient
													id='paint1_linear_4146_1739'
													x1='24'
													y1='0'
													x2='24'
													y2='48'
													gradientUnits='userSpaceOnUse'
												>
													<stop stop-color='#1F2534' />
													<stop
														offset='1'
														stop-color='#1F2534'
														stop-opacity='0.25'
													/>
												</linearGradient>
												<clipPath id='clip0_4146_1739'>
													<rect
														width='20'
														height='20'
														fill='white'
														transform='translate(14 14)'
													/>
												</clipPath>
											</defs>
										</svg>
										<p className='hidden text-[10px] text-white 3sm:block'>Bot</p>
									</div>
								</div>
								<div className='max-w-[140px] text-center 3sm:flex 3sm:h-full 3sm:items-center'>
									<p className='text-center text-[12px] font-bold leading-4 text-white'>
										{players[0].name},{' '}
										<span className='text-[12px] font-bold leading-4 text-[#60719A]'>
											{t('case_battles.offer_bot_description')}
										</span>
									</p>
								</div>
							</div>
						</div>
						<div className={clsx(cls.player_title, 'mt-5 h-[66px] w-[272px] 3sm:hidden')}>
							<div className={clsx(cls.player_title_inner, 'flex items-center px-3 py-[9px]')}>
								<SmallAvatar icon='/images/avatars/2.jpg' />
								<span className='ml-4 text-[14px] font-bold leading-4 text-white'>{players[1].name}</span>
							</div>
						</div>
					</div>
					{/* Player who is ready */}
					<div>
						<div className={clsx(cls.player_card_bg, '3sm:!h-[145px] 3sm:!w-full')}>
							<div
								className={clsx(
									cls.player_card_bg_inner,
									cls.has_offer,
									'relative flex flex-col items-center justify-center gap-3 overflow-hidden py-[20px]'
								)}
							>
								<div className='absolute'>
									<ReadyIcon className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 3sm:hidden' />
									<SmallAvatar
										className='!absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 3sm:block'
										icon='/images/avatars/2.jpg'
									/>
									<CircularBg />
								</div>
								<p className='z-10 translate-y-12 text-[20px] font-[900] leading-4 text-white 3sm:hidden'>
									{t('case_battles.ready').toUpperCase()}
								</p>
								<p className='z-10 hidden translate-y-12 text-[14px] font-[900] leading-4 text-white 3sm:block'>
									Djorgick
								</p>
							</div>
						</div>
						<div className={clsx(cls.player_title, cls.ready, 'mt-5 h-[66px] w-[272px] 3sm:hidden')}>
							<div className={clsx(cls.player_title_inner, 'flex items-center px-3 py-[9px]')}>
								<SmallAvatar icon='/images/avatars/2.jpg' />
								<span className='ml-4 text-[14px] font-bold leading-4 text-white'>{players[2].name}</span>
							</div>
						</div>
					</div>
					{/* Waiting for player */}
					<div>
						<div className={clsx(cls.player_card_bg, '3sm:!h-[145px] 3sm:!w-full')}>
							<div
								className={clsx(
									cls.player_card_bg_inner,
									'relative flex flex-col items-center justify-center overflow-hidden py-[20px]'
								)}
							>
								<svg
									width='136'
									height='136'
									viewBox='0 0 136 136'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										opacity='0.15'
										d='M88.0516 25.3309C90.7311 25.3309 93.2071 26.7604 94.5468 29.0809L114.759 64.0892C116.099 66.4097 116.099 69.2687 114.759 71.5892L94.5468 106.598C93.2071 108.918 90.7311 110.348 88.0516 110.348L47.6275 110.348C44.948 110.348 42.4721 108.918 41.1323 106.598L20.9202 71.5892C19.5805 69.2687 19.5805 66.4097 20.9202 64.0892L41.1323 29.0809C42.4721 26.7604 44.948 25.3309 47.6275 25.3309L88.0516 25.3309Z'
										fill='url(#paint0_linear_4135_3914)'
										stroke='url(#paint1_linear_4135_3914)'
									/>
									<path
										d='M81.7146 36.3084C84.3941 36.3084 86.8701 37.7379 88.2098 40.0584L102.084 64.0891C103.424 66.4096 103.424 69.2685 102.084 71.5891L88.2098 95.6197C86.8701 97.9403 84.3941 99.3697 81.7146 99.3697L53.9664 99.3697C51.2869 99.3697 48.8109 97.9402 47.4712 95.6197L33.5971 71.5891C32.2573 69.2685 32.2573 66.4096 33.5971 64.0891L47.4712 40.0584C48.8109 37.7379 51.2869 36.3084 53.9664 36.3084L81.7146 36.3084Z'
										fill='url(#paint2_linear_4135_3914)'
										stroke='url(#paint3_linear_4135_3914)'
									/>
									<path
										d='M75.1873 72.8933L69.8006 68H66.1873L60.8006 72.8933C59.294 74.2533 58.8006 76.3467 59.534 78.24C60.2673 80.12 62.054 81.3333 64.0673 81.3333H71.9206C73.9473 81.3333 75.7206 80.12 76.454 78.24C77.1873 76.3467 76.694 74.2533 75.1873 72.8933ZM70.4273 76.1867H65.574C65.0673 76.1867 64.6673 75.7733 64.6673 75.28C64.6673 74.7867 65.0806 74.3733 65.574 74.3733H70.4273C70.934 74.3733 71.334 74.7867 71.334 75.28C71.334 75.7733 70.9206 76.1867 70.4273 76.1867Z'
										fill='#687DAD'
									/>
									<path
										d='M76.4662 57.7603C75.7329 55.8803 73.9462 54.667 71.9329 54.667H64.0662C62.0529 54.667 60.2662 55.8803 59.5329 57.7603C58.8129 59.6537 59.3062 61.747 60.8129 63.107L66.1996 68.0003H69.8129L75.1996 63.107C76.6929 61.747 77.1862 59.6537 76.4662 57.7603ZM70.4262 61.6403H65.5729C65.0662 61.6403 64.6662 61.227 64.6662 60.7337C64.6662 60.2403 65.0796 59.827 65.5729 59.827H70.4262C70.9329 59.827 71.3329 60.2403 71.3329 60.7337C71.3329 61.227 70.9196 61.6403 70.4262 61.6403Z'
										fill='#687DAD'
									/>
									<defs>
										<linearGradient
											id='paint0_linear_4135_3914'
											x1='92.6704'
											y1='24.8309'
											x2='43.0087'
											y2='110.848'
											gradientUnits='userSpaceOnUse'
										>
											<stop stop-color='#191F2D' />
											<stop
												offset='1'
												stop-color='#435170'
												stop-opacity='0.25'
											/>
										</linearGradient>
										<linearGradient
											id='paint1_linear_4135_3914'
											x1='92.6704'
											y1='24.8309'
											x2='43.0087'
											y2='110.848'
											gradientUnits='userSpaceOnUse'
										>
											<stop stop-color='#1F2534' />
											<stop
												offset='1'
												stop-color='#1F2534'
												stop-opacity='0.25'
											/>
										</linearGradient>
										<linearGradient
											id='paint2_linear_4135_3914'
											x1='86.3334'
											y1='35.8084'
											x2='49.3476'
											y2='99.8697'
											gradientUnits='userSpaceOnUse'
										>
											<stop stop-color='#191F2D' />
											<stop
												offset='1'
												stop-color='#435170'
												stop-opacity='0.25'
											/>
										</linearGradient>
										<linearGradient
											id='paint3_linear_4135_3914'
											x1='86.3334'
											y1='35.8084'
											x2='49.3476'
											y2='99.8697'
											gradientUnits='userSpaceOnUse'
										>
											<stop stop-color='#1F2534' />
											<stop
												offset='1'
												stop-color='#1F2534'
												stop-opacity='0.25'
											/>
										</linearGradient>
									</defs>
								</svg>
								<p className='text-[12px] font-bold leading-4 text-[#60719A]'>
									{t('case_battles.waiting_for_player').toUpperCase()}...
								</p>
							</div>
						</div>
						<div className={clsx(cls.player_title, 'mt-5 h-[66px] w-[272px] 3sm:hidden')}>
							<div className={clsx(cls.player_title_inner, 'flex animate-pulse items-center gap-4 px-3 py-[9px]')}>
								<svg
									width='42'
									height='46'
									viewBox='0 0 42 46'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M17.25 1.74241C19.5705 0.402668 22.4295 0.402668 24.75 1.74241L37.5346 9.12361C39.8551 10.4634 41.2846 12.9393 41.2846 15.6188V30.3812C41.2846 33.0607 39.8551 35.5366 37.5346 36.8764L24.75 44.2576C22.4295 45.5973 19.5705 45.5973 17.25 44.2576L4.46539 36.8764C2.14488 35.5366 0.715391 33.0607 0.715391 30.3812L0.715391 15.6188C0.715391 12.9393 2.14488 10.4634 4.46539 9.12361L17.25 1.74241Z'
										fill='url(#paint0_linear_4135_3921)'
										stroke='url(#paint1_linear_4135_3921)'
									/>
									<defs>
										<linearGradient
											id='paint0_linear_4135_3921'
											x1='21'
											y1='-1'
											x2='21'
											y2='47'
											gradientUnits='userSpaceOnUse'
										>
											<stop stop-color='#191F2D' />
											<stop
												offset='1'
												stop-color='#435170'
												stop-opacity='0.25'
											/>
										</linearGradient>
										<linearGradient
											id='paint1_linear_4135_3921'
											x1='21'
											y1='-1'
											x2='21'
											y2='47'
											gradientUnits='userSpaceOnUse'
										>
											<stop stop-color='#1F2534' />
											<stop
												offset='1'
												stop-color='#1F2534'
												stop-opacity='0.25'
											/>
										</linearGradient>
									</defs>
								</svg>
								<div className='flex h-[11px] w-[70px] items-center justify-center rounded-lg bg-gray-300 sm:w-96 dark:bg-gray-700'></div>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default PlayersList
