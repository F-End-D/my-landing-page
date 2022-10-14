/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

//getting through an element:
let prevSection = document.getElementById('section3')

//creating and appending contents arrow function.
const createSection = () => {
    for (let i = 4; i <= 5; i++) {
        //create new sections
        let newSection = document.createElement('section')
        //setting attr to the new sections
        newSection.setAttribute('id', 'section' + i)
        newSection.setAttribute('data-nav', 'section ' + i)
        //placing the new section right after the 3rd one
        prevSection.insertAdjacentElement('beforeend', newSection)
        //console.log(newSection);

        //create new div
        let newDiv = document.createElement('div')
        //adding attr to the new div
        newDiv.classList.add('landing__container')
        //placing div's into the sections
        newSection.appendChild(newDiv)
        //console.log(newDiv)

        //create heading
        let newheading = document.createElement('h2')
        //add text content to the h2
        newheading.textContent = 'Section ' + i
        //add attr to the h2
        newheading.setAttribute('id', 'section__h' + i)
        //adding heading to the div's
        newDiv.appendChild(newheading)

        //create new paragraphs
        let newPara1 = document.createElement('p')
        let newPara2 = document.createElement('p')
        //add textcontent to the paragraphs
        newPara1.textContent =
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.'
        newPara2.textContent =
            'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'
        //append the new div and placing the paragraphs onto them
        newDiv.appendChild(newPara1)
        newDiv.appendChild(newPara2)
    }
}
createSection()

//calling ul
let ulList = document.getElementById('navbar__list')

//create navigation list arrow function
const newList = () => {
    for (let i = 1; i <= 5; i++) {
        //create li
        let newLi = document.createElement('li')
        //set attr to the navigation lis
        newLi.classList.add('navbar__menu')
        newLi.setAttribute('id', 'li' + i)
        ulList.appendChild(newLi)

        //add anchores to the list
        let newAnch = document.createElement('a')
        //add attr to the anchores
        newAnch.setAttribute('id', 'anch' + i)
        //newAnch.setAttribute('href', '#section' + i)
        newAnch.classList.add('menu__link')

        //create text Node
        let textNode = document.createTextNode('Section ' + i + '| ')
        //add text to anchor tags
        newAnch.appendChild(textNode)
        //add anchors to <li>
        newLi.appendChild(newAnch)
        //add <li> to <ul>
        ulList.appendChild(newLi)
        ulList.style.backgroundColor = 'add8e6'

        //add event listener to the menu bar
        const onclick = document
            .querySelector('#navbar__list')
            .addEventListener('click', (evt) => {
                //initiate anchores variables
                let sec1 = document.getElementById('anch1')
                let sec2 = document.getElementById('anch2')
                let sec3 = document.getElementById('anch3')
                let sec4 = document.getElementById('anch4')
                let sec5 = document.getElementById('anch5')

                //performing click event
                switch (evt.target) {
                    case sec1:
                        document.getElementsByTagName('h2')[0].scrollIntoView()
                        document.getElementsByTagName('h2')[0].style.cssText =
                            'scroll-behavior:smooth; color:#FFD700;'
                        break
                    case sec2:
                        document.getElementsByTagName('h2')[1].scrollIntoView()
                        document.getElementsByTagName('h2')[1].style.cssText =
                            'scroll-behavior:smooth; color:#FFD700;'
                        break
                    case sec3:
                        document.getElementsByTagName('h2')[2].scrollIntoView()
                        document.getElementsByTagName('h2')[2].style.cssText =
                            'scroll-behavior:smooth; color:#FFD700;'
                        break
                    case sec4:
                        document.getElementsByTagName('h2')[3].scrollIntoView()
                        document.getElementsByTagName('h2')[3].style.cssText =
                            'scroll-behavior:smooth; color:#FFD700;'
                        break
                    case sec5:
                        document.getElementsByTagName('h2')[4].scrollIntoView()
                        document.getElementsByTagName('h2')[4].style.cssText =
                            'scroll-behavior:smooth; color:#FFD700;'
                        break
                }
            })
    }
}
newList()

let head1 = document.getElementsByTagName('h1')[0]
const mediaRespose = () => {
    if (window.matchMedia('max-width: 653px')) {
        head1.style.marginTop = '4em'
        head1.style.marginBottom = '2em'
    }
}
mediaRespose()
