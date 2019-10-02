import React from 'react'
declare global {
  interface IBaseIconProps extends React.SVGAttributes<SVGElement> {
    color?: string
    size?: number
  }

  interface IconProps extends Omit<IBaseIconProps, 'color'> {
    color: keyof ITheme['colors'] | 'inherit'
  }

  interface Window {
    IntersectionObserver?: string
    gtag(type: 'config', trackingId: string, data: { page_path: string }): void
    gtag(
      type: 'event',
      action: string,
      data: {
        event_category: string
        event_label: string
        value: string
      }
    ): void
  }
}
