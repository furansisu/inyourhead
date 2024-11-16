import insta from './svg/insta.svg';
import linkedin from './svg/linkedin.svg'
import twitter from './svg/twitter.svg'
import './App.css';

function Icons() {
  return (
    <div className="Icons" class="flex-row"
    style={{gap: 20}}>
      <img style={{height: '2em', cursor: 'pointer'}} src={twitter} alt="twitter icon" />
      <img style={{height: '2em', cursor: 'pointer'}} src={insta} alt="insta icon" />
      <img style={{height: '2em', cursor: 'pointer'}} src={linkedin} alt="linkedin icon" />
    </div>
  );
}

export default Icons