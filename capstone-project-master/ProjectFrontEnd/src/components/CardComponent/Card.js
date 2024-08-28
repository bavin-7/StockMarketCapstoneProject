import React from 'react'
import HeroSection from './hero/HeroSection'
import FeaturesSectiion from './featuresSection/FeaturesSection'
import ChooseCardSection from './choosecardsection/ChooseCardSection'

export default function card() {
  return (
    <div>
      <HeroSection/>
      <FeaturesSectiion/>
      <ChooseCardSection/>
    </div>
  )
}
