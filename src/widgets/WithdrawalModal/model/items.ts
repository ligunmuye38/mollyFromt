import { ICountry, ICryptoCurrency, IPaymentMethod, PaymentMethodType } from './types'

export const paymentMethods: IPaymentMethod[] = [
	{
		icon: '/images/payment/methods/cryptos.png',
		methodType: PaymentMethodType.CRYPTO,
		title: 'cryptos',
		color: '#345D9D'
	},
	{
		icon: '/images/payment/methods/visa.png',
		methodType: PaymentMethodType.CARD,
		title: 'visa',
		name: 'Visa',
		color: '#0044F3'
	},
	{
		icon: '/images/payment/methods/skrill.png',
		methodType: PaymentMethodType.SKRILL,
		title: 'skrill',
		name: 'Skrill',
		color: '#872166'
	},
	{
		icon: '/images/payment/methods/paybyskins.png',
		methodType: PaymentMethodType.SKRILL,
		title: 'paybyskins',
		color: '#0EAB5B'
	}
]

export const countries: ICountry[] = [
	{
		flag: '/images/icons/icon-flag-ru-square.svg',
		name: 'Russia',
		title: 'russia'
	},
	{
		flag: '/images/icons/icon-flag-uk-square.svg',
		name: 'United Kingdom',
		title: 'united-kingdom'
	}
]

export const cryptosCurrencies: ICryptoCurrency[] = [
	{
		icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
		name: 'BTC',
		price: 8372111.67,
		title: 'btc'
	},
	{
		icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
		name: 'ETH',
		price: 2373.29,
		title: 'eth'
	},
	{
		icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
		name: 'XRP',
		price: 2.69,
		title: 'xrp'
	},
	{
		icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
		name: 'USDT',
		price: 0.999,
		title: 'usdt'
	},
	{
		icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
		name: 'BNB',
		price: 606.88,
		title: 'bnb'
	},
	{
		icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png',
		name: 'SOL',
		price: 165.35,
		title: 'sol'
	},
	{
		icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png',
		name: 'TRX',
		price: 0.243,
		title: 'trx'
	}
]
