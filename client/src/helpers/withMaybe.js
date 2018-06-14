/* withMaybe takes in a component and a bool function and return the
component or null based on the returned value of the payload function
*/
const withMaybe = (conditionalRenderingFn) => (Component) => (props) => {
  conditionalRenderingFn(props)
    ? null
    : <Component {...props} />
}

export default withMaybe;
