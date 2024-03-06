import { NavLink } from 'react-router-dom'

import type { NavLinkProps } from 'react-router-dom'

import s from 'src/components/Link/styles.module.css'

const Link = ({ className, ...props }: NavLinkProps): JSX.Element => {
  return <NavLink className={`${s.link} ${className}`} {...props} />
}

export default Link
