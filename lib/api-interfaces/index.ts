export interface IServiceAPI {
    id: number
    name: string
    description: string
    category: string
}

export interface ISlotAPI {
    date: string
    serviceId: number
    availableTimeslots: string[]
}

