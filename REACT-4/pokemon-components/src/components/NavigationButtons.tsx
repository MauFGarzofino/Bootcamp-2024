interface NavigationButtonsProps {
  onPrevious: () => void;
  onRandom: () => void;
  onNext: () => void;
}

const NavigationButtons = ({ onPrevious, onRandom, onNext }: NavigationButtonsProps) => {
  return (
    <div className="navigation-buttons">
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onRandom}>Random</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default NavigationButtons;
