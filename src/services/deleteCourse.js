export const deleteCourse = async(course_id)=>{
    try {
        const config = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                course_id: course_id
            })
        }
        const response = await fetch(
            `https://courses-rest-api-hospital.vercel.app/api/courses/delete-course`,
            config
        )
        await response.json()
        if(response.status === 200) {
            document.location.reload()
        }
        return console.log(json)
    } catch (error) {
        throw new Error(error)
    }
}