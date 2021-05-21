import React from 'react';
import '../Styles/Containers/_top-level-content-section.scss';

import HERO_PORTRAIT from '../Assets/images/jw_sideon_left.jpg';

export function BioSection() {
  return (
    <section className="top-level-content-section bioSection">
      <div className="hero-img hero-img--left-side gradient-fade">
       <img src={HERO_PORTRAIT} alt={'jw right profile'} />
      </div>
    </section>
  )
}
