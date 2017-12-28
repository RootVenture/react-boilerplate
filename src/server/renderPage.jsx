// @flow
import React from "react";
import { renderToString } from "react-dom/server";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";
import type { $Request, $Response } from "express";
import App from "../app/components/App";
import reducers from "../app/reducers/reducers";

export default function renderPage(req: $Request, res: $Response) {
  const store = createStore(combineReducers(reducers), { counter: 5 });

  const context = {};

  const appString = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const preloadedState = store.getState();
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Home description">
        <title>Home page great stuff</title>
      </head>
      <body>
        <div id="app">${appString}</div>
      </body>
      <script>
        window.PRELOADED_STATE = ${JSON.stringify(preloadedState)}
      </script>
      <script src="/public/bundle.js"></script>
    </html>
  `;
  res.send(html);
}
