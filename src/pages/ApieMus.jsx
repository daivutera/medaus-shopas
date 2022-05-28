import React from 'react';
import PropTypes from 'prop-types';
import ContainerForPageContent from './../components/containers/ContainerForPageContent';
import Container from '../components/containers/Container';

const ApieMus = (props) => {
  return (
    <ContainerForPageContent type='white'>
      <h2>Apie mus</h2>
      <p>
        UAB "Medaus pirkliai" novatoriška, vartotojų pasitikėjimą pelniusi
        lietuviško kapitalo įmonė. Įsikūrusi 2008 metais bendrovė užsiima
        natūralaus medaus supirkimu, perdirbimu, fasavimu, bei didmenine jo
        prekyba. Dabar bendrovė užima tvirtas lyderio pozicijas rinkoje ir yra
        viena moderniausių ir didžiausių medaus gamybos įmonių Baltijos šalyse.
        Bendrovė vertinama už produkcijos kokybę, inovatyvumą, veiklos
        skaidrumą, sparčią eksporto plėtrą ir paramą vietos bendruomenei.
      </p>
      <p>
        Gamyboje diegiamos moderniausios technologijos ir tarptautiniai kokybės
        ir vadybos standartai. UAB "Medaus pirkliai" šiuo metu fasuoja įvairias
        medaus rūšis. Savo produkcija bendrovė prekiauja Lietuvoje, Latvijoje,
        Estijoje, Jungtinėse Amerikos Valstijose, Anglijoje, Airijoje. Brandus
        įmonėje dirbančių profesionalų kolektyvas naujų žinių ir įgūdžių siekia
        nuolat tobulėdamas, taikydamas naujausias žinias bei diegdamas
        šiuolaikines technologijas.
      </p>
      <p>
        {' '}
        Įmonė yra pelniusi ne vieną reikšmingą šalies ir užsienio apdovanojimą.
        Kauno miesto ir Raseinių rajono žmonių pagarbą ir vietos valdžių
        palaikymą. Pasiekimai: "Korio" medus populiariausia 2010 ir 2012 metų
        prekė konesrvuotų daržovių ir vaisių, medaus kategorijoje.
      </p>
      <Container>
        <img
          style={{ width: '20rem' }}
          src='https://nuotraukosprojektams.fra1.cdn.digitaloceanspaces.com/dixit-motiwala-DIrUrL856mQ-unsplash.jpg'
          alt=''
        />
        <img
          style={{ width: '20rem' }}
          src='https://nuotraukosprojektams.fra1.cdn.digitaloceanspaces.com/francesco-ungaro-w1eWvv5U628-unsplash.jpg'
          alt=''
        />
      </Container>
    </ContainerForPageContent>
  );
};

ApieMus.propTypes = {};

export default ApieMus;
