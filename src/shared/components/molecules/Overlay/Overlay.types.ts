import type { PropsWithChildren } from 'react';

import type { BaseModalProps } from '../../../lib/context/Modal';

export type OverlayProps = Pick<BaseModalProps, 'onBackdropClick'> & PropsWithChildren;
