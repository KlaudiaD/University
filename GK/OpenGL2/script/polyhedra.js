/*
 * This file defines several polyhedral models as JavaScript objects.
 * Each object, poly, has three properties:
 *
 *     poly.vertices -- an array of vertices where each vertex is given
 *                      as an array of three numbers.
 *
 *     poly.faces -- an array of faces, where each face is an array of integers.
 *                   The integers in the array are indices into the array of
 *                   vertices, and they give the vertices of the face in 
 *                   clockwise order as seen from the outside.  (Note that this
 *                   is the opposite of the usual vertex ordering.)
 *
 *     poly.faceNormals -- an array of normal vectors, one for each face.
 *                   Each normal is given as an array of three numbers.
 *
 * A few of the models also have the property
 *
 *     poly.faceColors -- and array of colors, one for each face, where a color
 *                   is given as an array of three numbers in the range 0.0 to 1.0.
 *
 * The following variables are defined, and the value of each variable
 * is a object with the format just defined:
 *
 *     houseIFS   (a non-standard example)
 *     cubeIFS
 *     dodecahedronIFS
 *     icosahedronIFS
 *     octahedronIFS
 *     rhombicDodecahedronIFS
 *     socerBallIFS
 *     stellatedDodecahedronIFS
 *     stellatedIcosahedronIFS
 *     stellatedOctahedronIFS
 *     tetrahedronIFS
 *     truncatedIcosahedronIFS
 *     truncatedRhombicDodecahedronIFS
 *
*/

var houseIFS =
{
    "vertices": [
        [2, -1, 2],
        [2, -1, -2],
        [2, 1, -2],
        [2, 1, 2],
        [1.5, 1.5, 0],
        [-1.5, 1.5, 0],
        [-2, -1, 2],
        [-2, 1, 2],
        [-2, 1, -2],
        [-2, -1, -2]
    ],
    "faceNormals": [
        [0, 1, 2, 3],
        [3, 2, 4],
        [7, 3, 4, 5],
        [2, 8, 5, 4],
        [5, 8, 7],
        [0, 3, 7, 6],
        [0, 6, 9, 1],
        [2, 1, 9, 8],
        [6, 7, 8, 9]
    ],
    "normals": [
        [1, 0, 0],
        [0.7071, 0.7071, 0],
        [0, 0.9701, 0.2425],
        [0, 0.9701, -0.2425],
        [-0.7071, 0.7071, 0],
        [0, 0, 1],
        [0, -1, 0],
        [0, 0, -1],
        [-1, 0, 0]
    ],
    "faceColors": [
        [1, .8, .8],
        [.7, .7, 1],
        [0, 0, 1],
        [0, 0, .7],
        [.7, .7, 1],
        [1, 0, 0],
        [.4, .4, .4],
        [1, 0, 0],
        [1, .8, .8],
    ]
};


var cubeIFS =
{
    "vertices": [
        [1.000000, 1.000000, 1.000000],
        [1.000000, 1.000000, -1.000000],
        [1.000000, -1.000000, -1.000000],
        [1.000000, -1.000000, 1.000000],
        [-1.000000, 1.000000, 1.000000],
        [-1.000000, 1.000000, -1.000000],
        [-1.000000, -1.000000, -1.000000],
        [-1.000000, -1.000000, 1.000000]
    ],
    "faces": [
        [0, 1, 2, 3],
        [0, 3, 7, 4],
        [0, 4, 5, 1],
        [6, 2, 1, 5],
        [6, 5, 4, 7],
        [6, 7, 3, 2]
    ],
    "faceNormals": [
        [-1.000000, 0.000000, 0.000000],
        [0.000000, 0.000000, -1.000000],
        [0.000000, -1.000000, 0.000000],
        [0.000000, -0.000000, 1.000000],
        [1.000000, 0.000000, -0.000000],
        [-0.000000, 1.000000, 0.000000]
    ],
    "faceColors": [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [0, 1, 1],
        [1, 0, 1],
        [1, 1, 0],
    ]
}

var dodecahedronIFS =
{
    "vertices": [
        [-1.000000, 0.000000, -0.381966],
        [0.618034, 0.618034, 0.618034],
        [1.000000, 0.000000, 0.381966],
        [0.618034, -0.618034, 0.618034],
        [0.000000, -0.381966, 1.000000],
        [0.000000, 0.381966, 1.000000],
        [1.000000, 0.000000, -0.381966],
        [0.618034, 0.618034, -0.618034],
        [0.381966, 1.000000, 0.000000],
        [-0.381966, 1.000000, 0.000000],
        [-0.618034, 0.618034, -0.618034],
        [0.000000, 0.381966, -1.000000],
        [0.618034, -0.618034, -0.618034],
        [0.381966, -1.000000, 0.000000],
        [-0.381966, -1.000000, 0.000000],
        [-1.000000, 0.000000, 0.381966],
        [-0.618034, 0.618034, 0.618034],
        [-0.618034, -0.618034, -0.618034],
        [0.000000, -0.381966, -1.000000],
        [-0.618034, -0.618034, 0.618034]
    ],
    "faces": [
        [16, 9, 8, 1, 5],
        [9, 10, 11, 7, 8],
        [8, 7, 6, 2, 1],
        [6, 12, 13, 3, 2],
        [18, 17, 14, 13, 12],
        [14, 19, 4, 3, 13],
        [4, 5, 1, 2, 3],
        [15, 16, 5, 4, 19],
        [7, 11, 18, 12, 6],
        [10, 0, 17, 18, 11],
        [0, 10, 9, 16, 15],
        [17, 0, 15, 19, 14]
    ],
    "faceNormals": [
        [0.000000, -0.850651, -0.525731],
        [0.000000, -0.850651, 0.525731],
        [-0.850651, -0.525731, 0.000000],
        [-0.850651, 0.525731, 0.000000],
        [0.000000, 0.850651, 0.525731],
        [0.000000, 0.850651, -0.525731],
        [-0.525731, -0.000000, -0.850651],
        [0.525731, 0.000000, -0.850651],
        [-0.525731, 0.000000, 0.850651],
        [0.525731, 0.000000, 0.850651],
        [0.850651, -0.525731, 0.000000],
        [0.850651, 0.525731, -0.000000]
    ]
}

var icosahedronIFS =
{
    "vertices": [
        [-1.000000, -0.618034, 0.000000],
        [0.000000, 1.000000, 0.618034],
        [0.000000, 1.000000, -0.618034],
        [1.000000, 0.618034, 0.000000],
        [1.000000, -0.618034, 0.000000],
        [0.000000, -1.000000, -0.618034],
        [0.000000, -1.000000, 0.618034],
        [0.618034, 0.000000, 1.000000],
        [-0.618034, 0.000000, 1.000000],
        [0.618034, 0.000000, -1.000000],
        [-0.618034, 0.000000, -1.000000],
        [-1.000000, 0.618034, 0.000000]
    ],
    "faces": [
        [3, 7, 1],
        [4, 7, 3],
        [6, 7, 4],
        [8, 7, 6],
        [7, 8, 1],
        [9, 4, 3],
        [2, 9, 3],
        [2, 3, 1],
        [11, 2, 1],
        [10, 2, 11],
        [10, 9, 2],
        [9, 5, 4],
        [6, 4, 5],
        [0, 6, 5],
        [0, 11, 8],
        [11, 1, 8],
        [10, 0, 5],
        [10, 5, 9],
        [0, 8, 6],
        [0, 10, 11]
    ],
    "faceNormals": [
        [-0.577350, -0.577350, -0.577350],
        [-0.934172, 0.000000, -0.356822],
        [-0.577350, 0.577350, -0.577350],
        [0.000000, 0.356822, -0.934172],
        [0.000000, -0.356822, -0.934172],
        [-0.934172, 0.000000, 0.356822],
        [-0.577350, -0.577350, 0.577350],
        [-0.356822, -0.934172, 0.000000],
        [0.356822, -0.934172, 0.000000],
        [0.577350, -0.577350, 0.577350],
        [0.000000, -0.356822, 0.934172],
        [-0.577350, 0.577350, 0.577350],
        [-0.356822, 0.934172, 0.000000],
        [0.356822, 0.934172, 0.000000],
        [0.934172, 0.000000, -0.356822],
        [0.577350, -0.577350, -0.577350],
        [0.577350, 0.577350, 0.577350],
        [0.000000, 0.356822, 0.934172],
        [0.577350, 0.577350, -0.577350],
        [0.934172, 0.000000, 0.356822]
    ]
}

var octahedronIFS =
{
    "vertices": [
        [-1.000000, 0.000000, 0.000000],
        [0.000000, 0.000000, -1.000000],
        [0.000000, 0.000000, 1.000000],
        [0.000000, -1.000000, 0.000000],
        [0.000000, 1.000000, 0.000000],
        [1.000000, 0.000000, 0.000000]
    ],
    "faces": [
        [4, 5, 2],
        [0, 4, 2],
        [0, 2, 3],
        [5, 3, 2],
        [5, 4, 1],
        [4, 0, 1],
        [0, 3, 1],
        [3, 5, 1]
    ],
    "faceColors": [
        [0, 1, 1],
        [1, 0, 0],
        [0.5, 0.5, 0.5],
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 0],
        [1, 0, 1],
        [0, 0, 1]
    ],
    "faceNormals": [
        [-0.577350, -0.577350, -0.577350],
        [0.577350, -0.577350, -0.577350],
        [0.577350, 0.577350, -0.577350],
        [-0.577350, 0.577350, -0.577350],
        [-0.577350, -0.577350, 0.577350],
        [0.577350, -0.577350, 0.577350],
        [0.577350, 0.577350, 0.577350],
        [-0.577350, 0.577350, 0.577350]
    ]
}

var rhombicDodecahedronIFS =
{
    "vertices": [
        [0.000000, 2.000000, 0.000000],
        [-1.000000, -1.000000, -1.000000],
        [1.000000, -1.000000, -1.000000],
        [1.000000, 1.000000, -1.000000],
        [-1.000000, 1.000000, -1.000000],
        [-1.000000, -1.000000, 1.000000],
        [1.000000, -1.000000, 1.000000],
        [1.000000, 1.000000, 1.000000],
        [-1.000000, 1.000000, 1.000000],
        [0.000000, 0.000000, 2.000000],
        [0.000000, 0.000000, -2.000000],
        [-2.000000, 0.000000, 0.000000],
        [2.000000, 0.000000, 0.000000],
        [0.000000, -2.000000, 0.000000]
    ],
    "faces": [
        [1, 13, 2, 10],
        [2, 12, 3, 10],
        [3, 0, 4, 10],
        [4, 11, 1, 10],
        [2, 13, 6, 12],
        [3, 12, 7, 0],
        [4, 0, 8, 11],
        [1, 11, 5, 13],
        [5, 9, 6, 13],
        [6, 9, 7, 12],
        [7, 9, 8, 0],
        [8, 9, 5, 11]
    ],
    "faceNormals": [
        [0.000000, 0.707107, 0.707107],
        [-0.707107, 0.000000, 0.707107],
        [0.000000, -0.707107, 0.707107],
        [0.707107, 0.000000, 0.707107],
        [-0.707107, 0.707107, 0.000000],
        [-0.707107, -0.707107, 0.000000],
        [0.707107, -0.707107, 0.000000],
        [0.707107, 0.707107, 0.000000],
        [0.000000, 0.707107, -0.707107],
        [-0.707107, 0.000000, -0.707107],
        [0.000000, -0.707107, -0.707107],
        [0.707107, 0.000000, -0.707107]
    ]
}

var socerBallIFS =
{
    "vertices": [
        [-0.666667, -0.745356, 0.206011],
        [-0.666667, -0.745356, -0.206011],
        [-0.872678, -0.412023, -0.333333],
        [-1.000000, -0.206011, 0.000000],
        [-0.872678, -0.412023, 0.333333],
        [0.333333, 0.872678, 0.412023],
        [0.206011, 0.666667, 0.745356],
        [-0.206011, 0.666667, 0.745356],
        [-0.333333, 0.872678, 0.412023],
        [0.000000, 1.000000, 0.206011],
        [0.206011, 0.666667, -0.745356],
        [0.333333, 0.872678, -0.412023],
        [0.000000, 1.000000, -0.206011],
        [-0.333333, 0.872678, -0.412023],
        [-0.206011, 0.666667, -0.745356],
        [0.872678, 0.412023, 0.333333],
        [0.666667, 0.745356, 0.206011],
        [0.666667, 0.745356, -0.206011],
        [0.872678, 0.412023, -0.333333],
        [1.000000, 0.206011, 0.000000],
        [0.872678, -0.412023, 0.333333],
        [1.000000, -0.206011, 0.000000],
        [0.872678, -0.412023, -0.333333],
        [0.666667, -0.745356, -0.206011],
        [0.666667, -0.745356, 0.206011],
        [0.333333, -0.872678, -0.412023],
        [0.206011, -0.666667, -0.745356],
        [-0.206011, -0.666667, -0.745356],
        [-0.333333, -0.872678, -0.412023],
        [0.000000, -1.000000, -0.206011],
        [0.206011, -0.666667, 0.745356],
        [0.333333, -0.872678, 0.412023],
        [0.000000, -1.000000, 0.206011],
        [-0.333333, -0.872678, 0.412023],
        [-0.206011, -0.666667, 0.745356],
        [0.412023, 0.333333, 0.872678],
        [0.745356, 0.206011, 0.666667],
        [0.745356, -0.206011, 0.666667],
        [0.412023, -0.333333, 0.872678],
        [0.206011, 0.000000, 1.000000],
        [-0.206011, 0.000000, 1.000000],
        [-0.412023, -0.333333, 0.872678],
        [-0.745356, -0.206011, 0.666667],
        [-0.745356, 0.206011, 0.666667],
        [-0.412023, 0.333333, 0.872678],
        [0.745356, -0.206011, -0.666667],
        [0.745356, 0.206011, -0.666667],
        [0.412023, 0.333333, -0.872678],
        [0.206011, 0.000000, -1.000000],
        [0.412023, -0.333333, -0.872678],
        [-0.412023, 0.333333, -0.872678],
        [-0.745356, 0.206011, -0.666667],
        [-0.745356, -0.206011, -0.666667],
        [-0.412023, -0.333333, -0.872678],
        [-0.206011, 0.000000, -1.000000],
        [-0.666667, 0.745356, -0.206011],
        [-0.666667, 0.745356, 0.206011],
        [-0.872678, 0.412023, 0.333333],
        [-1.000000, 0.206011, 0.000000],
        [-0.872678, 0.412023, -0.333333]
    ],
    "faces": [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29],
        [30, 31, 32, 33, 34],
        [35, 36, 37, 38, 39],
        [40, 41, 42, 43, 44],
        [45, 46, 47, 48, 49],
        [50, 51, 52, 53, 54],
        [55, 56, 57, 58, 59],
        [15, 36, 35, 6, 5, 16],
        [20, 37, 36, 15, 19, 21],
        [30, 38, 37, 20, 24, 31],
        [40, 39, 38, 30, 34, 41],
        [39, 40, 44, 7, 6, 35],
        [45, 22, 21, 19, 18, 46],
        [10, 47, 46, 18, 17, 11],
        [11, 17, 16, 5, 9, 12],
        [55, 13, 12, 9, 8, 56],
        [50, 14, 13, 55, 59, 51],
        [54, 48, 47, 10, 14, 50],
        [49, 26, 25, 23, 22, 45],
        [31, 24, 23, 25, 29, 32],
        [0, 33, 32, 29, 28, 1],
        [3, 58, 57, 43, 42, 4],
        [56, 8, 7, 44, 43, 57],
        [52, 2, 1, 28, 27, 53],
        [53, 27, 26, 49, 48, 54],
        [4, 42, 41, 34, 33, 0],
        [2, 52, 51, 59, 58, 3]
    ],
    "faceNormals": [
        [0.850651, 0.525731, -0.000000],
        [-0.000000, -0.850651, -0.525731],
        [-0.000000, -0.850651, 0.525731],
        [-0.850651, -0.525731, -0.000000],
        [-0.850651, 0.525731, 0.000000],
        [0.000000, 0.850651, 0.525731],
        [-0.000000, 0.850651, -0.525731],
        [-0.525731, -0.000000, -0.850651],
        [0.525731, 0.000000, -0.850651],
        [-0.525731, 0.000000, 0.850651],
        [0.525731, 0.000000, 0.850651],
        [0.850651, -0.525731, 0.000000],
        [-0.577350, -0.577350, -0.577350],
        [-0.934172, 0.000000, -0.356822],
        [-0.577350, 0.577350, -0.577350],
        [0.000000, 0.356822, -0.934172],
        [0.000000, -0.356822, -0.934172],
        [-0.934172, 0.000000, 0.356822],
        [-0.577350, -0.577350, 0.577350],
        [-0.356822, -0.934172, 0.000000],
        [0.356822, -0.934172, 0.000000],
        [0.577350, -0.577350, 0.577350],
        [0.000000, -0.356822, 0.934172],
        [-0.577350, 0.577350, 0.577350],
        [-0.356822, 0.934172, 0.000000],
        [0.356822, 0.934172, -0.000000],
        [0.934172, 0.000000, -0.356822],
        [0.577350, -0.577350, -0.577350],
        [0.577350, 0.577350, 0.577350],
        [-0.000000, 0.356822, 0.934172],
        [0.577350, 0.577350, -0.577350],
        [0.934172, -0.000000, 0.356822]
    ]
}

var stellatedDodecahedronIFS =
{
    "vertices": [
        [-0.650000, 0.000000, -0.248278],
        [0.401722, 0.401722, 0.401722],
        [0.650000, 0.000000, 0.248278],
        [0.401722, -0.401722, 0.401722],
        [0.000000, -0.248278, 0.650000],
        [0.000000, 0.248278, 0.650000],
        [0.650000, 0.000000, -0.248278],
        [0.401722, 0.401722, -0.401722],
        [0.248278, 0.650000, 0.000000],
        [-0.248278, 0.650000, 0.000000],
        [-0.401722, 0.401722, -0.401722],
        [0.000000, 0.248278, -0.650000],
        [0.401722, -0.401722, -0.401722],
        [0.248278, -0.650000, 0.000000],
        [-0.248278, -0.650000, 0.000000],
        [-0.650000, 0.000000, 0.248278],
        [-0.401722, 0.401722, 0.401722],
        [-0.401722, -0.401722, -0.401722],
        [0.000000, -0.248278, -0.650000],
        [-0.401722, -0.401722, 0.401722],
        [0.000000, 1.051722, 0.650000],
        [-0.000000, 1.051722, -0.650000],
        [1.051722, 0.650000, -0.000000],
        [1.051722, -0.650000, -0.000000],
        [-0.000000, -1.051722, -0.650000],
        [-0.000000, -1.051722, 0.650000],
        [0.650000, 0.000000, 1.051722],
        [-0.650000, 0.000000, 1.051722],
        [0.650000, -0.000000, -1.051722],
        [-0.650000, 0.000000, -1.051722],
        [-1.051722, 0.650000, -0.000000],
        [-1.051722, -0.650000, 0.000000]
    ],
    "faces": [
        [16, 9, 20],
        [9, 8, 20],
        [8, 1, 20],
        [1, 5, 20],
        [5, 16, 20],
        [9, 10, 21],
        [10, 11, 21],
        [11, 7, 21],
        [7, 8, 21],
        [8, 9, 21],
        [8, 7, 22],
        [7, 6, 22],
        [6, 2, 22],
        [2, 1, 22],
        [1, 8, 22],
        [6, 12, 23],
        [12, 13, 23],
        [13, 3, 23],
        [3, 2, 23],
        [2, 6, 23],
        [18, 17, 24],
        [17, 14, 24],
        [14, 13, 24],
        [13, 12, 24],
        [12, 18, 24],
        [14, 19, 25],
        [19, 4, 25],
        [4, 3, 25],
        [3, 13, 25],
        [13, 14, 25],
        [4, 5, 26],
        [5, 1, 26],
        [1, 2, 26],
        [2, 3, 26],
        [3, 4, 26],
        [15, 16, 27],
        [16, 5, 27],
        [5, 4, 27],
        [4, 19, 27],
        [19, 15, 27],
        [7, 11, 28],
        [11, 18, 28],
        [18, 12, 28],
        [12, 6, 28],
        [6, 7, 28],
        [10, 0, 29],
        [0, 17, 29],
        [17, 18, 29],
        [18, 11, 29],
        [11, 10, 29],
        [0, 10, 30],
        [10, 9, 30],
        [9, 16, 30],
        [16, 15, 30],
        [15, 0, 30],
        [17, 0, 31],
        [0, 15, 31],
        [15, 19, 31],
        [19, 14, 31],
        [14, 17, 31]
    ],
    "faceNormals": [
        [0.850651, -0.525731, -0.000000],
        [0.000000, -0.850651, 0.525731],
        [-0.850651, -0.525731, -0.000000],
        [-0.525731, -0.000000, -0.850651],
        [0.525731, -0.000000, -0.850651],
        [0.850651, -0.525731, 0.000000],
        [0.525731, -0.000000, 0.850651],
        [-0.525731, -0.000000, 0.850651],
        [-0.850651, -0.525731, 0.000000],
        [0.000000, -0.850651, -0.525731],
        [-0.000000, -0.850651, 0.525731],
        [-0.525731, -0.000000, 0.850651],
        [-0.850651, 0.525731, 0.000000],
        [-0.525731, -0.000000, -0.850651],
        [-0.000000, -0.850651, -0.525731],
        [-0.525731, 0.000000, 0.850651],
        [-0.000000, 0.850651, 0.525731],
        [-0.000000, 0.850651, -0.525731],
        [-0.525731, 0.000000, -0.850651],
        [-0.850651, -0.525731, 0.000000],
        [0.525731, 0.000000, 0.850651],
        [0.850651, 0.525731, 0.000000],
        [0.000000, 0.850651, -0.525731],
        [-0.850651, 0.525731, 0.000000],
        [-0.525731, 0.000000, 0.850651],
        [0.850651, 0.525731, -0.000000],
        [0.525731, 0.000000, -0.850651],
        [-0.525731, 0.000000, -0.850651],
        [-0.850651, 0.525731, -0.000000],
        [-0.000000, 0.850651, 0.525731],
        [0.525731, 0.000000, -0.850651],
        [-0.000000, -0.850651, -0.525731],
        [-0.850651, -0.525731, -0.000000],
        [-0.850651, 0.525731, -0.000000],
        [-0.000000, 0.850651, -0.525731],
        [0.850651, -0.525731, -0.000000],
        [0.000000, -0.850651, -0.525731],
        [-0.525731, 0.000000, -0.850651],
        [0.000000, 0.850651, -0.525731],
        [0.850651, 0.525731, -0.000000],
        [-0.000000, -0.850651, 0.525731],
        [0.525731, -0.000000, 0.850651],
        [-0.000000, 0.850651, 0.525731],
        [-0.850651, 0.525731, 0.000000],
        [-0.850651, -0.525731, 0.000000],
        [0.850651, -0.525731, 0.000000],
        [0.850651, 0.525731, 0.000000],
        [0.000000, 0.850651, 0.525731],
        [-0.525731, 0.000000, 0.850651],
        [0.000000, -0.850651, 0.525731],
        [0.525731, -0.000000, 0.850651],
        [0.000000, -0.850651, 0.525731],
        [0.000000, -0.850651, -0.525731],
        [0.525731, -0.000000, -0.850651],
        [0.850651, 0.525731, -0.000000],
        [0.525731, 0.000000, 0.850651],
        [0.850651, -0.525731, 0.000000],
        [0.525731, 0.000000, -0.850651],
        [0.000000, 0.850651, -0.525731],
        [0.000000, 0.850651, 0.525731]
    ]
}

var stellatedIcosahedronIFS =
{
    "vertices": [
        [-0.450000, -0.278115, 0.000000],
        [0.000000, 0.450000, 0.278115],
        [0.000000, 0.450000, -0.278115],
        [0.450000, 0.278115, 0.000000],
        [0.450000, -0.278115, 0.000000],
        [0.000000, -0.450000, -0.278115],
        [0.000000, -0.450000, 0.278115],
        [0.278115, 0.000000, 0.450000],
        [-0.278115, 0.000000, 0.450000],
        [0.278115, 0.000000, -0.450000],
        [-0.278115, 0.000000, -0.450000],
        [-0.450000, 0.278115, 0.000000],
        [0.728115, 0.728115, 0.728115],
        [1.178115, 0.000000, 0.450000],
        [0.728115, -0.728115, 0.728115],
        [0.000000, -0.450000, 1.178115],
        [0.000000, 0.450000, 1.178115],
        [1.178115, 0.000000, -0.450000],
        [0.728115, 0.728115, -0.728115],
        [0.450000, 1.178115, 0.000000],
        [-0.450000, 1.178115, 0.000000],
        [-0.728115, 0.728115, -0.728115],
        [0.000000, 0.450000, -1.178115],
        [0.728115, -0.728115, -0.728115],
        [0.450000, -1.178115, 0.000000],
        [-0.450000, -1.178115, 0.000000],
        [-1.178115, 0.000000, 0.450000],
        [-0.728115, 0.728115, 0.728115],
        [-0.728115, -0.728115, -0.728115],
        [0.000000, -0.450000, -1.178115],
        [-0.728115, -0.728115, 0.728115],
        [-1.178115, 0.000000, -0.450000]
    ],
    "faces": [
        [3, 7, 12],
        [7, 1, 12],
        [1, 3, 12],
        [4, 7, 13],
        [7, 3, 13],
        [3, 4, 13],
        [6, 7, 14],
        [7, 4, 14],
        [4, 6, 14],
        [8, 7, 15],
        [7, 6, 15],
        [6, 8, 15],
        [7, 8, 16],
        [8, 1, 16],
        [1, 7, 16],
        [9, 4, 17],
        [4, 3, 17],
        [3, 9, 17],
        [2, 9, 18],
        [9, 3, 18],
        [3, 2, 18],
        [2, 3, 19],
        [3, 1, 19],
        [1, 2, 19],
        [11, 2, 20],
        [2, 1, 20],
        [1, 11, 20],
        [10, 2, 21],
        [2, 11, 21],
        [11, 10, 21],
        [10, 9, 22],
        [9, 2, 22],
        [2, 10, 22],
        [9, 5, 23],
        [5, 4, 23],
        [4, 9, 23],
        [6, 4, 24],
        [4, 5, 24],
        [5, 6, 24],
        [0, 6, 25],
        [6, 5, 25],
        [5, 0, 25],
        [0, 11, 26],
        [11, 8, 26],
        [8, 0, 26],
        [11, 1, 27],
        [1, 8, 27],
        [8, 11, 27],
        [10, 0, 28],
        [0, 5, 28],
        [5, 10, 28],
        [10, 5, 29],
        [5, 9, 29],
        [9, 10, 29],
        [0, 8, 30],
        [8, 6, 30],
        [6, 0, 30],
        [0, 10, 31],
        [10, 11, 31],
        [11, 0, 31]
    ],
    "faceNormals": [
        [-0.850651, 0.525731, 0.000000],
        [0.525731, 0.000000, -0.850651],
        [0.000000, -0.850651, 0.525731],
        [-0.000000, 0.850651, -0.525731],
        [-0.000000, -0.850651, -0.525731],
        [-0.525731, 0.000000, 0.850651],
        [0.525731, -0.000000, -0.850651],
        [-0.850651, -0.525731, 0.000000],
        [0.000000, 0.850651, 0.525731],
        [-0.000000, -0.850651, -0.525731],
        [-0.850651, 0.525731, -0.000000],
        [0.850651, 0.525731, -0.000000],
        [0.000000, 0.850651, -0.525731],
        [0.850651, -0.525731, -0.000000],
        [-0.850651, -0.525731, -0.000000],
        [-0.000000, 0.850651, 0.525731],
        [-0.525731, -0.000000, -0.850651],
        [-0.000000, -0.850651, 0.525731],
        [0.525731, 0.000000, 0.850651],
        [-0.850651, 0.525731, -0.000000],
        [0.000000, -0.850651, -0.525731],
        [-0.525731, -0.000000, 0.850651],
        [-0.525731, -0.000000, -0.850651],
        [0.850651, -0.525731, 0.000000],
        [0.525731, -0.000000, 0.850651],
        [-0.850651, -0.525731, -0.000000],
        [0.525731, -0.000000, -0.850651],
        [-0.525731, 0.000000, 0.850651],
        [-0.000000, -0.850651, -0.525731],
        [0.850651, 0.525731, -0.000000],
        [0.000000, 0.850651, 0.525731],
        [-0.850651, -0.525731, 0.000000],
        [0.850651, -0.525731, 0.000000],
        [0.525731, -0.000000, 0.850651],
        [0.000000, 0.850651, -0.525731],
        [-0.850651, -0.525731, -0.000000],
        [-0.525731, 0.000000, -0.850651],
        [-0.525731, 0.000000, 0.850651],
        [0.850651, 0.525731, 0.000000],
        [0.525731, 0.000000, -0.850651],
        [-0.850651, 0.525731, 0.000000],
        [0.525731, 0.000000, 0.850651],
        [0.525731, 0.000000, 0.850651],
        [0.000000, -0.850651, -0.525731],
        [0.000000, 0.850651, -0.525731],
        [-0.000000, -0.850651, 0.525731],
        [-0.525731, 0.000000, -0.850651],
        [0.850651, 0.525731, 0.000000],
        [0.850651, -0.525731, -0.000000],
        [-0.000000, 0.850651, -0.525731],
        [-0.525731, -0.000000, 0.850651],
        [0.850651, 0.525731, 0.000000],
        [-0.850651, 0.525731, 0.000000],
        [0.000000, -0.850651, 0.525731],
        [0.850651, -0.525731, 0.000000],
        [-0.525731, -0.000000, -0.850651],
        [-0.000000, 0.850651, 0.525731],
        [0.000000, 0.850651, 0.525731],
        [0.000000, -0.850651, 0.525731],
        [0.525731, 0.000000, -0.850651]
    ]
}

var stellatedOctahedronIFS =
{
    "vertices": [
        [-0.600000, 0.000000, 0.000000],
        [0.000000, 0.000000, -0.600000],
        [0.000000, 0.000000, 0.600000],
        [0.000000, -0.600000, 0.000000],
        [0.000000, 0.600000, 0.000000],
        [0.600000, 0.000000, 0.000000],
        [0.600000, 0.600000, 0.600000],
        [-0.600000, 0.600000, 0.600000],
        [-0.600000, -0.600000, 0.600000],
        [0.600000, -0.600000, 0.600000],
        [0.600000, 0.600000, -0.600000],
        [-0.600000, 0.600000, -0.600000],
        [-0.600000, -0.600000, -0.600000],
        [0.600000, -0.600000, -0.600000]
    ],
    "faces": [
        [4, 5, 6],
        [5, 2, 6],
        [2, 4, 6],
        [0, 4, 7],
        [4, 2, 7],
        [2, 0, 7],
        [0, 2, 8],
        [2, 3, 8],
        [3, 0, 8],
        [5, 3, 9],
        [3, 2, 9],
        [2, 5, 9],
        [5, 4, 10],
        [4, 1, 10],
        [1, 5, 10],
        [4, 0, 11],
        [0, 1, 11],
        [1, 4, 11],
        [0, 3, 12],
        [3, 1, 12],
        [1, 0, 12],
        [3, 5, 13],
        [5, 1, 13],
        [1, 3, 13]
    ],
    "faceNormals": [
        [-0.577350, -0.577350, 0.577350],
        [-0.577350, 0.577350, -0.577350],
        [0.577350, -0.577350, -0.577350],
        [0.577350, -0.577350, 0.577350],
        [-0.577350, -0.577350, -0.577350],
        [0.577350, 0.577350, -0.577350],
        [0.577350, -0.577350, -0.577350],
        [-0.577350, 0.577350, -0.577350],
        [0.577350, 0.577350, 0.577350],
        [-0.577350, 0.577350, 0.577350],
        [0.577350, 0.577350, -0.577350],
        [-0.577350, -0.577350, -0.577350],
        [-0.577350, -0.577350, -0.577350],
        [0.577350, -0.577350, 0.577350],
        [-0.577350, 0.577350, 0.577350],
        [0.577350, -0.577350, -0.577350],
        [0.577350, 0.577350, 0.577350],
        [-0.577350, -0.577350, 0.577350],
        [0.577350, 0.577350, -0.577350],
        [-0.577350, 0.577350, 0.577350],
        [0.577350, -0.577350, 0.577350],
        [-0.577350, 0.577350, -0.577350],
        [-0.577350, -0.577350, 0.577350],
        [0.577350, 0.577350, 0.577350]
    ]
}

var tetrahedronIFS =
{
    "vertices": [
        [1.000000, -1.000000, -1.000000],
        [-1.000000, -1.000000, 1.000000],
        [-1.000000, 1.000000, -1.000000],
        [1.000000, 1.000000, 1.000000]
    ],
    "faces": [
        [0, 3, 2],
        [3, 0, 1],
        [0, 2, 1],
        [2, 3, 1]
    ],
    "faceColors": [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 0]
    ],
    "faceNormals": [
        [-0.577350, -0.577350, 0.577350],
        [-0.577350, 0.577350, -0.577350],
        [0.577350, 0.577350, 0.577350],
        [0.577350, -0.577350, -0.577350]
    ]
}

var truncatedIcosahedronIFS =
{
    "vertices": [
        [-0.500000, -0.809017, 0.309017],
        [-0.500000, -0.809017, -0.309017],
        [-0.809017, -0.309017, -0.500000],
        [-1.000000, 0.000000, 0.000000],
        [-0.809017, -0.309017, 0.500000],
        [0.500000, 0.809017, 0.309017],
        [0.309017, 0.500000, 0.809017],
        [-0.309017, 0.500000, 0.809017],
        [-0.500000, 0.809017, 0.309017],
        [0.000000, 1.000000, 0.000000],
        [0.309017, 0.500000, -0.809017],
        [0.500000, 0.809017, -0.309017],
        [0.000000, 1.000000, 0.000000],
        [-0.500000, 0.809017, -0.309017],
        [-0.309017, 0.500000, -0.809017],
        [0.809017, 0.309017, 0.500000],
        [0.500000, 0.809017, 0.309017],
        [0.500000, 0.809017, -0.309017],
        [0.809017, 0.309017, -0.500000],
        [1.000000, 0.000000, 0.000000],
        [0.809017, -0.309017, 0.500000],
        [1.000000, 0.000000, 0.000000],
        [0.809017, -0.309017, -0.500000],
        [0.500000, -0.809017, -0.309017],
        [0.500000, -0.809017, 0.309017],
        [0.500000, -0.809017, -0.309017],
        [0.309017, -0.500000, -0.809017],
        [-0.309017, -0.500000, -0.809017],
        [-0.500000, -0.809017, -0.309017],
        [0.000000, -1.000000, 0.000000],
        [0.309017, -0.500000, 0.809017],
        [0.500000, -0.809017, 0.309017],
        [0.000000, -1.000000, 0.000000],
        [-0.500000, -0.809017, 0.309017],
        [-0.309017, -0.500000, 0.809017],
        [0.309017, 0.500000, 0.809017],
        [0.809017, 0.309017, 0.500000],
        [0.809017, -0.309017, 0.500000],
        [0.309017, -0.500000, 0.809017],
        [0.000000, 0.000000, 1.000000],
        [0.000000, 0.000000, 1.000000],
        [-0.309017, -0.500000, 0.809017],
        [-0.809017, -0.309017, 0.500000],
        [-0.809017, 0.309017, 0.500000],
        [-0.309017, 0.500000, 0.809017],
        [0.809017, -0.309017, -0.500000],
        [0.809017, 0.309017, -0.500000],
        [0.309017, 0.500000, -0.809017],
        [0.000000, 0.000000, -1.000000],
        [0.309017, -0.500000, -0.809017],
        [-0.309017, 0.500000, -0.809017],
        [-0.809017, 0.309017, -0.500000],
        [-0.809017, -0.309017, -0.500000],
        [-0.309017, -0.500000, -0.809017],
        [0.000000, 0.000000, -1.000000],
        [-0.500000, 0.809017, -0.309017],
        [-0.500000, 0.809017, 0.309017],
        [-0.809017, 0.309017, 0.500000],
        [-1.000000, 0.000000, 0.000000],
        [-0.809017, 0.309017, -0.500000]
    ],
    "faces": [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29],
        [30, 31, 32, 33, 34],
        [35, 36, 37, 38, 39],
        [40, 41, 42, 43, 44],
        [45, 46, 47, 48, 49],
        [50, 51, 52, 53, 54],
        [55, 56, 57, 58, 59],
        [15, 35, 5],
        [20, 36, 19],
        [30, 37, 24],
        [40, 38, 34],
        [39, 44, 6],
        [45, 21, 18],
        [10, 46, 17],
        [11, 16, 9],
        [55, 12, 8],
        [50, 13, 59],
        [54, 47, 14],
        [49, 25, 22],
        [31, 23, 29],
        [0, 32, 28],
        [3, 57, 42],
        [56, 7, 43],
        [52, 1, 27],
        [53, 26, 48],
        [4, 41, 33],
        [2, 51, 58]
    ],
    "faceNormals": [
        [0.850651, 0.525731, -0.000000],
        [-0.000000, -0.850651, -0.525731],
        [0.000000, -0.850651, 0.525731],
        [-0.850651, -0.525731, -0.000000],
        [-0.850651, 0.525731, 0.000000],
        [0.000000, 0.850651, 0.525731],
        [0.000000, 0.850651, -0.525731],
        [-0.525731, -0.000000, -0.850651],
        [0.525731, -0.000000, -0.850651],
        [-0.525731, 0.000000, 0.850651],
        [0.525731, 0.000000, 0.850651],
        [0.850651, -0.525731, 0.000000],
        [-0.577350, -0.577350, -0.577350],
        [-0.934172, -0.000000, -0.356822],
        [-0.577350, 0.577350, -0.577350],
        [0.000000, 0.356822, -0.934172],
        [0.000000, -0.356822, -0.934172],
        [-0.934172, 0.000000, 0.356822],
        [-0.577350, -0.577350, 0.577350],
        [-0.356822, -0.934172, -0.000000],
        [0.356822, -0.934172, 0.000000],
        [0.577350, -0.577350, 0.577350],
        [0.000000, -0.356822, 0.934172],
        [-0.577350, 0.577350, 0.577350],
        [-0.356822, 0.934172, 0.000000],
        [0.356822, 0.934172, 0.000000],
        [0.934172, 0.000000, -0.356822],
        [0.577350, -0.577350, -0.577350],
        [0.577350, 0.577350, 0.577350],
        [0.000000, 0.356822, 0.934172],
        [0.577350, 0.577350, -0.577350],
        [0.934172, 0.000000, 0.356822]
    ]
}

var truncatedRhombicDodecahedronIFS =
{
    "vertices": [
        [-0.333333, 1.666667, -0.333333],
        [0.333333, 1.666667, -0.333333],
        [0.333333, 1.666667, 0.333333],
        [-0.333333, 1.666667, 0.333333],
        [-0.666667, -1.333333, -0.666667],
        [-0.666667, -0.666667, -1.333333],
        [-1.333333, -0.666667, -0.666667],
        [0.666667, -0.666667, -1.333333],
        [0.666667, -1.333333, -0.666667],
        [1.333333, -0.666667, -0.666667],
        [0.666667, 0.666667, -1.333333],
        [1.333333, 0.666667, -0.666667],
        [0.666667, 1.333333, -0.666667],
        [-0.666667, 0.666667, -1.333333],
        [-0.666667, 1.333333, -0.666667],
        [-1.333333, 0.666667, -0.666667],
        [-0.666667, -1.333333, 0.666667],
        [-1.333333, -0.666667, 0.666667],
        [-0.666667, -0.666667, 1.333333],
        [1.333333, -0.666667, 0.666667],
        [0.666667, -1.333333, 0.666667],
        [0.666667, -0.666667, 1.333333],
        [0.666667, 1.333333, 0.666667],
        [1.333333, 0.666667, 0.666667],
        [0.666667, 0.666667, 1.333333],
        [-1.333333, 0.666667, 0.666667],
        [-0.666667, 1.333333, 0.666667],
        [-0.666667, 0.666667, 1.333333],
        [0.333333, -0.333333, 1.666667],
        [-0.333333, -0.333333, 1.666667],
        [-0.333333, 0.333333, 1.666667],
        [0.333333, 0.333333, 1.666667],
        [-0.333333, -0.333333, -1.666667],
        [0.333333, -0.333333, -1.666667],
        [0.333333, 0.333333, -1.666667],
        [-0.333333, 0.333333, -1.666667],
        [-1.666667, -0.333333, -0.333333],
        [-1.666667, 0.333333, -0.333333],
        [-1.666667, 0.333333, 0.333333],
        [-1.666667, -0.333333, 0.333333],
        [1.666667, 0.333333, -0.333333],
        [1.666667, -0.333333, -0.333333],
        [1.666667, -0.333333, 0.333333],
        [1.666667, 0.333333, 0.333333],
        [0.333333, -1.666667, -0.333333],
        [-0.333333, -1.666667, -0.333333],
        [-0.333333, -1.666667, 0.333333],
        [0.333333, -1.666667, 0.333333]
    ],
    "faces": [
        [0, 1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18],
        [19, 20, 21],
        [22, 23, 24],
        [25, 26, 27],
        [28, 29, 30, 31],
        [32, 33, 34, 35],
        [36, 37, 38, 39],
        [40, 41, 42, 43],
        [44, 45, 46, 47],
        [4, 45, 44, 8, 7, 33, 32, 5],
        [9, 41, 40, 11, 10, 34, 33, 7],
        [12, 1, 0, 14, 13, 35, 34, 10],
        [15, 37, 36, 6, 5, 32, 35, 13],
        [8, 44, 47, 20, 19, 42, 41, 9],
        [11, 40, 43, 23, 22, 2, 1, 12],
        [14, 0, 3, 26, 25, 38, 37, 15],
        [6, 36, 39, 17, 16, 46, 45, 4],
        [18, 29, 28, 21, 20, 47, 46, 16],
        [21, 28, 31, 24, 23, 43, 42, 19],
        [24, 31, 30, 27, 26, 3, 2, 22],
        [27, 30, 29, 18, 17, 39, 38, 25]
    ],
    "faceNormals": [
        [0.000000, -1.000000, 0.000000],
        [0.577350, 0.577350, 0.577350],
        [-0.577350, 0.577350, 0.577350],
        [-0.577350, -0.577350, 0.577350],
        [0.577350, -0.577350, 0.577350],
        [0.577350, 0.577350, -0.577350],
        [-0.577350, 0.577350, -0.577350],
        [-0.577350, -0.577350, -0.577350],
        [0.577350, -0.577350, -0.577350],
        [0.000000, 0.000000, -1.000000],
        [0.000000, -0.000000, 1.000000],
        [1.000000, 0.000000, -0.000000],
        [-1.000000, 0.000000, 0.000000],
        [0.000000, 1.000000, 0.000000],
        [-0.000000, 0.707107, 0.707107],
        [-0.707107, 0.000000, 0.707107],
        [0.000000, -0.707107, 0.707107],
        [0.707107, 0.000000, 0.707107],
        [-0.707107, 0.707107, 0.000000],
        [-0.707107, -0.707107, 0.000000],
        [0.707107, -0.707107, 0.000000],
        [0.707107, 0.707107, -0.000000],
        [0.000000, 0.707107, -0.707107],
        [-0.707107, 0.000000, -0.707107],
        [-0.000000, -0.707107, -0.707107],
        [0.707107, 0.000000, -0.707107]
    ]
}