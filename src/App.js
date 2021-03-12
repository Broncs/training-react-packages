import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toastify from './components/Toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import ModalPackage from './components/ModalPackage';
import TippyPackage from './components/TippyPackage';
import CountUpPackage from './components/CountUpPackage';
import IdleTimerPackage from './components/IdleTimerPackage';
import ColorPickerPackage from './components/ColorPickerPackage';
import CreditCardsPackage from './components/CreditCardsPackage';
import DatePickerPackage from './components/DatePickerPackage';
import ReactPlayerPackage from './components/ReactPlayerPackage';
import ReactSpinnersPackage from './components/ReactSpinnersPackage';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';

function App() {
  return (
    <div>
      {/* <ToastContainer
        position={'bottom-right'}
        // autoClose={5000}
        // limit={3}
        // transition={Bounce}
        // rtl right to left
      />
      <Toastify /> */}
      {/* <ModalPackage /> */}
      {/* <TippyPackage /> */}
      {/* <CountUpPackage /> */}
      {/* <IdleTimerPackage /> */}
      {/* <ColorPickerPackage /> */}
      {/* <CreditCardsPackage /> */}
      {/* <DatePickerPackage /> */}
      {/* <ReactPlayerPackage /> */}
      {/* <ReactSpinnersPackage /> */}
      {/* <LineChart /> */}
      <BarChart />
    </div>
  );
}

export default App;
