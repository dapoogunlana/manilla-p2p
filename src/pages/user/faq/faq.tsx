import React, { useState } from 'react';
import { DropdownArrow } from '../../../assets/images';
import { faqData } from './faq-data';
import './faq.scss';

function Faq() {

  const [reactiveFaqs, setReactiveFaqs] = useState(faqData);

  const openQuestion = (index: number) => {
    const newFaqs = [...reactiveFaqs];
    if (newFaqs[index].active === true) {
      newFaqs[index].active = false;
    } else {
      newFaqs.map((item) => {
        item.active = false;
        return item;
      });
      newFaqs[index].active = true;
    }
    setReactiveFaqs(newFaqs);
  }
  return (
    <div className='faq'>
      <div className='top-band'>
        <div className='header-spacer'></div>
        <div className='topic-space'>
          <h2>FAQs</h2>
        </div>
      </div>
      <div className='content-body py-5'>
        <div className='w90 max-1200 py-5'></div>
        <div className='w90 max-1200'>
          <div className='cover'>
            <div className='item-card'>

            </div>
            {reactiveFaqs.map((item, index) => {
            return <div className="item my-4 clickable" key={index} onClick={() => openQuestion(index)}>
              <div className="spread-info py-2">
                <h6 className="increased-soft mb-0">{item.question}</h6>
                <div className={'view-icon' + (item.active ? ' full-view' : '')}>
                  <img src={DropdownArrow} alt="" />
                </div>
              </div>
              <div className={"answer" + (item.active ? ' full' : '')}>
                <p className="reduced-soft mb-0">{item.answer}</p>
              </div>
            </div>
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
