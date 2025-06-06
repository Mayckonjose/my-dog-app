import HeroSection from '@/components/HeroSection';
import BreedCardList from '@/components/BreedCardList'; 

interface BreedsList {
  message: { [key: string]: string[] };
  status: string;
}

async function getDogBreeds(): Promise<string[]> {
  const res = await fetch('https://dog.ceo/api/breeds/list/all');
  if (!res.ok) {
    throw new Error('Falha ao buscar raças de cães');
  }
  const data: BreedsList = await res.json();
  return Object.keys(data.message);
}

export const metadata = {
  title: 'Dog Gallery - Raças de Cães',
  description: 'Explore diversas raças de cães e suas fotos.',
};

export default async function HomePage() {
  const breeds = await getDogBreeds();

  return (
    <>
      <HeroSection />

      <main className="container mx-auto p-4 max-w-7xl mt-8 mb-16">
        <p className="text-lg text-center text-gray-600 mb-8">
          Mostrando <span className="font-bold">{breeds.length}</span> raças disponíveis
        </p>

        {/* Renderiza o Client Component e passa os dados das raças */}
        <BreedCardList breeds={breeds} />
      </main>
    </>
  );
}