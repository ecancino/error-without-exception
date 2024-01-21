import * as React from "react";

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

function isExternalLink(href?: string): boolean {
  return href?.startsWith("http") ?? false;
}

export default function Link({ children, href, ...rest }: LinkProps) {
  const isExternal = isExternalLink(href);
  const rel = isExternal ? "nofollow noopener noreferrer" : rest.rel;
  const target = isExternal ? "_blank" : rest.target;

  return (
    <a {...rest} href={href} rel={rel} target={target}>
      {children}
    </a>
  );
}
