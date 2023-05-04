import { ChangeEvent, FormEvent, useState } from 'react'
import { FormType } from "../types/FormDataTypes"

const Form = () => {
    const [form, setForm] = useState<FormType>({ fname: '', lname: '' })

    const handleForm = (e: ChangeEvent) => {
        e.preventDefault()
        const target = e.target as HTMLInputElement
        setForm({ ...form, [target.name]: target.value })
    }

    const handleFormSubmit = (e: FormEvent<HTMLButtonElement>) => {
        // here we could run a fetch where we send the form data to an API
    }

    return (
        <>
            <form action='submit'>
                {/* Easy simple way to get value, but not recommended way */}
                {/* <input type='text' placeholder='first name' onChange={e => setForm({ ...form, fname: e.target.value })} /> */}

                {/* This is a better way as it will not triger a render */}
                <input type='text' placeholder='first name' onChange={(e: ChangeEvent) => handleForm(e)} />


                <input type='text' placeholder='last name' onChange={e => setForm({ ...form, lname: e.target.value })} />
                <br />
                <input type='number' placeholder='age' min={18} max={21} onChange={e => setForm({ ...form, age: Number(e.target.value) })} />
                <button type='submit' onClick={(e: FormEvent<HTMLButtonElement>) => handleFormSubmit(e)}>
                    send
                </button>
            </form>
        </>
    )
}

export default Form