**CMSI 370** Interaction Design, Fall 2019

# Assignment 1029

Now that you have your design and some startup know-how, you must be itching to start implementing it. So now we will, but _in two phases_.

The first phase is solely about the front end. We will leave stubs, placeholders, or mocks at the points where we expect to call our chosen web service APIs. Filling those in will be the concern of [Assignment 1114](#assignment-1114). For this assignment, we focus on the core content of the course: your application’s user interface.

Resources to help you with this include many of the links listed on the course website, assorted samples from the [bazaar](https://github.com/dondi/bazaar) repository, and the starter files that are included with your GitHub Classroom repositories for this assignment, once you have set yourself up.

## Background Reading
For this assignment, you will most likely use the reference documentation of your chosen web service API. To review the big picture, you can refer back to [this Prezi](https://prezi.com/nuggtz-wcyd1/modern-web-sites-annotated/) along with the class screengrab recording that talks through this big picture.

## Best Practices and Automated Feedback
Because you are using the same repository for this assignment, you should be good to go with automated feedback. If not, then _what’s taking you so long?_

## For Submission: API Integration
Replace the API stubs and mocks in your front end with actual requests to your chosen web service API. If you maintained the recommended design for this layer in [Assignment 1029](#assignment-1029), then this part should be a no-brainer: once finished, your front end will “just work” and immediately shift to reading and writing real information to/from your chosen web service API. Once you have a broader range data coming in and out of your application, undiscovered bugs or areas of improvement may emerge, so make sure you run your front end through its paces afterward, fixing any issues that emerge.

The starter code for the technology stacks all contain an extra “real API” file that genuinely implements one web service API call for you. Pattern your full API implementation after that code.

Once this step is finished, you should have a complete application, with a user interface of your design and implementation communicating with a real-world web service.

### How to Turn it In
Edit your front end code “in place” (i.e., keep on working on the code that you submitted for [Assignment 1029](#assignment-1029)) and continue to commit and push it as needed. If you need to revisit first principles, you can refer to the original starter code in the repository (aren’t you glad that you copied these files in the beginning, rather than going straight to editing them?).

Thus, your submission is simply a continuation of the work that you started with the front end. Evaluating your work will proceed as before, based on the files at the top level of the repository.

## Specific Point Allocations
Programming assignments are scored according to outcomes _3a_, _3b_, and _4a_ to _4f_ in the [syllabus](http://dondi.lmu.build/fall2019/cmsi370/cmsi370-fall2019-syllabus.pdf). For this particular assignment, graded categories are as follows:

| Category | Points | Outcomes |
| -------- | -----: | -------- |
| API Calls (evenly divided among the implemented 3 or more calls)  | 60 | _3a_, _3b_, _4a_, _4b_, _4d_ |
| Test Suite and Coverage | 20 | _4a_ |
| Linting | deduction only | _4c_ |
| Version Control | deduction only | _4e_ |
| Punctuality | deduction only | _4f_ |
| **Total** | **80** |

The last three graded categories are “deduction only,” meaning that you will only get points taken off if there are significant issues with those categories. Such issues include but are not limited to: lingering linting errors as of the final commit (_4c_), insufficiently granular or unmessaged commits (_4e_), and late commits (_4f_).

# React Web Front End Sample Using Classes

This folder contains a very simple React-based web front end sample that uses the [Giphy API](https://api.giphy.com) to search for then display matching animated GIFs. The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The most recent version of its guide can be found [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

The “style” of component used here is class-based: i.e., components are defined via the definition of a React `Component` subclass.

## Setup

From a fresh clone, run `npm install`.

## Execution

To see the site locally, run `npm start` then visit `http://localhost:3000`.

## Tests

Run tests with `npm test`. Look at your test coverage with `npm test -- --coverage`.

## Build/Deploy

Create a deployment-ready build with `npm run build`.

## Style/Component Libraries

If you don’t feel like styling your components yourself, you might consider the following:
- [Font Awesome](https://fontawesome.com): A convenient and powerful collection of icons and glyphs—they have a free set which anyone may use
- [Material UI](https://material-ui.com/): React components that implement Google’s Material Design
- [reactstrap](https://reactstrap.github.io/): React components that mimic Bootstrap 4

Not style-related, but still potentially useful, is [React Router](https://reacttraining.com/react-router/). This allows your application to serve up multiple URLs while still retaining a unified code base:
- [React Router](https://reacttraining.com/react-router/)
