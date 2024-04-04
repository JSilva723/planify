import { IServiceAPI } from 'api-interfaces'

export interface Item {
    id: number
    name: string
    description: string
}

export interface Section {
    title: string
    data: Item[]
}

const parseData = (list: IServiceAPI[]): Section[] => {
    const objCategory = new Map()

    list.forEach(({ category, id, name, description }) => {
        const item = {
            id: id,
            name: name,
            description: description
        }
        if (objCategory.has(category)) {
            objCategory.get(category).data.push(item)
        } else {
            objCategory.set(category, {
                title: category,
                data: [item]
            })
        }
    })

    return Object.values(Object.fromEntries(objCategory))
}

export const useGetServices = () => {

    const getServices = async () => {
        const response = await fetch(process.env.API_URL + '/services')
        const { services } = await response.json()
        return parseData(services)
    }

    return getServices
}