import { notFound } from "next/navigation";
import { getFacilityBySlug } from "../../data/facilities";
import { FacilityDetailPage } from "@/app/pages/FacilityDetailPage";

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function FacilitySlugPage({ params }: Props) {
    const { slug } = await params;
    return <FacilityDetailPage slug={slug} />;
}
