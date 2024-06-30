import type { Metadata } from 'next';
import './page.scss';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Accueil | Ô Délices de Bertrand',
  description: 'Generated by create next app',
};

const Home = () => {
  return (
    <section className="absolute top-[80px]">
      <Image
        src={'/assets/img/chef-lutin.png'}
        width={800}
        height={608}
        alt="Dessin de Bertrand Chef à domicile"
        className="relative top-[20dvh] p-5 m-auto z-10"
      />
      <div className="relative -top-[50dvh] h-[calc(50dvh-40px)] w-[100dvw] bg-white bg-texture"></div>
      <div className="relative -top-[60dvh] h-[calc(50dvh-40px)] w-[100dvw] bg-slate-400 bg-texture"></div>
      <div className="absolute top-0 handlee w-full text-center text-3xl lg:text-5xl p-8 text-orange-500 main-title">
        <h1>Bertrand</h1>
        <h2 className="text-amber-400 relative -top-[calc(100dvh/20)] lg:top-0 lg:text-6xl">
          Un chef dans votre cuisine
        </h2>
      </div>
    </section>
    /* <main className="bg-slate-400 bg-texture uppercase">
      <div className="absolute h-[30dvh] lg:h-[60dvh] w-full bg-white bg-texture"></div>
      <section className="h-[calc(100dvh-80px)] flex flex-col mt-[80px] w-[90%] mx-auto font-bold">
        <div
          className="
          main-title 
          handlee
          text-center
          m-auto
          "
        >
          <div className="lg:w-1/2 m-auto py-[calc(100dvh/8)] lg:py-[calc(100dvh/20)]">
            <h1 className="text-3xl lg:text-5xl lg:w-full m-auto relative -top-[calc(100dvh/20)] lg:top-0 text-orange-500">
              Bertrand
            </h1>
            <h2 className="text-amber-400 relative -top-[calc(100dvh/20)] lg:top-0 lg:text-6xl">
              Un chef dans votre cuisine
            </h2>
            <Image
              src={'/assets/img/chef-lutin.png'}
              width={1200}
              height={1097}
              alt="Coque en chocolat noir, crème fouettée au citron vert et fruits de saison"
              className="mt-5 relative"
            />
          </div>
        </div>
      </section>
    </main> */
  );
};

export default Home;
