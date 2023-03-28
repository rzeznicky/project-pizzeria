import { select, templates } from '../settings.js';
import AmountWidget from './AmountWidget.js';

class Booking {
  constructor(container){
    const thisBooking = this;
    thisBooking.render(container);
    thisBooking.initWidgets();
  }
  render(container){
    const thisBooking = this;
    thisBooking.dom = {};
    thisBooking.dom.wrapper = container;
    thisBooking.dom.wrapper.innerHTML = templates.bookingWidget();
    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
  }
  initWidgets(){
    const thisBooking = this;

    thisBooking.amountWidgetPeople = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.dom.peopleAmount.addEventListener('updated', function(){
      
    });
    thisBooking.amountWidgetHours = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.dom.hoursAmount.addEventListener('updated', function(){
    
    });
    
  }
}

export default Booking;