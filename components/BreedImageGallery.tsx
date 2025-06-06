'use client';
import React from 'react';
import { Image, Button, Card, CardBody } from '@nextui-org/react'; 
import Link from 'next/link';

interface BreedImageGalleryProps {
  breedImages: string[];
  formattedBreedName: string;
}

export default function BreedImageGallery({ breedImages, formattedBreedName }: BreedImageGalleryProps) {
  return (
    <div className="container mx-auto p-8 max-w-7xl mt-8">
      <Link href="/" passHref>
        <Button auto color="secondary" className="mb-6">
          Voltar para as Raças
        </Button>
      </Link>

      <h1 className="text-3xl font-bold mb-6 text-center">Imagens de {formattedBreedName}</h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {breedImages.slice(0, 20).map((imageUrl, index) => (
          <Card key={index} className="py-4 w-full h-72">
            <CardBody className="overflow-hidden p-0 flex justify-center items-center">
              <Image
                alt={`${formattedBreedName} ${index + 1}`}
                className="object-cover w-full h-full"
                src={imageUrl}
              />
            </CardBody>
          </Card>
        ))}
      </section>
    </div>
  );
}