import {
  observable,
  action,
  autorun,
  configure,
  computed
} from 'mobx'

configure({ enforceActions: 'observed' })

export default class AppStore {
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


