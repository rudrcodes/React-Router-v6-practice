import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  console.log(useParams());

  const { productID } = useParams();
  const product = products.find((product) => productID === product.id);
  const { image, name } = product;
  return (
    <section className="section product">
      <img src={image} alt={name}></img>
      <h2>{name}</h2>
      <Link to='/products'>Back to Products</Link>
    </section>
  );
};

export default SingleProduct;
