import {
    GET_STUDENT,
    LOADING,
    INCREMENT_ATTENDANCE,
    DECREMENT_ATTENDANCE
} from "../constants/actions";


import { updateNestedStudents } from '../actions/actions-types';

const stateInit = {
    students: [
        { id: 1, name: "Alice", lessons: [1, 2], attendance: 0, notes: [11, 12, 18] },
        { id: 2, name: "Alan", lessons: [3], attendance: 0, notes: [10, 14.5, 11] },
        { id: 3, name: "Phil", lessons: [1, 2, 3], attendance: 0, notes: [11, 9, 9] },
        { id: 4, name: "Naoudi", lessons: [1], attendance: 0, notes: [14.5, 19, 18] },
        { id: 5, name: "Fenley", lessons: [3], attendance: 0, notes: [9, 7, 11] },
    ],
    lessons: [
        { id: 1, title: "React" },
        { id: 2, title: "React Native" },
        { id: 3, title: "MongoDB" },
    ],
    behaviours: [],
    order: false,
    student: null
}

const reducer = (state = stateInit, action = {}) => {
    let students, id, student;

    switch (action.type) {

        case GET_STUDENT:
            id = action.payload;
            student = state.students.find(s => s.id === id);

            return {
                ...state,
                student
            }

        case DECREMENT_ATTENDANCE:
        case INCREMENT_ATTENDANCE:
            students = updateNestedStudents(state.students);
            const { id : idStudent, sens  } = action.payload;
            console.log(action.payload);
            students.map(s => {
                if (s.id === idStudent) {
                    if( sens > 0 )
                        s.attendance += parseInt(sens);
                    else 
                        s.attendance = (s.attendance > 0 ) ? s.attendance + parseInt(sens) : 0 ;
                    student = s;
                }

                return s;
            })

            return {
                ...state,
                students,
                student
            }

        default:
            return state;
    }
}

export default reducer;