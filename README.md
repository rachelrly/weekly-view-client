# Weekly View

## Tech Stack

- React.js
- Next.js
- Sass

## Wireframes

![](/wireframes.png)

## Setup

Create `next.config.js` and add an the following environmental variable: 

``` 
module.exports = {
    env: {
        API_ENDPOINT: 'http://localhost:3000/v1'
    }
}
```

### Run the app

Start the server with `npm run dev`



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

### /styles

Contains sass styles. All sass partials are imported into `styles.sass`, which is imported in `/pages/_app.js`. Comma seperate new imported partials on line 2. 

#### _variables.sass

Contains all variables for the project. These are copied from my portfolio, feel free to change the values. 

#### _base.sass

Contains all base styles for elements.

#### _form.sass

Standardizes all form styles, handling `form`, `fieldset`, `input`, `label` and form-specific classes. 

#### components

Contains all component-specific styles

- _header.sass
- _calendar.sass

### /components

Contains all react components, imported into their route in the pages directory

#### Calendar elements

##### WeeklyCalendar.js
Wraps calendar with time intervals

##### SafeCalendarView.js
Controlls the screens size and currently shown elements

##### CalendarDay.js
Contains row for specific day of the week

##### CalendarItem.js
Child of  `CalendarDay`

##### SwitchDayButton.js
Displayed on smaller screens in calendar view to toggle days

### /hooks

#### calendar-ui-hooks.js

This file contains all hooks used in the calendar UI, including the handling of calendar dimensions.

### /contexts

#### User Context

Contains all data for the currently logged in user

#### Calendar Context

Wrapping the calendar in `WeeklyCalendar`, this holds all data for currently viewed calendar and device width of view.

