import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo title={title} />
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors"
              >
                首页
              </Link>
              <Link
                href="#posts"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                文章
              </Link>
              <Link
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                关于
              </Link>
            </nav>
            <Button size="sm" className="bg-[#ff5919] hover:bg-[#ff5919]/90 text-white">
              订阅
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
