# PooBar

PooBar is a liquor cabinet app. It is intended for keeping track of drinks you can make, and what you have in your liquor cabinet. I am not interested in solving the "what are all possible drinks I can make with my current ingredients" problem, as it does not interest me. However, I have had a need for a menu I can present to guests when I ask if they want a drink, as well as a place to look up recipes that I have made before.

I am trying out supabase to allow me to build this in a manner such that other people can create their own bars. Instructions on how to build your own bar will appear here when the project gets to a working state. The fact that multiple users are in the same database will be leveraged to reduce the work involved with building ones own database, as ingredients and drinks will be a shared list. From that list bar-owners can pick for their own bar, or create new ones, which will be added to the global list.

## The name

The first working title was FooBar, however to no suprise I could not get that domain. As a joke one of my friends called the project PooBar, and the name regretfully stuck. I'll update the repo-name eventually, when I've passed the denial phase. For now you can find the live version of the project at:

[poobar.no](https://poobar.no/)

## Running the code

To install:

```bash
npm install
```

To run the development server:

```bash
npm run dev
```

The project is now available at [http://localhost:3000](http://localhost:3000).

Deployment is done automatically on new commits to the main branch. The website is hosted using netlify.
