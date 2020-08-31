import { action } from 'mobx';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { createBrowserHistory } from 'history';

export class CustomRouterStore extends RouterStore {
  @action.bound
  public toHome() {
    this.push('/');
  }
  @action.bound
  public toCurrency(id: number) {
    this.push(`currency/${id}`);
  }
}

export const routerStore = new CustomRouterStore();
export const history = syncHistoryWithStore(
  createBrowserHistory(),
  routerStore
);
