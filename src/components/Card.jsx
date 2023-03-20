import {useSelector} from 'react-redux';
import {selectNum, selectName, selectCvv, selectDate} from '../features/CardSlice';
import sim from '../img/sim.png';

const Card = () => {

  const number = useSelector(selectNum);
  const name = useSelector(selectName);
  const cvv = useSelector(selectCvv);
  const date = useSelector(selectDate);
  const keysNumber = Object.keys(number);
  const keysName = Object.keys(name);
  const keysCvv = Object.keys(cvv);

  return(
    <>
      <div className="card">
        <div className="card-front">
          <div className="card-front__wrapper">
            <div className="card-front-head">
              <div className="card-front-head__block">
                <img src={sim} alt=""/>
              </div >
              <div className="card-front-head__block">Visa</div>
            </div>
            <div className="card-front-main">

            { keysNumber.map((item) => <span key={item} className={
            number[item].animate ? 'animation' : ''
            } >{number[item].value}</span>)}

            </div>
            <div className="card-front-footer">
              <div className="card-front-footer__block">
                <span className="block_light">Card Holder</span>
                <span className='card-front-footer__name'>
                {keysName.map((item) => <span key={item} className={
                  name[item].animate ? 'animation' : ''
                }>{name[item].value}</span>)}
                </span>
              </div>
              <div className="card-front-footer__block">
                <span className="block_light">Expires</span>
                <span className={
                  date.day.value ? 'block_text animation' : ''
                }>
                  <span>{date.month.value}</span>/<span>{date.day.value}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-back">
          <div className="card-back__wrapper">
            <div className="card-back-head"></div>
            <div className="card-back-main">
              <div className="card-back-main-title">CVV:</div>
              <div className="card-back-main-field">{
                keysCvv.map((item) => <span key={item} className={
                  cvv[item].animate ? 'animation' : ''
                }>{cvv[item].value}</span>)
              }</div>
            </div>
            <div className="card-back-footer">
              <div className="card-back-footer__block">Visa</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;