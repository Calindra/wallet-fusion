import { useEffect, useState } from 'react'
import { Chain } from 'viem'
import { useAccount, useDisconnect, useEnsAvatar, useEnsName, useBalance, useSwitchChain, useChainId } from 'wagmi'
import { useSnackbar } from 'notistack'

export default function Account() {
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const { data: ensName } = useEnsName({ address })
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! })
    const result = useBalance({ address })
    const chainId = useChainId()
    const { chains, switchChain } = useSwitchChain()
    const [activeChain, setActiveChain] = useState({ name: "" } as Chain)
    const { enqueueSnackbar } = useSnackbar()

    useEffect(() => {
        const currentChain: Chain = chains.find(chain => chain.id === chainId) as Chain
        setActiveChain(currentChain)
    }, [chainId, chains])

    async function changeChain(e: any) {
        const chainId = parseInt(e.target.value)
        const targetChain = chains.find(chain => chain.id === chainId)

        if (!targetChain) {
            enqueueSnackbar(`Chain with ID ${chainId} is not configured`, { variant: "warning", autoHideDuration: 3000 })
        }

        await switchChain({ chainId: chainId }, {
            onSuccess: (data, variables) => {
                console.log("Chain switched successfully:", data)
                const newChain = chains.find(chain => chain.id === variables.chainId) as Chain
                setActiveChain(newChain)
            },
            onError: (error) => {
                console.error("Error switching chain:", error)
            },
            onSettled: (data, error) => {
                console.log("Switch chain settled:", { data, error })
            }
        })
    }

    return (
        <div>
            <span>Chain: {activeChain.name}</span>
            {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
            {address && <div style={{ fontSize: "10px" }}>{ensName ? `${ensName} (${address})` : address}</div>}
            <span style={{ fontSize: "10px" }}>balance: {result.data?.formatted} {result.data?.symbol}</span>
            <br />
            <label htmlFor="chain">Choose a network:</label>

            <select name="chain" id="chain" onChange={(e) => changeChain(e)}>
                {chains.map((chain: any) => (
                    <option key={chain.id} value={chain.id}>{chain.name}</option>
                ))}
            </select>
            <button style={{ fontSize: "10px" }} onClick={() => disconnect()}>Disconnect</button>
        </div>
    )
}
