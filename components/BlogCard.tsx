// components/BlogCard.tsx
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, TagIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl: string;
  href: string;
}

export default function BlogCard({
  title,
  description,
  date,
  category,
  imageUrl,
  href,
}: BlogCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Link href={href} className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/3 h-48 md:h-full">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="flex flex-col p-4 md:p-6 md:w-2/3">
            <h2 className="text-xl font-bold tracking-tight mb-2">{title}</h2>
            <p className="text-muted-foreground mb-4 flex-grow">
              {description}
            </p>
            <div className="flex items-center text-sm text-muted-foreground gap-4">
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>{date}</span>
              </div>
              <div className="flex items-center">
                <TagIcon className="h-4 w-4 mr-1" />
                <span>{category}</span>
              </div>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
