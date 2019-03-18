import AppStoreClass from './appStore'

export const AppStore = AppStoreClass


export default {
  AppStore,
}

// 用于生成服务端渲染的store集合
export const createStoreMap = () => {
  return {
    appStore: new AppStore,
  }
}