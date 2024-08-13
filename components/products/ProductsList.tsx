import { Product } from '@prisma/client';
import ListSingleProduct from './ListSingleProduct';

type Props = {
  products: Product[];
};

export default function ProductsList({ products }: Props) {
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => (
        <ListSingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
}
