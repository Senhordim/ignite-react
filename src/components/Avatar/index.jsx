import React from 'react'

import style from './Avatar.module.css'

export default function Avatar({ src, border = true }) {
  return  <img src={src} className={border ? style.avatar : style.avatarNoBorder} />
}
