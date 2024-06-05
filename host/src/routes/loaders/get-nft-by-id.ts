import { LoaderFunction, json } from "react-router-dom";
import { collectionItems } from "../../data/collectionItems"

// interface Params {
//     params: {
//         collectionId: string;
//         tokenId: string
//     };
// }
export const getNftById: LoaderFunction = ({ params }) => {
    try {
        const collectionId = params.collectionId;
        const tokenId = params.tokenId;

        if (!collectionId || !tokenId) {
            throw new Error("You need to choose a collection id.");
        }

        const nftList = collectionItems[collectionId];
        
        if (!nftList) {
            throw new Error("Collection not found.");
        }

        const nft = nftList.find(item => item.tokenId === tokenId);
        if (!nft) {
            throw new Error("NFT not found.");
        }

        return nft;
    } catch (e: any) {
        console.log("error: ", e);
        throw json({ message: e.message || "" });
    }
};
