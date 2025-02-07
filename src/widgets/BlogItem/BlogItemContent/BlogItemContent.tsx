import Image from 'next/image'

import cls from './BlogItemContent.module.sass'

export const BlogItemContent = () => {
	return (
		<div className={cls.content}>
			<Image
				src='/images/blog/blogBig.png'
				width={767}
				height={431}
				alt=''
			/>
			<div className={cls.text__content}>
				<p>
					Like the previous games in the series, Counter-Strike 2 is a multiplayer tactical first-person shooter in
					which two teams compete to complete different objectives depending on the game mode selected. Players are
					divided into two teams: counter-terrorists and terrorists. Each game mode has different objectives and is
					divided into several rounds, and in between rounds the player can purchase different weapons and equipment to
					use. In most game modes, the player has one life per round, which will result in the player not being able to
					play until the end of the round if they die.
				</p>
				<p>
					The game has six different game modes in which players can compete: competitive, premier mode, normal,
					partners, fight to the death, and arms race.
				</p>
				<p>
					Competitive, the main game mode, pits two teams of five people against each other, with the terrorists
					objective being to plant a C4 explosive at one of two detonation locations on the map or kill all
					counter-terrorists, and the counter-terrorists objective being to either kill all terrorists or disarm the
					explosives. By completing their objectives, the team will win their round and score a point. Unlike
					Counter-Strike: Global Offensive, the game in this mode ends if one side earns 13 points, then that side is
					considered the winner. In case both sides earn 12 points each, the game continues until 16 points are reached.
					If both teams are then on
				</p>
				<p>
					Like the previous games in the series, Counter-Strike 2 is a multiplayer tactical first-person shooter in
					which two teams compete to complete different objectives depending on the game mode selected. Players are
					divided into two teams: counter-terrorists and terrorists. Each game mode has different objectives and is
					divided into several rounds, and in between rounds the player can purchase different weapons and equipment to
					use. In most game modes, the player has one life per round, which will result in the player not being able to
					play until the end of the round if they die.
				</p>
				<p>
					The game has six different game modes in which players can compete: competitive, premier mode, normal,
					partners, fight to the death, and arms race.
				</p>
			</div>
		</div>
	)
}
