import Tippy from '@tippyjs/react';
import { forwardRef } from 'react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-toward.css';

const ButtonRef = forwardRef((props, ref) => {
  return <button ref={ref}> i'm a component</button>;
});

const TippyContent = () => {
  return <span> I'm a separate component</span>;
};

const TippyPackage = () => {
  return (
    <div>
      <h1>his</h1>
      <div style={{ paddingBottom: '1rem' }}>
        <Tippy content="hello">
          <button>I'm first button</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: '1rem' }}>
        <Tippy content={<span style={{ color: 'yellow' }}>Hi colered</span>}>
          <button>I'm first button</button>
        </Tippy>
      </div>

      {/* children component */}
      <div style={{ paddingBottom: '1rem' }}>
        <Tippy
          disabled={false}
          content={<span style={{ color: 'white' }}>Hi colered</span>}
        >
          <ButtonRef />
        </Tippy>
      </div>
      {/* some PROPS */}
      <div style={{ paddingBottom: '1rem' }}>
        <Tippy
          arrow={false}
          // delay={[1000, 250]}
          placement="right-end"
          content={<span style={{ color: 'white' }}>Props toippy</span>}
        >
          <button>Props toippy</button>
        </Tippy>
      </div>

      {/* component CONTENT */}
      <div style={{ paddingBottom: '1rem' }}>
        <Tippy
          arrow={false}
          // delay={[1000, 250]}
          theme="tomato"
          content={<TippyContent />}
        >
          <button>Props toippy</button>
        </Tippy>
      </div>
      {/* Animations PROPS */}
      <div style={{ paddingBottom: '1rem' }}>
        <Tippy
          animation="shift-toward" //had to import  animations/scale.css
          content={<span style={{ color: 'white' }}>Animation toippy</span>}
        >
          <button>Props toippy</button>
        </Tippy>
      </div>
    </div>
  );
};

export default TippyPackage;
