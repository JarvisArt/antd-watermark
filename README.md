# antd-watermark

React 18 supported Watermark Component.

[![NPM version][npm-image]][npm-url] [![dumi](https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square)](https://github.com/umijs/dumi) [![build status][github-actions-image]][github-actions-url] [![Codecov][codecov-image]][codecov-url] [![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/antd-watermark.svg?style=flat-square
[npm-url]: http://npmjs.org/package/antd-watermark
[github-actions-image]: https://github.com/JarvisArt/antd-watermark/workflows/CI/badge.svg
[github-actions-url]: https://github.com/JarvisArt/antd-watermark/actions
[codecov-image]: https://img.shields.io/codecov/c/github/JarvisArt/antd-watermark/master.svg?style=flat-square
[codecov-url]: https://app.codecov.io/gh/JarvisArt/antd-watermark
[download-image]: https://img.shields.io/npm/dm/antd-watermark.svg?style=flat-square
[download-url]: https://npmjs.org/package/antd-watermark

## Feature

React life cycle support watermark component

## Install

```bash
npm install antd-watermark 
```

## Usage

```tsx | pure
import React from 'react';
import Watermark from 'antd-watermark';

const App: React.FC = () => (
  <Watermark content="Ant Design">
    <div style={{ height: 460 }} />
  </Watermark>
);

export default App;
```
## Development

```bash
npm install
npm start
open http://localhost:8000
```

## API

### Watermark

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 水印的宽度，`content` 的默认值为自身的宽度 | number | 120 |
| height | 水印的高度，`content` 的默认值为自身的高度 | number | 64 |
| rotate | 水印绘制时，旋转的角度，单位 `°` | number | -22 |
| zIndex | 追加的水印元素的 z-index | number | 9 |
| image | 图片源，建议导出 2 倍或 3 倍图，优先级高 | string | - |
| content | 水印文字内容 | string \| string[] | - |
| font | 文字样式 | [Font](#font) | [Font](#font) |
| gap | 水印之间的间距 | \[number, number\] | \[100, 100\] |
| offset | 水印距离容器左上角的偏移量，默认为 `gap/2` | \[number, number\] | \[gap\[0\]/2, gap\[1\]/2\] |

### Font

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 字体颜色 | string | rgba(0,0,0,.15) |
| fontSize | 字体大小 | number | 16 |
| fontWeight | 字体粗细 | `normal` \| `light` \| `weight` \| number | normal |
| fontFamily | 字体类型 | string | sans-serif |
| fontStyle | 字体样式 | `none` \| `normal` \| `italic` \| `oblique` | normal |
