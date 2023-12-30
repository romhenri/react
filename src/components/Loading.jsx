import icon_loading from '../assets/svg/loading.svg';

const Loading = () => {
  return (
    <img src={icon_loading} alt="" style={{
      width: '50px',
      height: '50px',
      opacity: '0.5',
    }}/>
  );
};

export default Loading;