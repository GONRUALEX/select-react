import React,{useState} from 'react';
import SelectsList from './SelectsList';

const SelectsAnidados = () =>{

    const [state, setState] = useState("");
    const [town, setTown ] = useState("");
    const [ suburb, setSuburb] = useState("");

    return (
        <div>
            <h2>Selects Anidados</h2>
            <SelectsList title="estado" url="https://api-sepomex.hckdrk.mx/query/get_estados?token=d81a7ac7-976d-4e1e-b7d3-b1979d791b6c" handleChange={(e)=>{setState(e.targe.value)}}/>
            {state!="" && <SelectsList title="municipios" url="" handleChange={(e)=>{setTown(e.targe.value)}}/>}
            {town!="" &&<SelectsList title="colonia" url="" handleChange={(e)=>{setSuburb(e.targe.value)}}/>}
            <pre>
                <code>
                    {state}- {town} -{suburb}
                </code>
            </pre>
        </div>
    );
}
export default SelectsAnidados;