import { notFound } from "next/navigation";
import { getProgramBySlug } from "../../data/programs";
import { ProgramDetailPage } from "../../pages/ProgramDetailPage";

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function ProgramSlugPage({ params }: Props) {
    const { slug } = await params;
    const program = getProgramBySlug(slug);

    if (!program) {
        notFound();
    }

    return <ProgramDetailPage program={program} />;
}
