import Button from '../components/Button';

const ProductSection = ({
  ProductData,
  clearProduct,
  ...props
}) => {
  return (
    <div className="product-section" {...props}>
      <div>
        <img 
          src={ProductData.fotos[0].src}
          alt={ProductData.fotos[0].titulo} 
        />
      </div>
      <div>
        <h3>{ProductData.nome}</h3>
        <p>R$ {ProductData.preco}</p>
        <p>{ProductData.descricao}</p>
        <hr />
        <p>
          {ProductData.usuario_id}
        </p>
        <Button
          text={'Limpar'}
          secondary
          onClick={ () => clearProduct()}
        />
      </div>
    </div>
  )
};
export default ProductSection;