# valeria_gerez_teladoc_challenge

## **1. Configure Cypress**

Create a new file called `cypress.env.json` with the next configuration
```
{
    "URL": "Teladoc url",
}
```

## **2. Install dependencies**

- **Download and install[node](https://nodejs.org/en/download/)**

- **Install dependencies**
```
npm i
```

## **3. Start cypress and run tests**

- **Run cypress UI with npm**
  ```
  npm start
  ```
  
- **Run test suites from the terminal**
  ```
  npm run sanity
  ```

### **Generate and open HTML report**

```
npm run report
```

### **Run linter for javascript files and feature files**

```
npm run lint
npm run gherkin-lint
```