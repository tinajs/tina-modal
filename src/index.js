import wxio from 'wxio'

const DEFAULT_SETTING = {
  alertTitle: '提示',
  confirmTitle: '请确认',
}

export class CancelError extends Error {
  constructor () {
    super('Canceled')
    this.name = 'CancelError'
  }
}

export function mixin (setting = {}) {
  setting = {
    ...DEFAULT_SETTING,
    ...setting,
  }
  const alert = ({ title = setting.alertTitle, ...options }) => wxio.showModal({ title, ...options, showCancel: false })
  const confirm = ({ title = setting.confirmTitle, ...options }) => {
    return wxio.showModal({ title, ...options, showCancel: true })
      .then(({ cancel }) => {
        if (cancel) {
          throw new CancelError()
        }
        return
      })
  }

  function setup () {
    this.$alert = alert
    this.$confirm = confirm
  }
  return {
    beforeLoad: setup,
    created: setup,
  }
}

const Plugin = {
  install ({ Page, Component }, setting) {
    const modal = mixin(setting)
    Page.mixin(modal)
    Component.mixin(modal)
  },
}

export default Plugin
