import React from 'react';
import Loadable from 'react-loadable'
import Loading from '../../common/loading'

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading: Loading
});
export default ()=> <LoadableComponent/>;