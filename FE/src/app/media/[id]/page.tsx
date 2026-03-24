import { GalleryDetailPage } from "../../pages/GalleryDetailPage";

export default async function MediaDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <GalleryDetailPage id={id} />;
}
