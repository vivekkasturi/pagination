import { useEffect, useState } from "react";


export default function Pagination() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch("https://dummyjson.com/products").then((response) => response.json()).then((result) => { console.log(result.products); setProducts(result.products) }).catch((error) => console.log("API is not working, please check API", error))
  }, []);

  const selectedpagination=(selectedpage)=>{
    
    console.log(selectedpage);
    if(selectedpage>0 && selectedpage<=products.length/10)
    setPage(selectedpage);
  }


  return (
    <div>
      <div className="products">
        {
          products.length > 0 && products.slice(page*10-10, page * 10).map((e) => {
            console.log(e);
            return (
              < div className="products__single">
                <img src={e.images[0]} alt="apimg" />
                <span> {e.title} </span>


              </div>

            )

          })}


      </div>

      <div>
        { console.log([Array(products.length)].map((e,i)=>{console.log(e,i)}))
        }
        {
        products.length > 0 &&
         <div className="Pagination">
          <span className={page===1? "leftsidearrowdisable":""}onClick={()=>selectedpagination(page-1)}>◀</span>
         
          {[...Array(products.length/10)].map((e,i)=>{
          return  <span className={page===(i+1) ? "pageselected":""}key={i} onClick={()=>selectedpagination(i+1)}>{i+1}</span>
          })}
          <span className={page===products.length/10 ? "rightsidearrowdisable":""} onClick={()=>selectedpagination(page+1)}>▶</span>
        </div>
        }
      </div>

    </div>
  )

}
