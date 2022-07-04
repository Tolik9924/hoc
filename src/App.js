import './App.css';
import TextComp from './Components/TextComp/TextComp';

import matchMedia from './hoc/MatchMedia/MatchMedia';
import device from './hoc/Device/Device';

function App() {

    const media = '(max-width: 600px)';
    const lengthWidth = media.split(' ')[1].split('');
    const width = lengthWidth.length === 6 ?
                  Number(media.split(' ')[1].split('').slice(0, 3).join('')) :
                  Number(media.split(' ')[1].split('').slice(0, 4).join(''));
    const whichDevice = 'isMobile';
    const options = 'max width suitable';

    const Comp = matchMedia(TextComp, media);
    const Comp1 = device(Comp);

  return (
    <div>
        <Comp text="Tom" options={options}/>
        <Comp1 text="John" device={whichDevice} options={options} width={width} />
    </div>
  );
}

export default App;
