export declare type ResponseDto = {
    statusCode: number;
    message: string;
    data: any;
};

export declare type ListDto = {
    startDate?: string;
    endDate?: string;
    pageNo?: number;
    limit?: number;
};