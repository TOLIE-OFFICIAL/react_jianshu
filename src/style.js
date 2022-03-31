import {createGlobalStyle} from 'styled-components';

//基本的样式文件
export const Globalstyle = createGlobalStyle`
  /* 把我们所有标签的内外边距清零 */
  * {
    margin: 0;
    padding: 0;
    /* css3盒子模型 */
    box-sizing: border-box;
  }

  /* em 和 i 斜体的文字不倾斜 */
  em,
  i {
    font-style: normal
  }

  /* 去掉li 的小圆点 */
  li {
    list-style: none
  }

  img {
    /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
    border: 0;
    /* 取消图片底侧有空白缝隙的问题 */
    vertical-align: middle
  }

  button {
    /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
    cursor: pointer
  }

  a {
    color: #666;
    text-decoration: none
  }

  //a:hover {
  //  color: #ea6f5a
  //}

  button,
  input {
    /* "\\5B8B\\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
    font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    /* 默认有灰色边框我们需要手动去掉 */
    border: 0;
    outline: none;
  }

  body {
    /* CSS3 抗锯齿形 让文字显示的更加清晰 */
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    font: 17px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\\5B8B\\4F53", sans-serif;
    color: #666;
    /* margin: 0 auto; */
  }

  .hide,
  .none {
    display: none
  }

  /* 清除浮动 */
  .clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
  }

  .clearfix {
    *zoom: 1
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .w {
    width: 1408px;
  }`
export default Globalstyle;