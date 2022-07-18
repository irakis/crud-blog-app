export const addZero = (number) => {
    if (number <10) {
        return `0${number}`
    }
    else {
        return `${number}`
    }
}

export const mapDate = (date) => {
    const newDate = new Date(date);

    return (
        `${newDate.getFullYear()}-${addZero(newDate.getMonth()+1)}-${addZero(newDate.getDate())}`
    )
}