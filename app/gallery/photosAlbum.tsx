'use client';
import Image from 'next/image';
import './gallery.scss';
import { useCallback } from 'react';
import { PhotoAlbum, RenderPhotoProps } from 'react-photo-album';

const photo = [
  {
    src: '/assets/img/anniv2.jpg',
    alt: 'Terrines chocolat blanc fraises et chocolat au lait pêche-abricot',
    width: 500,
    height: 667,
  },
  {
    src: '/assets/img/clafoutis-pommes.jpg',
    alt: 'Clafoutis aux pommes et amandes',
    width: 500,
    height: 513,
  },
  {
    src: '/assets/img/truite.jpg',
    alt: `Truite rôtie à l'unilatérale, riz au soja et crème à l'estragon`,
    width: 800,
    height: 600,
  },
  {
    src: '/assets/img/dahl.jpg',
    alt: 'Cassolette de Dahl indien et oeuf de caille',
    width: 600,
    height: 800,
  },
  {
    src: '/assets/img/coque-choco.png',
    alt: 'Coque en chocolat noir, crème fouettée au citron vert et fruits de saison',
    width: 769,
    height: 800,
  },
  {
    src: '/assets/img/tagliatelles-crevettes.jpg',
    alt: 'Tagliatelles aux crevettes et persillade',
    width: 600,
    height: 800,
  },
  {
    src: '/assets/img/maki.jpg',
    alt: 'Makizushi',
    width: 600,
    height: 800,
  },
  {
    src: '/assets/img/salade-gesiers.jpg',
    alt: `Salade de gésiers d'Halloween au vinaigre de framboises, confectionnée par des enfants :)`,
    width: 600,
    height: 612,
  },
  {
    src: '/assets/img/sushi.jpg',
    alt: 'Assiette de sushi',
    width: 600,
    height: 800,
  },
  {
    src: '/assets/img/veloute.png',
    alt: `Velouté de légumes d'automne, tartine de magret de canard`,
    width: 800,
    height: 600,
  },
  {
    src: '/assets/img/makizushi.jpg',
    alt: 'Assiette de makizushi',
    width: 600,
    height: 800,
  },
  {
    src: '/assets/img/terrine-fraises.jpg',
    alt: 'Terrine au chocolat blanc et fraises, biscuit sablé',
    width: 600,
    height: 800,
  },
  {
    src: '/assets/img/clafoutis-cerises.jpg',
    alt: 'Clafoutis aux cerises sorti du four',
    width: 600,
    height: 800,
  },
  {
    src: '/assets/img/tartiflettes.jpg',
    alt: 'Tartiflettes revisitées',
    width: 600,
    height: 800,
  },
  {
    src: '/assets/img/tarti-coulante.jpg',
    alt: 'Tartiflette coulante',
    width: 600,
    height: 800,
  },
  {
    src: '/assets/img/table.jpg',
    alt: 'Table dressée avec sushi',
    width: 800,
    height: 768,
  },
  {
    src: '/assets/img/sushi-roll.gif',
    alt: 'Roulage de makizushi',
    width: 600,
    height: 450,
  },
];

const photosAlbum = () => {
  const renderPhoto = useCallback(
    ({ photo, imageProps: { alt, style } }: RenderPhotoProps) => (
      <figure
        className="lg:hover:scale-125 transition"
        style={{
          ...style,
          borderRadius: '0.8rem',
          boxShadow:
            '0.2vw 0.2vw 0.5vw rgb(0 0 0 / 30%), -0.2vw -0.2vw 0.5vw rgb(0 0 0 / 30%) ',
          backgroundColor: 'white',
        }}
      >
        <Image src={photo} alt={alt} className='rounded-t-lg'/>
        <figcaption className='rounded-b-lg bg-slate-100 mt-3 p-5 text-center'>{photo.alt} </figcaption>
      </figure>
    ),
    []
  );
  return (
    <PhotoAlbum
      layout="rows"
      photos={photo}
      spacing={30}
      padding={25}
      targetRowHeight={400}
      renderPhoto={renderPhoto}
    />
  );
};

export default photosAlbum;
