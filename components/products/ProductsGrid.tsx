import { Product } from '@prisma/client';
import GridSingleProduct from './GridSingleProduct';

type Props = {
  products: Product[];
};

export default function ProductsGrid({ products }: Props) {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <GridSingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
}
