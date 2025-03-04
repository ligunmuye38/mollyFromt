export enum PaymentMethodType {
	SKRILL = 'skrill',
	CARD = 'card',
	CRYPTO = 'crypto'
}

export interface IPaymentMethod {
	title: string
	icon: string
	methodType: PaymentMethodType
	color: string
	name?: string
}

export interface ICountry {
	title: string
	name: string
	flag: string
}

export interface ICryptoCurrency {
	name: string
	title: string
	icon: string
	price: number
}
