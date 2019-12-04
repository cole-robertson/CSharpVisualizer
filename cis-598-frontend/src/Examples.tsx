import { IStackTrace } from "./Interfaces";

export const functionCalls: string = `{"trace" : [
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
] }`;
export const printStdout = [
  {
    ordered_globals: [],
    stdout: "",
    func_name: "<module>",
    stack_to_render: [],
    globals: {},
    heap: {},
    line: 1,
    event: "step_line"
  },
  {
    ordered_globals: [],
    stdout: "1\n",
    func_name: "<module>",
    stack_to_render: [],
    globals: {},
    heap: {},
    line: 2,
    event: "step_line"
  },
  {
    ordered_globals: [],
    stdout: "1\ntwo\n",
    func_name: "<module>",
    stack_to_render: [],
    globals: {},
    heap: {},
    line: 3,
    event: "step_line"
  },
  {
    ordered_globals: [],
    stdout: "1\ntwo\n(3, 4, 5)\n",
    func_name: "<module>",
    stack_to_render: [],
    globals: {},
    heap: {},
    line: 3,
    event: "return"
  }
];
export const basicNesting: IStackTrace[] = [
  {
    ordered_globals: ["c"],
    stdout: "",
    func_name: "<module>",
    stack_to_render: [],
    globals: {
      c: ["REF", 1]
    },
    heap: {
      "1": ["ARRAY", 1, ["REF", 2]],
      "2": ["ARRAY", 2, null]
    },
    line: 2,
    event: "return"
  },
  {
    ordered_globals: ["c", "d"],
    stdout: "",
    func_name: "<module>",
    stack_to_render: [],
    globals: {
      c: ["REF", 1],
      d: ["REF", 3]
    },
    heap: {
      "1": ["ARRAY", 1, ["REF", 2]],
      "2": ["ARRAY", 2, null],
      "3": ["ARRAY", 1, ["REF", 1]]
    },
    line: 2,
    event: "return"
  }
];
export const dataStructures: IStackTrace[] = [
  {
    ordered_globals: ["x"],
    stdout: "",
    func_name: "<module>",
    stack_to_render: [],
    globals: {
      x: ["REF", 1]
    },
    heap: {
      "1": ["LIST", 1, 2, 3]
    },
    line: 2,
    event: "step_line"
  },
  {
    ordered_globals: ["x", "y", "z"],
    stdout: "",
    func_name: "<module>",
    stack_to_render: [],
    globals: {
      y: ["REF", 2],
      x: ["REF", 1]
    },
    heap: {
      "1": ["LIST", 1, 2, 3],
      "2": [
        "DICT",
        ["carrot", "vegetable"],
        ["mouse", "animal"],
        ["rock", "mineral"]
      ]
    },
    line: 3,
    event: "return"
  }
];
export const simpleInts: IStackTrace[] = [
  {
    ordered_globals: [],
    stdout: "",
    func_name: "<module>",
    stack_to_render: [],
    globals: {},
    heap: {},
    line: 1,
    event: "step_line"
  },
  {
    ordered_globals: ["x"],
    stdout: "",
    func_name: "<module>",
    stack_to_render: [],
    globals: {
      x: 5
    },
    heap: {},
    line: 2,
    event: "step_line"
  },
  {
    ordered_globals: ["x", "y"],
    stdout: "",
    func_name: "<module>",
    stack_to_render: [],
    globals: {
      y: 10,
      x: 5
    },
    heap: {},
    line: 3,
    event: "step_line"
  },
  {
    ordered_globals: ["x", "y", "z"],
    stdout: "",
    func_name: "<module>",
    stack_to_render: [],
    globals: {
      y: 10,
      x: 5,
      z: 15
    },
    heap: {},
    line: 3,
    event: "return"
  }
];

export const heapStructures = {
  code:
    "x = [1, 2, 3]\ny = ['Alice', 'Bob', 'Cindy']\nz = {'carrot': 'vegetable', 'mouse': 'animal', 'rock': 'mineral'}",
  trace: [
    {
      ordered_globals: [],
      stdout: "",
      func_name: "<module>",
      stack_to_render: [],
      globals: {},
      heap: {},
      line: 1,
      event: "step_line"
    },
    {
      ordered_globals: ["x"],
      stdout: "",
      func_name: "<module>",
      stack_to_render: [],
      globals: { x: ["REF", 1] },
      heap: { "1": ["LIST", 1, 2, 3] },
      line: 2,
      event: "step_line"
    },
    {
      ordered_globals: ["x", "y"],
      stdout: "",
      func_name: "<module>",
      stack_to_render: [],
      globals: { y: ["REF", 2], x: ["REF", 1] },
      heap: {
        "1": ["LIST", 1, 2, 3],
        "2": ["ARRAY", "Alice", "Bob", "Cindy"]
      },
      line: 3,
      event: "step_line"
    },
    {
      ordered_globals: ["x", "y", "z"],
      stdout: "",
      func_name: "<module>",
      stack_to_render: [],
      globals: { y: ["REF", 2], x: ["REF", 1], z: ["REF", 3] },
      heap: {
        "1": ["LIST", 1, 2, 3],
        "2": ["ARRAY", "Alice", "Bob", "Cindy"],
        "3": [
          "DICT",
          ["carrot", "vegetable"],
          ["mouse", "animal"],
          ["rock", "mineral"]
        ]
      },
      line: 3,
      event: "return"
    }
  ]
};

export const dataStructuresJson = [
  {
    ordered_globals: ["x"],
    stdout: "",
    func_name: "<module>",
    stack_to_render: [],
    globals: { x: ["REF", 1] },
    heap: { "1": ["LIST", 1, 2, 3] },
    line: 2,
    event: "step_line"
  },
  {
    ordered_globals: ["x", "y", "z"],
    stdout: "",
    func_name: "<module>",
    stack_to_render: [],
    globals: { y: ["REF", 2], x: ["REF", 1] },
    heap: {
      "1": ["LIST", 1, 2, 3],
      "2": [
        "DICT",
        ["carrot", "vegetable"],
        ["mouse", "animal"],
        ["rock", "mineral"]
      ]
    },
    line: 3,
    event: "return"
  }
];
