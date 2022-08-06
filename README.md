# **Luxoft Test JavaScript Version**

## **Description** :

- Repository is destined to create the E2E test of the Test Task Luxoft Request

---

## **Purpose** :

- To develop the best and complete Cypress E2E test of the Test Task Luxoft. This repository contains all that's necessary to garantee that all of the core business functionalities are at it's function state.

---

## **Built With**

This repository was built using the folowing technologies:

- [NPM](https://www.npmjs.com/)
- [Cypress.io](https://www.cypress.io/)

---

## **Prerequisites**

- NPM and cypress are the required softwares to use this repository.

- npm
  ```sh
  npm install npm@latest -g
  ```
- Cypress

  ```sh
  npm install --save-dev cypress@latest
  ```

---

## **Installation**

1. Clone the repository
   ```sh
   git clone https://github.com/USERNAME/luxoftTest.git
   ```
2. Go to the directory installed:

   ```
   ..cd cypress
   ```

3. Install NPM packages
   ```sh
   npm install
   ```
4. Run Cypress
   ```sh
   npm start
   ```

---

## **Cypress Open**

- To open Cypress (Head):

  ```
   npm run cy:startOpen
  ```

---

## **Cypress Headless**

- To run Cypress (Headless):

  ```
   npm run cy:startRun
  ```

  - But since there is a problem with the detection of the automation by the website.s You can see at the screenshot (cypress > screenshot) that the 'Run' test (running in the command line) failed because the website detects the automation and requires a Captcha (which could be resolved passing the solved captcha key in a delevopment environment).

---

- If you have **any** questions about [Cypress](https://www.cypress.io/), click [Here](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements). Or enter in contact with me @yDkay.
