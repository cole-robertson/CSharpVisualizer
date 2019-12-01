export interface IStackTrace {
    event: string;
    line: number;
    exeception_msg?: string;
    stdout?: string;
    func_name?: string;
    heap?: IHeapTrace;
    globals?: Dictionary<string | number | Array<string | number>>;
    stack_to_render?: object[] // better typing later
    ordered_globals: string[];
}

export interface Dictionary<T> {
    [index: string]: T;
}

export type IHeapTrace = Dictionary<IHeapArray>;

export type IHeapArray = Array<string | number | null | IHeapArray>;
