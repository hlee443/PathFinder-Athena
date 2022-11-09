# Storybook Development

Please follow this readme for all component development and testing while working on this repository.

## Setup

Follow this section to properly setup this repository and start developing React components!

### Requirements

- Node 16 [node.js](https://nodejs.org/en/)

### Configuration

- npm i

## Development Steps

Follow these steps whenever you are ready to start working on a new component.

Quick Tip: Try to limit the amount of files and folders you change per branch. The rule of thumb is every pull request should only have 1 purpose. If a single pull request is altering multiple components, or a dozen or more files, then consider splitting your code into multiple branches. This will make merging much easier in the long run.

### Starting

- git checkout -B ComponentName

- Create a new folder with the component name inside the src/components folder. This folder will hold the new component's (.jsx), (.stories.js), and (.spec.js) files.

### Deployment

- npm run build
- npm run build-storybook
- git add .
- git commit -m "Commit message"
- git push (or) git push origin BranchName

### GitHub

- Got to GitHub and create a pull-request for the newly pushed branch. Include details for what was added/changed in the comments.
- Navigate to Reviewers on the right sidebar.
- Select a team member to review your pull-request. You are not to merge your code with master until it has been approved.


# Athena General Info (Needs changing)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

