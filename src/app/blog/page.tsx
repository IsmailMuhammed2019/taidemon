
import { Metadata } from "next"

export const metadata : Metadata= {
  // title : 'Blog'
  title : {
    absolute : 'blog'
  }
}

function page() {
  return (
    <div>This is a blog post</div>
  )
}

export default page