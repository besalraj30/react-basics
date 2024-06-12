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
