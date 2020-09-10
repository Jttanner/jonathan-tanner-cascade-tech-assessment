# cacade-transaction-feed-component-assessment

## Project Description
```
This project's structure (file structure, empty components) was built by the Vue CLI to present and test the Transaction Feed Component for the Cascade Tech Assessment.
```

## Addressing Requirements
```
I made the assumption that the entries in the "Not Settled" Array represented the same transactions that have identical information in the "Transactions" array except for "Billed" which was set to false for these entries.
I made the assumption that a "Not Settled" transaction was a transaction which was processing but had not yet withdrawn funds from the account balance.
In order to understand both the current balance of the account and the potential balance of the account if the "Not Settled" transactions ended up going through, I decided that it would be useful for the user to be able to see what their account's final balance would be both including and excluding "Not Settled" transactions would be.
Some of the transaction data is less interesting at a glance, but potentially still important, so I decided to only show a top level view of each transaction but allow the user to see the full details if they wanted to.

Requirement Justifications:

Starting Balance
    Displayed from the earliest transaction in the data in the summary section

Ending Balance
    Calculated by keeping track of the sum of the "Amount" field from each transaction, but kept track of the values of the settled and not settled transactions separately.
    The ending balance is displayed in the summary se section in two different fields.  One field shows the balance if transactions which are not settled are to be ignored, and another where they are included
    The difference of the starting balance and final balance are also displayed in the summary section

List of Transactions & Clearly Define Transaction Information
    Displayed in a table with labeled top level information for each transaction.  The "Show More Details" button can be clicked to display a modal window with the rest of the information from the transaction.


```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

