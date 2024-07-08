Parcel:
- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- Uses a File Watching Algorithm written in C++
- Caching -> faster builds
- Image optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling -> support older browsers
- Diagnostic
- Error handling
- HTTPS
- Tree Shaking -> remove unused code
- Different dev and prod bundles -> npx parcel build index.html

/**
     Header
        - Logo(Title)
        - Nav Items(Right Side)
        - Cart
     Body 
        - Search bar
        - RestrauntList
          - RestaurantCard (many cards)
              - Image
              - Name
              - Rating
              - Cusines
     Footer
      - links
      - Copyright
    
*/

#Redux toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

#Types of testing (developer)
- Unit Testing : Test your react components in isolation , only one component testing
- Integration Testing : Multiple components talking to each other and we develop a flow of the react components talking to each other
- End to end testing (e2e testing) : Testing a react application as soon as the user lands on the website to the time when user leaves the website

#Setting up testing in our app
- Install React Tesing Library
- Installed Jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel config file to disable default babel transpilation
- Jest configuration => npx jest --init, test environment that wwill be used for testing - jsdom
- Install JSDOM library
- Install @babel/preset-react : to make jsx work in text cases
- Include @babel/preset-react  in my babel config
- Install @testing-library/jest-dom



