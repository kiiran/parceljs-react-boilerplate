import { RouteComponentProps } from '@reach/router'

export type ReachRouterComponent<T = {}> = React.ComponentType<
  RouteComponentProps & T
>
