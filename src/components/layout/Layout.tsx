import { useState, useRef } from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import {
  ImperativePanelHandle,
  Panel,
  PanelGroup,
} from 'react-resizable-panels';

import ResizeHandle from './ResizeHandle';
import layout_style from './layout.module.css';

import Header from './Header';

export default function Layout() {
  const leftSidebarRef = useRef<ImperativePanelHandle>(null);
  const leftSidebarIconRef = useRef<HTMLDivElement>(null);

  const LEFT_SIDEBAR_DEFAULT_SIZE = 20;
  const LEFT_SIDEBAR_COLLAPSED_SIZE = 4;
  const LEFT_SIDEBAR_MIN_SIZE = 4;
  const MAIN_PANEL_MIN_SIZE = 50;

  const collapseLeftPanel = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const panel = leftSidebarRef.current;
    console.log(e);
    if (panel) {
      const size = panel.getSize();

      if (size > LEFT_SIDEBAR_COLLAPSED_SIZE) {
        panel.resize(LEFT_SIDEBAR_COLLAPSED_SIZE);
      } else {
        panel.resize(LEFT_SIDEBAR_DEFAULT_SIZE);
      }

      if (leftSidebarIconRef.current) {
        leftSidebarIconRef.current.className =
          leftSidebarIconRef.current.className === 'bi bi-chevron-double-right'
            ? 'bi bi-chevron-double-left'
            : 'bi bi-chevron-double-right';
      }

      console.log(panel.getSize());
    }
  };
  return (
    <div className={layout_style.Container}>
      <div className={layout_style.TopRow}>
        <Header />
      </div>
      <div className={layout_style.BottomRow}>
        <PanelGroup autoSaveId="example" direction="horizontal">
          <>
            <Panel
              className={layout_style.Panel}
              collapsible={true}
              ref={leftSidebarRef}
              defaultSize={LEFT_SIDEBAR_DEFAULT_SIZE}
              collapsedSize={LEFT_SIDEBAR_COLLAPSED_SIZE}
              minSize={LEFT_SIDEBAR_MIN_SIZE}
              order={1}
            >
              <button className="btn btn-primary" onClick={collapseLeftPanel}>
                <i
                  ref={leftSidebarIconRef}
                  className="bi bi-chevron-double-left"
                ></i>
              </button>

              <div className={layout_style.PanelContent}>left</div>
            </Panel>
            <ResizeHandle />
          </>
          <Panel
            className={layout_style.Panel}
            collapsible={true}
            minSize={MAIN_PANEL_MIN_SIZE}
            order={2}
          >
            <div className={layout_style.PanelContent}>
              <Excalidraw />
            </div>
          </Panel>
          <>
            <ResizeHandle />
            <Panel
              className={layout_style.Panel}
              collapsible={true}
              defaultSize={20}
              order={3}
            >
              <div className={layout_style.PanelContent}>right</div>
            </Panel>
          </>
        </PanelGroup>
      </div>
    </div>
  );
}
