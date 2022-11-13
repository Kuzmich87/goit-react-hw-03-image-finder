import { TailSpin } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

export const Loader = () => {
  return (
    <Spinner>
      <TailSpin color="#FFA500 " />
    </Spinner>
  );
};
