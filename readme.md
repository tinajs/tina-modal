# tina-modal
> :speech_balloon: Modal plugin for [Tina.js](https://github.com/tinajs/tina)

[![npm](https://img.shields.io/npm/v/@tinajs/tina-modal.svg?style=flat-square)](https://www.npmjs.com/package/@tinajs/tina-modal)
[![license](https://img.shields.io/github/license/tinajs/tina-modal.svg?style=flat-square)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Setup
1. Download package from npm
```bash
# ensure wxio is installed
npm i -save wxio

# install tina-modal
npm i --save @tinajs/tina-modal
```

2. Install into Tina
```javascript
// app.js
import Tina from '@tinajs/tina'
import modal from '@tinajs/tina-modal'

Tina.use(modal)
```

## Usage
```javascript
// pages/some-page.js
import { Page } from '@tinajs/tina'
Page.define({
  methods: {
    onSubmit () {
      this.$confirm({ content: 'Submit?' })
        .then(() => this.$alert({ content: 'Confirmed!' }), () => { /* ignore the cancel error */ })
    }
  },
})
```

## API
### Page and Component Injections
#### $alert(options)
- Arguments:
  - ``{Object} options``
- Returns: ``Promise``
- Details:

  Based on [wx.showModal](https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowmodalobject).

#### $confirm(options)
- Arguments:
  - ``{Object} options``
- Returns: ``Promise``
- Details:

  Based on [wx.showModal](https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowmodalobject),
  but the ``cancel`` action will reject the promise with a ``ErrorCancel``.

## License
MIT @ [yelo](https://github.com/imyelo)
