"use strict";

self.ext = {};

ext._EventTarget = class EventTarget
{
  constructor()
  {
    this._listeners = new Set();
  }

  addListener(listener)
  {
    this._listeners.add(listener);
  }

  removeListener(listener)
  {
    this._listeners.delete(listener);
  }

  _dispatch(...args)
  {
    let results = [];
    for (let listener of this._listeners)
      results.push(listener(...args));
    return results;
  }
};

/* Message passing */
ext.onMessage = new ext._EventTarget();
