# tina-modal
> :speech_balloon: Modal plugin for [Tina.js](https://github.com/tinajs/tina)

## Setup
1. Install from npm
```bash
# ensure wxio is installed
npm i -save wxio

# install
npm i --save @tinajs/tina-modal
```

2. Mix into Page & Component
```javascript
// app.js
import { Page, Component } from '@tinajs/tina'
import modal from '@tinajs/tina-modal'

Page.mixin(modal())
Component.mixin(modal())
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
