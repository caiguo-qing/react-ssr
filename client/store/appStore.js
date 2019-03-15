import {
  observable,
  action,
  autorun,
  configure,
  computed
} from 'mobx'

configure({ enforceActions: 'observed' })

export class AppStore {
  @observable count = 0
  @observable name = 'jacoy'

  @computed get msg(){
    return `${this.name} say count is ${this.count}`
  }

  @action add (){
    this.count ++ 
  }

  @action changeName(name){
    this.name = name
  }

}

const appStore = new AppStore()

autorun(() => {
  console.log(appStore.msg)
})

setInterval(() => {
  // appStore.add()
}, 1000);

export default appStore
