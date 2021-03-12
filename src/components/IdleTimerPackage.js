import { useRef, useState } from 'react';
import IdleTimer from 'react-idle-timer';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const IdleTimerPackage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  const idleTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);

  const idleFunction = () => {
    setIsModalOpen(true);
    sessionTimeoutRef.current = setTimeout(logOut, 5000);
    console.log(sessionTimeoutRef.current);
  };

  const logOut = () => {
    clearTimeout(sessionTimeoutRef.current);
    setIsUserLoggedIn(false);
    setIsModalOpen(false);
  };

  const stayLog = () => {
    clearTimeout(sessionTimeoutRef.current);
    setIsModalOpen(false);
  };

  return (
    <div>
      {isUserLoggedIn ? <h1>Hello Jhonatan</h1> : <h1>hello guest</h1>}
      <Modal isOpen={isModalOpen}>
        <h1>You've been idle for a while,</h1>
        <p>you'll be logged out soon</p>

        <button onClick={logOut}>Log me out</button>
        <button onClick={stayLog}>stay log in</button>
      </Modal>
      {isUserLoggedIn && (
        <IdleTimer
          ref={idleTimerRef}
          timeout={3 * 1000}
          onIdle={idleFunction}
        ></IdleTimer>
      )}
    </div>
  );
};

export default IdleTimerPackage;
