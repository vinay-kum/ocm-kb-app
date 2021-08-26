import React from 'react'
import { getArticles } from '../../../service/service';
import { getArticleById } from '../../../service/service';
import Article from '../../../components/Article/Article';

export default function ArticlePage({article}) {
    return (
        <div className="kb-container mt-4 p-5 row">
        <div className="col-8">
        {<Article data={article}/>}

        </div>

        <div className="col-4">
          <div className="p-3 mb-3 bg-light text-dark">
            <b>Need Support</b>
            <p>
              Can't find the answer you're looking for? Don't worry we're here
              to help!
            </p>
            <div
              className="btn text-light contact">
              Submit Ticket
            </div>
          </div>
        </div>
      </div>
    )
}
// This function gets called at build time
export async function getStaticPaths() {
  const articles = await getArticles();
  return {
    paths: articles.map((article)=>(`/article/${article.id}`)),
    fallback: false,
  }
}
export async function getStaticProps({params}) {
  const data = await getArticleById(params.id);
  const article = data.items[0].fields;
  return {
    props: {article}, // will be passed to the page component as props
  }
}
