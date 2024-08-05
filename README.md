# Coffee Machine Interface

This project was done asn an assignment to display coding skills. It uses:
- Typescript
- Next.js
- React.js
- Styled Components
- Redux Toolkit
- RTK Query

There was a time constrain, so some functionalities aren't optimised.

Here is what I prioritised and covered on this project:
✅ Correct set-up of Next.js + Styled Components (observing SGI, using SWRCR) + Redux toolkit (observing the SSR functionalities) + RTK Query
✅ Proper set-up of theme, Provider, and color schemes
✅ Attention to some design detail such as "Large" coffee icons on "size" are bigger than "venti" for example
✅ Solid implementation of RTK Query
✅ Implementation of a 'organiseData' function, to transform the data into a better, more readable structure and avoid Tech Debt accumulation
✅ Solid implementation of Redux, which saves the user order in a Global State.
✅ Proper separation of server-side components to handle the API and client components to handle effects and react hooks
✅ Redux slices and store well-organised
✅ App Router from Next.js
✅ Font Family changed into the Font-Family closest to the one on Figma, but free.
✅ Overall folder structure following best practices (components, lib, types, api etc)
✅ Each component does one - and only one - clear, well-defined thing as much as possible
Code written in the most human-friendly way possible, nice and clean.

Here is what I did not have time to finish / areas for improvement:
📈 Design details such as exact margins on titles, etc
📈 Best practices on images/svg URLs (in real case scenarios, those image URLs should come from CMS or back end)
📈 Folder structure could be improved - maybe set up a folder like "pages" where we could put all pages in and connect the Next Router there instead of the top level on "app"
📈 Extract all types from components to the types folder
📈 Add Redux-Persist in case user refreshes the page they won't use the order 
📈 If we wanted to make this app air-tight and fail-proof, we would still need to do a few things:
  - Create a 404 / Something went wrong page
  - Create a "no connection" page
  - Add dafety mechanisms in case, for example, the data from the back end is changed.
  - Add automated tests that can notify the teams if any API changes breaks the front end app
  - Add more mechanisms that the app can still be operational even if a change is done from the API
📈 UI Improvements:
  - Add a "Clear Order" button
  - Change text on final screen from "Review your order" to "Brew your coffee"
  - Add animations and a darker background color when the user clicks the button for feedback


## Getting Started Locally

Clone the repo locally and run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
