import {
    GET_STUDENT,
    LOADING,
    INCREMENT_ATTENDANCE,
    DECREMENT_ATTENDANCE,
    ORDER_AVERAGE,
    SET_MENTION
} from "../constants/actions";

import { updateNestedStudents, average, updateBehaviours } from '../actions/actions-types';

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
    student: null,
    mention: ''
}

const reducer = (state = stateInit, action = {}) => {
    let students, id, student, behaviours, mention;

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
            const { id: idStudent, sens } = action.payload;

            students.map(s => {
                if (s.id === idStudent) {
                    if (sens > 0)
                        s.attendance += parseInt(sens);
                    else
                        s.attendance = (s.attendance > 0) ? s.attendance + parseInt(sens) : 0;
                    student = s;
                }

                return s;
            })

            return {
                ...state,
                students,
                student
            }

        case ORDER_AVERAGE:
            students = updateNestedStudents(state.students);

            students.sort((s1, s2) => {
                if (state.order === false) return (
                    average(s1.notes) - average(s2.notes)
                )
                return (
                    average(s2.notes) - average(s1.notes)
                )
            });

            return {
                ...state,
                students,
                order: !state.order
            }

        case SET_MENTION:
            [id, mention] = [action.payload.id, action.payload.mention ];
            behaviours = updateBehaviours(state.behaviours);

            if ( behaviours.filter(student => student.id === id).length === 0) {
                behaviours.push({ id: id, mention: mention });
            }else {
                behaviours.map( student => {
                    if (student.id === id) student.mention = mention;
    
                    return student;
                })
            }

            return {
                ...state,
                behaviours
            }

        default:
            return state;
    }
}

export default reducer;