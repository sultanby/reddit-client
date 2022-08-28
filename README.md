# Minireddit

This project was build off-platform for Full Stack Engineer Path on Codecademy. The project objective is to build Reddit-like app, which allows users to view and search posts and read comments provided by [Reddit JSON API](https://github.com/reddit-archive/reddit/wiki/JSON) using React and Redux technologies. Reddit is a website where people share links to articles, media and other things on the web. See project [requirements](https://github.com/sultanby/reddit-client/blob/main/documents/requirements.md)

[LIVE DEMO](https://minireddit-sultanby.surge.sh)

## Technologies
- Command Line Interface
- Git
- React
- Redux
- Router
- [Reddit JSON API](https://github.com/reddit-archive/reddit/wiki/JSON)
- React Testing Library
- Surge

## Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

To try this project on your local machine, after cloning repository into your local directory, in the project directory you can run:
#### `npm install` 
and
#### `npm run start`

Runs the app in the development mode.\

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run test`

Launches the test runner in the interactive watch mode.\


## Wireframes

![wireframe](https://github.com/sultanby/reddit-client/blob/main/documents/wireframe.png)

## Route Paths

```
/
```
lands on most popular reddits

```
/:filter
```
filters popular by given filters 

```
/r/:subreddit/
```
lands on subreddit page

```
/r/:subreddit/:filter
```
filters subreddit by given filter

```
/r/:subreddit/comments/:id/:title
```
lands on given post with comments


## Features

- Select subreddit to view from today's top 25 subreddits
- Search through posts in this subreddit
- Comments page 
- Up- and downvote (locally)
- Filter subreddit's posts

## Future work

- add more semantic elements
- optimize font sizes
- search on whole reddit 
- adding volume on videos
- adding pagination
- add back to feed button

