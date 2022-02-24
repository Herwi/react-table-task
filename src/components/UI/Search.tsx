import React, { useEffect, useState } from 'react'
const Search: React.FC<{
    phrase: string,
    setPhrase: React.Dispatch<React.SetStateAction<string>>
}> = ({ phrase, setPhrase }) => {
    const [tmpPhrase, setTmpPhrase] = useState('')

    useEffect(() => {
        const identifier = setTimeout(() => {
            setPhrase(tmpPhrase)
        }, 300)
        return () => { clearTimeout(identifier) }
    }, [tmpPhrase])

    const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setTmpPhrase(event.currentTarget.value)
    }
    return <input type="text" onChange={onChangeHandler} />
}

export default Search;