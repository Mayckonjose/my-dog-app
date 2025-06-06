/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation';
import BreedImageGallery from '@/components/BreedImageGallery'; 

interface DogImagesByBreed {
  message: string[];
  status: string;
}

async function getDogImagesByBreed(breed: string): Promise<string[]> {
  const res = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }
    throw new Error(`Falha ao buscar imagens para a raça: ${breed}`);
  }
  const data: DogImagesByBreed = await res.json();
  return data.message;
}

export async function generateMetadata({ params }: any) {
  const breedName = params.raca.replace(/-/g, ' ');
  return {
    title: `Fotos de ${breedName.charAt(0).toUpperCase() + breedName.slice(1)} - Dog Gallery`,
    description: `Veja diversas fotos da raça de cães ${breedName}.`,
  };
}

export default async function BreedPage({ params }: any) {
  const breedImages = await getDogImagesByBreed(params.raca);
  const formattedBreedName = params.raca.replace(/-/g, ' ').charAt(0).toUpperCase() + params.raca.replace(/-/g, ' ').slice(1);

  if (breedImages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-4">
        <h2 className="text-2xl font-bold mb-4">Nenhuma imagem encontrada para esta raça.</h2>
        {}
        <Link href="/" passHref>
          <Button color="primary">Voltar para a lista de Raças</Button>
        </Link>
      </div>
    );
  }

  return (
    
    <BreedImageGallery breedImages={breedImages} formattedBreedName={formattedBreedName} />
  );
}