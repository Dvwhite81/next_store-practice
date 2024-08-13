import { FaHeart } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

type Props = {
  productId: string;
};

export default function FavoriteToggleButton({ productId }: Props) {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
}
