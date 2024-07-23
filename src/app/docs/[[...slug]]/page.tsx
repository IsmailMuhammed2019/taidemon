import { emitKeypressEvents } from "readline"

export default function Docs ({params} : {
    params : {
        slug : string[],
    }
}) {
    if (params.slug?.length === 2) {
      return  <h1>The pages are more than 2 and the first slug is {params.slug[0]} and the second page is {params.slug[1]}</h1>
    }else if (params.slug?.length === 1) {
        // eslint-disable-next-line react/no-unescaped-entities
        return <h1>This is a single slug page and it's {params.slug[0]}</h1>
    }
    else {
        return <h1>Docs Home Page</h1>
    }
}