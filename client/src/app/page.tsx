import React from 'react'
import { useMoralis } from "react-moralis"
import Header from '@/components/Header'
import LotteryEnterence from "@/components/LotteryEnterence"

const supportedChains:string[] = ["31337", "11155111"]

const page:React.FC = () => {

  const { isWeb3Enabled, chainId } = useMoralis();

  return (
    <div>
      <Header />

      {
        isWeb3Enabled ? (
          <div>
            {
              supportedChains.includes(parseInt(chainId as string).toString()) ? (
                <div className='flex flex-row p-8'>
                  <LotteryEnterence />
                </div>
              ) : (
                <div>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
              )
            }
          </div>
        ) : (
          <div>Please connect to a Wallet</div>
        )
      }
    </div>
  )
}

export default page
