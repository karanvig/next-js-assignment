import Navbar from '../app/Components/Navbar';
import Background from './Components/Background';
import BodyCard from './Components/BodyCard';
import service from './data/service.json';
import OfficeSection from './Components/OfficeSection';
import officespace from './data/officespace.json'
import Discovery from './Components/Discovery';
import Benefits from './Components/Benefits';
import Companies from './Components/Companies';
import ClientTestimonial from './Components/ClientTestimonial';
import Information from './Components/Information';
import Question from './Components/Question';
import question from './data/question.json'
import Contact from './Components/Contact';
import Details from './Components/Details';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Background />
      <div className="p-8">
        <div className="flex flex-wrap gap-6 justify-center">
          {service.map((card, index) => (
            <BodyCard
              key={index}
              heading={card.heading}
              text={card.text}
              image={card.image}
            />
          ))}
        </div>
      </div>
      <OfficeSection officespaces={officespace} />
      <Discovery/>
      <Benefits/>
      <Companies/>
      <ClientTestimonial/>
      <Information/>
      <Question questions={question}/>
      <Contact/>
      <Details/>
    </div>
  );
}
