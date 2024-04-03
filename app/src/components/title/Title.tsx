import React from 'react'
import style from './Title.module.css'

export const Title = ({ txt }: { txt: string }) => {
    return (
        <h1 className={style.title}>{txt}</h1>
    )
}