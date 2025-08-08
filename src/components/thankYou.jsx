import iconComplete from '../assets/images/icon-complete.svg';

function ThankYou({ onContinue }) {
  return (
    <div className="thank-you-wrapper">
      <img src={iconComplete} alt="Completed" />
      <h1 className="thank-you-title">Thank You!</h1>
      <p className="thank-you-text">We've added your card details</p>
      <button onClick={onContinue} className="submit_btn">Continue</button>
    </div>
  );
}

export default ThankYou;