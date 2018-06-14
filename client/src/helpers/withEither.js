/* withEither takes in two components and a bool function and returns
one component or the other based on the value returned by the payload function
*/
import { React } from 'react';

export const withEither = (conditionalRenderingFn, EitherComponent) => (Component) => (props) => {
  conditionalRenderingFn(props)
    ? <EitherComponent />
    : <Component {...props} />
}
