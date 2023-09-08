![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

## Coffee Atlas html/css
![Am I responsive](documentation/am-i-responsive.png)

Visit the deployed site: [Plant Atlas](https://andre-42.github.io/CodeInstitute-CSS-HTML_coffeeAtlas/)

## Contents

* [General Intent](#general-intent)
    * [Features](#features)
    * [Usage](#usage)
* [Design]

## General Intent
The Coffee Atlas is a web platform designed to introduce students and interested people to the world of plant biology and chemistry, with a focus on coffee cultivation. This page has been created as a learning resource for students, as well as for anyone with an interest in understanding the intricate processes that go into growing coffee.

### Features
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

### Features

The website is comprised of a home page and a secondary page with content regarding the coffee seed in context of plant diseases.

All pages are responsive and have:

* A favicon in the browser tab.
* The main title in the header and a responsive navigation bar under the header or on left the side of the page.
* The footer acts as a contact section with links to external sites to get in touch with me or the IPK. The footer can be reach by clicking the contact button at the navbar.
* The lower right corner of the page holds a link icon which takes you back to the top of the page.
* The curser changes in response to hovering above links, buttons and selection items. 
* The navbar has dropdown functionality for hovering on desktop screens (see style.css file). Hover functions are switched off (see style.css file) for touchscreen users and JS was implemented to imitate dropdown functionality on touch devices.

#### The Home Page


#### The Aborted Seed Page


#### Future Implementations


### Accessibility

I have been mindful to improve accessibility after first deployment and project submission to my study accessment.

This has been achieved by:
* Using semantic HTML e.g., header, main, section, footer, etc.
* Using hover functionality on interactive content and employing alternative means for touchscreen usage
* Choosing a simple font style for better readability
* Using contrasting colors as best as possible between background and text within the given color scheme.



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

### HTML validator

![nu HTML validator](documentation/html-validation.png)
The HTML content was validated by nu validator (https://validator.w3.org/#validate_by_uri).

### CSS validator

![W3C css validator](documentation/css-validator.png)
The CSS was validated by Jigsaw validator (https://jigsaw.w3.org/css-validator/) without any issues.

### Accessibility

![Lighthouse](documentation/accessibility-lighthouse.png)
Accessibility was tested using Lighthouse within the chrome developer tools.

### Solved Bugs

| No | Bug | How I solved the issue |
| :--- | :--- | :--- |
| 1 | explain bug | explain solution |


### Known Bugs

* There is still a minor alignment issue when viewing the websites 2nd page in horizontal mode on my phone (iPhone SE2). Idealy the Video and image in the first section should either be in one line (horizontal) or below each other and as wide as the text column (vertical mode). Its response is correct when checked in the chrome developer tools but when I view it on my phone I see a missalignment issue.

* Load time seems to be an issue with larger images and the video file. This could be immproved in future iterations by further customizing image sizes and resolution and connecting videos via external links and store them on sites like youtube. 

 
