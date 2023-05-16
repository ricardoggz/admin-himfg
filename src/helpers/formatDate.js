export const formatDate = (initDate)=> {
    const optionDate = {day:"2-digit", month:'long', year:'numeric'}
    let lastDate = new Date(initDate)
    lastDate.setMinutes(lastDate.getMinutes() + lastDate.getTimezoneOffset())
    return lastDate.toLocaleDateString('es-MX', optionDate)
}