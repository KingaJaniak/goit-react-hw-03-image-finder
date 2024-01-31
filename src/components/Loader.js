import { Audio } from 'react-loader-spinner';
import {LoaderWrapper} from './App.styled';

const Loader = () => {
return (
<>
<LoaderWrapper>
<Audio
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  visible={true}
/></LoaderWrapper></>)};

export default Loader;