import { NextContext } from 'next'
declare global {
  interface INextProps {
    url: {
      asPath: string
      pathname: string
      query: {
        group?: string
        user?: string
      }
    }
  }

  type IGetInitialProps<T> = (ctx: NextContext) => Promise<Partial<T>>
}
