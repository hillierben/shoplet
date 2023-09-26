import Paginate from "./components/Paginate";
import ProductList from "./components/ProductList";


export default function Home() {
  return (
    <div>
      <Paginate/>
      <div className="pge-prd-list">
        <ProductList/>
      </div>
      <Paginate/>
    </div>
  )
}
