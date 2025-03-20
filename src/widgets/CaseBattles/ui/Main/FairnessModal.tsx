import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import IconCopy from '@/shared/assets/icons/icon-copy-2.svg'
import IconEye from '@/shared/assets/icons/icon-eye.svg'
import IconWarning from '@/shared/assets/icons/icon-warning.svg'
import Button from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { Select } from '@/shared/ui/Select/Select'

import cls from './Main.module.sass'

const FairnessModal = () => {
	const t = useTranslations()
	const [type, setType] = useState<boolean>()
	const [game, setGame] = useState<string>('Mines')
	const [clientSeed, setClientSeed] = useState<string>('')
	const [serverSeed, setServerSeed] = useState<string>('')

	return (
		<div className={cls.modal}>
			<div className='mb-4 flex justify-center'>
				<div className='relative'>
					<div className={cls.switch}>
						<div className={cls.switch_inner}>
							<div
								onClick={() => setType(false)}
								className='flex h-full w-[106px] cursor-pointer items-center justify-center text-center text-[12px] font-bold leading-4 text-[#434957]'
							>
								{t('case_battles.seed')}
							</div>
							<div
								onClick={() => setType(true)}
								className='flex h-full w-[106px] cursor-pointer items-center justify-center text-center text-[12px] font-bold leading-4 text-[#434957]'
							>
								{t('case_battles.verification')}
							</div>
						</div>
					</div>
					<div className={clsx(cls.switch_track_wrapper, 'top-[4px]', type ? 'left-[110px]' : 'left-1')}>
						<div className={cls.switch_track}>
							<div className={cls.switch_track_inner}>
								{type ? t('case_battles.verification') : t('case_battles.seed')}
							</div>
						</div>
					</div>
				</div>
			</div>
			{type ? (
				<div className='flex flex-col gap-4'>
					<div className='flex w-full cursor-pointer flex-col gap-2'>
						<p className='text-[12px] font-medium leading-4 text-[#5F6C87]'>
							{t('case_battles.client_seed').toUpperCase()}
						</p>
						<Input
							value={clientSeed}
							onChange={value => setClientSeed(value)}
							classNames={{
								base: '!rounded-[12px] !h-[44px]',
								mainWrapper: 'w-full',
								inputWrapper: 'w-full'
							}}
						/>
					</div>
					<div className='flex w-full cursor-pointer flex-col gap-2'>
						<p className='text-[12px] font-medium leading-4 text-[#5F6C87]'>
							{t('case_battles.server_seed').toUpperCase()}
						</p>
						<Input
							value={serverSeed}
							onChange={value => setServerSeed(value)}
							classNames={{
								base: '!rounded-[12px] !h-[44px]',
								mainWrapper: 'w-full',
								inputWrapper: 'w-full'
							}}
						/>
					</div>
					<Select
						value={new Set([game])}
						onChangeValue={v => setGame(Array.from(v).join(''))}
						placeholder={t('toolbar.mode')}
						theme='theme-2'
						strokeSize='reg'
						selectorIcon='2'
						items={[{ label: 'Mines', value: 'Mines' }]}
						classNames={{
							base: '',
							trigger: '!bg-[#1A202E] !border-none !h-[44px]',
							selectorIcon: '!w-7 !h-7'
						}}
					/>
					<Button
						classNames={{
							base: clsx(cls.hexagon_btn, 'h-[42px] w-[200px] mx-auto'),
							content: clsx(cls.hexagon_btn_inner, '!gap-0')
						}}
					>
						{t('show_results').toUpperCase()}
					</Button>
				</div>
			) : (
				<div className='flex flex-col gap-4'>
					{Array.from(new Array(6)).map((_, index) => (
						<div
							className='flex w-full cursor-pointer flex-col gap-2'
							key={index}
						>
							<p className='text-[12px] font-medium leading-4 text-[#5F6C87]'>
								{t('case_battles.client_seed').toUpperCase()} {index + 1}
							</p>
							<div
								onClick={() => navigator.clipboard.writeText('7e2d8926de5f4df1e1205f28cc022bb2')}
								className='flex h-[44px] w-full items-center justify-between rounded-[12px] border-1 border-transparent bg-[#1A202E] p-[12px] pl-[14px] hover:border-[#FFF4]'
							>
								<p className='text-[12px] font-medium leading-4 text-white'>7e2d8926de5f4df1e1205f28cc022bb2</p>
								<IconCopy className='h-5 w-5 fill-[#5F6C87]' />
							</div>
						</div>
					))}
					<div className='flex w-full cursor-pointer flex-col gap-2'>
						<p className='text-[12px] font-medium leading-4 text-[#5F6C87]'>
							{t('case_battles.server_seed').toUpperCase()}
						</p>
						<div
							className='flex h-[44px] w-full items-center justify-between rounded-[12px] border-1 border-transparent bg-[#1A202E] p-[12px] pl-[14px] hover:border-[#FFF4]'
							onClick={() => navigator.clipboard.writeText('7e2d8926de5f4df1e1205f28cc022bb2')}
						>
							<p className='text-[12px] font-medium leading-4 text-white'>7e2d8926de5f4df1e1205f28cc022bb2</p>
							<IconCopy className='h-5 w-5 fill-[#5F6C87]' />
						</div>
					</div>
					<div className='flex w-full items-center rounded-[12px] bg-[#1A202E] p-[10px]'>
						<IconWarning />
						<p className='ml-2 flex-grow text-[12px] font-medium leading-4 text-[#5F6C87]'>
							{t('case_battles.read_system_description')}
						</p>
						<Button>
							<div
								className='h-7 w-7 rounded-md p-[1px]'
								style={{
									background:
										'linear-gradient(90deg, rgba(36, 253, 188, 0) 77.44%, #24FDBC 89.52%), linear-gradient(270deg, #10AD7E 40.76%, #24FDBC 57.96%)'
								}}
							>
								<div
									className='flex h-full w-full items-center justify-center rounded-md'
									style={{
										background: 'linear-gradient(180deg, #10AD7E 0%, rgba(36, 253, 188) 100%)'
									}}
								>
									<IconEye className='w-[14px] fill-[#141925]' />
								</div>
							</div>
						</Button>
					</div>
				</div>
			)}
		</div>
	)
}

export default FairnessModal
