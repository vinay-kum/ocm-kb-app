
import { useRouter } from 'next/router'
import React from 'react'

export default function ArticleSummary({data,id}) {
  const router = useRouter()
    return (
        <div className="article-summary p-3">
        <p onClick={()=>router.push(`/article/${id}`)}><h2 className="title">{data.title}</h2></p>
        <div className="cat-summary">{data.summary}</div>
      </div>
    )
}

