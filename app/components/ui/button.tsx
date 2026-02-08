"use client";
import React from 'react';
import Link from 'next/link';

type Props = {
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export function Button({ href, children, className = '', onClick, disabled }: Props) {
  const base = 'px-4 py-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-700';
  const cn = `${base} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cn} onClick={onClick} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
