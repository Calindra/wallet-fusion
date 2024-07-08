import { useAccount, useDisconnect, useEnsAvatar, useEnsName, useBalance } from 'wagmi'

export default function Account() {
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const { data: ensName } = useEnsName({ address })
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! })
    const result = useBalance({ address })
    
    return (
        <div>
            {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
            {address && <div style={{ fontSize: "10px" }}>{ensName ? `${ensName} (${address})` : address}</div>}
            <span style={{ fontSize: "10px" }}>balance: {result.data?.formatted} {result.data?.symbol}</span>
            <button style={{ fontSize: "10px" }} onClick={() => disconnect()}>Disconnect</button>
        </div>
    )
}