import './App.css';
import TextComp from './Components/TextComp/TextComp';

import matchMedia from './hoc/MatchMedia/MatchMedia';
import device from './hoc/Device/Device';

function App() {

    const media = '(max-width: 600px)';
    const whichDevice = 'isMobile';
    const options = 'max width suitable';

    const Comp = matchMedia(TextComp, media);
    const Comp1 = device(Comp);

  return (
    <div>
        <Comp text="Tom" options={options}/>
        <Comp1 text="John" device={whichDevice} options={options} />
    </div>
  );
}

export default App;
