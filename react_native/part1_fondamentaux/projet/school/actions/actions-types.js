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

export const average = notes => {
    const nbNotes = Array.isArray(notes) && notes.length;

    if (nbNotes === 0) return;

    const sum = notes.reduce((acc, curr) => acc + curr);

    return Math.floor((sum / nbNotes) * 100) / 100;
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