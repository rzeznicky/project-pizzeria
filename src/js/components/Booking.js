import { select, templates } from '../settings.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';

class Booking {
  constructor(container){
    const thisWidget = this;
    thisWidget.render(container);
    thisWidget.initWidgets();
  }
  render(container){
    const thisWidget = this;
    thisWidget.dom = {};
    thisWidget.dom.wrapper = container;
    thisWidget.dom.wrapper.innerHTML = templates.bookingWidget();
    thisWidget.dom.peopleAmount = thisWidget.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisWidget.dom.hoursAmount = thisWidget.dom.wrapper.querySelector(select.booking.hoursAmount);
    thisWidget.dom.datePickerWrapper = thisWidget.dom.wrapper.querySelector(select.widgets.datePicker.wrapper);
    thisWidget.dom.hourPickerWrapper = thisWidget.dom.wrapper.querySelector(select.widgets.hourPicker.wrapper);
  }

  initWidgets(){
    const thisWidget = this;
 
    new AmountWidget(thisWidget.dom.peopleAmount);
    thisWidget.dom.peopleAmount.addEventListener('updated', function(){});
    new AmountWidget(thisWidget.dom.hoursAmount);
    thisWidget.dom.hoursAmount.addEventListener('updated', function(){});
    
    new DatePicker(thisWidget.dom.datePickerWrapper);
    new HourPicker(thisWidget.dom.hourPickerWrapper);


  }
}

export default Booking;