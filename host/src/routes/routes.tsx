import { RouteObject } from 'react-router-dom'
import HeaderLayout from '../layouts/header-layout/HeaderLayout.tsx'
import CollectionTable from '../components/collection-table/CollectionTable.tsx'


export const routes: RouteObject[] = [
    {
        element: <HeaderLayout />,
        children: [
            {
                path: "/",
                element:<CollectionTable /> ,
            }
        ]
    },
]