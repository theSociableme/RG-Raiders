import { Link } from '@raidguild/ds';
import NextLink, { LinkProps } from 'next/link';
import React from 'react';

type Props = Omit<React.ComponentProps<typeof Link>, keyof LinkProps> &
  LinkProps;

export const MetaLink: React.FC<Props> = ({
  children,
  href,
  as,
  passHref,
  replace,
  scroll = true,
  shallow,
  isExternal,
  ...props
}) => {
  if (isExternal && typeof href === 'string') {
    return (
      <Link color="cyan.400" isExternal href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <NextLink
      {...{
        href,
        as,
        replace,
        scroll,
        shallow,
      }}
      passHref={passHref || true}
    >
      {/*  NextLink passes the href */}
      <Link color="cyan.400" {...props}>
        {children}
      </Link>
    </NextLink>
  );
};
