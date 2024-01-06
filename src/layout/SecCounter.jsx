import { useState } from 'react';
import Section from '../components/Section';
import Title from '../components/Title';
import Button from '../components/Button';

const SecCounter = () => {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);
	const [count3, setCount3] = useState(0);
	const [count4, setCount4] = useState(0);

	return (
		<Section>
			<Title>Contadores (Estados)</Title>
			<p>
				Aqui temos 4 contadores que podem ser incrementados ou decrementados independentemente, cada um corresponde a um estado numérico. 
			</p>
			<p>
				Assim como variáveis, estados podem ser números, valores booleanos, strings, funções, arrays, objetos, etc.
			</p>

			<div className='container'>
				<div className='box'>	
					<Button 
						text={'-'} 
						secondary 
						onClick={() => setCount1(
							(count1 => count1 - 1)
						)}
					/>
					<div>{count1}</div> 
					<Button 
						text={'+'} 
						secondary
						onClick={() => setCount1(
							(count1 => count1 + 1)
						)}
					/>
				</div>

				<div className='box'>
					<Button 
						text={'-'} 
						secondary
						onClick={() => setCount2(
							(count2 => count2 - 1)
						)}
					/>
					<div>{count2}</div> 
					<Button 
						text={'+'} 
						secondary
						onClick={() => setCount2(
							(count2 => count2 + 1)
						)}
					/>
				</div>

				<div className='box'>
					<Button 
						text={'-'} 
						secondary 
						onClick={() => setCount3(
							(count3 => count3 - 1)
						)}
					/>
					<div>{count3}</div> 
					<Button 
						text={'+'} 
						secondary 
						onClick={() => setCount3(
							(count3 => count3 + 1)
						)}
					/>
				</div>

				<div className='box'>
					<Button 
						text={'-'} 
						secondary 
						onClick={() => setCount4(
							(count4 => count4 - 1)
						)}
					/>
					<div>{count4}</div> 
					<Button 
						text={'+'}
						secondary 
						onClick={() => setCount4(
							(count4 => count4 + 1)
						)}
						/>
				</div>
			</div>
		</Section>
	)
};

export default SecCounter;
