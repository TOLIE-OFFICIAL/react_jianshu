import styled from "styled-components";
import logoPic from "../../statics/images/logo.png"

//注意命名要的首字母要大写
export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;
export const HeaderContain = styled.div`
  position: relative;
  width: 1440px;
  height: 100%;
  margin: 0 auto;

  > a {
    width: 100px;
    height: 100%;
    background: url(${logoPic});
    background-size: contain;
  }
`;
// export const Logo = styled.div`


//> a {
//  width: 100%;
//  height: 100%;
//}
// `;
export const Search = styled.input`
  width: 240px;
  height: 38px;
  border: 1px solid #eee;
  padding-left: 18px;
  border-radius: 20px;
  background-color: rgb(238, 238, 238);
  font-size: 15px;
  line-height: 38px;
  color: #777;
  transition: width 500ms;

  &.focus {
    width: 320px;
  }

  &::placeholder {
    color: #999;
  }
`;
export const StyledUl = styled.ul`
  float: left;
  margin-left: 150px;
  background-color: #fff;

  > li {
    position: relative;
    float: left;
    height: 100%;
    margin-right: 10px;
    padding: 0 15px;
    font-size: 17px;
    line-height: 57px;
    cursor: pointer;

    & > .iconfont {
      position: absolute;
      height: 30px;
      width: 30px;
      right: 26px;
      top: 50%;
      line-height: 30px;
      text-align: center;
      transform: translateY(-50%);
      border-radius: 50%;
      color: #999;
      //transition: all 800ms;

      &.focus {
        background-color: #969696;
        color: #fff;
      }
    }

    &.index {
      color: #ea6f5a;
      padding-left: 0 !important;
    }

    &.cover:hover {
      background-color: #f5f5f5;
    }
  }
`;
export const HeaderBtn = styled.div`
  float: right;
  padding: 0 12px;
  background-color: #fff;
  line-height: 57px;
  text-align: center;
  font-size: 15px;
  cursor: pointer;

  &.write {
    width: 100px;
    height: 40px;
    margin: 9px 12px auto 17px;
    border-radius: 20px;
    background-color: #ea6f5a;
    line-height: 40px;
    color: #fff;

  }

  &.register {
    width: 80px;
    height: 38px;
    margin-top: 10px;
    margin-left: 21px;
    line-height: 36px;
    border: 1px solid #ea6f5a;
    border-radius: 19px;
    color: #ea6f5a;

  }

  &.login {
    width: 56px;
    height: 36px;
    margin-top: 11px;
    margin-left: 10px;
    line-height: 36px;
    color: #969696;
  }

  &.Aa {
    width: 56px;
    height: 38px;
    margin-top: 10px;
    margin-left: 10px;
    line-height: 38px;
    color: #969696;
  }
`;
export const SearchContain = styled.div`
  position: absolute;
  z-index: 1;
  top: 58px;
  left: 683px;
  padding: 12px 0 10px 18px;
  width: 250px;
  height: 200px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  border-radius: 3px;
  //禁止选中
  user-select: none;
  color: #787878;

  &::before {
    box-sizing: content-box;
    position: absolute;
    top: -18px;;
    left: 15px;
    border-bottom: 9px solid #fff;
    border-top: 9px solid transparent;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    display: block;
    content: '';
    z-index: 2;
  }

  &::after {
    box-sizing: content-box;
    position: absolute;
    top: -20px;
    left: 14px;
    border-bottom: 10px solid #ddd;
    border-top: 10px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    display: block;
    content: '';
    z-index: 1
  }
`;

export const HotTitle = styled.h4`
  margin-bottom: 12px;
  font-weight: normal;
  font-size: 15px;
  height: 23px;
  line-height: 23px;

  & > div {
    float: right;
    margin-right: 14px;
    height: 100%;
    font-size: 14px;
    line-height: 23px;

    &:hover {
      font-weight: 550;
      cursor: pointer;
    }
  }


`;
export const SearchUl = styled.ul`
  width: 200px;
  margin-right: 28px;

  > li {
    float: left;
    margin-right: 8px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    font-size: 14px;

    & > span {
      padding: 0 8px;
    }

    &:hover {
      background-color: #f5f5f5;
      cursor: pointer;
    }
  }
`;