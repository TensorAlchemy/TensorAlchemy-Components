# TensorAlchemy Components

TensorAlchemy components library.

## Requirements

- npm >= v10.7.0
- node >= v22.2.0

> It might work on other versions but it's not been tested.

## Setup

`npm i @TensorAlchemy/tensoralchemy-components`

## Usage

~ The main `Theme` provider can be imported from `index.js`.  
~ All components are exported through `index.js`. They are dependent on the theme provider.  
~ Components can also be imported directly from the `components` directory.  
~ Import the styles from `style.css`.

## Development

~ `npm run dev` will continuously compile typescript and scss.  
~ `npm link` inside the `TensorAlchemy-Components` project.  
~ `npm link tensoralchemy-components` inside the other local project where you want to use the components.

> After `npm run dev` and `npm link` any file changes should directly reflect in the other project.
