export interface IindustryNews {
    id: number,
    image: string,
    title: string,
    content: {
        topic: string,
        subTopic?: string,
        point: string,
        subPoints: string[],
    }[],
    date: string,
}[]