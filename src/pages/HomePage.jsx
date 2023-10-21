import Review from "../components/Review"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <h3>|__Categories______________________| Search</h3>
      <p>Fusce erat ante, consectetur quis dapibus id, aliquam a est. Sed ultricies magna sed nisi condimentum, id dapibus magna interdum. Donec varius consequat nisi, a feugiat orci ullamcorper in. Maecenas congue pellentesque tempor. Ut tellus elit, mattis quis odio at, pharetra consequat mauris. Phasellus ac risus sit amet ligula scelerisque dictum. Aenean nec enim a enim hendrerit blandit ut eu orci. Vivamus id malesuada eros. Aliquam erat volutpat.</p>
      <div>
        <button>Section</button>
      </div>
      <div>
        <button>Section</button>
      </div>
      <div>
        <button>Section</button>
      </div>

      <Link to='/all-categories'>All categories</Link>
      <h2>How it works?</h2>
      <p>Fusce erat ante, consectetur quis dapibus id, aliquam a est. Sed ultricies magna sed nisi condimentum, id dapibus magna interdum. Donec varius consequat nisi, a feugiat orci ullamcorper in. Maecenas congue pellentesque tempor. Ut tellus elit, mattis quis odio at, pharetra consequat mauris. Phasellus ac risus sit amet ligula scelerisque dictum. Aenean nec enim a enim hendrerit blandit ut eu orci. Vivamus id malesuada eros. Aliquam erat volutpat.</p>
      <div>
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  )
}

export default HomePage