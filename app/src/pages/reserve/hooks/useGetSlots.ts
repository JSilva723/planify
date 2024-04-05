import { ISlotAPI } from 'api-interfaces'

export interface Slot {
    date: string
    available: string[]
}

const parseData = (obj: ISlotAPI) => {
    return [
        {
            date: obj.date,
            available: obj.availableTimeslots
        }
    ]
}

export const useGetSlots = () => {

    const getSlots = async () => {
        const response = await fetch(process.env.API_URL + '/slots')
        const slotsData = await response.json()
        return parseData(slotsData)
    }

    return getSlots
}