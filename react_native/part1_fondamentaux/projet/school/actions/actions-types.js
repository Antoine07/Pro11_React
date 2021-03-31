import {
    LOADING,
    GET_STUDENT,
    DECREMENT_ATTENDANCE,
    INCREMENT_ATTENDANCE
} from "../constants/actions";

export const loadSchoolData = payload => {
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

export const decrementAttendance = payload => {
    return {
        type: DECREMENT_ATTENDANCE, payload
    };
}

export const incrementAttendance = payload => {
    return {
        type: INCREMENT_ATTENDANCE, payload
    };
}
