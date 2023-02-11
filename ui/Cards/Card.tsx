import { cn } from '@/lib/utils';

export const hoverClassName = 'transform-gpu transition-all duration-500 will-change-[outline,_transform] active:scale-100 group-hover:scale-95';

export default function Card({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn('group h-full', className)}>{children}</div>;
}
