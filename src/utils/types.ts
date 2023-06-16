export interface HeroInfo {
    "name": string,
    "height": number,
    "mass": number,
    "hair_color": string,
    "skin_color": string,
    "eye_color": string,
    "birth_year": string,
    "gender": string
}

export interface DataForSave {
    payload: any,
    time: number
}

export interface Item {
   title: string,
   route: string
}