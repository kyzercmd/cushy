import { useLocation, useParams } from "react-router";
import { useProductFetch } from "../../hooks/useProductFetch";
import { PageNotFound } from "../PageNotFound/PageNotFound";

export const ProductDetails = () => {
  const location = useLocation();
  const { sku } = useParams();

  const stateProduct = location.state?.product;

  const {
    data: fetchProduct,
    isLoading,
    isError,
  } = useProductFetch({
    sku,
    enabled: !stateProduct,
  });

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  if (isError) {
    return <PageNotFound />;
  }

  const product = stateProduct || fetchProduct;

  return (
    <div>
      <div>{product.name}</div>
    </div>
  );
};
