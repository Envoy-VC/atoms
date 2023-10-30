import React from 'react';
import { useAddress, useChainId, useChain } from '@thirdweb-dev/react';

import type { ChainbaseResult, ERC20TokenBalance } from '~/types';

const useGetAccountBalances = () => {
	const address = useAddress();
	const chain = useChain();

	const [data, setData] = React.useState<ERC20TokenBalance[] | null>(null);
	const [error, setError] = React.useState<Error | null>(null);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const refetch = async () => {
		try {
			setIsLoading(true);
			const params = new URLSearchParams();
			params.set('chain_id', String(chain?.chainId) ?? '1');
			params.set('address', address ?? '');
			params.set('limit', '20');
			params.set('page', '1');
			const res = await fetch(
				`/api/chainbase/account/tokens?${params.toString()}`,
				{
					method: 'GET',
					headers: {
						accept: 'application/json',
					},
				}
			);

			const result = (await res.json()) as ChainbaseResult<ERC20TokenBalance[]>;
			setData(result.data);
		} catch (error) {
			console.log(error);
			setError(new Error(String(error)));
		} finally {
			setIsLoading(false);
		}
	};

	React.useEffect(() => {
		if (address && chain?.chainId) void refetch();
	}, [address, chain?.chainId]);

	return { data, isLoading, error, refetch };
};

export default useGetAccountBalances;
