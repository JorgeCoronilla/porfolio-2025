'use client'
import { ReactNode } from 'react';
import Link, {LinkProps} from 'next/link';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';



interface LocalizedLinkProps extends Omit<LinkProps, 'href'> {
  to: string; 
  children: ReactNode; 
  activeClassName?: string; 
  className?: string; 
}

export default function LocalizedLink({
  to,
  children,
  activeClassName = '',
  className = '',
  ...props
}: LocalizedLinkProps) {
  const { i18n } = useTranslation();
  const pathname = usePathname();

  // Remove the locale prefix from the current pathname
  const localePattern = new RegExp(`^/${i18n.language}`);
  const normalizedPathname = pathname.replace(localePattern, '') || '/';

  // Construct the localized path
  const path = `/${i18n.language}${to}`;

  // Check if the current path matches the `to` path
  const isActive = normalizedPathname === to;

  // Combine base className and activeClassName if active
  const combinedClassName = `${className} ${isActive ? activeClassName : ''}`.trim();

  return (
    <Link href={path} {...props} className={combinedClassName}>
      {children}
    </Link>
  );
}
