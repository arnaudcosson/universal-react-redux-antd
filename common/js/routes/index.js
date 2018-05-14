import Error from '@pages/Error';
import Home from '@pages/Home';
import LegalNotice from '@pages/Legal';
import Todos from '@pages/Todos';

const RoutesNames = {
  HOMEPAGE: "/",
  TODOS: "/todos",
  LEGAL_NOTICE: "/legal"
};
export { RoutesNames };

export default [
  { path: RoutesNames.HOMEPAGE, exact: true, component: Home },
  { path: RoutesNames.LEGAL_NOTICE, exact: true, component: LegalNotice },
  { path: RoutesNames.TODOS, exact: true, component: Todos },
  { path: '*', component: Error }
];
