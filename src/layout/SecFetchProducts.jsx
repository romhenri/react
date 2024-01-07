import { useState, useEffect } from 'react';
import Section from '../components/Section';
import Title from '../components/Title';
import ButtonsLine from '../components/ButtonsLine';
import Button from '../components/Button';
import ProductSection from '../components/ProductSection';

const SecFetchProducts = () => {
  const [product, setProduct] = useState('');
  const [ProductData, setData] = useState(null);

  useEffect(() => {
    if (!product) return;
    fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${product}`
    )
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
      setData(json);
    });
  }, [product]);

  return (
    <Section>
      <Title>Fetch Products</Title>
      <ButtonsLine>
        <Button
          text={'Notebook'}
          secondary
          onClick={() => setProduct('notebook')}
          className={`${product === 'notebook'&&'active'}`}
        />
        <Button
          text={'Smartphone'}
          secondary
          onClick={() => setProduct('smartphone')}
          className={`${product === 'smartphone'&&'active'}`}
        />
        <Button
          text={'Câmera'}
          secondary
          onClick={() => setProduct('camera')}
          className={`${product === 'camera'&&'active'}`}
        />
        <Button
          text={'Smartwatch'}
          secondary
          onClick={() => setProduct('smartwatch')}
          className={`${product === 'smartwatch'&&'active'}`}
        />
        <Button
          text={'Tablet'}
          secondary
          onClick={() => setProduct('tablet')}
          className={`${product === 'tablet'&&'active'}`}
        />
      </ButtonsLine>
      <hr />
      {
        ProductData && (
          <ProductSection
            ProductData={ProductData}
            clearProduct={() => {
              setProduct('');
              setData(null);
            }}
          />
        )}
    </Section>
  )
};
export default SecFetchProducts;