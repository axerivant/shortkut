# Shortkut - A simple, lightweight JS library to listen to keyboard shortcuts.

## Why?

For a recent project of mine, I was looking for a simple way to listen to keyboard shortcuts (various combinations of valid keys). I was unable to find one that wasn't 6 years old. So I created my own.

## Features

-   [x] Simple pattern for defining key combinations. For example `'control+meta+/'`.
-   [ ] Isolated contexts (PR welcome).
-   [ ] Non-browser support (PR welcome).

## usage

```ts
import shortkut from 'shortkut'

const doSomething = () => {
	// something
}

shortkut('meta+shift+z', doSomething)
```

## notes

-   Case insensitive.
-   Order insensitive.
