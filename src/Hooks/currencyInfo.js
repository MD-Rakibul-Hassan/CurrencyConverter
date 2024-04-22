import { useState,useEffect } from "react";

const useCurrencyInfo = (url) => {
    const [data,setData] = useState([])
    useEffect(() => {
	fetch(url)
		.then((res) => res.json())
		.then((data) => setData(Object.keys(data)));
    },[]);
    return data
}
export default useCurrencyInfo;
