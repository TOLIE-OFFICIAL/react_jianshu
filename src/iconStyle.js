import {createGlobalStyle} from "styled-components"

export const IconStyle = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* Project id 3189734 */
    src: url('//at.alicdn.com/t/font_3189734_yakf9hvnt9.woff2?t=1646122489317') format('woff2'),
    url('//at.alicdn.com/t/font_3189734_yakf9hvnt9.woff?t=1646122489317') format('woff'),
    url('//at.alicdn.com/t/font_3189734_yakf9hvnt9.ttf?t=1646122489317') format('truetype');
  }

  &.iconfont {
    font-family: "iconfont";
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  &.navIcon {
    margin-left: 5px;
  }

  &.icon-icon-pencil:before {
    content: "\\e600";
  }

  &.icon-icon-it:before {
    content: "\\eb64";
  }

  &.icon-icon-member:before {
    content: "\\e8a6";
  }

  &.icon-icon-app:before {
    content: "\\e67e";
  }

  &.icon-zhinanzhen:before {
    content: "\\e684";
  }

  &.icon-Aa:before {
    content: "\\e707";
    font-size: 32px;
  }

  &.icon-reset:before {
    content: "\\e689";
  }

  &.icon-diamond:before {
    content: "\\e603";
    font-weight: 550;
    font-size: 14px;
  }

  &.icon-heart:before {
    content: "\\eca1";
  }

  &.icon-comment:before {
    content: "\\e602";
  }

  &.icon-book:before {
    content: "\\e7b3";
    margin-right: 8px;
  }

  &.icon-right:after {
    content: "\\e634";
    margin-left: 5px;
  }

  &.icon-top:after {
    content: "\\eb14";
  }

  &.icon-user:before {
    content: "\\e67f";
  }

  &.icon-pwd:before {
    content: "\\e67c";
  }

  &.icon-wb:before {
    content: "\\e621";
    color: #e05244;
  }

  &.icon-wx:before {
    content: "\\e624";
    color: #00bb29;
  }

  &.icon-qq:before {
    content: "\\e626";
    color: #498ad5;
  }

  &.icon-phone:before {
    content: "\\e601";
  }
`
