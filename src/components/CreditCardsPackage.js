import { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const CreditCardsPackage = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  return (
    <div style={{ padding: '2rem' }}>
      <Cards
        number={number}
        cvc={cvc}
        name={name}
        expiry={expiry}
        focused={focus}
      />
      <form className="form-style">
        <input
          type="tel"
          name="number"
          value={number}
          placeholder="Number"
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="tel"
          name="expiry"
          value={expiry}
          placeholder="valid Thru MM/YY"
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="tel"
          name="cvc"
          value={cvc}
          placeholder="CVC"
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
      </form>
    </div>
  );
};

export default CreditCardsPackage;
