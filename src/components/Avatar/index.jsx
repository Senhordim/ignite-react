import React from 'react'

import style from './Avatar.module.css'

export default function Avatar({ src }) {
  return  <img src={src} className={style.avatar} />
}
