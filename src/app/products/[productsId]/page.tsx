import { Metadata } from "next"

type Props = {
    params : {
        productsId : string;
    }
}

export const generateMetadata = async ({params} : Props) : Promise <Metadata> => {
    const title = await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(`iphone ${params.productsId}`)}, 100)
    })
    return {
        title : `Product ${title}`,
    }
}


export default function ProductId ({params} : Props) {
    return (
        <div>
            Product details of the product {params.productsId}
        </div>
    )
}