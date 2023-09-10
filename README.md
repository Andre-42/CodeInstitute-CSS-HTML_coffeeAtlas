![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

## Coffee Atlas html/css
![Am I responsive](documentation/am-i-responsive.png)

Visit the deployed site: [Plant Atlas](https://andre-42.github.io/CodeInstitute-CSS-HTML_coffeeAtlas/)

## Contents

* [General Intent](#general-intent)
    * [Concept](#concept)
    * [Usage](#usage)
* [Design](#design)
    * [Color Scheme](#color-scheme)
    * [Typography](#typography)
    * [Imagery](#imagery)
    * [Wireframes](#wireframe)
    * [HTML And CSS Features](#features)
    * [Accessibility](#accessibility)
* [Deployment And Local Development](#deployment--local-development)
    * [Deployment](#deployment)
    * [Local Development](#local-development)
* [Testing](#testing)
    * [Solved Bugs](#solved-bugs)
    * [Known Bugs](#known-bugs)

## General Intent
The Coffee Atlas is a web platform designed to introduce students and interested people to the world of plant biology and chemistry, with a focus on coffee cultivation. This page has been created as a learning resource for students, as well as for anyone with an interest in understanding the intricate processes that go into growing coffee.

### Concept
- **Interactive Learning:** The Coffee Atlas offers an engaging learning experience. It prompts users with a thought-provoking question, "How long does it take to make a cup of coffee?" to spark curiosity and set the stage for exploration.

- **Informative Content:** The platform provides concise and accessible information about the biology and chemistry of coffee plants. Users can delve into topics like sugar transport, cell wall processing, and protein features related to coffee growth and disease response during development.

- **Visual Presentation:** I use visual aids, images, video and well-structured content to enhance the learning experience. The website is designed with clarity and user-friendliness in mind.

- **Accessibility:** Coffee Atlas is accessible to all users, ensuring that knowledge about plant biology and chemistry is within reach for everyone. To this end topics are only presented in simple terms without diving to deep into the science.

- **Future Intent:** This website is intended to give researchers and others who would be interested in creating a much more comprahensible repository for image based plant science a chance to reach out to myself and my colleagues at the IPK through links in the footer.

### Usage

1. Visit the [Coffee Atlas website](https://andre-42.github.io/CodeInstitute-CSS-HTML_coffeeAtlas/).
2. Explore the introductory question and the topics related to coffee growth.
3. Engage with the content and enrich your understanding of plant biology and chemistry.
4. Contact us (me or the IPK) through the links provided to get involved.

## Design

### Color Scheme

As this website is about the coffee plant, I wanted to stick to green colors to keep the color scheme relevant.

In my css file I used the following colors to represent that theme:

![The Plant Atlas Color Scheme](documentation/color-palette.png)

* I have used '#ecfdcc' as a backgound color & '#2C3A0E' as a contrasting primary color used in the main body text.
* The header uses the fallback color '#0c950c' but uses a background image in its standard implementation.
* The footer uses the same background image. However uses a darker background color '#014901' as fallback. This is the same background color as for the navigation bar to frame the main section.
* Buttons, hovered divs and dropdown segments of the menubar are colored '#016401' to present a slight contrast.
* The current button/menu segment of the navbar that represents the html that is currently visited is highlighted in '#9ACD32'.
* The alternative text color used on dark backgrounds is '#f5f5f5'.

### Typography

Google Fonts was used for the primary font Quicksand. Backup fonts are Verdana and Times New Roman. The entire text is held in Quicksand.

### Imagery

Content images come from my research data on coffee imaging which was produced at the IPK (https://www.ipk-gatersleben.de/). This data was presented at the XIV Symposium of Plant Biotechnology by me:
* A. Guendel, S. Wagner, Ortleb, S. Kalms, L., H. Rolletschek and L. Borisjuk; Investigation of early seed development in Coffea arabica using nuclear magnetic resonance (MRI) and infrared imaging. XIV Symposium on Plant Biotechnology, Cayo Santa Maria, Cuba, 2022

### Wireframe
Wireframes were created for vertical and horizontal screen sizes using Powerpoint.
![Page with video and image content](documentation/wireframe-page.png)

![Page with broad image panel](documentation/wireframe-wide-image-panel.png)

![Page with multiple images together](documentation/wireframe-multimage.png)

![Page with selection box](documentation/wireframe-select.png)

![Page end with image and flowing text](documentation/wireframe-end-of-page.png)

### Features

The website is comprised of a home page and a secondary page with content regarding the coffee seed in context of plant diseases.

All pages are responsive and have:

* A favicon in the browser tab.
![Favicon](documentation/fav-icon-tab.png)
* The main title in the header and a responsive navigation bar let you navigate between html pages and the contact section. The current page is highlighted and each button reacts to hovering by visual changes.
    ![Page Change](documentation/change-page.png)
    The navbar is located under the header or on left the side of the page.
    ![Header and Navbar](documentation/dropdown-touch.png)
    The dropdown menu reacts to hover and touch actions to extent or collapse subchapter navigation on the current page and links between each HTML page as well as with the footer where the contact information is located by clicking on the buttons.
    ![Dropdown Function](documentation/dropdown-menu.png)
    The links within the collapsable section of the navbar link to other sections of the page.
* The footer acts as a contact section with links to external sites to get in touch with me (LinkedIN, Researchgate and Github) or the IPK via the logo. The footer can be reached by clicking the contact button at the navbar.
![Contact](documentation/contact.png)
* The lower right corner of the page holds a link icon which takes you back to the top of the page.
![Back to top](documentation/back-to-top.png)
* The curser changes in response to hovering above links, buttons and selection items. 
* The navbar has dropdown functionality for hovering on desktop screens (see style.css file). Hover functions are switched off (see style.css file) for touchscreen users and JS was implemented to imitate dropdown functionality on touch devices.

#### The Home Page
![Main Page](documentation/am-i-responsive.png)
The home page introduces the reader to the topic of coffee by asking a question to catch further interest in the topic. It has two main sections other than header, navbar and footer, which are reachable by the dropdown navbar section or scrolling down. The first section is the introduction question related information while the second section gives information about coffee development. At the end of the text you can find a small coffee icon within the text that takes you away to the second HTML page if you press it. 
![Switch Page By Icon](documentation/internal-link.png)

#### The Aborted Seed Page
![Seed Abort Page](documentation/am-i-responsive-2.png)
The second page delves deeper into the coffee seed and what can happen when diseases effect the tree. At first the reader is introduced to the inner structure of the coffee cherry. Here the user has a chance to start a video which shows the different parts of the coffee seed inside the cherry by MRI. Two cross sections are also provided.
![Coffee MRI](documentation/mri-video.png)
The next section introduces the reader to different coffee diseases and provides links to external sites with related information. Links are executed in a new tab.
![External Links](documentation/external-link-content.png)
The third section introduces the reader to the chemistry within the coffee cherry and how different it looks between healthy and aborted coffee beans (seeds). The reader is able to select between three different chemical groups to see how they are distributed within the cherry. The chemical images are combined with a MRI cross section that shows the internal structure.
![Chemical Mapping](documentation/chem-select.png)
The last section shows you the structure of the supply veins within the cherry that feed the beans.

#### Future Implementations
The footer says what I'd like to do with this page if given the chance. As it largely depends on additional information provided by research it needs collaboration with others. The goal would be to create a full compemdium of what happens with a coffee bean from flower to cup both structurally and chemically. So my page is just a teaser on that path. I have more data on the topic but nothing complete unfortunately. Which means futur implementations need support from others.

### Accessibility

I have been mindful to improve accessibility after first deployment and project submission to my study accessment.

This has been achieved by:
* Using semantic HTML e.g., header, main, section, footer, etc.
* Using hover functionality on interactive content and employing alternative means for touchscreen usage.
* Choosing a simple font style for better readability.
* Using contrasting colors as best as possible between background and text within the given color scheme.

Accessibility has been tested with Lighthouse in google developer tools, refere to [test section](#testing).

## Technologies Used

### Languages Used

HTML, CSS, Javascript (if implementation wasn't achievable in css and html alone)

### Frameworks, Libraries & Programs Used

* Am I Responsive?: display website responsiveness
* Amira: video editing
* VideoProc Vlogger: video compression
* CodeAnywhere: IDE for site creation
* Powerpoint: wireframe creation and image assembly
* Favicon.io: favicon creation
* Git: version control
* Github: file storage for website and repository template
* GitPod: IDE for site creation
* Google Fonts: font-family import
* Google Developer Tools: troubleshooting, feature testing, styling 
* iloveimg.com: image compression
* Matlab: MRI & chemical image processing
* Webpage Spell-Check: chrome extension for spell checking

Some default assets may be missing from the list. This may be if I am unaware of there use in background operations during the creation of the project and I have not used them actively.

## Deployment & Local Development

### Deployment

The site is deployed using GitHub Pages - [Plant Atlas](https://github.com/Andre-42/CodeInstitute-CSS-HTML_coffeeAtlas/).

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [Andre-42/CodeInstitute-CSS-HTML_coffeeAtlas](https://github.com/Andre-42/CodeInstitute-CSS-HTML_coffeeAtlas/).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [Andre-42/CodeInstitute-CSS-HTML_coffeeAtlas](https://github.com/Andre-42/CodeInstitute-CSS-HTML_coffeeAtlas/)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [Andre-42/CodeInstitute-CSS-HTML_coffeeAtlas](https://github.com/Andre-42/CodeInstitute-CSS-HTML_coffeeAtlas/)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -

## Testing

Please refer to [TESTING.md](TESTING.md) file for all testing carried out.

### Solved Bugs

| No | Bug | How I solved the issue |
| :--- | :--- | :--- |
| 1 | Alignment issues were observed at multiple stages to convert the desktop version into more mobile appropriate sizing. In particular gaps between header and navbar were an issue when the aspect ratio of the header changes. This is due to the fact that both are absolutly positioned and fixed so that they stay in place while scrolling. | I identified breakpoints for screen widths where such alignmentent issues occured and implemented css rule changes regarding display options, margins and padding. In case of the header and navbar issue it was a simple fix of adjusting the 'top:' property appropriotly.  |
| 2 | When width references were stated in 100vw. I had boundary issues creating a horizontal scroll bar.| After reading a few posts online about the issue, i realized that this issue comes from margins and their relationship with parental boundaries. I could fix that by using % width declarations. |
| 3 | When jumping to specific sections on the web page via links. The top of those sections were hidden behind the header and navbar. | I knew it was due to the fixed position of header. This makes the top of the section align with the top of the browser after using the link. While browsing this question I read about the use of pseudo-classes for this problem and implemented a solution using ::before. |
| 4 | Fixed position items moved when scrolling while checking the page in developer tools with android phone settings. | Stackoverflow helped again. I found the same issue there and the fix was to add content="minimum-scale=1" to <meta> in the head of the HTML. |
| 5 | Trouble with active statement and hover in touchscreen mode. While my dropdown menu in the navbar was expanding when pressing the not hidden link. It only appeared while pressing the link. When I lost touch with my finger it collapsed again. | I tried implementing different ways using :active and :focus pseudo classes and it partially worked. However this lead to a point that the dropdown part did not hide again when focus should have been on a different section of the page. In the end I resorted to using JS functions for this purpose to create a collapsable dropdown menu for touch applications. |

#### HTML And Essentials Assessment Result Fixes
| Criterion | Issue | How I solved the issue |
| :--- | :--- | :--- |
| 1.1 | Difficulty in Navigation | Fixed alignment issues with smaller screen sizes where menu items were obscured. Added missing link to contact button. |
| 2.2 | Failed to pass W3C validator | Code was changed to resolve all issues noticed in the validator. Validator passes now, see [TESTING.md](TESTING.md). |
| 2.3 | Failes to pass Jigsaw | Essential adjustments were made to style.css and it now passes. See [TESTING.md](TESTING.md). |
| 2.5 | No external links are used | External links to off-side content are now available as well as links to relevant social media sides for contact purposes. External links open in new tab. |
| 3.2 | Few big commits | I tried to commit changes on a more regular basis with smaller commits instead of larger ones during website improvement after first assessment. |
| 3.4 | Broken links hamper user experience | I fixed all links to open in new tab if external content is linked. Broken links were corrected and all links are now working. |
| 4.1 | Missing relevant steps or included but not described in detail. | I completed the readme and wrote a seperate [TESTING.md](TESTING.md) to include more detail in the discription and testing of the project. Missing chapters were added to the readme as suggested. Comments for better structuring of HTMLs and CSS-files were included. |
| 4.3 | Attributions missing. | Attributions were added for code segments taken literally from forums or code examples otherwise Tutuórial sides are attributed in the readme now. Used tools, etc. are also mentioned within the readme. |
| 4.4 | Jumbled or unclear separations of different code sections. | Code was thouroughly cleaned during debugging and validation process. |
| 4.5 | Code comments were missing for different sections. | Comments were added into html files. |
| 4.8 | File naming convention violated in the repository. | Files that failed the naming convention were renamed. Links that rely on those files were checked and filepaths corrected. |

### Known Bugs

* There is still a minor alignment issue when viewing the websites 2nd page in horizontal mode on my phone (iPhone SE2). Idealy the video and image in the first section should either be in one line (horizontal) or below each other and as wide as the text column (vertical mode). Its response is correct when checked in the chrome developer tools but when I view it on my phone I see a misalignment issue.
![Misalignment](documentation/se-bug-alignment-real.png)

* Load time seems to be an issue with larger images and the video file. This could be immproved in future iterations by further customizing image sizes and resolution and connecting videos via external links and store them on sites like youtube. 

## Credits

### Code usage and inspration

* I used forums like [stackoverflow.com](https://stackoverflow.com/) during trouble shooting to check causes for issues I ran into during development.

* Code Institute teaching material as well as websites like [w3schools.com](https://w3schools.com/) and [developer.mozilla.org](https://developer.mozilla.org/) to check execution and phrasing of code as well as example code.

* Github for [repository templates](https://github.com/Code-Institute-Org/ci-full-template) and [readme](https://github.com/kera-cudmore/TheQuizArms/tree/main) inspiration.

### Content

All the code was written by myself. Images and data for the content was provided by myself and my co-workers at the IPK and has been published during conferences like the one mentioned in this readme.

### Media

Background image for the header (https://www.freeimages.com/es/photo/coffee-bean-1637878)

### Acknowledgements

Thank you to the Team of the research group AAN at the IPK Gatersleben for being wonderful co-workers during the past 9 years I worked there.

Especially Ljudmilla Borisjuk, Hardy Rolletschek, Steffen Wagner and Stefan Ortleb.

Jubril Akolade, my mentor for his good advice and Code Institute when I was struggeling with IDE time credits.
