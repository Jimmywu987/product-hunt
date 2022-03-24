This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


Go to [Product Hunt Api](https://api.producthunt.com/v2/oauth/applications) to a Token (You need to register an account first, if you haven't)

Then create an .env.local on the root of the project and put the token into .env.local.



But if you want to get it run right always without going to get the token first, you can still try to run the below bash (for this the data is mocked instead of fetching an update data)


```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Issues


The type of token you get may limit the amounts of data you are allowed to fetch (the token I used, can only fetch 20 as maximum, thus I limit the data fetching to 20 only in order to get the similar ux that I hope use can get.)


## Future Development



I built the mobile drawer, header as well as setting up translation files, make it easier scaling up, such as adding more pages (About us, Contact us etc).

I hope to build up a user detail page where clicking on the poster icon can get in.

Also the usual register and login then user can create their own posts


if the posts can be fetched more than 20 post, then add a pagination on the homepage.

