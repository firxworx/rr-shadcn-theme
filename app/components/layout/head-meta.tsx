import type React from 'react'

interface HeadMetaProps {
  title?: string
  description?: string
}

/**
 * @see https://react.dev/blog/2024/12/05/react-19#support-for-metadata-tags
 */
export function HeadMeta({ title, description }: HeadMetaProps): React.JSX.Element {
  return (
    <>
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}
    </>
  )
}
