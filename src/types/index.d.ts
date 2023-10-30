export interface ChainbaseResult<T> {
	code: number;
	message: string;
	data: T;
	nextPage?: number;
	count: number;
}

type TokenImage = {
	width: number;
	height: number;
	uri: string;
};

type TokenURL = {
	name: string;
	url: string;
};

export interface ERC20TokenBalance {
	balance: string;
	contract_address: string;
	current_usd_price: number;
	decimals: number;
	logos: TokenImage[];
	name: string;
	symbol: string;
	total_supply: string;
	urls: TokenURL[];
}
