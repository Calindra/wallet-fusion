interface Collection {
    id: string
    name: string
    floorPrice: string
    volume: number
    collectionAddress: string,
    image: string
}
interface NftItem {
    description: string;
    image: string;
    name: string;
    lastSale: string;
    currentPrice: string;
    collection: string;
    tokenId: string;
    coin: string;
    owner: string;
    status: string;
}
interface CollectionItems {
    [key: string]: NftItem[];
}