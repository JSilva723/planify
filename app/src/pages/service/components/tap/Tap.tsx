import React, { createContext, useState, Dispatch, SetStateAction } from 'react'
import { TapItem } from '../tap-item/TapItem'
import { TapContent } from '../tap-content/TapContent'
import { Item } from '@pages/service/hooks/useGetServices'

interface AccordionProps {
    title: string
    data: Item[]
}

type TypeAccordion = {
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
}

export const AccordionContext = createContext<TypeAccordion>({
    show: false,
    setShow: () => { }
})

export const Tap = ({ title, data }: AccordionProps) => {
    const [show, setShow] = useState(false)
    return (
        <AccordionContext.Provider value={{ show, setShow }}>
            <TapItem title={title} />
            <TapContent data={data} />
        </AccordionContext.Provider>
    )
}