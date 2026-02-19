import Link from "next/link";

interface LogoProps {
  title: string;
}

export default function Logo({ title }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="text-2xl font-serif font-medium text-foreground hover:text-primary transition-colors">
        {title}
      </span>
    </Link>
  );
}
