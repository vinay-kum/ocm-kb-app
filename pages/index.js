import CategorySummary from "../components/CategorySummary/CategorySummary";
import { getCategories } from "../service/service";

export default function Home({categories}) {
  return (

      <div className="kb-container mt-4 p-5 row">
        <div className="col-8">
          <h2 className="header">Help Topics</h2>
          <div className="row ps-2 py-2">
            {
              categories.map((category)=>(<CategorySummary category={category} ></CategorySummary>))
            }

             </div>
        </div>
    
        <div className="col-4">
          <div className="p-3 mb-3 bg-light text-dark"><b>Popular Topic</b></div>
          <div className="p-3 mb-3 bg-light text-dark">
            <b>Need Support</b>
            <p>
              Can't find the answer you're looking for? Don't worry we're here
              to help!
            </p>
            <div className="btn text-light contact">Contact Us</div>
          </div>
        </div>
      </div>
  )

}
export async function getStaticProps(context) {
  const categories = await getCategories();
  return {
    props: {categories}, // will be passed to the page component as props
  }
}
