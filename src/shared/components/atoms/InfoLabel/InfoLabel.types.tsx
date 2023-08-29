import type { HTMLAttributes, PropsWithChildren } from 'react';

export type InfoLabelProps = HTMLAttributes<HTMLLabelElement> & PropsWithChildren & Readonly<{ label: string }>;
