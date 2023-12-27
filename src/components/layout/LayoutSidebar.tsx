import React, { useRef } from 'react';
import layout_style from './layout.module.css';
import classNames from 'classnames';

import { ImperativePanelHandle, Panel } from 'react-resizable-panels';
import ResizeHandle from './ResizeHandle';

const LayoutSidebar = (props: any) => {
  const {
    position,
    content,
    collapsible,
    defaultSize,
    collapsedSize,
    minSize,
    order,
  } = props;

  const ref = useRef<ImperativePanelHandle>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const justifyClass = classNames({
    'justify-content-start': position === 'left',
    'justify-content-end': position === 'right',
  });
  const arrowClass = classNames({
    'bi bi-chevron-double-left': position === 'left',
    'bi bi-chevron-double-right': position === 'right',
  });

  const collapsePanel = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (!ref) return;

    const panel = ref.current;
    console.log(iconRef);

    if (panel) {
      const size = panel.getSize();

      if (size > collapsedSize) {
        panel.resize(collapsedSize);
      } else {
        panel.resize(defaultSize);
      }

      // based on class name because chevrons are reversed for left vs right
      if (iconRef && iconRef.current) {
        iconRef.current.className =
          iconRef.current.className === 'bi bi-chevron-double-right'
            ? 'bi bi-chevron-double-left'
            : 'bi bi-chevron-double-right';
      }

      console.log(panel.getSize());
    }
  };

  return (
    <>
      {position === 'right' && <ResizeHandle />}
      <Panel
        className={layout_style.Panel}
        collapsible={collapsible}
        ref={ref}
        defaultSize={defaultSize}
        collapsedSize={collapsedSize}
        minSize={minSize}
        order={order}
      >
        <div className={layout_style.SidebarContent}>
          <div className={`SidebarHeader d-flex ${justifyClass}`}>
            <button className="btn btn-primary m-2" onClick={collapsePanel}>
              <i ref={iconRef} className={`${arrowClass}`}></i>
            </button>
          </div>
          <div className={`SidebarContent d-flex ${justifyClass}`}>
            {content ? content : <div>No content</div>}
          </div>
        </div>
      </Panel>
      {position === 'left' && <ResizeHandle />}
    </>
  );
};

export default LayoutSidebar;
