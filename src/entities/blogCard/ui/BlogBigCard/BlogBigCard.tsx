import Image from 'next/image'
import Link from 'next/link'

import { PublicDate } from '@/shared/ui/PublicDate/PublicDate'

import cls from './BlogBigCard.module.sass'

interface BlogBigCardProps {
	title?: string
	picUrl?: string
	date?: string
}

export const BlogBigCard: React.FC<BlogBigCardProps> = () => {
	return (
		<div className={cls.card}>
			<div className={cls.img}>
				<Image
					src='/images/blog/blogBig.png'
					alt=''
				/>
			</div>
			<div className={cls.text}>
				<h3 className={cls.title}>The Best CS2 SG 553 Skins in All Price Ranges</h3>
				<p className={cls.dec}>
					Looking to elevate your arsenal with the best SG 553 skins in Counter-Strike 2 without overspending? Whether
					you are sticking to a budget or ready to invest in top-tier aesthetics, we’ve compiled a list of standout SG
					553 skins for every price range. Explore our guide to discover the perfect balance of style and affordability
					tailored to your needs.
				</p>
				<div className={cls.actions}>
					{/* <div className={cls.date}>6 Jun. 2024</div> */}
					<PublicDate>6 Jun. 2024</PublicDate>
					<Link
						href='#'
						className={cls.read__more}
					>
						<button>Read Full</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
