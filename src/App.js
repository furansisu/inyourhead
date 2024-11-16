import Icons from './Icons';
import Sidenav from './Sidenav.js';
import './App.css';

function App() {
  const handleClick = () => {

  };

  return (
    <div className="Icons">
      <Sidenav onClickLink={handleClick}/>
      <div class="top-right-icons">
        <div class="flex-column-topright" style={{gap: 10}}>
          <div class="small-p" style={{textAlign: 'center'}}>RONAN WRITES</div>
          <Icons />
        </div>
      </div>
      <div class="flex-column">
        <h1>Say what you want to say effectively.</h1>
        <p class="small-p">Beyond copy, I help clients make the ideas in their heads work for them.</p>
        <div class="spacer"></div>
        <p class="small-p">Stuck in a marketing trap? Having a brand hurdle? Facing a creative block?</p>
        <p class="bold-small-p"><b>I might be able to help.</b></p>
      </div>
    </div>
  );
}

export default App;
