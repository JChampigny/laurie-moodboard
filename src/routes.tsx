import * as React from 'react';
import { Route, Switch } from 'react-router';

// Module root components
import { Home } from './home';
import PageNotFound from './common/components/PageNotFound';

{/*<Route exact path="/catalog" component={Catalog}/>*/}
{/*<Route exact path="/product/:productId" component={Product}></Route>*/}
{/*<Route exact path="/designers" component={Designers}/>*/}
{/*<Route exact path="/articles" component={Archives}/>*/}
{/*<Route exact path="/articles/category/:slug" component={Archives}/>*/}
export default (
    <Switch>
        <Route exact={true} path="/" component={Home}/>,
        <Route path="*" component={PageNotFound} />
    </Switch>
);