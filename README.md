# The Wardrobe

The Wardrobe is an e-commerce store that sells clothing and accessories.

## Description

Created with **React.js** and hosted on **Firebase**, the current version of this web app manages the state of _cart_ & _directory_ using **React-Redux.js**, and _user_ & _shop data_ through **Firebase Firestore**. It allows online customers to either _sign in with their Google account_ or _sign up with email and password_, which is powered by **Firebase Authentication** & **Database** services. **[Stripe API](https://stripe.com)** is also implemented to handle card payments (which currently can be tested out using the default credit card provided upon checking out).

**Previous versions** include:

- [Version 1.0](https://github.com/k-awe-some/the-wardrobe-v1.0)
- [Version 2.0](https://github.com/k-awe-some/the-wardrobe-v2.0)
- [Version 3.0](https://github.com/k-awe-some/the-wardrobe-v3.0)

**Improvements** from version 3.0 include:

- Implementation of [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- Code Refactoring

**Next improvements** will aim for **optimizations in state management** with [React's Context API](https://reactjs.org/docs/context.html), as well as **back-end charges** through Stripe payments.

## Technologies - Frameworks - Libraries

This web app is created with:

- [React.js](https://reactjs.org) version 16.9.0
- [React Router DOM](https://reacttraining.com/react-router/) version 5.0.1
- [React-Redux.js](https://react-redux.js.org) version 7.1.0
- [Redux Persist](https://github.com/rt2zz/redux-persist) version 5.10.0
- [Redux Saga](https://redux-saga.js.org) version 1.0.5
- [Reselect](https://github.com/reduxjs/reselect) version 4.0.0
- [Firebase](https://firebase.google.com) version 6.4.2
- [React Stripe Checkout](https://github.com/azmenak/react-stripe-checkout) version 2.6.3

## Contributing

Pull requests are welcome and appreciated. For major changes, please open an issue first to discuss what you would like to change.

## License

This web app is available under [MIT](https://choosealicense.com/licenses/mit/).
