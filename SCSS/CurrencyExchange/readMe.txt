Grid Layout : The application has three layers, first one has one section, second one has two and the third has one as well. This has been handled using Grids
Flexbox : The second section of the second layer has columns of similar data intended to be spread evenly in it's container. Flexbox is used to do that.
Variables : The color pallette of the website is controlled by the header color, that is stored in a variable.
Custom Properties : The components within the grid have a fixed size. The size of the components is stored in a custom property
Nesting : The resting, hover and active properties of anchor links are specified using nesting. 
Interpolation : The naming for each component of the main grid is partially controlled by a variable that is interpolated into the grid description
Placeholder selectors : Multiple components are impacted by the same color. That color has been extracted out within a placeholder selector that is included within the requisite selectors. 
Mixins : The alignment of the footer is included as a mixin. 
Functions : On changing the header color variable, the colors of the remaining sections are decided based on logic within the function. 