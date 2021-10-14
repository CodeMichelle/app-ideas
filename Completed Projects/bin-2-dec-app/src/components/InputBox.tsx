import React, {useState} from 'react';

const InputBox: React.FC = () => {
    const [input, setInput] = useState({
        value: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return(
        <input
            type="text"
            onChange={handleChange}
            className="userInputBox"
            name="value"
            value={input.value}
            placeholder="Enter a number"
        />
    )
}

export default InputBox;