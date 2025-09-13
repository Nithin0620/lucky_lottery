import React from 'react'
import { useMoralis,useWeb3Contract } from 'react-moralis'
import { useEffect,useState } from 'react'
import {useNotification} from "@web3uikit/web3"
import {ethers} from "ethers"

const LotteryEnterence:React.FC = () => {
  const {Moralis , isWeb3Enabled , chainId:chainIdHex} = useMoralis();

  const chainId:Number = parseInt(chainIdHex as String);

  const raffleAddress = chainId in contractAddress ? contractAddresses[chainId][0] : null;


  const [entranceFee,setEntranceFee] = useState("0");

  return (
    <div>
      
    </div>
  )
}

export default LotteryEnterence
