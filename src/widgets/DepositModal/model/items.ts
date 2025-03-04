import { ICountry, ICryptoCurrency, IPaymentMethod, PaymentMethodType } from './types'

export const paymentMethods: IPaymentMethod[] = [
	{
		icon: '/images/payment/methods/visa.png',
		methodType: PaymentMethodType.BANK,
		title: 'visa',
		name: 'Visa',
		color: '#0044F3'
	},
	{
		icon: '/images/payment/methods/monobank.png',
		methodType: PaymentMethodType.BANK,
		title: 'monobank',
		name: 'Monobank (UAH)',
		color: '#007CF3'
	},
	{
		icon: '/images/payment/methods/zen.png',
		methodType: PaymentMethodType.BANK,
		title: 'zen',
		name: 'ZEN',
		color: '#D008C8'
	},
	{
		icon: '/images/payment/methods/unionpay.png',
		methodType: PaymentMethodType.BANK,
		title: 'unionpay',
		name: 'UnionPay',
		color: '#00447C'
	},
	{
		icon: '/images/payment/methods/discover.png',
		methodType: PaymentMethodType.BANK,
		title: 'discover',
		name: 'DISCOVER',
		color: '#FD950D'
	},
	{
		icon: '/images/payment/methods/privatebank.png',
		methodType: PaymentMethodType.BANK,
		title: 'privatebank',
		name: 'PrivatBank',
		color: '#56B02D'
	},
	{
		icon: '/images/payment/methods/raiffeisenbank.png',
		methodType: PaymentMethodType.BANK,
		title: 'raiffeisenbank',
		name: 'RaiffeisenBANK',
		color: '#DAC400'
	},
	{
		icon: '/images/payment/methods/payeer.png',
		methodType: PaymentMethodType.BANK,
		title: 'payeer',
		name: 'PAYEER',
		color: '#2D69B0'
	},
	{
		icon: '/images/payment/methods/fkwallet.png',
		methodType: PaymentMethodType.GIFT,
		title: 'fkwallet',
		color: '#673DFF'
	},
	{
		icon: '/images/payment/methods/perfectmoney.png',
		methodType: PaymentMethodType.GIFT,
		title: 'perfectmoney',
		color: '#C90E22'
	},
	{
		icon: '/images/payment/methods/paybyskins.png',
		methodType: PaymentMethodType.SKINS,
		title: 'paybyskins',
		color: '#0EAB5B'
	},
	{
		icon: '/images/payment/methods/cryptos.png',
		methodType: PaymentMethodType.CRYPTO,
		title: 'cryptos',
		color: '#345D9D'
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
