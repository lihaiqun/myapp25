import React from 'react';
const Com = ({ bannerlist }) => (
  bannerlist.map((val, index) => (<img key = {index} src = {'http://www.daxunxun.com' + val} art = ""/>))
)
export default Com;