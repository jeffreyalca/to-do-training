import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, INITIAL_STATE } from './redux/models/store';
import { rootReducer } from './redux/reducers/root.reducer';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [NgReduxModule],
})
export class CoreModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
