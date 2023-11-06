export class LecturerCardInfo {
    constructor(
        public lecturer_name: string | null, 
        public certified_logo: string | null, 
        public certified_text: string | null, 
    ){}
}
export class Testemonial {
    constructor(
        public testemonial_img: string | null, 
        public testemonial_text: string | null, 
    ){}
}