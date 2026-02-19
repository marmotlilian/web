import Link from "next/link";

interface FooterProps {
  name: string;
  icp?: string;
}

export default function Footer({ name, icp }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-center text-sm text-muted-foreground mb-4">
          yahao，一名热爱技术和设计的开发者。喜欢探索新事物，专注于web开发、用户体验和个人成长。分享工作中的思考和生活中的感悟。
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} {name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/rss"
              className="hover:text-foreground transition-colors"
            >
              RSS
            </Link>
            <Link
              href="/archive"
              className="hover:text-foreground transition-colors"
            >
              文章归档
            </Link>
          </div>
        </div>
        {icp && (
          <p className="text-center text-xs text-muted-foreground mt-4">
            <Link
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {icp}
            </Link>
          </p>
        )}
      </div>
    </footer>
  );
}
