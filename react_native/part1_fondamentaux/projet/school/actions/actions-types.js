import {
    LOADING,
    GET_STUDENT,
    DECREMENT_ATTENDANCE,
    INCREMENT_ATTENDANCE,
    ORDER_AVERAGE,
    SET_MENTION
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

export const order = () => {
    return {
        type: ORDER_AVERAGE
    };
}

export const setMention = payload => {
    return {
        type: SET_MENTION, payload
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

export const updateBehaviours = array => {
    if(array.length > 0)
        return array.map(object => {
            return { ...object } 
        });

    return [];
}

export const selectMention = ({behaviours, id}) => {
    const student = behaviours.filter( s => s.id === id);

    if( student.filter( s => s.id === id).length > 0 ) return student[0].mention;

    return "Aucune";
}