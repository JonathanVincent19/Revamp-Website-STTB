"use client";

import { useParams } from "next/navigation";
import { NewsDetailPage } from "@/app/pages/NewsDetailPage";

export default function NewsDetail() {
  const params = useParams();
  const slug = params.slug as string;

  return <NewsDetailPage slug={slug} />;
}
