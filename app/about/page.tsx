import type { Metadata } from 'next';
import './about.scss';
import Image from 'next/image';
import Particles from './AboutParticles';

export const metadata: Metadata = {
  title: 'À propos | Ô Délices de Bertrand',
  description: 'Generated by create next app',
};

const About = () => {
  return (
    <>
      <section className="py-[15dvh] lg:py-[20dvh] px-10 flex flex-col items-center lg:flex-row justify-around font-bold select-none">
        <div className="absolute">
          <Particles />
        </div>
        <div className="z-10 lg:w-1/2 lg:mx-10 transition duration-300 ease-in hover:scale-125 hover:cursor-zoom-in">
          <Image
            src="/assets/img/agent-card.png"
            alt="Carte de l'agent culinaire Bertrand"
            width={1000}
            height={124}
          />
        </div>
        <aside className="flex flex-col w-4/5 lg:w-1/2 handlee text-slate-700 text-justify text-xl lg:text-2xl z-10">
          <div className="border rounded-md p-5 lg:p-10 lg:w-4/5 mb-5 lg:mb-10 bg-[rgb(255,255,255,0.95)] agentCard transition duration-300 ease-in hover:scale-125 hover:cursor-zoom-in">
            <p>
              Passionné par l&lsquo;art culinaire, et créateur d'expériences
              gastronomiques authentiques, je mets mon savoir-faire au service de vos
              envies gustatives.
            </p>
          </div>
          <div className="border rounded-md p-5 lg:p-10 lg:mr-20 lg:mt-10 bg-[rgb(255,255,255,0.95)] agentCard transition duration-300 ease-in hover:scale-125 hover:cursor-zoom-in">
            <p>
              <span className="text-orange-500 [text-shadow:_0.05vw_0.05vw_0.1vw_rgb(60,60,60)]">
                &ldquo;Sortez chez vous !&ldquo;
              </span>{' '}
              : ce slogan illustre mon appétit à vous faire vivre un moment particulier et
              mémorable, dans le confort de votre cocon familial.
            </p>
          </div>
        </aside>
      </section>
      <h2 className="relative">Mon histoire</h2>%
      <section className="h-1/4 w-5/6 z-20 relative bg-slate-300 m-auto p-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur est aliquam
        doloremque et ipsa molestias dignissimos ratione, voluptatum id maiores sed ex a
        iusto deleniti veniam? In ex a soluta? Hic odit saepe perferendis mollitia quo!
        Vel, alias ipsum velit cupiditate iure optio. Possimus officia cum exercitationem
        repudiandae corrupti quaerat, error fugit quas quo asperiores dicta? Expedita ex
        totam quia! Asperiores assumenda architecto nisi aperiam dolores similique sit
        sapiente distinctio, quia corporis minus, laboriosam sequi. Temporibus eos magni
        dolorem neque, pariatur molestias cumque quae adipisci, excepturi perspiciatis
        asperiores assumenda inventore. Atque temporibus dolorem tenetur perferendis
        eligendi nam cumque veritatis iusto mollitia voluptate unde repellat officia odio,
        quam ad sequi dignissimos dolores animi velit sint cupiditate totam. Sit quasi
        ipsam quidem! Adipisci, voluptates at debitis ducimus optio minus, porro
        necessitatibus distinctio neque officia cum. Voluptatum, dolore magnam iste
        nesciunt aliquid odio a exercitationem neque sequi fugiat quidem perferendis
        praesentium alias id! Commodi dolore dolor neque provident debitis placeat
        reiciendis architecto repudiandae non. Cumque, in labore sit quae nostrum sed
        quod, mollitia fugit delectus suscipit tempora dicta adipisci perferendis dolorem
        animi quaerat. Debitis eos officia ipsum suscipit iure voluptatem! Facilis
        necessitatibus repudiandae libero id! Blanditiis dicta dolor impedit libero
        accusamus? Officia obcaecati, dolorem facilis corporis minus alias iure nam
        suscipit nihil neque? Rem pariatur sunt, odio laborum exercitationem expedita
        veritatis! Reprehenderit dolore omnis repellendus, distinctio quaerat unde
        consectetur atque obcaecati laboriosam praesentium quisquam placeat totam
        veritatis impedit exercitationem magnam! Ex, exercitationem laboriosam. Eos unde
        itaque fugiat? Fuga illum esse dolorum ducimus, quibusdam aut. Optio fugit sequi
        quae praesentium totam repudiandae. Officia eligendi error, voluptas tempore
        reprehenderit ex debitis doloremque cumque quos! Qui. Asperiores odio, odit
        voluptatem saepe sapiente fuga perferendis dolores praesentium illum in accusamus
        fugit. Reprehenderit, quis nihil? Obcaecati, est! Sed molestias explicabo beatae
        hic, id cupiditate impedit maiores neque magnam!
      </section>
    </>
  );
};

export default About;
