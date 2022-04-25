import React, { useState, useEffect } from 'react';
import qps from '../images/qpsLogo.png'
import {payment} from '../api/payment' 
const Basket = () => {
    useEffect(() => {
      // Check to see if this is a redirect back from Checkout
      const query = new URLSearchParams(window.location.search);

      if (query.get('success')) {
        setMessage('Order placed! You will receive an email confirmation.');
      }

      if (query.get('canceled')) {
        setMessage(
          "Order canceled -- continue to shop around and checkout when you're ready."
        );
      }
     
      
    }, []);
     async function handleSubmit(e) {
       e.preventDefault();
       await payment();
     }
  return (
    <section className="basket-section">
      <div className="about-container">
        <div className="hero-text">
          <h1>Basket</h1>
          <div className="about-text">
            <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, aliquam delectus architecto rerum magnam ratione, dolorem minus temporibus, animi eius praesentium quasi possimus. Hic odio reiciendis eaque quaerat rerum commodi.
             Earum sunt, sequi sapiente itaque, deserunt similique iusto tempore beatae optio natus eum impedit ad consectetur saepe cum officiis dolore sint odio porro nemo, ducimus omnis recusandae neque voluptate. Accusamus.
             Accusamus nobis qui architecto illo quaerat quibusdam nam, fuga sapiente. Esse libero omnis quia, necessitatibus dolorum impedit, ea deserunt nisi deleniti accusamus nobis animi aperiam, illum maxime molestiae pariatur dicta?
             Id nobis voluptas voluptates est maxime quos modi temporibus, iste sunt provident autem aspernatur maiores placeat laborum. Impedit, eius. Impedit illum quasi cupiditate quo rem unde ad dolore assumenda optio!
             Sequi sapiente dolorem consequuntur numquam culpa sint ut molestiae, architecto provident enim accusantium nam fuga aliquid adipisci veritatis tenetur animi reiciendis magnam officiis ad odit harum obcaecati natus omnis. Adipisci?
            </p>

            <div className="basket-div">
              <div className="product">
                <img src={qps} alt="The fees" className="product-image" />
                <div className="description">
                  <h3>Student Fees</h3>
                  <h5>£3250</h5>
                </div>
              </div>
              <div className="product">
                <div className="description-text">
                  <p>
                    Internet Banking: The School’s bank details are shown below.
                    Please ensure that the pupil’s name or reference number is
                    included as a reference Bank Lloyds Sort Code 309136 Account
                    00101252 Account Name Bromsgrove School Direct Debit:
                    Parents are provided with the opportunity to pay termly fees
                    in 3 instalments through a direct debit scheme from a UK
                    bank account. This is a simple and convenient way of paying
                    school fees. You will still receive a termly bill as normal
                    but the invoice will detail the monthly amounts due. Each
                    term's fees are collected over three equal monthly
                    instalments. Parents who enter the direct debit scheme will
                    still be eligible for the £200 per term prompt payment
                    discount from Year 3, but this will be listed a direct debit
                    allowance on the bill. The collection dates are: Michaelmas
                    Term On or after the 5th September, October & November. Lent
                    Term On or after the 5th January, February & March Summer
                    Term On or after the 5th April, May & June. To set up a
                    direct debit arrangement, please complete the Direct Debit
                    Mandate and Acceptance Form, then contact the Finance
                    Office. Cheque: Please make cheques payable to “Bromsgrove
                    School”, and write the pupil account reference on the bank
                    of your cheque. Please forward your remittance advice and
                    cheque to the Finance Officer, Bromsgrove School, Worcester
                    Road, Bromsgrove B61 7DU, or direct to Lloyds Bank plc in
                    the pre-paid envelope provided. Debit/Credit Card: Please
                    call the Finance department on 01527 579679.
                  </p>
                </div>
              </div>
            </div>
            <form
              // action="http://localhost:8010/stripe-payments/1"
              // method="POST"
              
            >
              <button type="submit" 
              onClick={handleSubmit}
              >Checkout</button>
            </form>
          </div>

          <footer>
            Created at GA SEI62 &#126; Copyright &copy; 2022 , Mohamed Mohamed
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Basket;





