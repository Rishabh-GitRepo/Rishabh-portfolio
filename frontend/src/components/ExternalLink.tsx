type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function ExternalLink({ href, children, ...rest }: Props) {
  const isExternal = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}