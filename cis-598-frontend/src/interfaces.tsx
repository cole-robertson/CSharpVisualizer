export interface IStackTrace {
    event: string;
    line: number;
    exception_msg?: string;
    stdout?: string;
    func_name?: string;
    heap?: IHeapTrace;
    globals?: Dictionary<IVariable>;
    stack_to_render?: object[] // better typing later
    ordered_globals: string[];
}

export type IVariable = string | number | null | Array<string | number>;

export interface Dictionary<T> {
    [index: string]: T;
}

export interface IStackRender {
    frame_id: number;
    encoded_locals: Dictionary<IVariable>;
    is_highlighted: boolean;
    is_parent: boolean;
    func_name: string;
    is_zombie?: boolean;
    parent_frame_id_list: number[];
    unique_hash: string;
    ordered_varnames: string[]

}

export type IHeapTrace = Dictionary<IHeapArray>;

export type IHeapArray = Array<string | number | null | IHeapArray>;
