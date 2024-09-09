const httpFetch = async (input: string | URL | globalThis.Request, init?: RequestInit): Promise<any> => {
    try {
        const result = await fetch(input, init);
        const response = await result.json();
        if (response?.code === 200) {
            return response?.data;
        }
    } catch (error) {
        return null;
    }
};

export default httpFetch;
