## Project overview

### This project is a simple e-commerce site using the Shopify API to fetch products and add them to the basket. The basket is fully interactive and uses the Zustand library to manage it's state.

## Setup instructions

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev` to start the development server [or visit the live site here](https://mock-shop.dmitry-o.co.uk/)

## Technical decisions and reasoning

The project is built with Next.js as the main framework as opposed to Remix since it's one I am more familiar with however I am always open to learning new tools and technologies. (One of the main reasons I enjoy being a developer!)

The initial API call is done using Next.js's server actions to fetch the initial batch of products.

For state management I chose Zustand as I have used it on some personal projects and find it to be simple and intuitive to use for managing global/local state. The basket state manages the products in the basket and the total quantity and price of the basket as well as the functions to add and remove products.

Styling is done with SCSS and makes use of mixins and variables. I've gone with a single SCSS index file for this project to keep it simple and easy to maintain. I have used SCSS modules on other projects and am comfortable with the syntax of each technique.

I have added some aria attributes to the basket trigger button and the basket itself to help with accessibility as well as the function to close the basket when the escape key.

## Potential improvements if given more time

As I am not overly familiar with testing I have not managed to add the unit test and one integration test to this project withing the given time constraints. However it is something I am looking forward to learning and will be something I will implement in future projects.

It would be nice to make the basket more persistent across page loads by using local storage or session storage.

A loading state could also be added to the initial API call to give the user a better user experience to show items are loading.

Some more interactive or animation elements could be added such as more sophisticated animations or hover effects for the products and basket elements.

Some other UX improvements could be made such as pagination for the products and a search facility, as well as filtering options to help users find what they are looking for.

Finally more advanced API calls and caching could be implemented to improve the performance of the site.
