import { json } from "react-router-dom";
import { collectionItems } from "../../data/collectionItems"

interface Params {
    params: {
        collectionId?: string;
    };
}

export function getCollectionById({ params }: Params) {
    try {
        const collectionId = params.collectionId;
        if (!collectionId) {
            throw new Error("You need choose an collection id.")
        }

        const nftList = collectionItems[collectionId];
        return nftList;
    } catch (e: any) {
        console.log("error: ", e)
        throw json({ message: e.message || "" })

    }

}