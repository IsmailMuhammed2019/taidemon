"use client"

import { error } from "console"

function randomNumber (count: number) {
    return Math.floor(Math.random() * count)
}

export default function ReviewId ({params
    } : {
        params : {
            reviewId : string,
            productsId : string,
        }
    }) {
        const random = randomNumber(2)

        if (random === 1) {
            throw new Error('Error loading review')
        }

        if(parseInt(params.reviewId) > 10001){
            return <h1>The reveiw page is not available</h1>
        }
    return (
        <div>
        <h1> The review id {params.reviewId} of the product {params.productsId} </h1>
        </div>
    )
}