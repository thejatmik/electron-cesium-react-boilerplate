/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 */


console.log('👋 This message is being logged by "renderer.js", included via webpack');
import { render } from './renderer/index';
// eslint-disable-next-line
import 'cesium/Build/CesiumUnminified/Widgets/widgets.css';

render();
