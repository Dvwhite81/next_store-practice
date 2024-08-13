import { Separator } from '@/components/ui/separator';

type Props = {
  text: string;
};

export default function SectionTitle({ text }: Props) {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-8">
        {text}
      </h2>
      <Separator />
    </div>
  );
}
