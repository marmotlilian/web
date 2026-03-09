import Link from "next/link";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: Date;
  slug: string;
  coverImage?: string;
  tags?: string[];
  featured?: boolean;
}

export default function ArticleCard({
  title,
  excerpt,
  date,
  slug,
  coverImage,
  tags = [],
  featured = false,
}: ArticleCardProps) {
  return (
    <article className={cn(
      "group relative flex flex-col gap-3",
      featured && "md:grid md:grid-cols-2 md:gap-8",
      !featured && "md:flex-row md:gap-6"
    )}>
      {/* 左边文字 */}
      <div className={cn(
        "flex flex-col gap-2",
        featured && "md:order-1",
        !featured && "md:w-1/2"
      )}>
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-[#ff5919] bg-[#ff5919]/10 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <Link href={`/posts/${slug}`}>
          <h3 className="text-xl font-serif font-medium group-hover:text-[#ff5919] transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        {/* Date */}
        <time className="text-xs text-muted-foreground mt-1">
          {format(date, "yyyy年MM月dd日")}
        </time>
      </div>

      {/* 右边封面图片 */}
      {coverImage && (
        <Link
          href={`/posts/${slug}`}
          className={cn(
            "overflow-hidden rounded-lg border bg-muted",
            featured ? "md:order-2 aspect-video" : "md:w-1/2 md:aspect-square"
          )}
        >
          <img
            src={coverImage}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      )}
    </article>
  );
}
