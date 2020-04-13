export class CommonResponse {
    Success: boolean;
    Message: string;
    constructor() {
        this.Message = '';
        this.Success = false;
    }
}