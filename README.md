[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=23471772)
# LBYCPG3 Term End Project — (Write Your Project Title Here)

**Group Members:** 

Alex Gabriel M. Guinto,
Miguel Dominic C. Lat,
Mark Gerald DG. Prieto


## Abstract

BantayPresyo is our solution for a possible offline application which is designed to assist local small-scale vendors in the Philippines, specifically those who operate in a local marketplace as well as those who are located in provincial areas, to make informed pricing decisions. Local vendors typically rely on hearsays as well as local supplier pricings which reduces profit margins as well as unfair pricing of products. This project aims to solve this problem by allowing vendors to input their prices, track and compare prices from different common categories of products.

Our web-based application utilizes three basic web technologies which are HTML, CSS, and Javascript. It particularly uses localStorage to enable offline monitoring of prices to reduce data consumption. It computes average prices from data inputted from the vendors which provides them with feedback if their pricing is fairly priced. Additionally, it also has a feature where vendors can see the pricing history of their chosen products as well as a simplified interface.

With our tests, the application generated results which showed that it effectively supported price monitoring and improved decision-making for our vendors. Overall, BantayPresyo encouraged vendors to price their products fairly, while still maintaining good profit margins. 

## Introduction

Our vendors in the Philippines, specifically those located in the wet markets as well as sari-sari stores, are the one who majorly contributes to their local respective economy. They usually depend on sourcing and selling of daily goods, which is difficult because it is subject to price changes and small profit margins.

One of the challenges they face in their daily operations is the lack of information regarding the changes in prices. Typically, they rely on their personal experiences with their own chosen suppliers, which leads to reduced profits.

This project aims to solve these problems through introducing BantayPresyo, a web-based application where users can compare prices and provide better options and decisions. It is a simple, lightweight app where it can operate offline and will update the next time you go online so that we’ll be able to match the real conditions of the target users.

## Description of the Proposed System

BantayPresyo is an application that is web based where it allows vendors to post their prices on a specific product and it also has a feature where they will be able to compare average prices from other vendors.

The system works by allowing users, particularly vendors, to input or post prices. It will then combine price data from multiple vendors to generate and display the average prices and its range. Lastly, it will provide alerts just in case the price of certain items are higher than average.

It has a feature where it can work offline by displaying the latest information gathered from the vendors and will update once the application gets access to an internet connection. It also has a simple interface so that vendors will be able to easily navigate and learn how the application works. Its main purpose is to help the vendors from overpriced goods and give them more options for higher profit margins and decision making.

## Objectives

- Create and develop a simple and lightweight web application for price uploading.
- Minimize application storage requirement as well as network usage.
- Help vendors with price comparison and with better buying of supplies.
- Create an application that works under areas with low coverage of the network.
- Create a simple and user friendly interface for vendors.

## Web Development Tools and Algorithms

Web Development Tools

HTML - used for the main codes and contains the structure and functionality of the application
CSS - used for the designs and layout of the UI/Interface
JavaScript - used for the logic and features of the application.

## Methodology

The development for this web application started by first identifying key challenges/setbacks faced by these small vendor owners, particularly there is a lack of basis if the price for the item is reasonable. To mitigate this, a data-lite and offline web application was conceived to address root problems to further assist vendors in making informed and critical decisions. The web application was first envisioned in figma make to understand how the general ui will work ensuring accessibility for everyone. Using the foundation set by figma make we implemented the application utilizing HTML, CSS, and JavaScript, with localStorage so that the application can be used offline and store user input data. We thought of arranging the products into predefined categories to streamline the ui and make it more user friendly. Users then can enter prices which are stored and processed to compute an average price. Using the average as a basis the program will determine where the item that is being purchased by the user is "mura,” “mahal,” or “sakto.” Additionally, we also thought of providing visual aid such as graphs to showcase present price trends and history. However, the current application only allows users to manually input data to simulate read world-usage. But, the program is designed with scalability in mind, allowing for future updates such as expansion like a multi-user platform that aggregates price data across different vendors and devices.

## Testing and Evaluation of Results

### Results

- Username Input
This page in the web application is the starting point for the application itself, presenting the username input where the user will input their name and then they will press enter. I don't know why it's just the username but no password. 

- Home Screen
After inputting the username and pressing the green button, the user will be presented with the home screen where they can see the main categories of which they can select to further specify the item they want to compare prices with. 

- Item List
After picking the subsection the user will be presented with the items within the subsection. In this page the user can choose the specific item they want to compare to the market average. 

- Item Information (Mura!)
After the user selects the item, they are presented with a text box, where the user will input the price. If the price they input is lower than the market average price, the program will say “Mura!”. 

- Item Information (Mahal!)
After the user selects the item, they are presented with a text box, where the user will input the price. If the price they input is higher than the market average price, the program will say “Mahal!”.

- Item Information (Sako!)
After the user selects the item, they are presented with a text box, where the user will input the price. If the price they input is within the average of the market price, the program will say “Sakto!”.

- Price Table 
In this page the user will be presented with the price history in tabular form. This page presents the fluctuation in purchase history of the specified item. 

### Discussion

Bantay Presyo has proven useful to users in comparison shopping by using simple ways to input and visualize price data. The application was built using an offline-first method so that it can be used outside of an internet connection (in other words, it does not require a reliable internet source to work) which is well-suited to real-world marketplace conditions where a customer may not have stable internet service. By providing choices through pre-defined categories and pre-defined items, the application reduces the customer’s effort to find data and improves the speed of interaction; this is important in fast-paced environments, such as marketplaces, where vendors must be able to respond quickly. Combining graphical and tabular representations provides customers with the ability to interpret both the trend and historical price data easily, which aids in making decisions. However, because the system is currently based on locally stored and manually inputted data, the accuracy of pricing analysis is limited to the customer and will not provide a general perspective of market prices. This presents an opportunity to enhance the system in the future by enabling data sharing between users and storing the information in a centralized database. Overall, Bantay Presyo provides a light-weight, readily available method for creating awareness around prices and ultimately has the potential to scale and provide a collaborative price intelligence solution.

### Conclusion

With BantayPresyo, we were able to provide a simple and effective application to solve the problem regarding the unfair and outdated way of pricing the items. Having the feature to make the application offline provides better convenience to the vendors with their limited access to an internet connection. As technology advances, this application can be expanded further to more areas and vendors, as well as being able to provide more accurate data.

## References

Aker, J. C., & Mbiti, I. M. (2019). Mobile phones and economic development in Africa. Routledge. https://books.google.com.ph/books?id=qSTMEQAAQBAJ

Islam, M. S., & Grönlund, Å. (2011, October). ICT based market information system: An effective tool for empowerment of small and marginal farmers. In 2011 International Conference on Information and Communication Technologies and Development (ICTD) (pp. 1–9). IEEE. https://ieeexplore.ieee.org/abstract/document/7073136

Park, S.-K. (1989). Market information and price reporting systems in food and agricultural sector. Journal of Rural Development, 12(1), 19–30. Korea Rural Economics Institute. https://ageconsearch.umn.edu/record/287564/files/Sei-Kwon.pdf

Shepherd, A. W. (1997). Market information services: Theory and practice. Food and Agriculture Organization of the United Nations. https://openknowledge.fao.org/server/api/core/bitstreams/80f10d95-4edf-4e88-93a4-28c6c8541714/content

W3Schools. (n.d.). HTML style guide and coding conventions. W3Schools. https://www.w3schools.com/html/html5_syntax.asp

## Project Deliverables

Check off each item as you complete it:

- [ ] **Project Documentation** — this README or uploaded document following the format above
- [ ] **App Design** — Figma link submitted on Canvas
- [ ] **Source Code** — all HTML, CSS, JS, and assets in `src/`
- [ ] **Video Walkthrough** — max 5 minutes, link below
- [ ] **Peer Grade** — individual submission on Canvas

## Video Walkthrough

Paste your video link here:
https://drive.google.com/file/d/1WdVW6Hrar8AdaUHhjoeKHvRiMGhp3y7C/view?usp=sharing

Your walkthrough should demonstrate your website's key features and functionality. Max 5 minutes. There will be no presentation — your video should be clear enough that any student taking this course can understand your project.

## How to Run

Provide step-by-step instructions so that anyone who downloads this repository can run your website:

```
1. Open the project in Visual Studio Code.
2. Install the Live Server Extension.
3. Right - click src/index.html.
4. Click "Open with Live Server".
```

## Project Structure

```
├── src/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── assets/
│   │   └── (images, fonts, etc.)
│   └── ...
├── docs/
│   └── (documentation files, if separate from README)
└── README.md
```

## Submission Notes

- All source code must be committed and pushed before the deadline (**April 9, 2359**).
- Do **not** upload generated or binary files.
- Keep your repository organized — use folders as shown above.
- All team members should contribute commits.
