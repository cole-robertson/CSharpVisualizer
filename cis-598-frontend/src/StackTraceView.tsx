import React from 'react';
import './App.css';
import { IStackTrace, Dictionary, IVariable } from './Interfaces';
import { Button } from '@blueprintjs/core';
import { ArcherContainer, ArcherElement } from 'react-archer';


interface IProps {
    stackTraces: IStackTrace[]
    syntaxError?: string;
}
interface IState {
    globals: Dictionary<string>;
    heapVariables: Dictionary<string[]>;
    stepNumber: number;
}

export default class StackTraceView extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            globals: {},
            heapVariables: {},
            stepNumber: 0
        }
    }
    
    public render() {
        const exampleHeapTraceJson = JSON.parse(`{"trace" : [
            {
                "ordered_globals": [],
                "stdout": "",
                "func_name": "<module>",
                "stack_to_render": [],
                "globals": {},
                "heap": {},
                "line": 1,
                "event": "step_line"
              },
              {
                "ordered_globals": [
                  "foo"
                ],
                "stdout": "",
                "func_name": "<module>",
                "stack_to_render": [],
                "globals": {
                  "foo": [
                    "REF",
                    1
                  ]
                },
                "heap": {
                  "1": [
                    "FUNCTION",
                    "foo(x, y, z)",
                    null
                  ]
                },
                "line": 4,
                "event": "step_line"
              },
              {
                "ordered_globals": [
                  "foo",
                  "bar"
                ],
                "stdout": "",
                "func_name": "<module>",
                "stack_to_render": [],
                "globals": {
                  "foo": [
                    "REF",
                    1
                  ],
                  "bar": [
                    "REF",
                    2
                  ]
                },
                "heap": {
                  "1": [
                    "FUNCTION",
                    "foo(x, y, z)",
                    null
                  ],
                  "2": [
                    "FUNCTION",
                    "bar(a, b)",
                    null
                  ]
                },
                "line": 7,
                "event": "step_line"
              },
              {
                "ordered_globals": [
                  "foo",
                  "bar",
                  "baz"
                ],
                "stdout": "",
                "func_name": "<module>",
                "stack_to_render": [],
                "globals": {
                  "bar": [
                    "REF",
                    2
                  ],
                  "foo": [
                    "REF",
                    1
                  ],
                  "baz": [
                    "REF",
                    3
                  ]
                },
                "heap": {
                  "1": [
                    "FUNCTION",
                    "foo(x, y, z)",
                    null
                  ],
                  "2": [
                    "FUNCTION",
                    "bar(a, b)",
                    null
                  ],
                  "3": [
                    "FUNCTION",
                    "baz(c)",
                    null
                  ]
                },
                "line": 10,
                "event": "step_line"
              },
              {
                "ordered_globals": [
                  "foo",
                  "bar",
                  "baz"
                ],
                "stdout": "",
                "func_name": "foo",
                "stack_to_render": [
                  {
                    "frame_id": 1,
                    "encoded_locals": {
                      "y": 2,
                      "x": 1,
                      "z": 3
                    },
                    "is_highlighted": true,
                    "is_parent": false,
                    "func_name": "foo",
                    "is_zombie": false,
                    "parent_frame_id_list": [],
                    "unique_hash": "foo_f1",
                    "ordered_varnames": [
                      "x",
                      "y",
                      "z"
                    ]
                  }
                ],
                "globals": {
                  "bar": [
                    "REF",
                    2
                  ],
                  "foo": [
                    "REF",
                    1
                  ],
                  "baz": [
                    "REF",
                    3
                  ]
                },
                "heap": {
                  "1": [
                    "FUNCTION",
                    "foo(x, y, z)",
                    null
                  ],
                  "2": [
                    "FUNCTION",
                    "bar(a, b)",
                    null
                  ],
                  "3": [
                    "FUNCTION",
                    "baz(c)",
                    null
                  ]
                },
                "line": 1,
                "event": "call"
              },
              {
                "ordered_globals": [
                  "foo",
                  "bar",
                  "baz"
                ],
                "stdout": "",
                "func_name": "foo",
                "stack_to_render": [
                  {
                    "frame_id": 1,
                    "encoded_locals": {
                      "y": 2,
                      "x": 1,
                      "z": 3
                    },
                    "is_highlighted": true,
                    "is_parent": false,
                    "func_name": "foo",
                    "is_zombie": false,
                    "parent_frame_id_list": [],
                    "unique_hash": "foo_f1",
                    "ordered_varnames": [
                      "x",
                      "y",
                      "z"
                    ]
                  }
                ],
                "globals": {
                  "bar": [
                    "REF",
                    2
                  ],
                  "foo": [
                    "REF",
                    1
                  ],
                  "baz": [
                    "REF",
                    3
                  ]
                },
                "heap": {
                  "1": [
                    "FUNCTION",
                    "foo(x, y, z)",
                    null
                  ],
                  "2": [
                    "FUNCTION",
                    "bar(a, b)",
                    null
                  ],
                  "3": [
                    "FUNCTION",
                    "baz(c)",
                    null
                  ]
                },
                "line": 2,
                "event": "step_line"
              },
              {
                "ordered_globals": [
                  "foo",
                  "bar",
                  "baz"
                ],
                "stdout": "",
                "func_name": "bar",
                "stack_to_render": [
                  {
                    "frame_id": 1,
                    "encoded_locals": {
                      "y": 2,
                      "x": 1,
                      "z": 3
                    },
                    "is_highlighted": false,
                    "is_parent": false,
                    "func_name": "foo",
                    "is_zombie": false,
                    "parent_frame_id_list": [],
                    "unique_hash": "foo_f1",
                    "ordered_varnames": [
                      "x",
                      "y",
                      "z"
                    ]
                  },
                  {
                    "frame_id": 2,
                    "encoded_locals": {
                      "a": 1,
                      "b": 2
                    },
                    "is_highlighted": true,
                    "is_parent": false,
                    "func_name": "bar",
                    "is_zombie": false,
                    "parent_frame_id_list": [],
                    "unique_hash": "bar_f2",
                    "ordered_varnames": [
                      "a",
                      "b"
                    ]
                  }
                ],
                "globals": {
                  "bar": [
                    "REF",
                    2
                  ],
                  "foo": [
                    "REF",
                    1
                  ],
                  "baz": [
                    "REF",
                    3
                  ]
                },
                "heap": {
                  "1": [
                    "FUNCTION",
                    "foo(x, y, z)",
                    null
                  ],
                  "2": [
                    "FUNCTION",
                    "bar(a, b)",
                    null
                  ],
                  "3": [
                    "FUNCTION",
                    "baz(c)",
                    null
                  ]
                },
                "line": 4,
                "event": "call"
              },
              {
                "ordered_globals": [
                  "foo",
                  "bar",
                  "baz"
                ],
                "stdout": "",
                "func_name": "bar",
                "stack_to_render": [
                  {
                    "frame_id": 1,
                    "encoded_locals": {
                      "y": 2,
                      "x": 1,
                      "z": 3
                    },
                    "is_highlighted": false,
                    "is_parent": false,
                    "func_name": "foo",
                    "is_zombie": false,
                    "parent_frame_id_list": [],
                    "unique_hash": "foo_f1",
                    "ordered_varnames": [
                      "x",
                      "y",
                      "z"
                    ]
                  },
                  {
                    "frame_id": 2,
                    "encoded_locals": {
                      "a": 1,
                      "b": 2
                    },
                    "is_highlighted": true,
                    "is_parent": false,
                    "func_name": "bar",
                    "is_zombie": false,
                    "parent_frame_id_list": [],
                    "unique_hash": "bar_f2",
                    "ordered_varnames": [
                      "a",
                      "b"
                    ]
                  }
                ],
                "globals": {
                  "bar": [
                    "REF",
                    2
                  ],
                  "foo": [
                    "REF",
                    1
                  ],
                  "baz": [
                    "REF",
                    3
                  ]
                },
                "heap": {
                  "1": [
                    "FUNCTION",
                    "foo(x, y, z)",
                    null
                  ],
                  "2": [
                    "FUNCTION",
                    "bar(a, b)",
                    null
                  ],
                  "3": [
                    "FUNCTION",
                    "baz(c)",
                    null
                  ]
                },
                "line": 5,
                "event": "step_line"
              },
              {
                "ordered_globals": [
                  "foo",
                  "bar",
                  "baz"
                ],
                "stdout": "",
                "func_name": "baz",
                "stack_to_render": [
                  {
                    "frame_id": 1,
                    "encoded_locals": {
                      "y": 2,
                      "x": 1,
                      "z": 3
                    },
                    "is_highlighted": false,
                    "is_parent": false,
                    "func_name": "foo",
                    "is_zombie": false,
                    "parent_frame_id_list": [],
                    "unique_hash": "foo_f1",
                    "ordered_varnames": [
                      "x",
                      "y",
                      "z"
                    ]
                  },
                  {
                    "frame_id": 2,
                    "encoded_locals": {
                      "a": 1,
                      "b": 2
                    },
                    "is_highlighted": false,
                    "is_parent": false,
                    "func_name": "bar",
                    "is_zombie": false,
                    "parent_frame_id_list": [],
                    "unique_hash": "bar_f2",
                    "ordered_varnames": [
                      "a",
                      "b"
                    ]
                  },
                  {
                    "frame_id": 3,
                    "encoded_locals": {
                      "c": 1
                    },
                    "is_highlighted": true,
                    "is_parent": false,
                    "func_name": "baz",
                    "is_zombie": false,
                    "parent_frame_id_list": [],
                    "unique_hash": "baz_f3",
                    "ordered_varnames": [
                      "c"
                    ]
                  }
                ],
                "globals": {
                  "bar": [
                    "REF",
                    2
                  ],
                  "foo": [
                    "REF",
                    1
                  ],
                  "baz": [
                    "REF",
                    3
                  ]
                },
                "heap": {
                  "1": [
                    "FUNCTION",
                    "foo(x, y, z)",
                    null
                  ],
                  "2": [
                    "FUNCTION",
                    "bar(a, b)",
                    null
                  ],
                  "3": [
                    "FUNCTION",
                    "baz(c)",
                    null
                  ]
                },
                "line": 7,
                "event": "call"
              },
              {
                "ordered_globals": [
                  "foo",
                  "bar",
                  "baz"
                ],
                "stdout": "",
                "func_name": "baz",
                "stack_to_render": [
                  {
                    "frame_id": 1,
                    "encoded_locals": {
                      "y": 2,
                      "x": 1,
                      "z": 3
                    },
                    "is_highlighted": false,
                    "is_parent": false,
                    "func_name": "foo",
                    "is_zombie": false,
                    "parent_frame_id_list": [],
                    "unique_hash": "foo_f1",
                    "ordered_varnames": [
                      "x",
                      "y",
                      "z"
                    ]
                  },
                  {
                    "frame_id": 2,
                    "encoded_locals": {
                      "a": 1,
                      "b": 2
                    },
                    "is_highlighted": false,
                    "is_parent": false,
                    "func_name": "bar",
                    "is_zombie": false,
                    "parent_frame_id_list": [],
                    "unique_hash": "bar_f2",
                    "ordered_varnames": [
                      "a",
                      "b"
                    ]
                  },
                  {
                    "frame_id": 3,
                    "encoded_locals": {
                      "c": 1
                    },
                    "is_highlighted": true,
                    "is_parent": false,
                    "func_name": "baz",
                    "is_zombie": false,
                    "parent_frame_id_list": [],
                    "unique_hash": "baz_f3",
                    "ordered_varnames": [
                      "c"
                    ]
                  }
                ],
                "globals": {
                  "bar": [
                    "REF",
                    2
                  ],
                  "foo": [
                    "REF",
                    1
                  ],
                  "baz": [
                    "REF",
                    3
                  ]
                },
                "heap": {
                  "1": [
                    "FUNCTION",
                    "foo(x, y, z)",
                    null
                  ],
                  "2": [
                    "FUNCTION",
                    "bar(a, b)",
                    null
                  ],
                  "3": [
                    "FUNCTION",
                    "baz(c)",
                    null
                  ]
                },
                "line": 8,
                "event": "step_line"
              },
              {
                "ordered_globals": [
                  "foo",
                  "bar",
                  "baz"
                ],
                "stdout": "",
                "func_name": "baz",
                "stack_to_render": [
                  {
                    "frame_id": 1,
                    "encoded_locals": {
                      "y": 2,
                      "x": 1,
                      "z": 3
                    },
                    "is_highlighted": false,
                    "is_parent": false,
                    "func_name": "foo",
                    "is_zombie": false,
                    "parent_frame_id_list": [],
                    "unique_hash": "foo_f1",
                    "ordered_varnames": [
                      "x",
                      "y",
                      "z"
                    ]
                  },
                  {
                    "frame_id": 2,
                    "encoded_locals": {
                      "a": 1,
                      "b": 2
                    },
                    "is_highlighted": false,
                    "is_parent": false,
                    "func_name": "bar",
                    "is_zombie": false,
                    "parent_frame_id_list": [],
                    "unique_hash": "bar_f2",
                    "ordered_varnames": [
                      "a",
                      "b"
                    ]
                  },
                  {
                    "frame_id": 3,
                    "encoded_locals": {
                      "__return__": 1,
                      "c": 1
                    },
                    "is_highlighted": true,
                    "is_parent": false,
                    "func_name": "baz",
                    "is_zombie": false,
                    "parent_frame_id_list": [],
                    "unique_hash": "baz_f3",
                    "ordered_varnames": [
                      "c",
                      "__return__"
                    ]
                  }
                ],
                "globals": {
                  "bar": [
                    "REF",
                    2
                  ],
                  "foo": [
                    "REF",
                    1
                  ],
                  "baz": [
                    "REF",
                    3
                  ]
                },
                "heap": {
                  "1": [
                    "FUNCTION",
                    "foo(x, y, z)",
                    null
                  ],
                  "2": [
                    "FUNCTION",
                    "bar(a, b)",
                    null
                  ],
                  "3": [
                    "FUNCTION",
                    "baz(c)",
                    null
                  ]
                },
                "line": 8,
                "event": "return"
              },
              {
                "ordered_globals": [
                  "foo",
                  "bar",
                  "baz"
                ],
                "stdout": "",
                "func_name": "bar",
                "stack_to_render": [
                  {
                    "frame_id": 1,
                    "encoded_locals": {
                      "y": 2,
                      "x": 1,
                      "z": 3
                    },
                    "is_highlighted": false,
                    "is_parent": false,
                    "func_name": "foo",
                    "is_zombie": false,
                    "parent_frame_id_list": [],
                    "unique_hash": "foo_f1",
                    "ordered_varnames": [
                      "x",
                      "y",
                      "z"
                    ]
                  },
                  {
                    "frame_id": 2,
                    "encoded_locals": {
                      "a": 1,
                      "__return__": 1,
                      "b": 2
                    },
                    "is_highlighted": true,
                    "is_parent": false,
                    "func_name": "bar",
                    "is_zombie": false,
                    "parent_frame_id_list": [],
                    "unique_hash": "bar_f2",
                    "ordered_varnames": [
                      "a",
                      "b",
                      "__return__"
                    ]
                  }
                ],
                "globals": {
                  "bar": [
                    "REF",
                    2
                  ],
                  "foo": [
                    "REF",
                    1
                  ],
                  "baz": [
                    "REF",
                    3
                  ]
                },
                "heap": {
                  "1": [
                    "FUNCTION",
                    "foo(x, y, z)",
                    null
                  ],
                  "2": [
                    "FUNCTION",
                    "bar(a, b)",
                    null
                  ],
                  "3": [
                    "FUNCTION",
                    "baz(c)",
                    null
                  ]
                },
                "line": 5,
                "event": "return"
              },
              {
                "ordered_globals": [
                  "foo",
                  "bar",
                  "baz"
                ],
                "stdout": "",
                "func_name": "foo",
                "stack_to_render": [
                  {
                    "frame_id": 1,
                    "encoded_locals": {
                      "y": 2,
                      "x": 1,
                      "__return__": 1,
                      "z": 3
                    },
                    "is_highlighted": true,
                    "is_parent": false,
                    "func_name": "foo",
                    "is_zombie": false,
                    "parent_frame_id_list": [],
                    "unique_hash": "foo_f1",
                    "ordered_varnames": [
                      "x",
                      "y",
                      "z",
                      "__return__"
                    ]
                  }
                ],
                "globals": {
                  "bar": [
                    "REF",
                    2
                  ],
                  "foo": [
                    "REF",
                    1
                  ],
                  "baz": [
                    "REF",
                    3
                  ]
                },
                "heap": {
                  "1": [
                    "FUNCTION",
                    "foo(x, y, z)",
                    null
                  ],
                  "2": [
                    "FUNCTION",
                    "bar(a, b)",
                    null
                  ],
                  "3": [
                    "FUNCTION",
                    "baz(c)",
                    null
                  ]
                },
                "line": 2,
                "event": "return"
              },
              {
                "ordered_globals": [
                  "foo",
                  "bar",
                  "baz",
                  "result"
                ],
                "stdout": "",
                "func_name": "<module>",
                "stack_to_render": [],
                "globals": {
                  "bar": [
                    "REF",
                    2
                  ],
                  "foo": [
                    "REF",
                    1
                  ],
                  "baz": [
                    "REF",
                    3
                  ],
                  "result": 1
                },
                "heap": {
                  "1": [
                    "FUNCTION",
                    "foo(x, y, z)",
                    null
                  ],
                  "2": [
                    "FUNCTION",
                    "bar(a, b)",
                    null
                  ],
                  "3": [
                    "FUNCTION",
                    "baz(c)",
                    null
                  ]
                },
                "line": 10,
                "event": "return"
              }
        ] }`);
        // const exampleHeapTrace = [
        //     {
        //         ordered_globals: [], 
        //         stdout: "", 
        //         func_name: "<module>", 
        //         stack_to_render: [], 
        //         globals: {}, 
        //         heap: {}, 
        //         line: 1, 
        //         event: "step_line"
        //       }, 
        //       {
        //         ordered_globals: [], 
        //         stdout: "1\n", 
        //         func_name: "<module>", 
        //         stack_to_render: [], 
        //         globals: {}, 
        //         heap: {}, 
        //         line: 2, 
        //         event: "step_line"
        //       }, 
        //       {
        //         ordered_globals: [], 
        //         stdout: "1\ntwo\n", 
        //         func_name: "<module>", 
        //         stack_to_render: [], 
        //         globals: {}, 
        //         heap: {}, 
        //         line: 3, 
        //         event: "step_line"
        //       }, 
        //       {
        //         ordered_globals: [], 
        //         stdout: "1\ntwo\n(3, 4, 5)\n", 
        //         func_name: "<module>", 
        //         stack_to_render: [], 
        //         globals: {}, 
        //         heap: {}, 
        //         line: 3, 
        //         event: "return"
        //       }
        // ]
        // const exampleHeapTrace: IStackTrace[] = [
        //     {
        //         ordered_globals: [
        //           "c"
        //         ], 
        //         stdout: "", 
        //         func_name: "<module>", 
        //         stack_to_render: [], 
        //         globals: {
        //           "c": [
        //             "REF", 
        //             1
        //           ]
        //         }, 
        //         heap: {
        //           "1": [
        //             "ARRAY", 
        //             1, 
        //             [
        //               "REF", 
        //               2
        //             ]
        //           ], 
        //           "2": [
        //             "ARRAY", 
        //             2, 
        //             null
        //           ]
        //         }, 
        //         line: 2, 
        //         event: "return"
        //       },
        //     {
        //         ordered_globals: [
        //           "c", 
        //           "d"
        //         ], 
        //         stdout: "", 
        //         func_name: "<module>", 
        //         stack_to_render: [], 
        //         globals: {
        //           "c": [
        //             "REF", 
        //             1
        //           ], 
        //           "d": [
        //             "REF", 
        //             3
        //           ]
        //         }, 
        //         heap: {
        //           "1": [
        //             "ARRAY", 
        //             1, 
        //             [
        //               "REF", 
        //               2
        //             ]
        //           ], 
        //           "2": [
        //             "ARRAY", 
        //             2, 
        //             null
        //           ], 
        //           "3": [
        //             "ARRAY", 
        //             1, 
        //             [
        //               "REF", 
        //               1
        //             ]
        //           ]
        //         }, 
        //         line: 2, 
        //         event: "return"
        //       }
        // ]
        // const exampleHeapTrace: IStackTrace[] = [
        //     {
        //         ordered_globals: [
        //           "x"
        //         ], 
        //         stdout: "", 
        //         func_name: "<module>", 
        //         stack_to_render: [], 
        //         globals: {
        //           "x": [
        //             "REF", 
        //             1
        //           ]
        //         }, 
        //         heap: {
        //           "1": [
        //             "LIST", 
        //             1, 
        //             2, 
        //             3
        //           ]
        //         }, 
        //         line: 2, 
        //         event: "step_line"
        //       },
        //       {
        //         ordered_globals: [
        //           "x", 
        //           "y", 
        //           "z"
        //         ], 
        //         stdout: "", 
        //         func_name: "<module>", 
        //         stack_to_render: [], 
        //         globals: {
        //           "y": [
        //             "REF", 
        //             2
        //           ], 
        //           "x": [
        //             "REF", 
        //             1
        //           ]
        //         }, 
        //         heap: {
        //           "1": [
        //             "LIST", 
        //             1, 
        //             2, 
        //             3
        //           ],
        //           "2": [
        //             "DICT", 
        //             [
        //               "carrot", 
        //               "vegetable"
        //             ], 
        //             [
        //               "mouse", 
        //               "animal"
        //             ], 
        //             [
        //               "rock", 
        //               "mineral"
        //             ]
        //           ]
        //         }, 
        //         line: 3, 
        //         event: "return"
        //       }
        // ]
        // const exampleHeapTrace: IStackTrace[] = [
        //     {
        //         ordered_globals: [], 
        //         stdout: "", 
        //         func_name: "<module>", 
        //         stack_to_render: [], 
        //         globals: {}, 
        //         heap: {}, 
        //         line: 1, 
        //         event: "step_line"
        //       }, 
        //       {
        //         ordered_globals: [
        //           "x"
        //         ], 
        //         stdout: "", 
        //         func_name: "<module>", 
        //         stack_to_render: [], 
        //         globals: {
        //           "x": 5
        //         }, 
        //         heap: {}, 
        //         line: 2, 
        //         event: "step_line"
        //       }, 
        //       {
        //         ordered_globals: [
        //           "x", 
        //           "y"
        //         ], 
        //         stdout: "", 
        //         func_name: "<module>", 
        //         stack_to_render: [], 
        //         globals: {
        //           "y": 10, 
        //           "x": 5
        //         }, 
        //         heap: {}, 
        //         line: 3, 
        //         event: "step_line"
        //       }, 
        //       {
        //         ordered_globals: [
        //           "x", 
        //           "y", 
        //           "z"
        //         ], 
        //         stdout: "", 
        //         func_name: "<module>", 
        //         stack_to_render: [], 
        //         globals: {
        //           "y": 10, 
        //           "x": 5, 
        //           "z": 15
        //         }, 
        //         heap: {}, 
        //         line: 3, 
        //         event: "return"
        //       }
        // ]
        const exampleHeapTrace = exampleHeapTraceJson.trace;
        const currentTrace: IStackTrace = exampleHeapTrace[this.state.stepNumber];
        const stackToRender = currentTrace.stack_to_render;
        let globals = currentTrace.globals;
        const heap = currentTrace.heap;
        const heapElements: Dictionary<JSX.Element> = {};
        if(heap){
            Object.keys(heap).forEach(objIdx => {
                const heapTrace = heap[objIdx];
                const objectType = heapTrace.splice(0, 1)[0];
                if(typeof objectType === "string"){
                    switch(objectType){
                        case "ARRAY" :
                        case "LIST" : {
                            // if value is array type, do not display "value" this will be a pointer to another heap structure
                            // read in heaptrace map if value[0] = ref, then make archer element with arrow to reference value
                            // then need to indicate that that reference value should be a target with an arrow from this parent

                            // might need to represent the reference structure as nested objects. If parent reference type
                            // then should be on left, the child types should be staggered on right with padding corresponding to their 
                            // depth. See python tutor for a rough example. Need to see how this will behave with multiple nested structures
                            // at the top level. Spacing might get funky.

                            // From python tutor if parent to another heap object or if not referencing, then put in the leftmost column.
                            // Then, for each parent, the children should move right a column
                    
                            heapElements[objIdx] = 
                                <div>
                                    {objectType}
                                    {heapTrace.map((value, index) => {
                                        if(Array.isArray(value) && value[0] === "REF"){
                                            const referenceValue = value[1];
                                            return(
                                                <div className="layout-column" key={`${objectType}-${value}-${index}`}>
                                                    {index} :
                                                    <ArcherElement
                                                        id={`startingRef-${value}-${index}`}
                                                        relations={[
                                                            {
                                                                targetId: `heap-${referenceValue}`,
                                                                targetAnchor: "left",
                                                                sourceAnchor: "right"
                                                            }
                                                        ]}
                                                    />
                                                    
                                                </div>
                                            )
                                        }
                                        return (<div className="layout-column" key={`${objectType}-${value}-${index}`}>
                                            {index} :
                                            {value} 
                                        </div>);
                                    })}
                                </div>
                            break;
                        }
                        case "DICT" : {
                            heapElements[objIdx] = 
                                <div>
                                    {objectType}
                                    {heapTrace.map((value) => {
                                        if(Array.isArray(value)){
                                            return(
                                                <div className="layout-columns" key={`${objectType}-${value[0]}-${value[1]}`}>
                                                    {value[0]} : 
                                                    {value[1]}
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                                break;
                        }
                        case "FUNCTION" : {
                            heapElements[objIdx] = 
                                <div>
                                    {heapTrace[0]}
                                </div>
                            break; 
                        }
                    }
                }
            })    
        }
        return(
            <>
                <span>{this.props.syntaxError}</span>
                <ArcherContainer strokeColor="red">
                    <div className="layout-row">
                        <div className="layout-column">
                            Stack:
                            {globals && Object.keys(globals).map(varName => {
                                if(globals){
                                    const globalValue: IVariable = globals[varName];
                                    if(typeof globalValue !== "string" && typeof globalValue !== "number"){
                                        const referenceValue = globalValue ? globalValue[1] : null; 
                                        return(
                                            <ArcherElement
                                                id={`starting-${globals[varName]}`}
                                                relations={[
                                                    {
                                                        targetId: `heap-${referenceValue}`,
                                                        targetAnchor: "left",
                                                        sourceAnchor: "right"
                                                    }
                                                ]}
                                                key={`starting-${globals[varName]}`}
                                            >
                                                <div>
                                                    {`${varName} : *`}  
                                                </div>
                                            </ArcherElement>
                                        );
                                    }
                                }
                                
                                if(globals){
                                    return(
                                        <div key={`global-${globals[varName]}`}>
                                            {varName} : {globals[varName]}
                                        </div>
                                    )
                                }
                                return null;
                            })}
                        </div>
                        <div className="layout-column" style={{paddingLeft: "40px"}}>
                            Heap:
                            <div className="layout-row">
                            {heap && Object.keys(heap).map(varName => {
                                return(
                                    <ArcherElement
                                        style={{border: "2px solid black", marginLeft: "40px"}}
                                        id={`heap-${varName}`}
                                        key={`heap-${varName}`}
                                    >
                                        {heapElements[varName]}
                                    </ArcherElement>
                                )
                            })}
                            </div>
                        </div>
                    </div>
                </ArcherContainer>
                <div className="layout-column">
                    Stdout:
                    {currentTrace.stdout && currentTrace.stdout.split("\n").map(part => {
                        return <><br /> {part}</>;
                    })}
                </div>
            
                <Button 
                    disabled={this.state.stepNumber === 0}
                    text="<<First"
                    onClick={() => this.setState({stepNumber: 0})}
                />
                <Button 
                    disabled={this.state.stepNumber === 0}
                    text="<Previous"
                    onClick={() => this.setState({stepNumber: this.state.stepNumber - 1})}
                />
                <Button 
                    // {this.state.stepNumber === this.props.stackTraces.length - 1}
                    disabled={this.state.stepNumber === exampleHeapTrace.length - 1}
                    text="Next>"
                    onClick={() => this.setState({stepNumber: this.state.stepNumber + 1})}
                />
                <Button 
                    disabled={this.state.stepNumber === exampleHeapTrace.length - 1}
                    text="Last>>"
                    onClick={() => this.setState({stepNumber: exampleHeapTrace.length - 1})}
                />
                <br />
                Step {this.state.stepNumber + 1} of {exampleHeapTrace.length}
            </>
        );
    }
}