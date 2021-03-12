import { useRef } from 'react';
import { toast } from 'react-toastify';

const Msg = ({ closeToast, toastProps }) => {
  return (
    <div>
      <p>hello</p>
      <button onClick={closeToast}>Close</button>
    </div>
  );
};

const Toastify = () => {
  const toastId = useRef(null);

  const notify = () => {
    toastId.current = toast(<Msg />, {});
  };

  const dismiss = () => toast.dismiss(toastId.current);

  return (
    <div>
      <button onClick={notify}>This render the notification</button>
      <button onClick={dismiss}>remove</button>
    </div>
  );
};

export default Toastify;
