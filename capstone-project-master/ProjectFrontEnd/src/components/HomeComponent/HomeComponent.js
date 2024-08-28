import HeroUnit from "./HeroComponent/HeroComponent";
import Services from "./ServicesweOffer/ServicesWeOffer";
import CreditWorthiness from "./Insights/CreditWorthiness";
const HomeComponent = () => {
  return (
    <div>
      <HeroUnit />
      <Services />
      <CreditWorthiness />
    </div>
  );
};
export default HomeComponent;
