// header
// - h1
// - nav
//   - a
//   - a
const container = document.getElementById("container");

document.body.style.fontFamily = "sans-serif";

const header = document.createElement("header");
header.style.color = "white";
header.style.backgroundColor = "#65a6f3";
header.style.display = "flex";
header.style.padding = "0 20px";

const heading1 = document.createElement("h1");
heading1.textContent = "HighOnCoding";
heading1.style.paddingRight = "20px";
header.appendChild(heading1);

const topNav = document.createElement("nav");
topNav.style.display = "flex";
topNav.style.alignItems = "center";
header.appendChild(topNav);

const link1 = document.createElement("a");
link1.textContent = "Home";
link1.href = "#";
link1.style.paddingRight = "20px";
link1.style.color = "white";
link1.style.fontWeight = "bold";
link1.style.fontSize = "18px";
link1.style.textDecoration = "none";
topNav.appendChild(link1);

const link2 = document.createElement("a");
link2.textContent = "Categories";
link2.style.fontSize = "18px";
link2.style.textDecoration = "none";
link2.href = "#";
link2.style.color = "white";
topNav.appendChild(link2);

container.appendChild(header);

const intro = document.createElement("div");
intro.style.color = '#555';
intro.style.backgroundColor = '#ccc';
intro.style.padding = '20px';
intro.style.marginTop = '20px';

container.appendChild(intro);

const introHeading = document.createElement("h2");
introHeading.style.marginTop = 'O';
introHeading.textContent = "Curse of the Current Reviews";
intro.appendChild(introHeading);

const introParagraph = document.createElement("p");
introParagraph.style.marginBottom = '0';
introParagraph.textContent = 
"When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors-price, screenshot and reviews. "
intro.appendChild(introParagraph);

const body = document.createElement("body");
body.style.padding = '10px';
body.style.marginTop = '20px';
container.appendChild(body);


const body1Heading = document.createElement("h3");
body.style.color = "#3921FF";
body1Heading.style.marginTop = '0';
body1Heading.style.fontWeight = '100';
body1Heading.style.fontSize = '24px';
body1Heading.textContent = 'Hello WatchKit';
body.appendChild(body1Heading);

const body1Paragraph = document.createElement("p1");
body1Paragraph.style.color = "#555";
body1Paragraph.fontSize = "18px";
body1Paragraph.style.marginBottom = "0";
body1Paragraph.textContent = 
"Last month, Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDA release. The WatchKit framework enables the developers to create Apple Watch applications. In this article, we are going to focus on the basics of getting started with the WatchKit framework and developing apps for Apple Watch."
body.appendChild(body1Paragraph);

const body1Footer = document.createElement("f1");
body1Footer.style.color = "white";
body1Footer.style.backgroundColor = "#F57521";
body1Footer.style.display = "flex";
body1Footer.style.alignItems = "left";
body1Footer.textContent = "12 comments     124 Likes";
body1Footer.style.padding = "7px";
body.appendChild(body1Footer);

const body2Heading = document.createElement("h4");
body2Heading.style.color = "#3921FF";
body2Heading.style.marginTop = '1';
body2Heading.style.fontWeight = '100';
body2Heading.style.fontSize = '24px';
body2Heading.textContent = 'Introduction to Swift';
body.appendChild(body2Heading);

const body2Paragraph = document.createElement("p2");
body2Paragraph.style.color = "#555";
body2Paragraph.fontSize = "18px";
body2Paragraph.style.marginBottom = "0";
body2Paragraph.textContent = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications, SWift is a fairly new language and still in development but it clearly reflect the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."
body.appendChild(body2Paragraph);

const body2Footer = document.createElement("f2");
body2Footer.style.color = "white";
body2Footer.style.backgroundColor = "#F57521";
body2Footer.style.display = "flex";
body2Footer.style.alignItems = "left";
body2Footer.textContent = "15 comments     45 Likes";
body2Footer.style.padding = "7px";
body.appendChild(body2Footer);












