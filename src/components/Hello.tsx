interface Helloprops {
    firstName: string
    lastName: string
    age: number
}

export const Hello = ({ firstName, lastName, age }: Helloprops) => {
    return (
        <>
            <h1>
                Good Morning {firstName} {lastName}
            </h1>
        </>
    )
}

export default Hello