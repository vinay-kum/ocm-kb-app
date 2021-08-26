
import { useRouter } from 'next/router'
import React from 'react'

export default function Article({data}) {
  console.log("-----------"+JSON.stringify(data))
  const router = useRouter()
    return (
      <>
      <div className="cat-content">
      <h2 className="">{data.title}</h2>
      <div className="cat-summary fst-italic">Last Update: A week ago</div>
    </div>
<div className="article pt-3 mt-2" dangerouslySetInnerHTML={convertToHTML(data.content)}></div>
 </>
    )
}
function convertToHTML(data) {
  return {__html: data};
}
