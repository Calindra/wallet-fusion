import { RouteObject } from 'react-router-dom'
import HeaderLayout from '../layouts/header-layout/HeaderLayout.tsx'
import CollectionTable from '../components/collection-table/CollectionTable.tsx'
import CollectionItems from '../views/CollectionItems.tsx'
import { getAllCollections } from './loaders/get-all-collections.ts'
import { getCollectionById } from './loaders/get-collection-by-id.ts'
import { getNftById } from './loaders/get-nft-by-id.ts'
import NftDetail from '../views/nft-detail/NftDetail.tsx'


export const routes: RouteObject[] = [
    {
        element: <HeaderLayout />,
        path: "/",
        children: [
            {
                path: "collections",
                element: <CollectionTable />,
                loader: getAllCollections
            },
            {
                path: "collections/:collectionId",
                element: <CollectionItems />,
                loader: getCollectionById
            },
            {
                path: "collections/:collectionId/:tokenId",
                element: <NftDetail />,
                id: "nft_detail",
                loader: getNftById
            }

        ]
    },
]