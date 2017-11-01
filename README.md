# hog-props-intro

In this program, we have three components the App, the Master Hog, and the Baby Hog. Your job is to render on the page the Master Hog with its name, weight, and eye color as well as it's Baby Hog components with their name weights and eye colors. 

The master Hog passes down it's genes to the baby hogs including it's beautious eye color. Each baby hog receives it's eyecolor from the master Hog however the baby hogs should be able to change their weight independently without re-rendering the other components. Additionally, you should be able to change the eye color of the master Hog which will then trigger it's child components to rerender. 

Hint: the App already imports the data for the BabyHog component. You need simply to pass it down as props to the next component in your program until you can use it to make baby hogs.

## Directions: 
  * Pass the information for the Offspring down as props to the next component to use to create BabyHog components
  * Use the radio buttons provided to alter the eye color state of the MasterHog component
  * Render the BabyHog components and their images based on the eye color prop from the MasterHog 
  * Use state in the BabyHog component to change the image height of the Baby Hogs, and change the state accordingly when the increase or decrease buttons are clicked. (a good starting image height is '200px' and 10 is a good amount to increment/decrement.
