import { useState } from 'react';
import './App.css';

function CalcDisplay({ dispValue }) {
  return (
    <div className='Display'>
      {dispValue}
    </div>
  );
}

function CalcButton({ buttonLabel, buttonClassName = 'Button', onCLick }) {
  return (
    <button className={buttonClassName} onClick={onCLick}>
      {buttonLabel}
    </button>
  );
}

function App() {
  const INITIAL_DISPLAY = "10 Things That Require Zero Talent";
  const [disp, setDisp] = useState(INITIAL_DISPLAY);

  // Mapping of numbers 0-9 to their respective "Zero Talent" items
  const talentMap = {
    '1': 'Being On Time',
    '2': 'Making An Effort',
    '3': 'Being High Energy',
    '4': 'Having A Positive Attitude',
    '5': 'Being Passionate',
    '6': 'Using Good Body Language',
    '7': 'Being Coachable',
    '8': 'Doing A Little Extra',
    '9': 'Being Prepared',
    '0': 'Having A Strong Work Ethic'
  };

  const keyClickHandler = (key) => {
    if (key === 'CLR') {
      setDisp(INITIAL_DISPLAY);
    } else if (key === 'NAME') {
      setDisp("CARL JUSTINE MANGUNE");
    } else if (key === 'SUBJ') {
      setDisp("C-PCIT9");
    } else if (talentMap[key]) {
      setDisp(talentMap[key]);
    }
  };

  return (
    <div className='App'>
      {/* Requirement A: Full Name and Section at top header */}
      <div className='Header'>
        CARL JUSTINE MANGUNE - WMD3A
      </div>

      <div className='Calculator'>
        {/* Requirement B: Initial Display on start */}
        <CalcDisplay dispValue={disp} />

        <div className='Keypad'>
          {/* Keypad arrangement matching requirement C */}
          <CalcButton buttonLabel={7} onCLick={() => keyClickHandler('7')} />
          <CalcButton buttonLabel={8} onCLick={() => keyClickHandler('8')} />
          <CalcButton buttonLabel={9} onCLick={() => keyClickHandler('9')} />
          <CalcButton buttonLabel={"CLR"} buttonClassName="ClrButton" onCLick={() => keyClickHandler('CLR')} />

          <CalcButton buttonLabel={4} onCLick={() => keyClickHandler('4')} />
          <CalcButton buttonLabel={5} onCLick={() => keyClickHandler('5')} />
          <CalcButton buttonLabel={6} onCLick={() => keyClickHandler('6')} />
          <CalcButton buttonLabel={"SUBJ"} buttonClassName="SubjButton" onCLick={() => keyClickHandler('SUBJ')} />

          <CalcButton buttonLabel={1} onCLick={() => keyClickHandler('1')} />
          <CalcButton buttonLabel={2} onCLick={() => keyClickHandler('2')} />
          <CalcButton buttonLabel={3} onCLick={() => keyClickHandler('3')} />
          <CalcButton buttonLabel={0} onCLick={() => keyClickHandler('0')} />

          <CalcButton
            buttonLabel={"NAME"}
            buttonClassName="NameButton"
            onCLick={() => keyClickHandler('NAME')}
          />
        </div>
      </div>
    </div>
  );
}

export default App;