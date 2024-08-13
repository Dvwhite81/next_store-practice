import { Button } from '@/components/ui/button';

type Props = {
  productId: string;
};

export default function AddToCart({ productId }: Props) {
  return (
    <Button size="lg" className="capitalize mt-8">
      add to cart
    </Button>
  );
}
