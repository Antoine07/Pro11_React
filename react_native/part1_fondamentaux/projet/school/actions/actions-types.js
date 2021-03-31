import {
    LOADING,
    GET_STUDENT
} from "../constants/actions";

export const load_school_data = payload => {
    return {
        type: LOADING, payload
    };
}

export const getStudentById = payload => {
    return {
        type: GET_STUDENT, payload
    };
}

export const updateNestedStudents = students => {

    return students.map(student => {
        const { notes, lessons } = student;

        return {
            ...student,
            lessons: [...lessons],
            notes: [...notes],
        }

    })
}