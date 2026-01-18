import Product from "../Components/Product";
import data from "../Components/data.json";

function Products() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20,marginTop:30, justifyContent:"center" }}>
      {data.products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
