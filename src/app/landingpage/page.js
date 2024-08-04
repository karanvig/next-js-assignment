// src/app/page.js
import Background from "./Background";
import Navbar from "./Navbar";
import Benefits from "../data/Benefits.json";
import BenefitsCards from "./BenefitsCards";
import CheckList from "./CheckList";
import OfficeSetup from "./OfficeSetup";
import VirtualOffice from "./VirtualOffice";
import ExpertGuidance from "./ExpertGuidance";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Background />
      <BenefitsCards benefits={Benefits} />
      <CheckList/>
      <OfficeSetup/>
      <VirtualOffice/>
      <ExpertGuidance/>
    </div>
  );
}
