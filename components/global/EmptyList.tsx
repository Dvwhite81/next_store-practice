import { cn } from '@/lib/utils';

type Props = {
  heading?: string;
  className?: string;
};

export default function EmptyList({
  heading = 'No items found.',
  className,
}: Props) {
  return <h2 className={cn('text-xl', className)}>{heading}</h2>;
}
