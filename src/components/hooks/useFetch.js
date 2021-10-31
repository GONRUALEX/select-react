import {useState, useEffect} from 'react';
export const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async ()=>{
            setLoading(true);

            try{
             const res = await fetch(url, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }),
                mode: 'no-cors', 
            });
                if (!res.ok){
                    let err = new Error("Error en la aplicación fetch");
                    err.status = res.status || "00";
                    err.statusText = res.statusText || "00";
                    throw err;
                }

                const json = await res.json();

                if (!signal.aborted){
                    setData(json);
                    setError(null);
                }


            }catch(error){
                if (signal.aborted){
                    setData(null);
                    setError(error);
                }
            }finally{
                setLoading(false);
            }
        }

        fetchData();

        return ()=>{ abortController.abort();}

    },
    [url]);

    return {
        data, error, loading
    }
}