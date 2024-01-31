import { Audio } from 'react-loader-spinner';
import {LoaderWrapper} from './App.styled';

const Loader = () => {
return (
<LoaderWrapper>
<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle={{}}
  wrapperClass
/></LoaderWrapper>)};

export default Loader;