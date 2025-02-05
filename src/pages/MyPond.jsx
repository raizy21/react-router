import { useState } from 'react';
import DuckPond from '../components/DuckPond';
import DuckForm from '../components/DuckForm';

const MyPond = () => {
    const [myDucks, setMyDucks] = useState(
        JSON.parse(localStorage.getItem('myDucks')) || []
    );
    return (
        <>
            <DuckForm setDucks={setMyDucks} />
            <DuckPond ducks={myDucks} />
        </>
    );
};

export default MyPond;
