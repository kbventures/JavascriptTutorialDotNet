// Universal selector

// Selects first elements in page(HTML)
let element = document.querySelector('*');
console.log(element);

// Entire node list
let elements = document.querySelectorAll('*');
console.log(elements);

// Transform nodeList to an array
let nodeList = Array.from(document.querySelectorAll('*'));
console.log(nodeList);

// You can manipulat a nodeList because it's from the DOM API. First you need to
// transform it to an array like example above.

// We can use querySelector to search for a type of element
// The following finds the FIRST h1

let firstHeading = document.querySelector('h1');
console.log(firstHeading);

// The following finds ALL h2. Remember it returns a node list.

let allHeading2 = document.querySelectorAll('h2');
console.log(allHeading2);
let h2nodeList = Array.from(document.querySelectorAll('h2'));
console.log(h2nodeList);

// You can use query selecgtor to search for class attributes
// The following example finds the first element with the menu-item class
let note = document.querySelector('.menu-item');
console.log(note);

// And the following example finds all elements with the menu class
let notes = document.querySelectorAll('.menu-item');
console.log(notes);
let convertedNotes = Array.from(document.querySelectorAll('.menu-item'));
console.log(convertedNotes);

// The following example finds the first element with the id #logo

let logo = document.querySelector('#logo');
console.log(logo);

// The following example finds the first element with the attribute [autoplay] with any value;

let autoPlay = document.querySelector('[autoplay]');
console.log(autoPlay);

// And the following example finds all elements that have [autoplay] with any value;

let autoPlays = document.querySelectorAll('[autoplay]');
console.log(autoPlays);
let convertedAutoPlays = Array.from(document.querySelectorAll('[autoplay]'));
console.log(convertedAutoPlays);

// Grouping selectors
// The following example finds all <div> and <p> elements:

let groupElements = document.querySelectorAll('div, p');
console.log(groupElements);

// Combinators
// 1 Descendant combinator
// For example p a will match all <a> elements inside the <p> element;
let links = document.querySelector('p a');
console.log(links);

// 2 Child combinator
// The child > combinaator finds all elements that are direct children of the first element
// The following example finds all li elements that are directly inside a <ul> element:

let listItems = document.querySelectorAll('ul > li');
console.log(listItems);
let converteredListItems = Array.from(document.querySelectorAll('ul > li'));
console.log(converteredListItems);

/*
The Child Combinator (>) only selects those HTML Elements that are direct children 
of a specified element.

While the Descendant Combinator selects all HTML Elements that are either children,
 grandchildren, great grandchildren and so on. They all are descendants of a 
 specified element and thus all are selected.
*/

// To selectt all li elmements that are directly in side a <ul> element witht he class nav
let listItemsClass = document.querySelectorAll('ul.nav > li');
console.log(listItemsClass);
let convertedListItemsClass = Array.from(
  document.querySelectorAll('ul.nav > li')
);
console.log(convertedListItemsClass);

//  3 General Sibling combinator
// for example p ~ a will match all <a> elements that follow p element, immediately or not
let links2 = document.querySelectorAll('p ~ a');
console.log(links2);
let convertedLinks2 = Array.from(document.querySelectorAll('p ~ a'));
console.log(convertedLinks2);

// 3 General sibling combinator
// The + adjacent sibling combinator selects adjacent siblings
// This example selects the a that directly follows h1
let adjacentLinks = document.querySelectorAll('h1 + a');
console.log(adjacentLinks);

// Pseudo
// The pseudo matches elements based on their states
// a:visited matches <a> elements that have been visited
let visitedLinks = document.querySelectorAll('a:visited');
console.log(visitedLinks);

// Pseudo-elements
// The :: represents entities that are NOT included in the document
// For example, p::first-line matches the first-line of all div elements
let pseudoElementLinks = document.querySelectorAll('p::first-line');
console.log(pseudoElementLinks);
