# simple-react-search

> simple react hook which provide easy search from search metadata

[![NPM](https://img.shields.io/npm/v/simple-react-search.svg)](https://www.npmjs.com/package/simple-react-search) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-react-search
```

## Usage

```jsx
import React, { Component } from "react";

import { useReactSearch } from "simple-react-search";

const Example = () => {
  const searchFunction = useReactSearch(searchMetadata, ["listofkeys"]);
  // searchFunction will accept one string input query and return list of object which match with query.
  return <div>{example}</div>;
};
```

## License

MIT © [satish358](https://github.com/satish358)
