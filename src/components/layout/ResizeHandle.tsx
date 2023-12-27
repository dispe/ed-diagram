import { PanelResizeHandle } from 'react-resizable-panels';

import layout_styles from './layout.module.css';

export default function ResizeHandle({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) {
  return (
    <PanelResizeHandle
      className={[layout_styles.ResizeHandleOuter, className].join(' ')}
      id={id}
    >
      <div className={layout_styles.ResizeHandleInner}>
        <svg className={layout_styles.Icon} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M18,16V13H15V22H13V2H15V11H18V8L22,12L18,16M2,12L6,16V13H9V22H11V2H9V11H6V8L2,12Z"
          ></path>
        </svg>
      </div>
    </PanelResizeHandle>
  );
}
