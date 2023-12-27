import React from 'react';
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';
import { restoreElements } from '@excalidraw/excalidraw';
import { log } from 'console';

export default function LeftSidebar(props: any) {
  const excalidrawAPI: ExcalidrawImperativeAPI = props.excalidrawAPI;

  const resetScene = (): void => {
    console.log('resetScene');
    console.log(excalidrawAPI);

    excalidrawAPI?.resetScene();
  };

  const loadDiagram = () => {
    console.log('loadDiagram');

    const sceneData = {
      elements: restoreElements(
        [
          {
            type: 'rectangle',
            id: 'oDVXy8D6rom3H1-LLH2-f',
            x: 100.50390625,
            y: 93.67578125,
            strokeColor: '#c92a2a',
            backgroundColor: 'transparent',
            fillStyle: 'hachure',
            strokeWidth: 1,
            strokeStyle: 'solid',
            roundness: {
              type: 3,
              value: 32,
            },
            roughness: 1,
            opacity: 100,
            width: 186.47265625,
            height: 141.9765625,
            angle: 0,
            seed: 1968410350,
            version: 141,
            versionNonce: 361174001,
            isDeleted: false,
            groupIds: [],
            frameId: null,
            boundElements: null,
            updated: 1,
            link: null,
            locked: false,
            customData: {
              test: 'test',
            },
          },
        ],
        null
      ),
      appState: {
        viewBackgroundColor: '#edf2ff',
      },
    };
    excalidrawAPI?.updateScene(sceneData);
  };

  return (
    <div>
      <button className="btn btn-primary m-2" onClick={loadDiagram}>
        <i className="icon-arrow">Load diagram</i>
      </button>
      <button className="btn btn-primary m-2" onClick={resetScene}>
        <i className="icon-arrow">Reset Scene</i>
      </button>
    </div>
  );
}
