# TensorAlchemy Components

TensorAlchemy components library.

## Requirements

- npm >= v10.7.0
- node >= v22.2.0

> It might work on other versions but it's not been tested.

## Setup

`npm i https://github.com/TensorAlchemy/TensorAlchemy-Components`

## Usage

~ The main `Theme` provider can be imported from `index.js`.  
~ All components are exported through `index.js`. They are dependent on the theme provider.  
~ Components can also be imported directly from the `components` directory.  
~ Import the styles from `style.css`.

## Development

~ Run `npm link` inside the `TensorAlchemy-Components` project.  
~ Run `npm link tensoralchemy-components` inside the other local project where you want to use the components.

That will create a symlink to the component library inside the project's node_modules, then you can continue developing on the component library and any changes will directly reflect in the other project.
