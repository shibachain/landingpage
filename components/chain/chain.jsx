import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Web3 from 'web3';


import stores from '../../stores/index.js'
import { getProvider } from '../../utils'

import { 
  CHAIN_ID,
  CHAIN_NAME,
  CHAIN_TOKEN_NAME,
  CHAIN_TOKEN_SYMBOL,
  CHAIN_TOKEN_DECIMALS,
  CHAIN_RPC,
  CHAIN_EXPLOROR
} from '../../constants/chain'

import {
  ERROR,
  CONNECT_WALLET,
  TRY_CONNECT_WALLET,
  ACCOUNT_CONFIGURED
} from '../../stores/constants'

export default function Chain({ chain }) {
  const router = useRouter()
  const [ account, setAccount ] = useState(null)

  useEffect(() => {
    const accountConfigure = () => {
      const accountStore = stores.accountStore.getStore('account')
      setAccount(accountStore)
    }

    stores.emitter.on(ACCOUNT_CONFIGURED, accountConfigure)

    const accountStore = stores.accountStore.getStore('account')
    setAccount(accountStore)

    return () => {
      stores.emitter.removeListener(ACCOUNT_CONFIGURED, accountConfigure)
    }
  }, [])

  
  

  const addToNetwork = () => {
    if(!(account && account.address)) {
      stores.dispatcher.dispatch({ type: TRY_CONNECT_WALLET })
      return
    }
    
    console.log(CHAIN_ID)
    const params = {
      chainId: CHAIN_ID, // A 0x-prefixed hexadecimal string
      chainName: CHAIN_NAME,
      nativeCurrency: {
        name: CHAIN_TOKEN_NAME,
        symbol: CHAIN_TOKEN_SYMBOL, // 2-6 characters long
        decimals: CHAIN_TOKEN_DECIMALS,
      },
      rpcUrls: CHAIN_RPC,
      blockExplorerUrls: CHAIN_EXPLOROR 
    }

    window.web3.eth.getAccounts((error, accounts) => {
      window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [params, accounts[0]],
      })
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        stores.emitter.emit(ERROR, error.message ? error.message : error)
        console.log(error)
      });
    })
  }

  const renderProviderText = () => {

    if(account && account.address) {
      const providerTextList = {
        Metamask: 'Add to Metamask',
        imToken: 'Add to imToken',
        Wallet: 'Add to Wallet'
      }
      return providerTextList[getProvider()]
    } else {
      return 'Connect wallet'
    }

  }

  if(!chain) {
    return <div></div>
  }

  return (
    <a
      href="#"
      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 md:py-4 md:text-lg md:px-10"
      onClick={ addToNetwork }
    >
  
    { renderProviderText() }
    </a>
  )
}