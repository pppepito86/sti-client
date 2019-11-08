import { useState, useEffect } from 'react';

function useAsync(getMethod, url, params) {
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    async function getResource() {
        try {
            setLoading(true);
            const result = await getMethod(url);
            setValue(result);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getResource();
    }, params);
  
    return { value, error, loading };
}

export default useAsync;