import {React, useState, useEffect} from 'react'
import { Form } from "../components";


export default function Auth() {
    const [type, setType] = useState(["signin", "signup"])

    return (
        <div>
            <Form auth={type[0]}/>
        </div>
    )
}