/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 */

import { type ComponentType } from 'react';
import { unstable_createRoot } from 'react-dom';

export default function render<Props: Object>(
  element: ComponentType<Props>,
  container: any,
  callback?: () => void
) {
  const isDevelopment = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test';
  if (isDevelopment) console.log('Concurrent Mode enabled.');
  unstable_createRoot(container).render(element);
}
