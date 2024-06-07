import type { Metadata } from 'next';
import './page.scss';

export const metadata: Metadata = {
  title: 'Accueil | Ô Délices de Bertrand',
  description: 'Generated by create next app',
};

const Home = () => {
  return (
    <main className="bg-[#151314]">
      <section className="h-[calc(100dvh-80px)] flex flex-col mt-[80px] w-[90%] mx-auto font-bold">
        <div
          className="
          main-title 
          handlee
          uppercase
        text-orange-400
          text-center 
          text-[1.5rem]
          md:text-[3rem] 
          lg:text-[3.5rem]
          m-auto
          "
        >
          {/* <h1 className='cinzel text-orange-400'>
            Profitez de vos invités en toute tranquillité
          </h1> */}
          <h1>Site en cours de préparation...</h1>
          {/* <h2 className="mt-6 lg:mt-10">Le plaisir de recevoir !</h2> */}
          <div className="w-1/2 m-auto py-[calc(100dvh/15)]">
            {/* <Image
              src="/assets/img/homer.gif"
              alt="Ouvrier qui creuse"
              width={300}
              height={300}
              className="m-auto"
            /> */}
            <div>
              <iframe
                src="https://giphy.com/embed/3QO7d0RBoxNd04ueF4"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <p>
              {/* <a href="https://giphy.com/gifs/3QO7d0RBoxNd04ueF4">via GIPHY</a> */}
            </p>
          </div>
          <h2 className="text-indigo-500">À bientôt !</h2>
        </div>
      </section>
    </main>
  );
};

export default Home;
