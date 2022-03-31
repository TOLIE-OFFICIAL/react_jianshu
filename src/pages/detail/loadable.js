import Loadable from 'react-loadable';
import * as components from './components'

const LoadableComponent = Loadable({
    //指明异步加载的路径
    loader: () => import('./index'),
    //加载过程中的
    loading: components.Loading
});
export default () => {
    return <LoadableComponent/>
}