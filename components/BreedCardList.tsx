'use client';

import React from 'react';
import { Card, CardHeader, CardBody, Button } from '@nextui-org/react';
import Link from 'next/link';
import HeartIconComponent from './HeartIcon';

interface BreedCardListProps {
  breeds: string[];
}

export default function BreedCardList({ breeds }: BreedCardListProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {breeds.map((breed) => (
        <Card
          key={breed}
          shadow="md"
          isPressable
          className="py-4 w-full flex flex-col justify-between items-center rounded-lg border-2 border-transparent hover:border-orange-500 transition-all duration-200"
        >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center relative w-full">
            <button className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors">
              <HeartIconComponent className="text-gray-400 hover:text-red-500" />
            </button>
            <h4 className="font-bold text-xl capitalize text-brandTextDark mt-4">{breed.replace(/-/g, ' ')}</h4> {/* Usar brandTextDark */}
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex flex-col items-center justify-end w-full">
            <Link href={`/racas/${breed}`} passHref className="w-full px-4">
              <Button
                color="primary" // Esta cor virá do tema NextUI (#B57A4C)
                variant="shadow"
                className="w-full text-white py-2"
              >
                Ver Imagens
              </Button>
            </Link>
          </CardBody>
        </Card>
      ))}
    </section>
  );
}