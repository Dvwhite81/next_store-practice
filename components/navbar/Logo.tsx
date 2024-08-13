import Link from 'next/link';
import { LuArmchair } from 'react-icons/lu';
import { VscCode } from 'react-icons/vsc';
import { Button } from '../ui/button';

export default function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href={'/'}>
        <VscCode className="w-6 h-6" />
      </Link>
    </Button>
  );
}
