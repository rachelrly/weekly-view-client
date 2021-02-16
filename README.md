# Weekly View

## Tech Stack

- React.js
- Next.js
- Sass

## Wireframes

![](/wireframes.png)

## User Stories

- As new user, I can register for an account
- As a (returning) user, I can log in to my account with my email and password
- As a user, I can view my weekly calendar with a view of my schedule of all my waking hours
- As a user, I can set my waking hours, which are reflected in the calendar (i.e. visible hours on schedule)
- As a user, I can create activities (i.e. Wake-up/eat) (or choose activities from a pre-existing selection?)
- As a user, I can place these activities on a weekly calendar in 30 minute blocks
- As a user, I can remove activities from my weekly calendar
- As a user, I can change the color of activities to any color in a predefined list 


## Codebase

### pages

Contains the routes for all pages. 

### styles

Contains sass styles. All sass partials are imported into `styles.sass`, which is imported in `/pages/_app.js`. Comma seperate new imported partials on line 2. 

#### _variables.sass

Contains all variables for the project. These are copied from my portfolio, feel free to change the values. 

#### _base.sass

Contains all base styles for elements.

#### components

Contains all component-specific styles

### components

Contains all react components, imported into their route in the pages directory

### hooks

Contains all custom hooks

### contexts

#### User Context

Contains all data for the currently logged in user





# Start Next.js README Boilerplate

PLEASE SAVE UNTIL FIRST DEPLOY!!

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
