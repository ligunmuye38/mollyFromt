declare module '*.svg' {
	import React from 'react'

	const SVG: React.FC<React.SVGProps<SVGSVGElement>>
	export default SVG
}

type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>
		}
	: T
