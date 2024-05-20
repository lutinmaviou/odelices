import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Galerie d'images | Les Gourmandises d'Olivier",
  description: 'Generated by create next app',
};

const Gallery = () => {
  return (
    <>
      <p className="mt-[30vw] font-bold text-center uppercase text-3xl">Gallerie</p>
      <main className="mt-5">
        <div className="m-8 border-4 border-slate-600">
          <Image
            src="/assets/img/clafoutis-pommes.png"
            alt="clafoutis aux pommes"
            width={500}
            height={500}
          />
        </div>
        <div className="m-8 border-4 border-slate-600">
          <Image
            src="/assets/img/clafoutis-pommes.png"
            alt="clafoutis aux pommes"
            width={500}
            height={500}
          />
        </div>
      </main>
    </>
  );
};

export default Gallery;
