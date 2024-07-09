import { Button } from '@mui/material';
import * as React from 'react'
import { Connector, useConnect } from 'wagmi'
import metamaskIcon from "../../assets/metamask.svg"

export default function WalletOptions() {
    const { connectors, connect } = useConnect()
    const connec = connectors.find((connector: any) => connector.id === 'io.metamask');
   
    if (!connec) {
        throw new Error("Any connector was found. Check if you import it correctly.")
    }

    return <WalletOption
        connector={connec as Connector}
        onClick={() => connect({ connector: connec })}
    />
}

function WalletOption({
    connector,
    onClick,
}: {
    connector: Connector
    onClick: () => void
}) {
    const [ready, setReady] = React.useState(false)

    React.useEffect(() => {
        ; (async () => {
            const provider = await connector.getProvider()
            setReady(!!provider)
        })()
    }, [connector])

    return (
        <Button
            variant="outlined"
            color="warning"
            disabled={!ready} onClick={onClick}
            startIcon={<img src={metamaskIcon} />}
            sx={{ fontFamily: "ubuntu", width: "100%", height: "70px" }}
        >
            {connector.name}
        </Button>

    )
}