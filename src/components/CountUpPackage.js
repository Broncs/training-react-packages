import CountUp, { useCountUp } from 'react-countup';

const CountUpPackage = () => {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    end: 2000,
    delay: 0,
    duration: 5,
    startOnMount: true,
  });

  return (
    <div style={{ fontSize: '3rem' }}>
      <CountUp end={500} />
      <br />
      <CountUp end={200} duration={2} />
      <br />
      <CountUp start={500} end={1200} duration={5} />
      <br />
      <CountUp start={500} end={1000} duration={2} prefix="R$ " decimals={2} />
      <br />
      <CountUp end={500} onEnd={() => console.log('ebded')} />
      <br />
      <div>
        {countUp}
        <button onClick={start}>start</button>
        <button onClick={reset}>reset</button>
        <button onClick={pauseResume}>pause/resume</button>
        <button onClick={() => update(5000)}>update to 5000</button>
      </div>
    </div>
  );
};

export default CountUpPackage;
