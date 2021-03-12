import { SyncLoader, RingLoader, PacmanLoader } from 'react-spinners/';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 100px;
`;

const packman = css`
  margin-top: 50px;
  display: block;
  padding: 20px;
`;

const ReactSpinnersPackage = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div>
        <SyncLoader css={override} loading size={50} color="#9999a9" />
      </div>
      <div>
        <RingLoader css={override} loading size={50} color="#9999a9" />
      </div>
      <div>
        <PacmanLoader css={packman} loading size={50} />
      </div>
    </div>
  );
};

export default ReactSpinnersPackage;
