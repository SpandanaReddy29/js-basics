//****************** Event Propagation ********************//
//Event Propagation determines in which order the elements receive the event
//Two ways to handle this event propagation
//That event can be anything like a mouse click event, submitting a form, pressing keys of a keyboard, etc.


//****************** Event Bubbling ********************//
//In Event Bubbling, inner most elements events is handled first and then the outer

//****************** Event Capturing ********************//
//Is also known as Event Trickling
//In Event Capturing, outer most elements events is handled first and then the inner

//**********************************************************************************************************//

//with addEventListner() method we can specify propagation type by using useCapture parameter
//An event listener contains three parameters and it can be defined using the following syntax:

//<element>.addEventListener(<eventName>,
//<callbackFunction>, {capture : boolean});

//<element>: The element to which an event listener is attached.
//<eventName>: It can be ‘click’,’key up’,’key down’ etc. events.
//<callbackFunction>: This function fires after the event happened.
//{capture: boolean}: It tells whether the event will be in the capture phase or in the bubbling phase
//If capture = false -- Event Bubbling -- By default
//If capture = true -- Event Propagation

//**********************************************************************************************************//
//****************** Event Delegation ********************//
//Event delegation is a technique where a parent element listens for events on behalf of its children
//where we delegate the responsibility of handling an event to a parent element.
//Instead of adding event listener to each and every similar element, we can add event listener to parent element
//and call an event on a particular target using the .target property of the event object.

//**********************************************************************************************************//

//****************** event.target, event.currentTarget, this.target ********************//
//event.target refers to the element that triggered the event, 
//this.target refers to the element to which the event listener is attached (i.e., the current context) 
//event.currentTarget refers to the element that is currently handling the event during its capture or bubbling phase.

//**********************************************************************************************************//

//******************  Stop Propagation ********************//
//event.stopPropagation() prevents the further propagation of an event through the DOM tree