import Link from 'next/link'

export default function Products () {
const productid = 1000;
    
    return (
        <div>
        <h1>Products List</h1>
        <ul>
            <li><Link href='/products/1'>Product 1</Link></li>
            <li><Link href='/products/2'>Product 2</Link></li>
            <li><Link href='/products/3'>Product 3</Link></li>
            <li><Link href='/products/4 replace'>Product 4</Link></li>
            <li><Link href='/products/${productid}'>${productid}</Link></li>
        </ul>
        </div>
    )
}