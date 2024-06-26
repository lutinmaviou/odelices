import React from 'react';
import './page.scss';

const ZeldinQuote = () => {
  return (
    <section className="text-center">
      <div className=" citation text-[1.2rem]">
        <q>
          <span>
            La <span className="font-bold uppercase gastronomie">gastronomie</span>
          </span>
          <br />{' '}
          <span className="phrase2">
            est <span className="font-bold">Art</span> utiliser la nourriture
          </span>
          <br /> pour créer du
          <span className="font-bold uppercase bonheur"> bonheur</span>
        </q>
        <p className="signature">Theodore Zeldin</p>
      </div>
    </section>
  );
};

export default ZeldinQuote;
