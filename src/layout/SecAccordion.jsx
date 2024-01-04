import Section from '../components/Section';
import Title from '../components/Title';
import Accordion from '../components/Accordion';

const  SecAccordion = () => {
	return (
		<Section>
			<Title>
        Accordions
      </Title>
      <Accordion
				title="Accordion 1">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
			</Accordion>
			<Accordion
				title="Accordion 2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
			</Accordion>
			<Accordion
				title="Accordion 3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
			</Accordion>
		</Section>
	)
};

export default SecAccordion;