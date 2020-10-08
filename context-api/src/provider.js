import React, {useState} from 'react';
import PackageContext from './context';

const Provider = props =>{
    const [mission, setMission] = useState(
        {
            mname : "Go America",
            agent :  100,
            accept : "Not accepted"
        }
    )
    return(
        <PackageContext.Provider value={{
            data: mission,
            isMissionAccepted: () =>{
                setMission({...mission, accept: "Accepted"})
            }
        }}>
            {props.children}
        </PackageContext.Provider>

        
    )
}

export default Provider;



