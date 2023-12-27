import React from 'react';
import { useState, useEffect, useRef } from 'react';
import layout_style from './layout.module.css';
import { Panel, PanelGroup } from 'react-resizable-panels';
import Header from './Header';
import LayoutSidebar from './LayoutSidebar';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';

import { Excalidraw } from '@excalidraw/excalidraw';
import { ResolvablePromise } from '@excalidraw/excalidraw/types/utils';
import {
  ExcalidrawImperativeAPI,
  ExcalidrawInitialDataState,
} from '@excalidraw/excalidraw/types/types';

export default function Layout() {
  const LEFT_SIDEBAR_DEFAULT_SIZE = 20;
  const LEFT_SIDEBAR_COLLAPSED_SIZE = 4;
  const LEFT_SIDEBAR_MIN_SIZE = 4;
  const MAIN_PANEL_MIN_SIZE = 50;

  const [excalidrawAPI, setExcalidrawAPI] =
    useState<ExcalidrawImperativeAPI | null>(null);

  return (
    <div className={layout_style.Container}>
      <div className={layout_style.TopRow}>
        <Header />
      </div>
      <div className={layout_style.BottomRow}>
        <PanelGroup autoSaveId="example" direction="horizontal">
          <LayoutSidebar
            position="left"
            content={<LeftSidebar excalidrawAPI={excalidrawAPI} />}
            collapsible={true}
            defaultSize={LEFT_SIDEBAR_DEFAULT_SIZE}
            collapsedSize={LEFT_SIDEBAR_COLLAPSED_SIZE}
            minSize={LEFT_SIDEBAR_MIN_SIZE}
            order={1}
          />
          <Panel
            className={layout_style.Panel}
            collapsible={true}
            minSize={MAIN_PANEL_MIN_SIZE}
            order={2}
          >
            <div className={layout_style.PanelContent}>
              <Excalidraw
                // excalidrawAPI={(api) => setExcalidrawAPI(api)}
                excalidrawAPI={(api: ExcalidrawImperativeAPI) =>
                  setExcalidrawAPI(api)
                }
                gridModeEnabled={true}
              />
            </div>
          </Panel>
          <LayoutSidebar
            position="right"
            content={<RightSidebar />}
            collapsible={true}
            defaultSize={LEFT_SIDEBAR_DEFAULT_SIZE}
            collapsedSize={LEFT_SIDEBAR_COLLAPSED_SIZE}
            minSize={LEFT_SIDEBAR_MIN_SIZE}
            order={3}
          />
        </PanelGroup>
      </div>
    </div>
  );
}
