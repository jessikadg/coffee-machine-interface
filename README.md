# Coffee Machine Interface
<img width="454" alt="Screenshot 2024-08-05 at 12 37 10" src="https://github.com/user-attachments/assets/38fd31db-a6f2-47c1-aab2-a1374f889fac">


This project was done asn an assignment to display coding skills. It uses:
- Typescript
- Next.js
- React.js
- Styled Components
- Redux Toolkit
- RTK Query

Here is what I prioritized and covered on this project:<br/>
<br/>
✅ Correct set-up of Next.js + Styled Components (observing SGI, using SWRCR) + Redux toolkit (observing the SSR functionalities) + RTK Query<br/>
✅ Proper set-up of theme, Provider, and color schemes<br/>
✅ Attention to some design detail such as "Large" coffee icons on "size" are bigger than "venti" for example<br/>
✅ Solid implementation of RTK Query<br/>
✅ Implementation of a 'organiseData' function, to transform the data into a better, more readable structure and avoid Tech Debt accumulation<br/>
✅ Solid implementation of Redux, which saves the user order in a Global State.<br/>
✅ Proper separation of server-side components to handle the API and client components to handle effects and react hooks<br/>
✅ Redux slices and store well-organized<br/>
✅ App Router from Next.js<br/>
✅ Font Family changed into the Font-Family closest to the one on Figma, but free.<br/>
✅ Overall folder structure following best practices (components, lib, types, api etc)<br/>
✅ Each component does one - and only one - clear, well-defined thing as much as possible<br/>
✅ Code written in the most human-friendly way possible, nice and clean.<br/>

Here is what I did not have time to finish / areas for improvement:<br/>
<br/>
📈 Design details such as exact margins on titles, etc<br/>
📈 Best practices on images/svg URLs (in real case scenarios, those image URLs should come from CMS or back end)<br/>
📈 Folder structure could be improved - maybe set up a folder like "pages" where we could put all pages in and connect the Next Router there instead of the top level on "app"<br/>
📈 Extract all types from components to the types folder<br/>
📈 Add Redux-Persist in case user refreshes the page they won't use the order<br/>
📈 Add clickable Link to "Back" text on top of screens<br/>
📈 If we wanted to make this app air-tight and fail-proof, we would still need to do a few things:<br/>
  - Create a 404 / Something went wrong page<br/>
  - Create a "no connection" page<br/>
  - Add safety mechanisms in case, for example, the data from the back end is changed.<br/>
  - Add automated tests that can notify the teams if any API changes breaks the front end app<br/>
  - Add more mechanisms that the app can still be operational even if a change is done from the API<br/>
📈 UI Improvements:<br/>
  - Add a "Clear Order" button<br/>
  - Change text on final screen from "Review your order" to "Brew your coffee"<br/>
  - Add animations and a darker background color when the user clicks the button for feedback<br/>


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
